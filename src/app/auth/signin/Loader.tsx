import React from "react";

const Loader = () => {
  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center gap-y-4 bg-[#eeeeee]">
      <span className="loading loading-spinner loading-lg text-black"></span>
      <p className="text-lg text-black">Loading</p>
    </div>
  );
};

export default Loader;
