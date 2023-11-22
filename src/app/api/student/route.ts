import { PrismaClient } from "@prisma/client";
import type { Student } from "@prisma/client";
import { authorized } from "../authorized";
const prisma = new PrismaClient();

export const GET = async (request: Request) => {
  const auth = await authorized(request);
  if (auth.status !== 200) {
    return new Response(JSON.stringify(auth), { status: auth.status });
  }
  const classes = await prisma.student.findMany({
    orderBy: {
      id: "asc",
    },
  });
  return new Response(JSON.stringify(classes), { status: 200 });
};

export const POST = async (request: Request) => {
  try {
    const auth = await authorized(request);
    if (auth.status !== 200) {
      return new Response(JSON.stringify(auth), { status: auth.status });
    }
    const body: Student = await request.json();
    const newStudent = await prisma.student.create({
      data: {
        name: body.name,
        classId: Number(body.classId),
        phone: body.phone,
        address: body.address,
        status: body.status,
      },
    });
    return new Response(
      JSON.stringify({ message: "Data Created Successfuly", data: newStudent }),
      { status: 201 }
    );
  } catch (error) {
    return new Response(
      JSON.stringify({ message: "Data Created Failed", data: error }),
      { status: 400 }
    );
  }
};
