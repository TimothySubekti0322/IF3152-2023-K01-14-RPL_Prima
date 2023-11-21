import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import type { Class } from "@prisma/client";
import authorized from "../authorized";
const prisma = new PrismaClient();

export const GET = async (request: Request) => {
  const auth = await authorized(request);
  if (auth.status !== 200) {
    return NextResponse.json(auth, { status: auth.status });
  }
  const classes = await prisma.class.findMany({
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
    const body: Class = await request.json();
    const newClass = await prisma.class.create({
      data: {
        price: Number(body.price),
        duration: body.duration,
        session: Number(body.session),
        transmission: body.transmission,
        vehicleType: body.vehicleType,
      },
    });

    return NextResponse.json(
      { message: "Data Created Successfuly", data: newClass },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "Data Created Failed", data: error },
      { status: 400 }
    );
  }
};
