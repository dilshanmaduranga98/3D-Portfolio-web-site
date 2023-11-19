import React,{useEffect} from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css'
import {Link} from 'react-scroll'

export default function NavBar() {
    useEffect(()=>{
        Aos.init({duration: 2000})
      }, []);
    
  return (
    // gap-[40px] 
    // <div className='absolute pt-6 pb-6 pl-4 pr-4 flex flex-col items-center rounded-[20px] w-[60px] bg-[#00000067] z-[100] shadow-md shadow-[#65c9ff49]'>
    //     <Link to='#Home' className='relative border-b-2 border-[#ffffff3a] pb-6 pt-2'>
    //         <img src='./assests/icons8-home-144.png' alt='Home-Page' width={22} className='opacity-100 hover:scale-[1.2] transition duration-900 hover:blur-[0.5px]'/>
    //     </Link>

    //     <Link to='#Projects' className='relative border-b-2 border-[#ffffff3a] pb-6 pt-6'>
    //         <img src='./assests/icons8-project-100.png' alt='project-Page' width={22} className='opacity-100 hover:scale-[1.2] transition duration-800 hover:blur-[0.5px]'/>
    //     </Link>

    //     <Link to='#Skills' className='relative border-b-2 border-[#ffffff3a] pb-6 pt-6'>
    //         <img src='./assests/icons8-skills-100.png' alt='skills-Page' width={22} className='opacity-100 hover:scale-[1.2] transition duration-800 hover:blur-[0.5px]'/>
    //     </Link>

    //     <Link to='#About' className='relative pt-6 pb-2'>
    //         <img src='./assests/icons8-customer-100.png' alt='customer-Page' width={22} className='opacity-100 hover:scale-[1.2] transition duration-800 hover:blur-[0.5px]'/>
    //     </Link>
    // </div>

    <div className='flex flex-col justify-start gap-10 pl-10 font-Realway'> {/* nav bar section*/}
            <Link spy={true} smooth={true} offset={50} duration={800} data-aos='fade-right' to="Home" className='hover:scale-[1.2] transition duration-800'>
                <span className='text-[#FF6817] text-[19px] font-black tracking-[3px]'>H</span> 
                <span className='text-[#fff] text-[10px] font-light tracking-[2px]'>ome</span>
            </Link>

            
            <Link spy={true} smooth={true} offset={50} duration={800} data-aos='fade-right' data-aos-delay="300" to="Skills" className='hover:scale-[1.2] transition duration-800'>
                <span className='text-[#FF6817] text-[19px] font-black tracking-[3px]'>S</span> 
                <span className='text-[#fff] text-[10px] font-light tracking-[2px]'>kills</span> 
            </Link>
            
            
            <Link spy={true} smooth={true} offset={50} duration={800} data-aos='fade-right' data-aos-delay="600" to="Projects" className='hover:scale-[1.2] transition duration-800'>
                <span className='text-[#FF6817] text-[19px] font-black tracking-[3px]'>P</span> 
                <span className='text-[#fff] text-[10px] font-light tracking-[2px]'>rojects</span>
            </Link>
           
           
            <Link spy={true} smooth={true} offset={50} duration={800} data-aos='fade-right' data-aos-delay="900" to="About" className='hover:scale-[1.2] transition duration-800'>
                <span className='text-[#FF6817] text-[19px] font-black tracking-[3px]'>A</span> 
                <span className='text-[#fff] text-[10px] font-light tracking-[2px]'>bout</span>
            </Link>
    </div> 
  )
}
