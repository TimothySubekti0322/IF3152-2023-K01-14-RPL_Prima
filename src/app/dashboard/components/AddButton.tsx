"use client";

import { usePathname } from "next/navigation";
import { AiOutlinePlusCircle } from "react-icons/ai";
import Cookies from "universal-cookie";
import { capitalize } from "./Capitalization";

export default function AddButton() {
  const path = usePathname();
  const endPoint = path.split("/")[2];
  const text = capitalize(endPoint);
  const cookies = new Cookies();
  const payload = cookies.get("payload");
  const clickHandler = () => {
    window.location.href = `${path}/add`;
  };

  return (
    <button
      className={`${
        payload.role == "Admin" ? "hidden" : ""
      } rounded-lg bg-[#3C50E0] py-2 px-3 md:px-5 flex items-center justify-between text-white gap-x-2 hover:bg-[#1A30C0]`}
      onClick={() => clickHandler()}
    >
      <AiOutlinePlusCircle style={{ fontSize: "1.25rem", color: "white" }} />
      <p className="text-sm md:text-base whitespace-nowrap">add {text}</p>
    </button>
  );
}
