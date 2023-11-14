
export default function OurPackages() {
    return (
      <div className="bg-[#EEEEEE]">  
        <div className="OurPackages border-t-[80px] w-fit m-auto bg-[#EEEEEE] border-[#EEEEEE]">
            <h1 className="font-bold px-8 py-0 text-[#1C2434]">OUR PACKAGES</h1>
            <div className="bg-[#C2E799] h-4 w-full mb-4">
            </div>
        </div>       
        

        <div className="m-auto border-x-[20px] md:border-x-[200px] md:flex bg-[#1C2434] border-[#EEEEEE]">
            <div className="m-auto relative ">
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 ">
                    <tbody>
                        <tr>
                            <th className="w-96">
                                <p className="text-center">
                                    Choose Car Type 
                                </p>  
                                <div className="w-48 m-auto flex ">
                                    <img src="images/larrow.png" className="w-12"></img>
                                    <img src="images/car_1.png" className="w-20"></img>
                                    <img src="images/rarrow.png" className="w-12"></img>
                                </div>
                                <p className="text-center">
                                    Small SUV 
                                </p>  
                            </th>
                            <th className="w-96">
                                <p className="text-center">
                                    Small SUV Packages 
                                </p>                     
                                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                    <thead className="text-xs text-gray-900 uppercase dark:text-gray-400">
                                        <tr>
                                            <th scope="col" className="px-6 py-3">
                                            </th>
                                            <th scope="col" className="px-6 py-3">
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
                                        <tr className="">
                                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
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
                                        <tr className="">
                                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
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
                                        <tr className="">
                                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
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
                            </th>
                        </tr>
                    </tbody>
                </table>    
            </div>

        </div>


        
      </div>
    );
  }