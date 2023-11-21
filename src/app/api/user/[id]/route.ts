import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import type { User } from "@prisma/client";
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
    const users = await prisma.user.findFirstOrThrow({
      where: {
        id: Number(params.id),
      },
    });
    return new Response(
      JSON.stringify({ message: "User found", data: users }),
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
    const deletedUser = await prisma.user.delete({
      where: {
        id: Number(params.id),
      },
    });

    return new Response(
      JSON.stringify({
        message: "User deleted successfully",
        data: deletedUser,
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
    const body: User = await request.json();
    const updatedUser = await prisma.user.update({
      where: {
        id: Number(params.id),
      },
      data: {
        email : body.email,
        password : body.password,
        phone : body.phone,
        lokasi : body.lokasi,
        role : body.role,
      },
    });

    return new Response(
      JSON.stringify({
        message: "Data Updated Successfully",
        data: updatedUser,
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
