"use client";
import { useState } from 'react';
import carType  from '../../dashboard/data/carType'

export default function WhyUs() {

    const [tab, setTab] = useState(0)
    

    return (
      <>  
      <div id="why-us">
        <div className=" bg-gradient-to-b from-[#EEEEEE] to-[#BEE597] border-t-[80px] border-[#EEEEEE]">

            <div>
                <div className="WhyUs mb-4 w-fit m-auto bg-[#EEEEEE] border-[#EEEEEE]" >
                    <h1 className="text-4xl font-extrabold px-14 py-2 bg-[#1C2434] text-[#C2E799]">WHY US</h1>
                </div>   
            </div>
            
        <div className="px-4 md:px-40 pt-6">


            <div className="md:flex bg-[#BEE597] ">
                <div>
                    <ul className="bg-[#1C2434] text-xl md:w-[220px] md:h-96 rounded-t-lg md:rounded-tr-none md:rounded-l-lg flex-column py-2 md:py-8 font-medium ">
                        <li>
                            <button id="vehicles-tab" onClick={() => setTab(0)} className={`inline-flex items-center px-4 py-3 ${tab==0 ? 'bg-gradient-to-b from-[#4D5D52] via-[#C2E799] to-[#4D5D52] text-black hover:from-[#C2E799] hover:to-[#C2E799]' : ' text-white hover:bg-[#C2E799] hover:text-black' }  w-full`} >
                                Our Vehicles
                            </button>
                        </li>
                        <li>
                            <button id="values-tab"  onClick={() => setTab(1)} className={`inline-flex items-center px-4 py-3 ${tab==1 ? 'bg-gradient-to-b from-[#4D5D52] via-[#C2E799] to-[#4D5D52] text-black hover:from-[#C2E799] hover:to-[#C2E799]' : ' text-white hover:bg-[#C2E799] hover:text-black' }  w-full`} >
                                Our Values
                            </button>
                        </li>
                        <li>
                            <button id="missions-tab"  onClick={() => setTab(2)} className={`inline-flex items-center px-4 py-3 ${tab==2 ? 'bg-gradient-to-b from-[#4D5D52] via-[#C2E799] to-[#4D5D52] text-black hover:from-[#C2E799] hover:to-[#C2E799]' : ' text-white hover:bg-[#C2E799] hover:text-black' }  w-full`}>
                                Our Missions
                            </button>
                        </li>
                        <li>
                            <button id="locations-tab" onClick={() => setTab(3)} className={`inline-flex items-center px-4 py-3 ${tab==3 ? 'bg-gradient-to-b from-[#4D5D52] via-[#C2E799] to-[#4D5D52] text-black hover:from-[#C2E799] hover:to-[#C2E799]' : ' text-white hover:bg-[#C2E799] hover:text-black' }  w-full`}>
                                Our Locations
                            </button>
                        </li>
                    </ul>
                </div>

                <div className="p-8 bg-[#3A4847] rounded-b-lg md:rounded-bl-none md:rounded-r-lg h-72 md:h-96 w-full overflow-y-auto">
                    <div id="vehicles" className={`${(tab != 0) && 'hidden'}`}>
                        <p className="text-2xl font-bold text-white mb-8">Our Vehicles</p>
                        <div className="grid grid-cols-2 md:grid-cols-3 auto-auto-rows">
                            {carType.map((item, idx) => (
                                <div key={`div-${idx}`} className="flexbox text-center w-36 md:w-48 h-36 md:h-44 content-center m-auto ">
                                    <img key={`img-${idx}`} src={`images/cars/${item}.png`} alt={item} className="m-auto" />
                                    <div key={`subdiv-${idx}`} className="p-2 block">
                                        <p key={`p-${idx}`}>{item}</p>
                                    </div>
                                </div>

                                )
                            )}
                        </div>
                    </div>
                    <div id="values" className={`${(tab != 1) && 'hidden'}`}>
                        <p className="text-2xl font-bold text-white mb-2">Our Values</p>
                        <ol className="list-decimal px-8">
                            <li>
                            Safety First: We prioritize the safety of our students and the community. Our courses are designed to instill a deep understanding of road safety principles and responsible driving habits.
                            </li>
                            <li>
                            Expert Instruction: We are committed to providing top-notch instruction from experienced and certified driving professionals. Our instructors are dedicated to equipping students with the skills and knowledge needed to become confident and competent drivers.
                            </li>
                            <li>
                            Inclusive Learning: We believe in creating a welcoming and inclusive learning environment for all. Our courses cater to diverse learning styles and backgrounds, ensuring that everyone feels comfortable and empowered during their driving education.
                            </li>
                            <li>
                            Integrity and Transparency: We operate with honesty and transparency in all our interactions. From course fees to scheduling, we provide clear information to our students, fostering trust and openness.
                            </li>
                        </ol>
                    </div>
                    <div id="mission" className={`${(tab != 2) && 'hidden'}`}>
                    <p className="text-2xl font-bold text-white mb-2">Our Missions</p>
                        <ol className="list-decimal px-8">
                            <li>
                            Empowering Safe Drivers: Our mission at DriveWise Academy is to empower individuals with the knowledge, skills, and confidence needed to become safe and responsible drivers. We believe in instilling a deep understanding of road safety principles to create a community of drivers committed to making our roads safer for everyone.
                            </li>
                            <li>
                            Accessible Education for All: DriveRight Education is dedicated to providing accessible and inclusive driver education for individuals from all walks of life. Our mission is to break down barriers to learning, ensuring that everyone has the opportunity to acquire essential driving skills and contribute to a safer and more inclusive road culture.
                            </li>
                            <li>
                            Innovation in Driver Training: At RoadMasters Institute, our mission is to lead the industry in innovative driver training methodologies. We are committed to continuously exploring and integrating cutting-edge technologies and teaching practices to provide a dynamic and effective learning experience for our students.
                            </li>
                            <li>
                            Building Confident Drivers: DriveSmart Academys mission is to build confidence in every driver we train. We strive to go beyond teaching the rules of the road, focusing on developing the decision-making skills and self-assurance necessary for navigating diverse driving conditions. Our goal is to produce drivers who are not just licensed but truly confident behind the wheel.
                            </li>
                        </ol>
                    </div>
                    <div id="locations" className={`${(tab != 3) && 'hidden'}`}>
                    <p className="text-2xl font-bold text-white mb-2">Our Locations</p>
                        <img src="images/location.png" className="w-6 md:w-10 inline-flex"></img>
                        <a href="#" className="text-base md:p-6 inline-flex text-white hover:bg-gradient-to-b from-[#C2E799] to-[#4D5D52] hover:text-white">Dago</a>
                        <br></br>
                        <img src="images/location.png" className="w-6 md:w-10 inline-flex"></img>
                        <a href="#" className="text-base md:p-6 inline-flex text-white hover:bg-gradient-to-b from-[#C2E799] to-[#4D5D52] hover:text-white">Buah Batu</a>
                    </div>
                </div>
            </div>

            

        </div>

        <div className="h-16 bg-gradient-to-b from-[#BEE597] to-[#EEEEEE]">

        </div>

        </div>
    </div>

      </>
    );
  }