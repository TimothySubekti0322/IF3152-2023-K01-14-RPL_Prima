"use client";
import { Button } from "./";
import { useLayoutEffect, useState } from "react";
import carType  from '../../dashboard/data/carType';
import toast, { Toaster } from "react-hot-toast";
import axios from "axios";

interface PackageDataTypes {
    id: string;
    price: number | undefined;
    duration: number | undefined;
    session: number | undefined;
    transmission: string;
    vehicleType: string;
  }

export default function OurPackages() {
    const [loading, setLoading] = useState<boolean>(true);
    const [car, setCar] = useState(0)

    const [PackageData, setPackageData] = useState<PackageDataTypes[]>([]);

      useLayoutEffect(() => {
        const fetchData = async () => {
          try {
            const res = await axios.get(`/api/class`, {});
            setPackageData(res.data);
            console.log(res.data);
          } catch (err) {
            toast.error("Error fetching data");
            console.log(err);
          } finally {
            setLoading(false);
          }
        };
        fetchData();
      }, []);

    return (
    <div id="our-packages">
      <div className="bg-[#EEEEEE]">  
        <div className="OurPackages border-t-[80px] w-fit m-auto bg-[#EEEEEE] border-[#EEEEEE]">
            <h1 className="text-4xl font-extrabold px-8 py-0 text-[#1C2434]">OUR PACKAGES</h1>
            <div className="bg-[#C2E799] h-4 w-full mb-6 mt:mb-28">
            </div>
        </div>       
        

        <div className="block m-auto  rounded-md border-[#EEEEEE] w-80 md:w-fit">
            <div className="rounded-lg bg-[#1C2434] border-[#1C2434] md:flex px-4 md:px-2 lg:px-12 ">
                <div className="md:w-fit md:block ">
                    <p className="block w-fit text-center m-auto text-xl font-bold py-4 text-[#C2E799] md:mt-8">
                        Choose Car Type 
                    </p>
                    <div className="w-48 m-auto flex ">
                        <button onClick={()=> {car>0 ? setCar(car-1) : setCar(8)}}>
                            <img src="images/larrow.png" className="w-16"></img>
                        </button>

                        <img src={`images/car_${carType[car]}.png`} className="w-36"></img>

                        <button onClick={() => {car<8 ? setCar(car+1) : setCar(0)}} className="w-16">
                            <img src="images/rarrow.png" className="w-16"></img>
                        </button>
                    </div>
                    <p className="block w-full text-center text-xl py-4 text-white">
                        {carType[car]}
                    </p> 
                </div> 
                <div className="m-auto w-full lg:w-[500px] md:block">
                    <p className="text-center text-xl font-bold p-4 text-[#C2E799]">
                    {carType[car]} Packages 
                    </p>     
                    <div className="overflow-x-auto">           
                        <table className="overflow-x-auto  text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                            <thead className="text-base text-white">
                                <tr className="">
                                    <td scope="col" className="px-6 py-3 w-18">
                                    </td>
                                    <td scope="col" className="px-6 py-3 w-18">
                                        Transmission
                                    </td>
                                    <td scope="col" className="px-6 py-3 w-18">
                                        Duration
                                    </td>
                                    <td scope="col" className="px-6 py-3 w-18">
                                        Price
                                    </td>
                                </tr>
                            </thead>
                            <tbody>
                                {PackageData.map((item,idx) =>
                                    {
                                        return item.vehicleType==carType[car] ?
                                        <tr key={`row-${idx}`} className="text-[#C2E799]">
                                            <th  className="px-6 py-4 font-medium text-white">
                                                Package {item.id}
                                            </th>
                                            <th className="px-6 py-4 font-medium">
                                                {item.transmission}
                                            </th>
                                            <th className="px-6 py-4 font-medium">
                                                {item.duration} hours
                                            </th>
                                            <th className="px-6 py-4 font-medium">
                                                Rp {item.price}
                                            </th>
                                        </tr>
                                        :
                                        <div key={`row-${idx}`}></div>
                                    }
                                    
                                )}
                                    <tr className="text-white text-center">
                                            <th  className="px-6 py-4 font-medium text-white">
                                                - other -
                                            </th>
                                            <th className="px-6 py-4 font-medium">
                                                - packages -
                                            </th>
                                            <th className="px-6 py-4 font-medium">
                                                - coming -
                                            </th>
                                            <th className="px-6 py-4 font-medium">
                                                - soon -
                                            </th>
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