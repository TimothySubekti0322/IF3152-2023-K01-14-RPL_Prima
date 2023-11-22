import { PrismaClient } from "@prisma/client";
import type { User } from "@prisma/client";
import {authorized} from "../../../authorized";
const prisma = new PrismaClient();

export const PATCH = async (
  request: Request,
  { params }: { params: { id: string } }
) => {
  try {
    const auth = await authorized(request);
    if (auth.status !== 200) {
      return new Response(JSON.stringify(auth), { status: auth.status });
    }
    const body: User = await request.json();
    const updatedUser = await prisma.user.update({
      where: {
        id: Number(params.id),
      },
      data: {
        password: body.password,
      },
    });

    return new Response(
      JSON.stringify({
        message: "Data Updated Successfully",
        data: updatedUser,
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
