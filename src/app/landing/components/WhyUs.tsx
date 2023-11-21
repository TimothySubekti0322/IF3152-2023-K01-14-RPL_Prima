
export default function WhyUs() {
    return (
      <>  
      <div id="why-us">
        {/* <div className="bg-gradient-to-b from-[#EEEEEE] to-[#BEE597]"> */}

        <div className="WhyUs border-t-[140px] md:border-t-[120px] mb-4 w-fit m-auto bg-[#EEEEEE] border-[#EEEEEE]" >
            <h1 className="text-4xl font-extrabold px-14 py-2 bg-[#1C2434] text-[#C2E799]">WHY US</h1>
        </div>       
        

        <div className=" p-0 border-x-[20px] md:border-x-[200px] md:flex bg-[#EEEEEE] border-[#EEEEEE]">
          <div >
              <ul className="md:h-72 bg-[#1C2434] text-xl md:w-[220px] rounded-t-lg md:rounded-tr-none md:rounded-l-lg flex-column py-2 md:py-8 font-medium ">
                <li>
                    <a href="#" className="inline-flex items-center px-4 py-3 text-white  hover:text-[#1C2434] active active:text-[#C2E799] hover:bg-[#C2E799] w-full" aria-current="page">
                        Our Vehicles
                    </a>
                </li>
                <li>
                    <a href="#" className="inline-flex items-center px-4 py-3 hover:text-[#1C2434] hover:bg-[#C2E799] w-full">
                        Our Values
                    </a>
                </li>
                <li>
                    <a href="#" className="inline-flex items-center px-4 py-3 hover:text-[#1C2434] hover:bg-[#C2E799] w-full">
                        Our Missions
                    </a>
                </li>
                <li>
                    <a href="#" className="inline-flex items-center px-4 py-3 hover:text-[#1C2434] hover:bg-[#C2E799] w-full">
                        Our Locations
                    </a>
                </li>
            </ul>
          </div>

            <div className="p-8 bg-[#586665] rounded-b-lg md:rounded-bl-none md:rounded-r-lg  h-72 overflow-y-auto">
                <h3 className="text-2xl font-bold text-white mb-2">Our Vehicles</h3>
                <p className="mb-2">aaaaa aaaaa aaaaaa aaaa aaaaaaaaaa aaaaaaaa aaaa aaaaa This is some placeholder content the Profile tabs associated content, clicking another tab will toggle the visibility of this one for the next. This is some placeholder content the Profile tabs associated content, clicking another tab will toggle the visibility of this one for the next. This is some placeholder content the Profile tabs associated content, clicking another tab will toggle the visibility of this one for the next. This is some placeholder content the Profile tabs associated content, clicking another tab will toggle the visibility of this one for the next.</p>
                <p>The tab JavaScript swaps classes to control the content visibility and styling.</p> 
            </div>
        </div>

        {/* </div> */}
    </div>

      </>
    );
  }