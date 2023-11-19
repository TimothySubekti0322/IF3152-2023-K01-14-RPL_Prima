"use client";

import { usePathname } from "next/navigation";
import { AiOutlinePlusCircle } from "react-icons/ai";

export default function AddButton() {
  const path = usePathname();
  const endPoint = path.split("/")[2];
  const text = capitalize(endPoint);

  const clickHandler = () => {
    window.location.href = `${path}/add`;
  };
  return (
    <button
      className="rounded-lg bg-[#3C50E0] py-2 px-3 md:px-5 w-[45%] md:w-auto flex items-center justify-between text-white md:gap-x-2 hover:bg-[#1A30C0]"
      onClick={() => clickHandler()}
    >
      <AiOutlinePlusCircle style={{ fontSize: "1.25rem", color: "white" }} />
      <p className="text-sm md:text-base">add {text}</p>
    </button>
  );
}

const capitalize = (s: string) => {
  if (typeof s !== "string") return "";
  return s.charAt(0).toUpperCase() + s.slice(1);
};
