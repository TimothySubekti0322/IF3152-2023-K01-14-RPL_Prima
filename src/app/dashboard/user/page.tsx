"use client";

import { useState } from "react";

export default function User() {
  const [hello, setHello] = useState<String>("hello world");

  return (
    <>
      <h1>This is user page</h1>
      <p>{hello}</p>
      <div className="">
        <button
          onClick={function () {
            if (hello == "hello world") {
              setHello("button clicked");
            } else {
              setHello("hello world");
            }
          }}
          className={`bg-[#FF6C22] p-6 text-white block my-4`}
        >
          Click To Change the hello world
        </button>
      </div>
      <button>
        <a href="/landing">Go To Landing Page</a>
      </button>
    </>
  );
}
