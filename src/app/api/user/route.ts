import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import type { User } from "@prisma/client";
import authorized from "../authorized";
const prisma = new PrismaClient();

export const GET = async (request: Request) => {
  const auth = await authorized(request);
  if (auth.status !== 200) {
    return NextResponse.json(auth, { status: auth.status });
  }
  const classes = await prisma.user.findMany({
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
    const body: User = await request.json();
    const newUser = await prisma.user.create({
      data: {
        email : body.email,
        password : body.password,
        phone : body.phone,
        location : body.location,
        role : body.role,
      },
    });

    return NextResponse.json(
      { message: "Data Created Successfuly", data: newUser },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "Data Created Failed", data: error },
      { status: 400 }
    );
  }
};
