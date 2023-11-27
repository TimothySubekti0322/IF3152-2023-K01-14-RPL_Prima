"use client";
import { ChangeEvent, ReactElement, useLayoutEffect, useState } from "react";
import { NavBar, Footer, Register } from "../landing/components";
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
interface StudentDataTypes {
  name: string;
  classId: string;
  phone: string;
  address: string;
  status: string;
}


export default function Registration() {
  const [loading, setLoading] = useState<boolean>(false);
  const [packageOptions, setPackageOptions] = useState<PackageDataTypes[]>([]);

  const [student, setStudent] = useState<StudentDataTypes>({
    name: "",
    classId: "",
    phone: "",
    address: "",
    status: "registrant"
  });

  const [PackageData, setPackageData] = useState<PackageDataTypes>({
    id: "",
    price: undefined,
    duration: undefined,
    session: undefined,
    transmission: "",
    vehicleType: ""
  });

  const changePackageData = (
    event: ChangeEvent<HTMLInputElement | HTMLSelectElement>
    ) => {
      const {name, value} = event.target;
      setPackageData(packageOptions[(Number([value]))]);
      handleInputChange(event)
      // setStudent({...student, classId: packageOptions[(Number([value]))].id})
  };
  
  const handleInputChange = (
    event: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = event.target;
    setStudent({ ...student, [name]: value });    
  };

  useLayoutEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`/api/class`, {});
        setPackageOptions(res.data);
      } catch (err) {
        toast.error("Error fetching data");
        console.log(err);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    setLoading(true);
    event.preventDefault();
    try {
      const res = await axios.post("/api/student", student);
      console.log(res.status);
      if (res.status === 201) {
        toast.success("Data added successfully");
      } else if (res.status === 401) {
        window.location.href = "/unauthorized";
      }
    } catch (err) {
      console.log(err);
      setTimeout(toast.error("Something went wrong"), 100);
    } finally {
      setStudent({
        name: "",
        classId: "",
        phone: "",
        address: "",
        status: "registrant"
      });
      setPackageData({id: "",
      price: undefined,
      duration: undefined,
      session: undefined,
      transmission: "",
      vehicleType: ""});

      setLoading(false);
      
      setTimeout(() => {
        window.location.href = "/register";
      }, 2000); // Delayed by 2000 milliseconds (2 seconds)
    }
  };

  if(packageOptions[0]==undefined){
    return(
      <>

        <div className="block">
          <NavBar/>
        </div>
        
        <div className="pt-52 text-center m-auto">
            <span className="loading loading-spinner loading-sm md:loading-md "></span>
            <p className="text-md text-center ">Loading</p>
        </div>
        
        <div className="block pt-60">
          <Footer/>
        </div>
        
      </>
    )
  } else{

  return (
    <>
    <Toaster/>
        
      <link rel="icon" href="images/favicon.png" />      
      <title>Register for RPL Prima</title>

        <div className="h-full w-full bg-[#EEEEEE] text-white">
          <NavBar />
          <div id="register">
            <div className="OurPackages border-t-[80px] md:border-t-[100px] w-fit m-auto bg-[#EEEEEE] border-[#EEEEEE]">
                <h1 className="text-4xl font-extrabold px-8 py-0 text-[#1C2434]">REGISTER</h1>
                <div className="bg-[#C2E799] h-4 w-full mb-4">
                </div>
            </div> 

            <div className="mb-6 m-auto w-80 md:w-[700px] border-4 border-[#83CE71] rounded-lg bg-[#E6EDDF]">
                
                <form onSubmit={handleSubmit} className="p-6">
                        <div className="pb-2">
                            <label htmlFor="name" className="block mb-2 text-sm md:text-base font-medium text-gray-900">Name</label>
                            <input type="text" id="name" defaultValue={student.name} onChange={handleInputChange}
                            name="name"
                            className="bg-gray-50 border border-[#83CE71] text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Input name here..." required />
                        </div>
                        <div>
                        <label htmlFor="package" className="block mb-2 text-sm md:text-base font-medium text-gray-900">Package</label>
                          <select id="package"  defaultValue={student.classId} onChange={changePackageData}
                          name="classId"
                          className="bg-gray-50 border border-[#83CE71] text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Choose your package..." required
                          >
                              <option hidden value="" placeholder="Choose Your Package...">Choose Your Package...</option>

                              {packageOptions.map((item, idx) => (
                                    <option key={`opt-${idx}`} value={idx} >Paket {item.id}</option>
                              ))}
                              </select>

                                    <div className="md:flex text-black text-sm text-left">
                                      
                                      <div className="flex">
                                          <div className=" p-4 pb-2 pt-0 md:pl-0">
                                              Price: Rp{PackageData.price}
                                          </div>
                                          
                                      </div>
                                      <div className="flex">
                                          <div className="pb-2 px-4">
                                              Duration: {PackageData.duration} hours
                                          </div>
                                      </div>
                                      <div className="flex">
                                          <div className="pb-2 px-4">
                                              Transmission: {PackageData.transmission}
                                          </div>
                                      </div>
                                      <div className="flex">
                                          <div className="pb-2 px-4">
                                              Car Type: {PackageData.vehicleType}
                                          </div>
                                      </div>
                                  </div>
                            
                        </div>
                            
                    <div className="grid gap-2 mb-4 md:grid-cols-2">
                        <div>
                            <label htmlFor="phone" className="block mb-2 text-sm md:text-base font-medium text-gray-900">Phone number</label>
                            <input type="tel" id="phone" defaultValue={student.phone} onChange={handleInputChange}
                            name="phone"
                             className="bg-gray-50 border border-[#83CE71] text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Insert your phone number" pattern="[0-9]{12}" required />
                        </div>
                        <div>
                            <label htmlFor="address" className="block mb-2 text-sm md:text-base font-medium text-gray-900">Address</label>
                            <input type="text" id="address"  defaultValue={student.address} onChange={handleInputChange}
                            name="address"
                            className="bg-gray-50 border border-[#83CE71] text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Input your home address" required />
                        </div>
                    </div>
                    
                    <div className="text-center">
                        <button type="submit" className="text-center border-2 m-auto text-xl py-1 px-8  rounded-lg text-white bg-gradient-to-b from-[#6FBA5D] to-[#83CE71] hover:from-[#4B9639] hover:to-[#6FBA5D] focus:ring-blue-500 focus:border-blue-500">{loading ? (
                    <div className="flex items-center gap-x-3">
                      <span className="loading loading-spinner loading-sm md:loading-md"></span>
                      <p className="text-md">Loading</p>
                    </div>
                  ) : (
                    "Submit"
                  )}</button>

                    </div>
                </form>

            </div>
        </div>  
          <div className="border-t-8 border-[#EEEEEE]">
            <Footer />
          </div>
        </div>
       
      {/* </body> */}
      
      
    </>
  );
  }
}
