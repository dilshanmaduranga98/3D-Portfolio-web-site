import React,{useEffect} from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'

export default function About() {
    useEffect(()=> 
    {
        Aos.init({duration: 2000});
    }, []);
    
  return (
    <div data-aos="fade-up" className='w-full flex flex-col pt-[60px] pl-[160px] pr-[160px]  items-center z-10 mb-[40px]' id='About'>
        <div className='bg-[#00000069] rounded-[10px] w-full flex flex-col items-center pl-[160px] pr-[160px] pt-[50px] pb-[40px]'>
            <p className='text-[#ffffff] font-Nova text-[35px]'>About Me</p>
            <p className='text-[#ffffff] font-IBM text-[15px] pt-[30px] text-center leading-[28px]'>As an undergraduate student in computer science, I'm fueled by a fervent ambition to carve a path as a full-stack web developer. My journey has been a dynamic fusion of exploring front-end and back-end technologies. On the front-end, I've honed my skills in HTML, CSS, and JavaScript, crafting visually appealing and user-friendly interfaces. Complementing this, my back-end expertise spans languages like PHP, accompanied by a deep understanding of database management. What propels me is an insatiable curiosity, pushing me to unravel the intricacies of web development. With each project, I strive to seamlessly merge the realms of aesthetics and functionality, creating immersive online experiences. This journey has fortified my problem-solving abilities and my knack for designing solutions that resonate with users. I am poised to continue this expedition into the world of technology, seeking innovative solutions and striving to redefine the digital landscape with every keystroke and line of code.</p>
            <div className='flex items-center gap-[80px] mt-[60px]'>
                <a href='#github'>
                    <img src='./assests/icons8-github-100.png' alt='' width={29} className='transition duration-100 ease-out hover:scale-125 shadow-slate-50 '/>
                </a>

                <a href='#github'>
                    <img src='./assests/icons8-linkedin-104.png' alt='' width={24} className='transition duration-100 ease-out hover:scale-125 shadow-slate-50 hover:shadow-sm'/>
                </a>

                <a href='#github'>
                    <img src='./assests/icons8-facebook-96.png' alt='' width={25} className='transition duration-100 ease-out hover:scale-125 shadow-slate-50 hover:shadow-sm'/>
                </a>
            </div>
        </div>
    </div>
  )
}
