"use client";
import React from "react";
import { NavBar, Home, WhyUs, OurPackages, Register, Footer } from "./landing/components";

class Landing extends React.Component{

  head(){
    return (
      <>
        <head>
          <link rel="icon" href="images/favicon.png" />
          <title>RPL Prima</title>
        </head>
      </>
      );
  }

  body(){
    return(
      <>
        <body>
          <div className="h-full w-full bg-[#EEEEEE] text-white">
            <NavBar/>
            <Home />
            <WhyUs />
            <OurPackages />
            
          </div>
        

        <footer>
          <div className="border-t-[100px] border-[#EEEEEE]">
              <Footer />
            </div>
        </footer>
          </body>
        </>
    )
  }

  render() {
    return (
      <React.Fragment>
        {this.head()}
        {this.body()}
      </React.Fragment>
    )
  }
  
  
}

export default Landing;
