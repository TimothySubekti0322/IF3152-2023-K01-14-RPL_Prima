import { NavBar, Home, WhyUs, OurPackages, Register, Footer } from "./components";

export default function Landing() {
  return (
    <>
      <head>
        <link rel="icon" href="%PUBLIC_URL%/favicon.png" />
        <title>RPL Prima</title>
      </head>

      <body>
        <div className="h-full w-full bg-[#EEEEEE] text-white">
          {/* <NavBar/>
          <Home />
          <WhyUs />
          <OurPackages />
          <Footer /> */}
          <NavBar />
          <Register />
          <Footer />
        </div>
       
      </body>
      
      
    </>
  );
}
