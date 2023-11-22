import React, {useEffect} from 'react';
import { Link } from 'react-router-dom';
import ProjectCard from '../components/ProjectCard';
import Aos from 'aos'
import 'aos/dist/aos.css'
import ProjectSlider from './ProjectSlider';

export default function Project() {

    useEffect(()=> 
        {
            Aos.init({duration: 2000});
        }, []);


    return (
        <div 
        className="z-10 h-[100vh]" id='Projects'>

            <div 
            className='flex flex-row justify-left items-center pl-[120px] pr-[100px] pt-[30px]'>

                <p data-aos="fade-up"
                className='text-[#fff] font-Nova text-[34px]'>
                    My Recent Works
                </p>

            </div>

            <div className='relative w-full h-full'>
                <ProjectSlider/>
            </div>

            {/* <div className='flex flex-row justify-center items-center w-full pl-[120px] pr-[60px] pt-[40px] pb-[40px] gap-4'>
            
            {/* //01 */}
                <div className='flex flex-col justify-center items-center basis-[70%] h-[80vh] gap-4'>
                    <div className='flex flex-row w-full h-[50%] gap-4'>
                        <div data-aos="fade-up" className="relative w-[60%] h-[100%] group cursor-pointer overflow-hidden">
                            <ProjectCard 
                            Image = './MobileShop.JPG'
                            AltImage = 'MobileShop site UI'
                            Title = 'Mobile Shop Web Site'
                            Description = ' This web site developed by using HTML, CSS and JavaScript. it only have front end of this web site and i suppose to build it backend in future.'
                            GitHubLink= 'https://github.com/dilshanmaduranga98/Mobile-vision-web-front-end'
                            />
                            
                        </div>

                        <div data-aos="fade-up" className="relative w-[40%] h-[100%] group cursor-pointer overflow-hidden"
                        >
                            <ProjectCard 
                            Image = './slMockup001.png'
                            AltImage = 'E-commerce Site UI'
                            Title = 'E-commerce Web Site'
                            Description = ' This web site developed by using HTML, CSS and JavaScript. it only have front end of this web site and i suppose to build it backend in future.'
                            GitHubLink= 'https://github.com/dilshanmaduranga98/E-commerce-web-site'
                            />
                            
                        </div>

                    </div>


            {/* 02 */}
                    <div className='flex flex-row-reverse w-full h-[50%] gap-4'>
                        <div data-aos="fade-up" 
                        className="relative w-[60%] h-[100%] group cursor-pointer overflow-hidden"
                        >
                            <ProjectCard 
                            Image = './shutterMock001.png'
                            AltImage = 'Shutter'
                            Title = 'Shutter (clone social media) Web Site'
                            Description = ' This web site developed by using HTML, CSS and JavaScript. it only have front end of this web site and i suppose to build it backend in future.'
                            GitHubLink= 'https://github.com/dilshanmaduranga98/Mobile-vision-web-front-end'
                            />
                            
                        </div>
                        
                        <div data-aos="fade-up" className='w-[40%] bg-[#00000075] h-[100%]'>
                            <ProjectCard 
                                Image = './wintMockup001.png'
                                AltImage = 'wintancare UI'
                                Title = 'wintancare Web App'
                                Description = ' This web application developed by using HTML, CSS, JavaScript and PHP. it can use to appoint a doctor in a hospital, also users can see their appointment, delete their appointments and user details as well.'
                                GitHubLink= 'https://github.com/dilshanmaduranga98/Mobile-vision-web-front-end'
                                />
                        </div>
                    </div>
                </div>

                {/* 03 */}
                <div data-aos="fade-up" className='basis-[30%] bg-[#00000075] h-[80vh]'>
                <ProjectCard 
                            Image = './mobileWeb.png'
                            AltImage = 'MobileShop'
                            Title = 'Mobile Shop Web Site'
                            Description = ' This web site developed by using HTML, CSS and JavaScript. it only have front end of this web site and i suppose to build it backend in future.'
                            GitHubLink= 'https://github.com/dilshanmaduranga98/Mobile-vision-web-front-end'
                            />
                </div>
            {/* </div>*/}
        </div>
    );
}
