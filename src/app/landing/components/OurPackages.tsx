import { Button } from "./";

export default function OurPackages() {
    return (
    <div id="our-packages">
      <div className="bg-[#EEEEEE]">  
        <div className="OurPackages border-t-[80px] w-fit m-auto bg-[#EEEEEE] border-[#EEEEEE]">
            <h1 className="text-4xl font-extrabold px-8 py-0 text-[#1C2434]">OUR PACKAGES</h1>
            <div className="bg-[#C2E799] h-4 w-full mb-4">
            </div>
        </div>       
        

        <div className="block m-auto border-x-12  rounded-md border-[#EEEEEE] w-80 md:w-[900px]">
            <div className="rounded-lg bg-[#1C2434] border-[#1C2434] md:flex">
                <div className="m-auto md:w-fit md:block ">
                    <p className="block w-full text-center text-xl font-bold py-4 text-[#C2E799]">
                        Choose Car Type 
                    </p>
                    <div className="w-48 m-auto flex ">
                        <img src="images/larrow.png" className="w-12"></img>
                        <img src="images/car_1.png" className="w-20"></img>
                        <img src="images/rarrow.png" className="w-12"></img>
                    </div>
                    <p className="block w-full text-center text-xl py-4 text-white">
                        Small SUV 
                    </p> 
                </div> 
                <div className="m-auto w-80 md:w-fit md:block">
                    <p className="text-center text-xl font-bold p-4 text-[#C2E799]">
                        Small SUV Packages 
                    </p>     
                    <div className="overflow-x-auto">           
                        <table className="overflow-x-auto w-auto text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                            <thead className="text-base text-white">
                                <tr className="">
                                    <th scope="col" className="px-6 py-3">
                                    </th>
                                    <th scope="col" className="px-6 py-3 w-full">
                                        6 hours
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        8 hours
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        10 hours
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="text-[#C2E799]">
                                    <th scope="row" className="px-6 py-4 font-medium text-white whitespace-nowrap ">
                                        Apple MacBook Pro 17
                                    </th>
                                    <td className="px-6 py-4">
                                        Silver
                                    </td>
                                    <td className="px-6 py-4">
                                        Laptop
                                    </td>
                                    <td className="px-6 py-4">
                                        $2999
                                    </td>
                                </tr>
                                <tr className="text-[#C2E799]">
                                    <th scope="row" className="px-6 py-4 font-medium text-white whitespace-nowrap ">
                                        Microsoft Surface Pro
                                    </th>
                                    <td className="px-6 py-4">
                                        White
                                    </td>
                                    <td className="px-6 py-4">
                                        Laptop PC
                                    </td>
                                    <td className="px-6 py-4">
                                        $1999
                                    </td>
                                </tr>
                                <tr className="text-[#C2E799]">
                                    <th scope="row" className="px-6 py-4 font-medium text-white whitespace-nowrap">
                                        Magic Mouse 2
                                    </th>
                                    <td className="px-6 py-4">
                                        Black
                                    </td>
                                    <td className="px-6 py-4">
                                        Accessories
                                    </td>
                                    <td className="px-6 py-4">
                                        $99
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        </div>   
                        <div className="block p-6">
                            <Button/>
                        </div>  
                    </div>  
                </div>
            </div>
            
        </div>
        </div>

    );
  }