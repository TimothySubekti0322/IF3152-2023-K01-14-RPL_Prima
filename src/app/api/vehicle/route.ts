import { PrismaClient } from "@prisma/client";
import type { Vehicle } from "@prisma/client";
import { authorized, authorizedOwner } from "../authorized";
const prisma = new PrismaClient();

export const GET = async (request: Request) => {
  const auth = await authorized(request);
  if (auth.status !== 200) {
    return new Response(JSON.stringify(auth), { status: auth.status });
  }
  const Vehicles = await prisma.vehicle.findMany({
    orderBy: {
      id: "asc",
    },
  });
  return new Response(JSON.stringify(Vehicles), { status: 200 });
};

export const POST = async (request: Request) => {
  try {
    const auth = await authorizedOwner(request);
    if (auth.status !== 200) {
      return new Response(JSON.stringify(auth), { status: auth.status });
    }
    const body: Vehicle = await request.json();
    const newVehicle = await prisma.vehicle.create({
      data: {
        plate: body.plate,
        vehicleType: body.vehicleType,
        transmission: body.transmission,
        distance: Number(body.distance),
        lastService: body.lastService,
      },
    });

    return new Response(
      JSON.stringify({ message: "Data Created Successfuly", data: newVehicle }),
      { status: 201 }
    );
  } catch (error) {
    return new Response(
      JSON.stringify({ message: "Data Created Failed", data: error }),
      { status: 400 }
    );
  }
};
