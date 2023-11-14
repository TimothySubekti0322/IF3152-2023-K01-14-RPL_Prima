
export default function Home() {
    return (
      <>  
        <div className="Home m-auto justify-between items-center">
            <img className="absolute w-screen z-0 " src="images/landing_1.png"></img> 
        </div>  
            
        <div className="mt-[40px] md:mt-[90px] w-80 md:w-96 p-12  m-auto bg-[#1C2434] rounded-lg  shadow-[#C2E799] opacity-100">
            <a href="#" className="content-center">
                <img src="images/logo_img.png" className="h-8 m-auto" alt="Flowbite Logo" />
                <img src="images/logo_title.png" className="h-8 m-auto" alt="Flowbite Logo" />
            </a>
            <p className="mb-3 text-center font-normal text-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum hendrerit, erat et suscipit interdum, arcu quam porta justo, quis tempus mi urna at elit. Aenean lobortis placerat fringilla.</p>
            <div className= "m-auto text-center">
                <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-[#C2E799] rounded-lg hover:bg-[#83CE71] focus:ring-4 focus:outline-none focus:ring-blue-300 ">
                    REGISTER NOW!
                    <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                    </svg>
                </a>
            </div>
        </div>        
        
      </>
    );
  }