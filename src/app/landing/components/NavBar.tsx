
export default function NavBar() {
  return (
    <>
        {/* <div className="flex flex-row h-screen w-40 md:h-20 md:w-screen md:flex-col md:overflow-hidden bg-[#1C2434]"> */}

        <nav className="bg-[#1C2434] border-gray-200">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <a href="https://flowbite.com/" className="flex items-center space-x-3 rtl:space-x-reverse">
                    <img src="https://flowbite.com/docs/images/logo.svg" className="h-8" alt="Flowbite Logo" />
                    <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Flowbite</span>
                </a>
                <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
                    <span className="sr-only">Open main menu</span>
                    <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
                    </svg>
                </button>
                <div className="hidden w-full md:block md:w-auto" id="navbar-default">
                    <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border text-white">
                        <li>
                        <a href="#" className="block py-2 px-3 text-white rounded md:bg-transparent md:p-0 " aria-current="page">Home</a>
                        </li>
                        <li>
                        <a href="#" className="block py-2 px-3 text-white rounded hover:bg-[#C2E799]-70 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Why Us</a>
                        </li>
                        <li>
                        <a href="#" className="block py-2 px-3 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Our Packages</a>
                        </li>
                        <li>
                        <a href="#" className="block py-2 px-3 text-[#C2E799] rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Register</a>
                        </li>
                    </ul>
                </div>
            </div>
            </nav>



            {/* <div className="NavBar">
                    <img className = "p-[10px]  h-[48px] w-[48px] " src="/images/logo_img.png" alt="Logo RPL Prima" ></img> 
                    <img className = "p-20 h-[48px] max-w-[90px] md:max-w-screen" src="/images/logo_title.png" alt="Logo RPL Prima" ></img> 
                    {/* href="#home" 

                    <div className='Square' style={{width: 150}}>
                        <a title = 'HOME' href='#home'>
                                Home
                        </a>
                    </div>
                    <div className='Square' style={{width: 180}}>
                        <a className='nav-links' title = 'ACTIVITIES' href='#activities'>
                                Why Us
                        </a>
                    </div>
                    <div className='Square' style={{width: 180}}>
                        <a className='nav-links' title = 'ABOUT US' href='#about-us' >
                                Our Packages
                        </a>
                    </div>
                    <div className='Square' style={{width: 200}}>
                        <a className='nav-links' title = 'MEET THE TEAM' href='#meet-the-team'>
                                Register
                        </a>
                    </div>
                            
                </div> 
                */}
        {/* </div>  */}
        
      
    </>
  );
}