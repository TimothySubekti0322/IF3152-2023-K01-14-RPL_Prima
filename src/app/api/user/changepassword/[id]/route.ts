import { PrismaClient } from "@prisma/client";
import type { User } from "@prisma/client";
import { authorized } from "../../../authorized";
import bcrypt from "bcrypt";
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
    const encryptedPassword = await bcrypt.hash(body.password, 10);
    const updatedUser = await prisma.user.update({
      where: {
        id: Number(params.id),
      },
      data: {
        password: encryptedPassword,
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
