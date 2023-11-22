import { PrismaClient } from "@prisma/client";
import type { Vehicle } from "@prisma/client";
import { authorized } from "../../authorized";
const prisma = new PrismaClient();

export const GET = async (request: Request) => {
  const auth = await authorized(request);
  if (auth.status !== 200) {
    return new Response(JSON.stringify(auth), { status: auth.status });
  }
  const vehicles = await prisma.vehicle.findMany({
    orderBy: {
      id: "asc",
    },
    select: {
      id: true,
      plate: true,
      status: true,
    },
  });
  return new Response(JSON.stringify(vehicles), { status: 200 });
};
