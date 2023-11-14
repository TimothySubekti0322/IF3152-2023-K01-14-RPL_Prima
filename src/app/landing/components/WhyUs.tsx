
export default function WhyUs() {
    return (
      <>  
        <div className="WhyUs mt-[80px] mb-4 w-fit m-auto">
            <h1 className="font-bold px-8 py-4 bg-[#1C2434] text-[#C2E799]">WHY US</h1>
        </div>       
        

        <div className="border-x-[20px] md:border-x-[200px] md:flex bg-[#EEEEEE] border-[#EEEEEE]">
            <ul className="flex-column space-y space-y-4 text-sm font-medium text-gray-500 dark:text-gray-400 md:me-4 mb-4 md:mb-0">
                <li>
                    <a href="#" className="inline-flex items-center px-4 py-3 text-white bg-blue-700 rounded-lg active w-full dark:bg-blue-600" aria-current="page">
                        Our Vehicles
                    </a>
                </li>
                <li>
                    <a href="#" className="inline-flex items-center px-4 py-3 rounded-lg hover:text-gray-900 bg-gray-50 hover:bg-gray-100 w-full dark:bg-gray-800 dark:hover:bg-gray-700 dark:hover:text-white">
                        Our Values
                    </a>
                </li>
                <li>
                    <a href="#" className="inline-flex items-center px-4 py-3 rounded-lg hover:text-gray-900 bg-gray-50 hover:bg-gray-100 w-full dark:bg-gray-800 dark:hover:bg-gray-700 dark:hover:text-white">
                        Our Missions
                    </a>
                </li>
                <li>
                    <a href="#" className="inline-flex items-center px-4 py-3 rounded-lg hover:text-gray-900 bg-gray-50 hover:bg-gray-100 w-full dark:bg-gray-800 dark:hover:bg-gray-700 dark:hover:text-white">
                        Our Locations
                    </a>
                </li>
            </ul>
            <div className="p-6 bg-gray-50 text-medium text-gray-500 dark:text-gray-400 dark:bg-gray-800 rounded-lg w-full">
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">Profile Tab</h3>
                <p className="mb-2">This is some placeholder content the Profile tabs associated content, clicking another tab will toggle the visibility of this one for the next.</p>
                <p>The tab JavaScript swaps classes to control the content visibility and styling.</p> 
            </div>
        </div>


        
      </>
    );
  }