import { PrismaClient } from "@prisma/client";
import type { Class } from "@prisma/client";
import { authorized, authorizedOwner } from "../authorized";
const prisma = new PrismaClient();

export const GET = async (request: Request) => {
  const auth = await authorized(request);
  if (auth.status !== 200) {
    return new Response(JSON.stringify(auth), { status: auth.status });
  }
  const classes = await prisma.class.findMany({
    orderBy: {
      id: "asc",
    },
  });
  return new Response(JSON.stringify(classes), { status: 200 });
};

export const POST = async (request: Request) => {
  try {
    const auth = await authorizedOwner(request);
    if (auth.status !== 200) {
      return new Response(JSON.stringify(auth), { status: auth.status });
    }
    const body: Class = await request.json();
    const newClass = await prisma.class.create({
      data: {
        price: Number(body.price),
        duration: body.duration,
        session: Number(body.session),
        transmission: body.transmission,
        vehicleType: body.vehicleType,
      },
    });

    return new Response(
      JSON.stringify({ message: "Data Created Successfuly", data: newClass }),
      { status: 201 }
    );
  } catch (error) {
    return new Response(
      JSON.stringify({ message: "Data Created Failed", data: error }),
      { status: 400 }
    );
  }
};
