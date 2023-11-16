"use client";

import { BsSearch } from "react-icons/bs";

export default function Search() {
  return (
    <div className="relative flex-grow">
      <div className="absolute top-[30%] left-4">
        <BsSearch />
      </div>
      <input
        type="text"
        className=" pl-10 rounded-lg focus:outline-none bg-white w-2/3 md:w-full"
        placeholder="Search"
      />
    </div>
  );
}
