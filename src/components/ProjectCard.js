import React from 'react'
import { Link } from 'react-router-dom';

export default function ProjectCard(props) {
  return (
    <div className="relative w-[100%] h-[100%] group cursor-pointer overflow-hidden">
                            <img 
                            src={props.Image} 
                            alt={props.AltImage} 
                            className='h-full w-full object-cover group-hover:rotate-[-10deg] group-hover:scale-125 transition-transform duration-[0.6s]'
                            />
                            
                            <div className='flex flex-col justify-center items-center bg-gradient-to-t from-[#08011ada] to-[#02353bda] w-full h-full absolute bottom-0 translate-y-[100%] group-hover:translate-y-0 transition-all duration-[1s]'>
                                <p className=' text-white font-IBM text-[25px] pt-10 flex flex-col justify-center items-center font-black'>
                                    {props.Title}
                                </p>

                                <p className=' text-white p-3 font-IBM text-[13px] flex flex-col justify-center items-center font-regular text-center'>
                                    {props.Description}
                                </p>

                                <Link 
                                to={props.GitHubLink} 
                                className='flex flex-col items-center justify-center'>
                                   
                                    <img 
                                    src='./assests/icons8-link-240.png' 
                                    alt='github_icon' width={30} 
                                    className='hover:scale-[1.2] duration-[0.3s]' 
                                    />
                                
                                </Link>
                           
                            </div>
                            
                        </div>
  )
}
