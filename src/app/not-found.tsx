import { redirect } from "next/navigation";

export default function NotFound() {


    return (
      <>
        <head>
          <link rel="icon" href="images/favicon.png" />
          <title>Unathorized Access</title>
        </head>
  
        <body>
          <div className="h-screen w-full bg-[#1C2434] text-[#83CE71] content-center pt-24 text-center">
            <div className="m-auto justify-center w-fit h-fit">
              <img src="images/streetsign.png" alt="401 image"></img>
            </div>
            <div>
              <p className="text-2xl font-bold pb-2">404 Page not Found</p>
              <p className="test-xl">The page you&apos;re looking for does not exist.</p>
              <a href="/"></a>
              <div className= "m-auto text-center p-4">
                <p className="pb-2 text-sm">Go back to Home Page?</p>
                  <a href="/" className="inline-flex items-center px-3 py-2  text-xl  text-center hover:text-[black] hover:bg-[#83CE71] rounded-lg bg-[#83CE71] text-white hover:text-bold focus:ring-4 focus:outline-none focus:ring-blue-300 ">
                      BACK TO HOME
                      <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                      </svg>
                  </a>
              </div>
            </div>
            
          </div>
         
        </body>
        
        
      </>
    );
  }
  