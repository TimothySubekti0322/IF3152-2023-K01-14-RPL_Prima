
export default function Footer() {
    return (
      <>  
        <div className="border-t-[80px] w-screen relative md:flex bg-[#1C2434] border-[#EEEEEE]">
            <div className="m-auto relative overflow-x-auto">
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 ">
                    <tbody>
                        <tr>
                            <th>
                                <img src="images/logo_bawah.png" className="w-48"></img>
                            </th>
                            <th>
                            <div className=" w-full md:block md:w-auto" id="navbar-default">
                                <ul className="text-sm flex flex-col font-light md:flex-row p-4 md:p-0 md:m-0 text-white">
                                    <li>
                                    <a href="#" className="text-2xl block text-white hover:bg-gradient-to-b from-[#C2E799] to-[#4D5D52]  p-6">Home</a>
                                    </li>
                                    <li >
                                    <a href="#" className="text-2xl block text-white hover:bg-gradient-to-b from-[#C2E799] to-[#4D5D52]  p-6">Why Us</a>
                                    </li>
                                    <li>
                                    <a href="#" className="text-2xl block text-white hover:bg-gradient-to-b from-[#C2E799] to-[#4D5D52]  p-6">Our Packages</a>
                                    </li>
                                    <li>
                                    <a href="#" className="text-2xl block text-white hover:bg-gradient-to-b from-[#C2E799] to-[#4D5D52]  p-6 hover:text-white">Register</a>
                                    </li>
                                </ul>
                            </div>
                            <div className="hidden w-full md:block md:w-auto" id="navbar-default">
                                <ul className="text-sm font-light flex flex-col md:flex-row p-4 md:p-0 md:m-0 text-white">
                                    <li>
                                    <a href="#" className="text-2xl block text-white hover:bg-gradient-to-b from-[#C2E799] to-[#4D5D52]  p-6">Contact Us</a>
                                    </li>
                                    <li >
                                    <img src="images/whatsapp.png" className="w-10 inline-flex"></img>
                                    <a href="#" className="text-2xl inline-flex text-white hover:bg-gradient-to-b from-[#C2E799] to-[#4D5D52]  p-6">+62-XXXX-XXXX</a>
                                    <br></br>
                                    <img src="images/gmail.png" className="w-10 inline-flex"></img>
                                    <a href="#" className="text-2xl inline-flex text-white hover:bg-gradient-to-b from-[#C2E799] to-[#4D5D52]  p-6">info@rplprima.com</a>
                                    </li>
                                    <li>
                                    <a href="#" className="text-2xl block text-white hover:bg-gradient-to-b from-[#C2E799] to-[#4D5D52]  p-6">Our Locations</a>
                                    </li>
                                    <li>
                                    <a href="#" className="text-2xl block text-white hover:bg-gradient-to-b from-[#C2E799] to-[#4D5D52]  p-6 hover:text-white">Dago</a>
                                    <a href="#" className="text-2xl block text-white hover:bg-gradient-to-b from-[#C2E799] to-[#4D5D52]  p-6 hover:text-white">Buah Batu</a>
                                    </li>
                                </ul>
                            </div>
                            </th>
                        </tr>
                    </tbody>
                </table>    
                <p className="flex text-center md:justify-center text-xs font-semibold pt-8">
                    COPYRIGHT © 2023 RPL PRIMA. ALL RIGHTS RESERVED.
                </p>
            </div>

        </div>
      </>
    );
  }