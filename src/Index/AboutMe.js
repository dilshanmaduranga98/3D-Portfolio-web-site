import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";
import Ball from '../components/Ball';



export default function AboutMe() {
  useEffect(() => {
    Aos.init({ duration: 3000 });
  }, []);

  const resume_path = "./PDF_resume/Dilshan Maduranga Resume.pdf";

  return (
    <div className="flex flex-col items-center overflow-hidden relative justify-center w-full h-[100vh]">

      <div data-aos-once="true" data-aos="fade-up" className="pt-0 pb-[30px]">
        <p className="text-[#FF6817] font-Orbitron text-[35px] leading-[30px]">
          ABOUT ME
        </p>
      </div>

      <div
        data-aos="fade-up"
        data-aos-once="true"
        data-aos-delay="400"
        className="w-[60%] pt-[30px] flex flex-col justify-center items-center"
      >
        <p className="text-center text-white leading-[35px] font-Montserrat text-[18px] text-[100] tracking-[2px]">
          Hello!👋 I'm a versatile web developer 💻 and designer 👨‍🎨 with
          proficiency in HTML, CSS, JavaScript, PHP, Java, and React.js. My
          skills extend to the art of styling with Tailwind CSS. My creativity
          🖊️ fuels innovative solutions 💡, and I'm passionate about crafting
          captivating digital experiences that seamlessly blend functionality
          with aesthetics.
        </p>
        <div className="flex flex-row items-center justify-center w-full gap-10 mt-5">
          <Link
            to="https://github.com/dilshanmaduranga98"
            className="hover:scale-[1.2] duration-200"
          >
            <img src="./assests/github_ic.png" width={30} alt="github_icon" />
          </Link>
          <Link
            to="https://linkedin.com/in/dilshanmaduranga98"
            className="hover:scale-[1.2] duration-200"
          >
            <img
              src="./assests/linkedin_ic.png"
              width={30}
              alt="linkedin_icon"
            />
          </Link>
        </div>

        <a
          href={resume_path}
          download="Dilshan Maduranga Resume.pdf"
          className="mt-10"
        >
          <button
            data-aos="zoom-in"
            data-aos-delay="700"
            data-aos-once="true"
            className=" rounded-[4px] text-[#FF6817] font-IBM text-[14px] border-[#FF6817] border pl-5 pr-5 pt-1 pb-1 hover:bg-[#f78e55] hover:text-white"
          >
            Download resume 📥
          </button>
        </a>
      </div>
    </div>
  );
}
