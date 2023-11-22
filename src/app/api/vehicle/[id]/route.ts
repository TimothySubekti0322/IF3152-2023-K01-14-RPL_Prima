import { PrismaClient } from "@prisma/client";
import type { Vehicle } from "@prisma/client";
import { authorized, authorizedOwner } from "../../authorized";
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
    const auth = await authorizedOwner(request);
    if (auth.status !== 200) {
      return new Response(JSON.stringify(auth), { status: auth.status });
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
    const auth = await authorizedOwner(request);
    if (auth.status !== 200) {
      return new Response(JSON.stringify(auth), { status: auth.status });
    }
    const body: Vehicle = await request.json();
    const updatedVehicle = await prisma.vehicle.update({
      where: {
        id: Number(params.id),
      },
      data: {
        plate: body.plate,
        vehicleType: body.vehicleType,
        transmission: body.transmission,
        distance: Number(body.distance),
        lastService: body.lastService,
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
