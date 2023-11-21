import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import type { Vehicle } from "@prisma/client";
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
    const vehicles = await prisma.vehicle.findFirstOrThrow({
      where: {
        id: Number(params.id),
      },
    });
    return new Response(
      JSON.stringify({ message: "Vehicle found", data: vehicles }),
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
    const deletedVehicle = await prisma.vehicle.delete({
      where: {
        id: Number(params.id),
      },
    });

    return new Response(
      JSON.stringify({
        message: "Vehicle deleted successfully",
        data: deletedVehicle,
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
    const body: Vehicle = await request.json();
    const updatedVehicle = await prisma.vehicle.update({
      where: {
        id: Number(params.id),
      },
      data: {
        plate : body.plate,
        vehicleType: body.vehicleType,
        transmission: body.transmission,
        distance: Number(body.distance),
        lastService: body.lastService,
      },
    });

    return new Response(
      JSON.stringify({
        message: "Data Updated Successfully",
        data: updatedVehicle,
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
