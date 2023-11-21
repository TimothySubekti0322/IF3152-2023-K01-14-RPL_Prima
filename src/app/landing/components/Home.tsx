import { Button } from ".";

export default function Home() {
    return (
      <>  
        <div id="home">
            
            <div className="Home mt-16 md:mt-12 justify-between items-center">
                <img className="  w-full z-0 " src="images/landing_1.png"></img> 
            </div>  
                
            <div className="z-0 absolute mt-[-30px] md:mt-[-200px] w-80 md:w-96 p-4 md:p-8  left-1/2 transform -translate-x-1/2 bg-[#1C2434] rounded-lg  shadow-[#C2E799]">
                <a href="#" className="content-center">
                    <img src="images/logo_img.png" className="h-8 m-auto" alt="Flowbite Logo" />
                    <img src="images/logo_title.png" className="h-8 m-auto" alt="Flowbite Logo" />
                </a>
                <p className="text-center text-base p-4 text-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum hendrerit, erat et suscipit interdum, arcu quam porta justo, quis tempus mi urna at elit. Aenean lobortis placerat fringilla.</p>
                <Button/>
            </div>    

            <div className="Home  mt-96 md:mt-40 justify-between items-center">
                <img className="  w-full  z-0 " src="images/landing_2.png"></img> 
            </div>     

        </div> 
        
      </>
    );
  }