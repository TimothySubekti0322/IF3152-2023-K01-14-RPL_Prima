import { PrismaClient } from "@prisma/client";
import { authorized } from "../../authorized";
const prisma = new PrismaClient();

export const GET = async (request: Request) => {
  try {
    const auth = await authorized(request);
    if (auth.status !== 200) {
      return new Response(JSON.stringify(auth), { status: auth.status });
    }
    const classes = await prisma.class.findMany({
      orderBy: {
        id: "asc",
      },
      select: {
        id: true,
      },
    });
    if (!classes) {
      return new Response(JSON.stringify({ message: "Data Not Found" }), {
        status: 404,
      });
    }
    const data = classes.map((item) => item.id);
    return new Response(JSON.stringify(data), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ message: error }), {
      status: 404,
    });
  }
};
