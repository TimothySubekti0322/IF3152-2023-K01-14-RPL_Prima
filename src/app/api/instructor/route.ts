import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import type { Instruktur } from "@prisma/client";
import authorized from "../authorized";
const prisma = new PrismaClient();

export const GET = async (request: Request) => {
  const auth = await authorized(request);
  if (auth.status !== 200) {
    return NextResponse.json(auth, { status: auth.status });
  }
  const classes = await prisma.instruktur.findMany({
    orderBy: {
      id: "asc",
    },
  });
  return NextResponse.json(classes);
};

export const POST = async (request: Request) => {
  try {
    const auth = await authorized(request);
    if (auth.status !== 200) {
      return NextResponse.json(auth, { status: auth.status });
    }
    const body: Instruktur = await request.json();
    const newInstruktur = await prisma.instruktur.create({
      data: {
        name: body.name,
        nik: body.nik,
        address: body.address,
        phone: body.phone,
      },
    });

    return NextResponse.json(
      { message: "Data Created Successfuly", data: newInstruktur },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "Data Created Failed", data: error },
      { status: 400 }
    );
  }
};
