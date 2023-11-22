import { PrismaClient } from "@prisma/client";
import type { Class } from "@prisma/client";
import { authorizedOwner } from "../../authorized";
const prisma = new PrismaClient();

// User retrieve Data
export const GET = async ({ params }: { params: { id: string } }) => {
  try {
    const classes = await prisma.class.findFirstOrThrow({
      where: {
        id: Number(params.id),
      },
    });
    return new Response(
      JSON.stringify({ message: "Class found", data: classes }),
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
    const deletedClass = await prisma.class.delete({
      where: {
        id: Number(params.id),
      },
    });

    return new Response(
      JSON.stringify({
        message: "Class deleted successfully",
        data: deletedClass,
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
    const body: Class = await request.json();
    const updatedClass = await prisma.class.update({
      where: {
        id: Number(params.id),
      },
      data: {
        price: Number(body.price),
        duration: body.duration,
        session: Number(body.session),
        transmission: body.transmission,
        vehicleType: body.vehicleType,
      },
    });

    return new Response(
      JSON.stringify({
        message: "Data Updated Successfully",
        data: updatedClass,
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
