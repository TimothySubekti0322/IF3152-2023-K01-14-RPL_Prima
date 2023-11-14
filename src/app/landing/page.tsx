import { NavBar, Home, WhyUs } from "./components";

export default function Landing() {
  return (
    <>
      <head>
        <link rel="icon" href="%PUBLIC_URL%/favicon.png" />
        <title>RPL Prima</title>
      </head>

      <body>
        <div className="h-screen w-screen bg-[#EEEEEE] text-white">
          <NavBar/>
          <Home />
          <WhyUs />
        </div>
       
      </body>
      
      
    </>
  );
}
