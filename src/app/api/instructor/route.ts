import { PrismaClient } from "@prisma/client";
import type { Instructor } from "@prisma/client";
import { authorized, authorizedOwner } from "../authorized";
const prisma = new PrismaClient();

export const GET = async (request: Request) => {
  const auth = await authorized(request);
  if (auth.status !== 200) {
    return new Response(JSON.stringify(auth), { status: auth.status });
  }
  const classes = await prisma.instructor.findMany({
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
    const body: Instructor = await request.json();
    const newInstructor = await prisma.instructor.create({
      data: {
        name: body.name,
        nik: body.nik,
        address: body.address,
        phone: body.phone,
      },
    });
    return new Response(
      JSON.stringify({
        message: "Data Created Successfuly",
        data: newInstructor,
      }),
      { status: 201 }
    );
  } catch (error) {
    return new Response(
      JSON.stringify({ message: "Data Created Failed", data: error }),
      { status: 400 }
    );
  }
};
