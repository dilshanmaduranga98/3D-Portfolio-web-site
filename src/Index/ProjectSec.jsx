import React,{useEffect} from 'react'
import ProjectSlider from './ProjectSlider'
import Aos from "aos";
import "aos/dist/aos.css";
import Ball from '../components/Ball';

export default function ProjectSec() {
  useEffect(() => {
    Aos.init({ duration: 3000 });
  }, []);
  return (
    <div className='h-[100vh] relative flex flex-col z-10 w-full overflow-hidden'>
        <div data-aos="fade-up" className='z-10 flex flex-col items-center justify-center w-full'>
            <p className='text-[#FF6817] font-Orbitron text-[35px] leading-[45px] uppercase'>Projects</p>
            <p className='text-[#ffffff] font-Montserrat text-[16px] leading-[35px] '>This slider show you to my recent works😀</p>
        </div>

        <div data-aos="fade-up" data-aos-once="true" data-aos-delay="400" className='relative z-10 w-full'>
            <ProjectSlider/>
        </div>

        <div  data-aos="zoom-in" data-aos-once="true" data-aos-delay="400" className='absolute z-0 top-[-200px] w-full right-[-600px] h-[1000px]'>
          <Ball
          speedX={0.001}
          speedY={0.001}
          color='#fda600'
          TexturePath={"./mars_tex.jpg"}
          />
        </div>
    </div>
  )
}



