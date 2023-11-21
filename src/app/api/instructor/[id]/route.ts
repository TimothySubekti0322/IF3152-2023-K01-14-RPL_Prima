import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import type { Instructor } from "@prisma/client";
import authorized from "../../authorized";
const prisma = new PrismaClient();

export const GET = async (
  request: Request,
  { params }: { params: { id: string } }
) => {
  try {
    const auth = await authorized(request);
    if (auth.status !== 200) {
      return NextResponse.json(auth, { status: auth.status });
    }
    const instructores = await prisma.instructor.findFirstOrThrow({
      where: {
        id: Number(params.id),
      },
    });
    return new Response(
      JSON.stringify({ message: "Instructor found", data: instructores }),
      { status: 200 }
    );
  } catch (error) {
    return new Response(JSON.stringify({ message: "Data not found" }), {
      status: 404,
    });
  }
};

export const DELETE = async (
  request: Request,
  { params }: { params: { id: string } }
) => {
  try {
    const auth = await authorized(request);
    if (auth.status !== 200) {
      return NextResponse.json(auth, { status: auth.status });
    }
    const deletedInstructor = await prisma.instructor.delete({
      where: {
        id: Number(params.id),
      },
    });

    return new Response(
      JSON.stringify({
        message: "Instructor deleted successfully",
        data: deletedInstructor,
      }),
      { status: 200 }
    );
  } catch (error) {
    return new Response(
      JSON.stringify({ message: "Data not found", data: error }),
      { status: 404 }
    );
  }
};

export const PATCH = async (
  request: Request,
  { params }: { params: { id: string } }
) => {
  try {
    const auth = await authorized(request);
    if (auth.status !== 200) {
      return NextResponse.json(auth, { status: auth.status });
    }
    const body: Instructor = await request.json();
    const updatedInstructor = await prisma.instructor.update({
      where: {
        id: Number(params.id),
      },
      data: {
        name: body.name,
        nik: body.nik,
        address: body.address,
        phone: body.phone,
      },
    });

    return new Response(
      JSON.stringify({
        message: "Data Updated Successfully",
        data: updatedInstructor,
      }),
      { status: 200 }
    );
  } catch (error) {
    return new Response(
      JSON.stringify({ message: "Data Update Failed", data: error }),
      { status: 400 }
    );
  }
};
