"use client";

import React, { FC } from "react";
import Cookies from "universal-cookie";

interface TokenPayload {
  email: string;
  role: string;
}

const Header: FC<TokenPayload> = ({ email, role }) => {
  const handleSignOut = () => {
    const cookies = new Cookies();
    cookies.remove("token", { path: "/" });
    window.location.href = "/auth/signin";
  };

  return (
    <div className="flex w-full justify-end items-center h-20 bg-white pr-6 md:pr-12">
      <div className="flex flex-row gap-x-5 items-center md:gap-x-8">
        <img src="/images/avatar.png" alt="avatar" className="w-12" />
        <div className="flex flex-col gap-y-1">
          <p className="text-sm font-bold">{role}</p>
          <p className="text-sm">{email}</p>
        </div>
        <button
          className="h-10 md:h-10 px-4 bg-[#D91010] rounded text-white font-semibold text-2xs md:text-xs hover:bg-[#B70000]"
          onClick={handleSignOut}
        >
          Sign Out
        </button>
      </div>
    </div>
  );
};

export default Header;
