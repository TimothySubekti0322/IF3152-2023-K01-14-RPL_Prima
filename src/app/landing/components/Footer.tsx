export default function Footer() {
    return (
      <>  
        <div className="m-auto block w-full  bg-[#1C2434] border-[#EEEEEE]">

            <div className=" flex m-auto w-fit mt-auto">
                <div>
                    <img src="/images/logo_bawah.png" className="w-36 px-0 lg:w-80 lg:px-16"></img>
                </div>
                <div>
                    <div className=" w-full md:block md:w-auto" id="navbar-default">
                        <ul className="text-sm flex flex-col font-light md:flex-row p-4 md:p-0 md:m-0 text-white">
                            <li>
                            <a href="/#home" className="text-base md:py-4 px-8  lg:py-6 lg:px-16 md:text-2xl block text-white hover:bg-gradient-to-b from-[#C2E799] to-[#4D5D52]">Home</a>
                            </li>
                            <li >
                            <a href="/#why-us" className="text-base md:py-4 px-8 lg:py-6 lg:px-16 md:text-2xl block text-white hover:bg-gradient-to-b from-[#C2E799] to-[#4D5D52]">Why Us</a>
                            </li>
                            <li>
                            <a href="/#our-packages" className="text-base md:py-4 px-8 lg:py-6 lg:px-16 md:text-2xl block text-white hover:bg-gradient-to-b from-[#C2E799] to-[#4D5D52]">Our Packages</a>
                            </li>
                            <li>
                            <a href="/register" className="text-base md:py-4 px-8 lg:py-6 lg:px-16 md:text-2xl block text-white hover:bg-gradient-to-b from-[#C2E799] to-[#4D5D52] hover:text-white">Register</a>
                            </li>
                        </ul>
                    </div>
                    <div className="md:block md:w-auto" id="navbar-default">
                        <ul className="text-sm font-light flex flex-col md:flex-row p-4 md:p-0 md:m-0 text-white">
                            <li>
                            <   a href="#" className="text-base md:px-6 block text-white">Contact Us</a>
                            </li>
                            <li >
                                <img src="images/whatsapp.png" className="w-6 md:w-10 inline-flex"></img>
                                <a href="#" className="text-base md:px-6 inline-flex text-white">+62-XXXX-XXXX</a>
                            <br></br>
                                <img src="images/gmail.png" className="w-6 md:w-10 inline-flex"></img>
                                <a href="#" className="text-base md:px-6 inline-flex text-white">info@rplprima.com</a>
                            </li>
                            <br></br>
                            <li>
                                <a href="#" className="text-base md:px-6 block text-white">Our Locations</a>
                            </li>
                            <li className="block">
                                <img src="images/location.png" className="w-6 md:w-10 inline-flex"></img>
                                <a href="#" className="text-base md:px-6 inline-flex text-white hover:text-white">Dago</a>
                                <br></br>
                                <img src="images/location.png" className="w-6 md:w-10 inline-flex"></img>
                                <a href="#" className="text-base md:px-6 inline-flex text-white hover:text-white">Buah Batu</a>
                            </li>
                        </ul>
                    </div>
                </div>
                
            </div>
            <div className="block">
                <p className="text-white text-center md:justify-center text-xs font-semibold pt-2">
                    COPYRIGHT © 2023 RPL PRIMA. ALL RIGHTS RESERVED.
                </p>
            </div> 
        </div>
    </>
  );
}
