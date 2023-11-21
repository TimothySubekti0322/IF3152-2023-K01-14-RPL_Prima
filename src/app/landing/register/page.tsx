import { ReactElement, useState } from "react";
import { NavBar, Footer, Register } from "../components";

export default function Registration() {
  return (
    <>
      <head>
        <link rel="icon" href="%PUBLIC_URL%/favicon.png" />
        <title>RPL Prima</title>
      </head>

      <body>
        <div className="h-full w-full bg-[#EEEEEE] text-white">
          <NavBar />
          <Register />
          <div className="border-t-[30px] border-[#EEEEEE]">
            <Footer />
          </div>
        </div>
       
      </body>
      
      
    </>
  );
}
