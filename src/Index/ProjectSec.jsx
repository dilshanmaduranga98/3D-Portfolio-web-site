import React,{useEffect} from 'react'
import ProjectSlider from './ProjectSlider'
import Aos from "aos";
import "aos/dist/aos.css";

export default function ProjectSec() {
  useEffect(() => {
    Aos.init({ duration: 3000 });
  }, []);
  return (
    <div className='h-[100vh] relative flex flex-col z-10 w-full'>
        <div data-aos="fade-up" className='text-[#FF6817] font-Orbitron text-[35px] leading-[45px] flex flex-row justify-center items-start w-full'>
            <p>Projects</p>
        </div>

        <div data-aos="fade-up" data-aos-delay="400" className='relative w-full'>
            <ProjectSlider/>
        </div>
    </div>
  )
}



