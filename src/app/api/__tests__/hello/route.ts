import { request } from "http";
import type { NextApiRequest, NextApiResponse } from "next";

type ResponseData = {
  message: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  if (req.method === "GET") {
    return GET();
  } else if (req.method === "POST") {
    return POST(req);
  } else {
    res.status(200).json({ message: "Hello from Next.js!" });
  }
}

export const GET = async () => {
  return new Response(JSON.stringify({ message: "Hello from Next.js!" }), {
    status: 200,
  });
};

export const POST = async (request: NextApiRequest) => {
  return new Response(JSON.stringify({ message: "POST" }), {
    status: 200,
  });
};
