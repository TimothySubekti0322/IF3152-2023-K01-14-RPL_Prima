"use client";
import { useState } from 'react';

export default function NavBar() {
    const [viewNav, setViewNav] = useState(false)

  return (
    <>
        {/* <div className="flex flex-row h-screen w-40 md:h-20 md:w-screen md:flex-col md:overflow-hidden bg-[#1C2434]"> */}

        <nav className="font-4xl z-10 w-screen fixed t-0 m-0 border-t-0 top-0 bg-[#1C2434] border-gray-200 px-10">
            <div className=" flex flex-wrap items-center justify-between mx-auto p-4 md:p-0">
                <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
                    <img src="images/logo_img.png" className="h-8" alt="Flowbite Logo" />
                    <img src="images/logo_title.png" className="h-8" alt="Flowbite Logo" />
                </a>
                <button data-collapse-toggle="navbar-default" type="button" onClick={()=>setViewNav(!viewNav)} className="inline-flex items-center p-2 w-10 h-10  text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
                    <span className="sr-only">Open main menu</span>
                    <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
                    </svg>
                </button>
                <div className={`${!viewNav && "hidden"} w-full md:block md:w-auto`} >
                    <ul className="text-xl flex flex-col md:flex-row p-4 pb-0 md:p-0 md:m-0 text-white">
                        <li>
                        <a href="/#home" className="text-base md:text-xl p-2 md:p-6 block text-white hover:bg-gradient-to-b from-[#C2E799] to-[#4D5D52]">Home</a>
                        </li>
                        <li >
                        <a href="/#why-us" className="text-base md:text-xl p-2 md:p-6 block text-white hover:bg-gradient-to-b from-[#C2E799] to-[#4D5D52]">Why Us</a>
                        </li>
                        <li>
                        <a href="/#our-packages" className="text-base md:text-xl p-2 md:p-6 block text-white hover:bg-gradient-to-b from-[#C2E799] to-[#4D5D52]">Our Packages</a>
                        </li>
                        <li>
                        <a href="/register" className="font-semibold text-base md:text-xl p-2 md:p-6 block text-[#C2E799] hover:bg-gradient-to-b from-[#C2E799] to-[#4D5D52] hover:text-white">Register</a>
                        </li>
                    </ul>
                </div>
            </div>
            </nav>       
      
    </>
  );
}