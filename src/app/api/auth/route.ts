import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import type { User } from "@prisma/client";
import jwt from "jsonwebtoken";
import { serialize } from "cookie";

const prisma = new PrismaClient();

interface Credential {
  email: string;
  password: string;
  rememberMe: boolean;
}

export async function POST(req: Request, res: Response) {
  const body: Credential = await req.json();
  const { email, password, rememberMe } = body;

  //Fetch user from database
  const user = await prisma.user.findUnique({ where: { email } });
  if (!user) {
    return NextResponse.json({ message: "User not registered", status: 404 });
  }

  //Check password
  const passwordMatch = password === user.password;
  if (!passwordMatch) {
    return NextResponse.json({ message: "Password incorrect", status: 401 });
  }

  // Generate a JWT token
  const token = jwt.sign(
    { email: user.email, role: user.role },
    process.env.JWT_SECRET as string,
    { expiresIn: "31d" }
  );

  return NextResponse.json({
    msg: "Login successful",
    rememberMe: rememberMe,
    token: token,
    payload: { email: user.email, role: user.role, id: user.id },
    status: 200,
  });
}
