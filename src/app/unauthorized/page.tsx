
export default function Unauthorized() {
  return (
    <>
        <title>Unathorized Access</title>
      <body>
        <div className="h-screen w-full bg-[#1C2434] text-[#83CE71] content-center pt-36 md:pt-44 text-center">
          <div className="m-auto justify-center w-fit h-fit">
            <img src="/images/license.png" alt="403 image"></img>
          </div>
          <div>
            <p className="text-2xl font-bold pb-2">403 Forbidden</p>
            <p className="test-xl">You are not authorized to access this page. Please sign in to the proper account before retrying.</p>
            <div className= "m-auto text-center p-4">
                <a href="/auth/signin" className="inline-flex items-center px-3 py-2  text-xl  text-center hover:text-[black] hover:bg-[#83CE71] rounded-lg bg-[#83CE71] text-white hover:text-bold focus:ring-4 focus:outline-none focus:ring-blue-300 ">
                    BACK TO DASHBOARD
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
