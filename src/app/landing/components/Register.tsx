"use client";
import { ReactElement, useState } from "react";
import { Dropdown } from 'flowbite';

export default function Register() {
    // const dropdown = new Dropdown($targetEl, $triggerEl, options, instanceOptions);
    // // steps: ReactElement[]
    // const [hours, setHours] = useState(null)
    // const [carType, setCarType] = useState(null)
    // const [transmission, setTransmission] = useState(null)


    return (
      <>    
        <div id="register">
            <div className="OurPackages border-t-[100px] md:border-t-[120px] w-fit m-auto bg-[#EEEEEE] border-[#EEEEEE]">
                <h1 className="text-4xl font-extrabold px-8 py-0 text-[#1C2434]">REGISTER</h1>
                <div className="bg-[#C2E799] h-4 w-full mb-4">
                </div>
            </div> 

            <div className="mb-6 m-auto w-80 md:w-[700px] border-4 border-[#83CE71] rounded-lg bg-[#E6EDDF]">
                
                <form className="p-6">
                        <div className="pb-6">
                            <label htmlFor="name" className="block mb-2 text-sm md:text-base font-medium text-gray-900">Name</label>
                            <input type="text" id="name" className="bg-gray-50 border border-[#83CE71] text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Input name here..." required />
                        </div>
                        <div>
                        <label htmlFor="countries" className="block mb-2 text-sm font-medium text-gray-900">Select an option</label>
                            <select id="countries" className="bg-gray-50 border border-[#83CE71] text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
                            <option selected>Choose your package...</option>
                            <option value="01">Package 1</option>
                            <option value="02">Package 2</option>
                            <option value="03">Package 3</option>
                            <option value="04">Package 4</option>
                            </select>
                        </div>
                            <div className="md:flex text-black text-sm text-left">
                                <div className="flex">
                                    <div className=" p-4 pt-0 md:pl-0">
                                        Hours:
                                    </div>
                                    <div className="pb-4 px-4">
                                        
                                    </div>
                                </div>
                                <div className="flex">
                                    <div className="pb-4 px-4">
                                        Car Type:
                                    </div>
                                    <div className="pb-4 px-4">
                                        
                                    </div>
                                </div>
                                <div className="flex">
                                    <div className="pb-4 px-4">
                                        Transmission:
                                    </div>
                                    <div className="pb-4 px-4">
                                        
                                    </div>
                                </div>
                            </div>
                    <div className="grid gap-6 mb-6 md:grid-cols-2">
                        <div>
                            <label htmlFor="phone" className="block mb-2 text-sm md:text-base font-medium text-gray-900">Phone number</label>
                            <input type="tel" id="phone" className="bg-gray-50 border border-[#83CE71] text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Insert your phone number" pattern="[0-9]{12}" required />
                        </div>
                        <div>
                            <label htmlFor="address" className="block mb-2 text-sm md:text-base font-medium text-gray-900">Address</label>
                            <input type="text" id="address" className="bg-gray-50 border border-[#83CE71] text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Input your home address" required />
                        </div>
                    </div>
                    <div className="pb-6">
                            <label htmlFor="username" className="block mb-2 text-sm md:text-base font-medium text-gray-900">Username</label>
                            <input type="text" id="username" className="bg-gray-50 border border-[#83CE71] text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Choose your username..." required />
                        </div>
                    <div className="mb-6">
                        <label htmlFor="password" className="block mb-2 text-sm md:text-base font-medium text-gray-900">Password</label>
                        <input type="password" id="password" className="bg-gray-50 border border-[#83CE71] text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="•••••••••" required />
                    </div> 
                    <div className="mb-6">
                        <label htmlFor="confirm_password" className="block mb-2 text-sm md:text-base font-medium text-gray-900">Confirm password</label>
                        <input type="password" id="confirm_password" className="bg-gray-50 border border-[#83CE71] text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="•••••••••" required />
                    </div> 
                    <div className="text-center">
                        <button type="submit" className="text-center border-2 m-auto text-xl py-1 px-8  rounded-lg text-white bg-gradient-to-b from-[#6FBA5D] to-[#83CE71] hover:from-[#4B9639] hover:to-[#6FBA5D] focus:ring-blue-500 focus:border-blue-500">Submit</button>

                    </div>
                </form>

            </div>
        </div>  
      </>
    );
  }