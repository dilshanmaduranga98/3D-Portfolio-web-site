import React from 'react'
import ProjectSlider from './ProjectSlider'

export default function ProjectSec() {
  return (
    <div className='h-[100vh] relative flex flex-col z-10 w-full'>
        <div className='text-[#FF6817] font-Orbitron text-[35px] leading-[45px] flex flex-row justify-center items-start w-full'>
            <p>Projects</p>
        </div>

        <div className='absolute top-0 right-0'>
            {/* side image */}
        </div>

        <div className='relative w-full'>
            <ProjectSlider/>
        </div>
    </div>
  )
}



