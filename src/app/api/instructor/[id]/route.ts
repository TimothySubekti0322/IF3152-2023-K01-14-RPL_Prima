import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import type { Instruktur } from "@prisma/client";
import authorized from "../../authorized";
const prisma = new PrismaClient();

export const GET = async (
  request: Request,
  { params }: { params: { id: string } }
) => {
  try {
    const authHeader = request.headers.get("Authorization");
    if (!authHeader) {
      return new Response(
        JSON.stringify({
          message: "Authorization header missing",
          status: 401,
        }),
        { status: 401 }
      );
    }
    const instruktures = await prisma.instruktur.findFirstOrThrow({
      where: {
        id: Number(params.id),
      },
    });
    return new Response(
      JSON.stringify({ message: "Instruktur found", data: instruktures }),
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
    const authHeader = request.headers.get("Authorization");
    if (!authHeader) {
      return new Response(
        JSON.stringify({
          message: "Authorization header missing",
          status: 401,
        }),
        { status: 401 }
      );
    }
    const deletedInstruktur = await prisma.instruktur.delete({
      where: {
        id: Number(params.id),
      },
    });

    return new Response(
      JSON.stringify({
        message: "Instruktur deleted successfully",
        data: deletedInstruktur,
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
    const authHeader = request.headers.get("Authorization");
    if (!authHeader) {
      return new Response(
        JSON.stringify({
          message: "Authorization header missing",
          status: 401,
        }),
        { status: 401 }
      );
    }
    const body: Instruktur = await request.json();
    const updatedInstruktur = await prisma.instruktur.update({
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
        data: updatedInstruktur,
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
