import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import type { User } from "@prisma/client";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

const prisma = new PrismaClient();

interface Credential {
  email: string;
  password: string;
  rememberMe: boolean;
}

export async function POST(req: Request, res: Response) {
  try {
    const body: Credential = await req.json();
    const { email, password, rememberMe } = body;

    //Fetch user from database
    const user = await prisma.user.findUnique({ where: { email } });
    if (!user) {
      return new Response(
        JSON.stringify({ message: "User not registered", status: 404 })
      );
    }

    //Check password
    const isPasswordCorrect = await bcrypt.compare(password, user.password);
    if (!isPasswordCorrect) {
      return new Response(
        JSON.stringify({ message: "Password incorrect", status: 401 })
      );
    }

    // Generate a JWT token
    const token = jwt.sign(
      { email: user.email, role: user.role },
      process.env.JWT_SECRET as string,
      { expiresIn: "31d" }
    );

    return new Response(
      JSON.stringify({
        msg: "Login successful",
        rememberMe: rememberMe,
        token: token,
        payload: { email: user.email, role: user.role, id: user.id },
        status: 200,
      }),
      { status: 200 }
    );
  } catch (error) {
    return new Response(
      JSON.stringify({ message: "Internal Server Error", data: error }),
      { status: 500 }
    );
  }
}
