"use client";
import { ReactElement, useState } from "react";

export default function Register() {
    // steps: ReactElement[]
    const [hours, setHours] = useState(null)
    const [carType, setCarType] = useState(null)
    const [transmission, setTransmission] = useState(null)


    return (
      <>    
        <div id="register">
            <div className="OurPackages border-t-[100px] md:border-t-[120px] w-fit m-auto bg-[#EEEEEE] border-[#EEEEEE]">
                <h1 className="text-4xl font-extrabold px-8 py-0 text-[#1C2434]">REGISTER</h1>
                <div className="bg-[#C2E799] h-4 w-full mb-4">
                </div>
            </div> 

            <div className="mb-6 m-auto w-80 md:w-[700px] border-4 border-[#83CE71] rounded-lg bg-[#E6EDDF]">
                <div className="">
                    <table className="w-full text-black">
                        <tr>
                            <th className="w-20 md:w-40 text-left p-4">
                                Name
                            </th>
                            <th>
                                <div className="h-6 w-48 md:w-[500px] border-2 border-[#83CE71] rounded-lg"></div>
                            </th>
                        </tr>
                        <tr>
                            <th className="w-20 md:w-40 text-left p-4 align-text-top">
                                Package
                            </th>
                            <th>
                                <table>
                                    <tr>
                                        <th className="text-left">
                                            Hours
                                        </th>
                                        <th className="mx-8">
                                            <button id="hrsDropdown" data-dropdown-toggle="hrsDropdown" className="border-2 border-[#83CE71] hover:border-[#5BA649] focus:ring-4 font-medium rounded-lg text-sm px-2 py-1 m-2 text-center inline-flex items-center" type="button"><svg className="w-2.5 h-2.5 ms-3 text-[#83CE71]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
                                            </svg>
                                            </button>
                                            <div id="dropdown" className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
                                                <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
                                                <li>
                                                    <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">10</a>
                                                </li>
                                                <li>
                                                    <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">12</a>
                                                </li>
                                                <li>
                                                    <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">14</a>
                                                </li>
                                                <li>
                                                    <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">16</a>
                                                </li>
                                                </ul>
                                            </div>

                                        </th>
                                    </tr>
                                    <tr>
                                        <th className="text-left">
                                            Car Type
                                        </th>
                                        <th className="mx-8">
                                            <button id="typeDropdown" data-dropdown-toggle="typeDropdown" className="border-2 border-[#83CE71] hover:border-[#5BA649] focus:ring-4 font-medium rounded-lg text-sm px-2 py-1 m-2 text-center inline-flex items-center" type="button"><svg className="w-2.5 h-2.5 ms-3 text-[#83CE71]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
                                            </svg>
                                            </button>
                                            <div id="dropdown" className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
                                                <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
                                                <li>
                                                    <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">10</a>
                                                </li>
                                                <li>
                                                    <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">12</a>
                                                </li>
                                                <li>
                                                    <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">14</a>
                                                </li>
                                                <li>
                                                    <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">16</a>
                                                </li>
                                                </ul>
                                            </div>

                                        </th>
                                    </tr>
                                    <tr>
                                        <th className="text-left">
                                            Transmission
                                        </th>
                                        <th className="mx-8">
                                            <button id="transmissionDropdown" data-dropdown-toggle="transmissionDropdown" className="border-2 border-[#83CE71] hover:border-[#5BA649] focus:ring-4 font-medium rounded-lg text-sm px-2 py-1 m-2 text-center inline-flex items-center" type="button"><svg className="w-2.5 h-2.5 ms-3 text-[#83CE71]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
                                            </svg>
                                            </button>
                                            <div id="dropdown" className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
                                                <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
                                                <li>
                                                    <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">10</a>
                                                </li>
                                                <li>
                                                    <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">12</a>
                                                </li>
                                                <li>
                                                    <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">14</a>
                                                </li>
                                                <li>
                                                    <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">16</a>
                                                </li>
                                                </ul>
                                            </div>

                                        </th>
                                    </tr>
                                </table>
                            </th>
                        </tr>
                        <tr>
                            <th className="w-20 md:w-40 text-left p-4">
                                Phone Number
                            </th>
                            <th>
                                <div className="h-6 w-48 md:w-[500px] border-2 border-[#83CE71] rounded-lg"></div>
                            </th>
                        </tr>
                        <tr>
                            <th className="w-20 md:w-40 text-left p-4">
                                Address
                            </th>
                            <th>
                                <div className="h-6 w-48 md:w-[500px] border-2 border-[#83CE71] rounded-lg"></div>
                            </th>
                        </tr>
                    </table>
                    
                    <div className="text-center p-4">
                        <button id="submit" className="text-center m-auto text-xl py-1 px-8 border-2 bg-gradient-to-b from-[#6FBA5D] to-[#83CE71] hover:from-[#4B9639] hover:to-[#6FBA5D] rounded-lg">
                            Submit
                        </button>
                    </div>
                    

                </div>
            </div>

        </div>  
      </>
    );
  }