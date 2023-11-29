import React,{useEffect} from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css'
import {Link} from 'react-scroll'

export default function NavBar() {
    useEffect(()=>{
        Aos.init({duration: 2000})
      }, []);
    
  return (

    <div className='flex flex-col justify-start gap-10 pl-10 font-Realway'> {/* nav bar section*/}
            <Link spy={true} smooth={true} offset={40} duration={800} data-aos-once="true" data-aos='fade-right' to="Home" className='hover:scale-[1.2] transition duration-800 cursor-pointer'>
                <span className='text-[#FF6817] text-[19px] font-black tracking-[3px]'>H</span> 
                <span className='text-[#fff] text-[10px] font-light tracking-[2px]'>ome</span>
            </Link>

            
            <Link spy={true} smooth={true} offset={50} duration={800} data-aos-once="true" data-aos='fade-right' data-aos-delay="300" to="Skills" className='hover:scale-[1.2] transition duration-800 cursor-pointer'>
                <span className='text-[#FF6817] text-[19px] font-black tracking-[3px]'>S</span> 
                <span className='text-[#fff] text-[10px] font-light tracking-[2px]'>kills</span> 
            </Link>
            
            
            <Link spy={true} smooth={true} offset={50} duration={800} data-aos-once="true" data-aos='fade-right' data-aos-delay="600" to="Projects" className='hover:scale-[1.2] transition duration-800 cursor-pointer'>
                <span className='text-[#FF6817] text-[19px] font-black tracking-[3px]'>P</span> 
                <span className='text-[#fff] text-[10px] font-light tracking-[2px]'>rojects</span>
            </Link>
           
           
            <Link spy={true} smooth={true} offset={50} duration={800} data-aos-once="true" data-aos='fade-right' data-aos-delay="900" to="About" className='hover:scale-[1.2] transition duration-800 cursor-pointer'>
                <span className='text-[#FF6817] text-[19px] font-black tracking-[3px]'>A</span> 
                <span className='text-[#fff] text-[10px] font-light tracking-[2px]'>bout</span>
            </Link>

            <Link spy={true} smooth={true} offset={40} duration={800} data-aos-once="true" data-aos='fade-right' data-aos-delay="1100" to="Contact" className='hover:scale-[1.2] transition duration-800 cursor-pointer'>
                <span className='text-[#FF6817] text-[19px] font-black tracking-[3px]'>C</span> 
                <span className='text-[#fff] text-[10px] font-light tracking-[2px]'>ontact Me</span>
            </Link>
    </div> 
  )
}
