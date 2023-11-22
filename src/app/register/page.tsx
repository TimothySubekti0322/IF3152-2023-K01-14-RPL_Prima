import { ReactElement, useState } from "react";
import { NavBar, Footer, Register } from "../landing/components";

export default function Registration() {
  return (
    <>
      <head>
        <link rel="icon" href="images/favicon.png" />
        <title>Register for RPL Prima</title>
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
