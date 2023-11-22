import React, { useEffect, useRef } from 'react'
import Aos from 'aos';
import 'aos/dist/aos.css'
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import ThreeD from './ThreeD';
import { Canvas } from '@react-three/fiber';
import { useFrame } from '@react-three/fiber';
import { Stars } from '@react-three/drei';
import Ball from '../components/Ball';
import '../CSS/star.css'
import Skills from './Skills';
import ProjectSlider from './ProjectSlider';
import Project from './Project';
import ProjectSec from './ProjectSec';
import AboutMe from './AboutMe';
import ContactMe from './ContactMe';


export default function HomePage() {

    useEffect(() => {
        Aos.init({ duration: 2000 })
    }, []);

    const particlesInit = async (main) => {
        console.log(main);

        // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
        // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
        // starting from v2 you can add only the features you need reducing the bundle size
        await loadFull(main);
    };

    const getRandomSize = () => Math.random() * 1 + 0.1;
    const stars = Array.from({ length: 5000 }, (_, index) => ({
        size: getRandomSize(),
        position: [
            (Math.random() - 0.5) * 200,
            (Math.random() - 0.5) * 400,
            (Math.random() - 0.5) * 500,
        ],
        factor: [
            (Math.random() - 0.5) * 200,
            (Math.random() - 2) * 400,
            (Math.random() - 5) * 500,
        ],
    }));


    const titles  = 

    return (
        <div className='relative flex flex-col bg-gradient-to-r from-[#000000] to-[#00121e] h-auto pb-[0px]'>
            <div className='absolute w-full h-full'>
                <Canvas style={{ width: '100%', height: '100%', position:'static' }}>

                    <Stars
                        stars={stars}
                        radius={100} // Radius of the sphere
                        depth={100}  // Number of layers of stars
                        count={12000} // Number of stars
                        factor={4.5}   // Size factor
                        saturation={20} // Saturation of the stars
                    />

                </Canvas>
            </div>
             {/* Mesh Style  */}
                 {/* <div className='absolute flex flex-row items-center justify-center w-[80%] h-[100%]'>
                    <Particles
                        id="tsparticles1"
                        init={particlesInit}

                        options={{
                            "fullScreen": {
                                "enable": true,
                                "zIndex": 1
                            },
                            "particles": {
                                "number": {
                                    "value": 10,
                                    "density": {
                                        "enable": true,
                                        "value_area": 1080
                                    }
                                },
                                "color": {
                                    "value": "#FF6817"
                                },
                                "shape": {
                                    "type": "circle",
                                    "options": {
                                        "sides": 0.1
                                    }
                                },
                                "opacity": {
                                    "value": 12,
                                    "random": true,
                                    "anim": {
                                        "enable": false,
                                        "speed": 2,
                                        "opacity_min": 0.3,
                                        "sync": false
                                    }
                                },
                                "size": {
                                    "value": 3,
                                    "random": false,
                                    "anim": {
                                        "enable": false,
                                        "speed": 40,
                                        "size_min": 10,
                                        "sync": false
                                    }
                                },
                                "rotate": {
                                    "value": 5,
                                    "random": false,
                                    "direction": "clockwise",
                                    "animation": {
                                        "enable": true,
                                        "speed": 3,
                                        "sync": true
                                    }
                                },
                                "line_linked": {
                                    "enable": true,
                                    "distance": 900,
                                    "random": false,
                                    "color": "#F78B51",
                                    "opacity": 0.45,
                                    "width": 2
                                },
                                "move": {
                                    "enable": true,
                                    "speed": 1,
                                    "direction": "none",
                                    "random": false,
                                    "straight": false,
                                    "out_mode": "out",
                                    "attract": {
                                        "enable": true,
                                        "rotateX": 1000,
                                        "rotateY": 1200
                                    }
                                }
                            },
                            "interactivity": {
                                "events": {
                                    "onhover": {
                                        "enable": true,
                                        "mode": ["grab"]
                                    },
                                    "onclick": {
                                        "enable": false,
                                        "mode": "bubble"
                                    },
                                    "resize": true
                                },
                                "modes": {
                                    "grab": {
                                        "distance": 100,
                                        "line_linked": {
                                            "opacity": 1
                                        }
                                    },
                                    "bubble": {
                                        "distance": 400,
                                        "size": 40,
                                        "duration": 2,
                                        "opacity": 8,
                                        "speed": 3,
                                    },
                                    "repulse": {
                                        "distance": 400
                                    },
                                    "push": {
                                        "particles_nb": 4
                                    },
                                    "remove": {
                                        "particles_nb": 2
                                    }
                                }
                            },
                            "retina_detect": true,
                            "background": {
                                "color": "transparent",
                                "image": "",
                                "position": "50% 50%",
                                "repeat": "no-repeat",
                                "size": "cover"
                            }
                        }}
                    />

                </div> */}
            <div id='Home' className='relative w-full h-[100vh] flex flex-col '>

               

                <div className='absolute w-full h-[96.8%] top-5 z-[5] overflow-hidden'>
                    <span className='tail_starS'></span>
                    <span className='tail_starS'></span>
                    <span className='tail_starS'></span>

                </div>

                {/*my logo section  */}
                <div data-aos='fade-down' className='z-10 flex flex-row justify-center w-full pt-8'>
                    <img src='./assests/logologo.png' alt='my logo' width={45} />
                </div>

                {/*name, avatar, 3d model */}
                <div className='z-10 flex flex-row items-center justify-start w-full h-full pl-[150px] pr-[100px]'>

                    <div className='flex flex-col justify-center items-startl items basis-[50%] pl-[80px]'>{/* name section */}
                        <p data-aos='fade-down' data-aos-delay="0" className='text-[#F78B51] font-Realway text-[18px] leading-[40px]'>Hello I'm</p>
                        <p data-aos='fade-down' data-aos-delay="400" className='text-[#FF6817] font-Orbitron text-[60px] leading-[45px]'>DILSHAN</p>
                        <p data-aos='fade-down' data-aos-delay="1200" className='text-[#fff] font-Montserrat text-[25px] leading-[60px] tracking-[2px]'>Web Designer & Developer</p>
                        <div className='container_position'>
                            <div className='text_wrapper'>
                                <p>Web Designer</p>
                                <p>Web Developer</p>
                                <p>UI/UX Designer</p>
                            </div>
                        </div>
                    </div>

                    <div data-aos='fade-left' className='relative basis-[30%] flex felx-col justify-center'>
                        <img src='./assests/myAvatar.png' alt='avatar' width={150} className='z-10' />
                        <div className='absolute flex felx-col justify-center top-[-15px] w-[200px] h-[200px] rounded-[50%] border-[#FF6817] border-[2px] border-dashed animate-rotate'></div>
                    </div>


                </div>


                <div data-aos='fade-down' className='absolute top-0 right-0 z-10 w-[300px] h-[400px]'>{/* 3d model section */}
                    {/* <ThreeD/> */}
                    <Ball
                        speedX={0.003}
                        speedY={0.002}
                        color='#fda600'
                        TexturePath={"./mars_tex.jpg"}
                    />
                </div>
            </div>

            <div  id="Skills" className='h-[120vh] w-full pb-[30px] pt-[40px]'>
                <Skills />
            </div>

            <div id="Projects" className='h-auto w-full pt-[80px]'>
                <ProjectSec />
            </div>

            <div id="About" className='h-auto w-full pt-[80px]'>
              <AboutMe/>
            </div>

            <div id="Contact" className='h-auto w-full pt-[80px] z-10'>
              <ContactMe/>
            </div>

            <div className='flex flex-col items-center justify-center h-[50px] bg-[#0a1c28] z-10 mt-[30px]'>
                <p className='font-Montserrat text-[12px] text-[#aaa] tracking-[3px]'>Designed & Developed by Dilshan Maduranga</p>
            </div>

        </div>
    )
}
