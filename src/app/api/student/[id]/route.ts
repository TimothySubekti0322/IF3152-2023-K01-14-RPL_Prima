import { PrismaClient } from "@prisma/client";
import type { Student } from "@prisma/client";
import { authorized, authorizedAdmin } from "../../authorized";
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
    const studentes = await prisma.student.findFirstOrThrow({
      where: {
        id: Number(params.id),
      },
    });
    return new Response(
      JSON.stringify({ message: "Student found", data: studentes }),
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
    const auth = await authorizedAdmin(request);
    if (auth.status !== 200) {
      return new Response(JSON.stringify(auth), { status: auth.status });
    }
    const deletedStudent = await prisma.student.delete({
      where: {
        id: Number(params.id),
      },
    });

    return new Response(
      JSON.stringify({
        message: "Student deleted successfully",
        data: deletedStudent,
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
    const auth = await authorizedAdmin(request);
    if (auth.status !== 200) {
      return new Response(JSON.stringify(auth), { status: auth.status });
    }
    const body: Student = await request.json();
    const updatedStudent = await prisma.student.update({
      where: {
        id: Number(params.id),
      },
      data: {
        name: body.name,
        classId: Number(body.classId),
        phone: body.phone,
        address: body.address,
        status: body.status,
      },
    });

    return new Response(
      JSON.stringify({
        message: "Data Updated Successfully",
        data: updatedStudent,
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
