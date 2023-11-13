// import Logo from "%PUBLIC_URL%/favicon.png";

export default function NavBar() {
  return (
    <>
        <div className="navbar" style={{background:"linear-gradient(0deg, #3E3E3E, #191919, #191919, #252525)", margin: 0, width: '100%', display: 'flex'}} sx={{position:"sticky"}}
        >

            <div className="NavBar">
                    <img className = "Logo" src="%PUBLIC_URL%/favicon.png" alt="Logo" href="#home"></img>

                    <div className='Square' style={{width: 150}}>
                        <a title = 'HOME' href='#home'>
                                HOME
                        </a>
                    </div>
                    <div className='Square' style={{width: 180}}>
                        <a className='nav-links' title = 'ACTIVITIES' href='#activities'>
                                ACTIVITIES
                        </a>
                    </div>
                    <div className='Square' style={{width: 180}}>
                        <a className='nav-links' title = 'ABOUT US' href='#about-us' >
                                ABOUT US
                        </a>
                    </div>
                    <div className='Square' style={{width: 200}}>
                        <a className='nav-links' title = 'MEET THE TEAM' href='#meet-the-team'>
                                MEET THE TEAM
                        </a>
                    </div>
                    <div className='Square' style={{width: 180}}>
                        <a className='nav-links' title = 'JOIN US!' href='#join-us' >
                                JOIN US!
                        </a>
                    </div>
                            
                </div>
        </div>
      
    </>
  );
}