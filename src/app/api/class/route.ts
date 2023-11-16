import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import type { Class } from "@prisma/client";
const prisma = new PrismaClient();

export const GET = async (request: Request) => {
  const classes = await prisma.class.findMany();
  return NextResponse.json(classes);
};

export const POST = async (request: Request) => {
  try {
    const body: Class = await request.json();
    const newClass = await prisma.class.create({
      data: {
        price: body.price,
        duration: body.duration,
        session: body.session,
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