import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import type { Vehicle } from "@prisma/client";
import authorized from "../authorized";
const prisma = new PrismaClient();

export const GET = async (request: Request) => {
  const auth = await authorized(request);
  if (auth.status !== 200) {
    return NextResponse.json(auth, { status: auth.status });
  }
  const Vehicles = await prisma.vehicle.findMany({
    orderBy: {
      id: "asc",
    },
  });
  return NextResponse.json(Vehicles);
};

export const POST = async (request: Request) => {
  try {
    const auth = await authorized(request);
    if (auth.status !== 200) {
      return NextResponse.json(auth, { status: auth.status });
    }
    const body: Vehicle = await request.json();
    const newVehicle = await prisma.vehicle.create({
      data: {
        plate : body.plate,
        vehicleType: body.vehicleType,
        transmission: body.transmission,
        distance: Number(body.distance),
        lastService: body.lastService,
      },
    });

    return NextResponse.json(
      { message: "Data Created Successfuly", data: newVehicle },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "Data Created Failed", data: error },
      { status: 400 }
    );
  }
};
