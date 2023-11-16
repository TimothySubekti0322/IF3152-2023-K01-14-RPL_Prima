import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import type { Class } from "@prisma/client";
const prisma = new PrismaClient();

export const GET = async (
  request: Request,
  { params }: { params: { id: string } }
) => {
  try {
    const classes = await prisma.class.findFirstOrThrow({
      where: {
        id: Number(params.id),
      },
    });
    return NextResponse.json(classes);
  } catch (error) {
    return NextResponse.json(
      { message: "Data not found", data: error },
      { status: 404 }
    );
  }
};

export const DELETE = async (
  request: Request,
  { params }: { params: { id: string } }
) => {
  try {
    const deletedClass = await prisma.class.delete({
      where: {
        id: Number(params.id),
      },
    });

    return NextResponse.json(
      {
        message: "Class deleted successfully",
        data: deletedClass,
      },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "Data not found", data: error },
      { status: 404 }
    );
  }
};

export const PATCH = async (
  request: Request,
  { params }: { params: { id: string } }
) => {
  try {
    const body: Class = await request.json();
    const updatedClass = await prisma.class.update({
      where: {
        id: Number(params.id),
      },
      data: {
        price: body.price,
        duration: body.duration,
        session: body.session,
        transmission: body.transmission,
        vehicleType: body.vehicleType,
      },
    });

    return NextResponse.json(
      { message: "Data Updated Successfuly", data: updatedClass },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "Data Updated Failed", data: error },
      { status: 400 }
    );
  }
};
