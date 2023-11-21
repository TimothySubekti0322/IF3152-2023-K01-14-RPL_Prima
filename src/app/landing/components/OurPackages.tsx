"use client";
import { Button } from "./";
import { useState } from "react";
import carType  from '../../dashboard/data/carType'

export default function OurPackages() {
    const [car, setCar] = useState(0)

    return (
    <div id="our-packages">
      <div className="bg-[#EEEEEE]">  
        <div className="OurPackages border-t-[80px] w-fit m-auto bg-[#EEEEEE] border-[#EEEEEE]">
            <h1 className="text-4xl font-extrabold px-8 py-0 text-[#1C2434]">OUR PACKAGES</h1>
            <div className="bg-[#C2E799] h-4 w-full mb-6 mt:mb-28">
            </div>
        </div>       
        

        <div className="block m-auto  rounded-md border-[#EEEEEE] w-80 md:w-fit">
            <div className="rounded-lg bg-[#1C2434] border-[#1C2434] md:flex px-4 md:px-12 ">
                <div className="md:w-fit md:block ">
                    <p className="block w-fit text-center m-auto text-xl font-bold py-4 text-[#C2E799] md:mt-24">
                        Choose Car Type 
                    </p>
                    <div className="w-48 m-auto flex ">
                        <button onClick={()=> {car>0 ? setCar(car-1) : setCar(8)}}>
                            <img src="images/larrow.png" className="w-16"></img>
                        </button>

                        <img src={`images/cars/${carType[car]}.png`} className="w-36"></img>

                        <button onClick={() => {car<8 ? setCar(car+1) : setCar(0)}} className="w-16">
                            <img src="images/rarrow.png" className="w-16"></img>
                        </button>
                    </div>
                    <p className="block w-full text-center text-xl py-4 text-white">
                        {carType[car]}
                    </p> 
                </div> 
                <div className="m-auto w-full md:w-[500px] md:block">
                    <p className="text-center text-xl font-bold p-4 text-[#C2E799]">
                    {carType[car]} Packages 
                    </p>     
                    <div className="overflow-x-auto">           
                        <table className="overflow-x-auto  text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
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