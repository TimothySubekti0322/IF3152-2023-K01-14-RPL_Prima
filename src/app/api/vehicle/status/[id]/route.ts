import { PrismaClient } from "@prisma/client";
import type { Vehicle } from "@prisma/client";
import { authorized } from "../../../authorized";
const prisma = new PrismaClient();

export const GET = async (
  request: Request,
  { params }: { params: { id: string } }
) => {
  try {
    const auth = await authorized(request);
    if (auth.status !== 200) {
      return new Response(JSON.stringify(auth), { status: auth.status });
    }
    const vehicles = await prisma.vehicle.findFirstOrThrow({
      where: {
        id: Number(params.id),
      },
      select: {
        id: true,
        plate: true,
        status: true,
      },
    });
    return new Response(
      JSON.stringify({ message: "Vehicle's status found", data: vehicles }),
      { status: 200 }
    );
  } catch (error) {
    return new Response(JSON.stringify({ message: "Data not found" }), {
      status: 404,
    });
  }
};

export const PATCH = async (
  request: Request,
  { params }: { params: { id: string } }
) => {
  try {
    const auth = await authorized(request);
    if (auth.status !== 200) {
      return new Response(JSON.stringify(auth), { status: auth.status });
    }
    const body: Vehicle = await request.json();
    const updatedVehicle = await prisma.vehicle.update({
      where: {
        id: Number(params.id),
      },
      data: {
        status: body.status,
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
