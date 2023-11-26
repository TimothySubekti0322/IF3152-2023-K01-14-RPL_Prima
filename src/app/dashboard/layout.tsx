"use client";

import React, { useEffect, useState } from "react";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import Cookies from "universal-cookie";
import jwt from "jsonwebtoken";
import { usePathname } from "next/navigation";
interface TokenPayload {
  email: string;
  role: string;
}

export default function Layout({ children }: { children: React.ReactNode }) {
  const [loading, setLoading] = useState(true);
  const [tokenPayload, setTokenPayload] = useState<TokenPayload>({
    email: "",
    role: "",
  });

  //Change Password state
  const path = usePathname();
  const isPasswordChangePage = path.split("/")[2] == "change-password";

  // Check if user is already logged in
  useEffect(() => {
    const cookies = new Cookies();
    const token = cookies.get("token");
    if (!token) {
      window.location.href = "/auth/signin";
    } else {
      setTokenPayload(cookies.get("payload"));
      setLoading(false);
    }
  }, []);
  return (
    <>
      {loading ? (
        <div className="w-screen h-screen bg-white"></div>
      ) : (
        <div
          className={` ${
            isPasswordChangePage && "h-screen"
          } md:h-screen w-screen bg-[#EEEEEE] text-black`}
        >
          <div className="flex flex-col md:h-screen md:flex-row md:overflow-hidden">
            <div className="absolute flex items-center justify-between md:relative md:flex-none md:w-[17rem]">
              <Sidebar role={tokenPayload.role} />
            </div>
            <div className="md:flex-grow md:overflow-y-auto">
              <Header email={tokenPayload.email} role={tokenPayload.role} />
              <div>{children}</div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
