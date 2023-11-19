import React, { useEffect, useState } from "react";
import "../CSS/index.css";
import Aos from "aos";
import "aos/dist/aos.css";
import ThreeD from "./ThreeD";
import Ball from "../components/Ball";

export default function Skills() {
  useEffect(() => {
    Aos.init({ duration: 3000 });
  }, []);

  const [isBallClicked, setIsBallClicked] = useState(false);

  const handleBallClick = () => {
    setIsBallClicked(!isBallClicked);
    console.log("click");
  };

  return (
    <div
      id="Skills"
      className="z-10 relative flex flex-col justify-start items-start mt-[120px] h-[100vh]"
    >
      <div  data-aos='fade-up' className="flex flex-col items-center justify-center w-full pt-[20px]">
        <p className="text-[#FF6817] font-Orbitron text-[35px] leading-[45px]">
          {" "}
          SKILLS{" "}
        </p>
      </div>

      {isBallClicked && (<div className="relative flex flex-row items-start justify-center w-full p-[50px]">
        {/* <svg width="100" height="100" xmlns="http://www.w3.org/2000/svg" className='Line-one'>
              <path d="M 10 20 l 60 0 l 120 65" fill="none" stroke="white"/>
            </svg> */}

        {/* for HTML */}
        <svg
          width="350"
          height="100"
          xmlns="http://www.w3.org/2000/svg"
          className="Line-one html"
        >
          <path d="M 10 20 l 80 0 l 80 60" fill="none" stroke="white" />
        </svg>

        <div className="absolute top-[60px] left-[395px]">
          <p className="text-[#FF6817] font-IBM text-[18px] font-bold skill_text">HTML</p>
        </div>

        {/* for CSS */}
        <svg
          width="350"
          height="100"
          xmlns="http://www.w3.org/2000/svg"
          className="Line-one css"
        >
          <path d="M 10 20 l 80 0 l 60 40" fill="none" stroke="white" />
        </svg>

        <div className="absolute top-[210px] left-[320px]">
          <p className="text-[#FF6817] font-IBM text-[18px] font-bold skill_text">CSS</p>
        </div>

        {/* for JS */}
        <svg
          width="400"
          height="190"
          xmlns="http://www.w3.org/2000/svg"
          className="Line-one js pt-[70px]"
        >
          <path d="M 10 40 l 80 0 l 150 -43" fill="none" stroke="white" />
        </svg>

        <div className="absolute top-[380px] left-[350px]">
          <p className="text-[#FF6817] font-IBM text-[18px] font-bold skill_text">JS</p>
        </div>

        {/* for PHP */}
        <svg
          width="250"
          height="120"
          xmlns="http://www.w3.org/2000/svg"
          className="Line-one php"
        >
          <path d="M 10 100 l 100 -0 l 80 -180" fill="none" stroke="white"/>
        </svg>

        <div className="absolute top-[520px] left-[450px]">
          <p className="text-[#FF6817] font-IBM text-[18px] font-bold skill_text">PHP</p>
        </div>

        {/* for REACTJS */}
        <svg
          width="350"
          height="100"
          xmlns="http://www.w3.org/2000/svg"
          className="Line-one react"
        >
          <path d="M 150 80 l -80 0 l -80 -20" fill="none" stroke="white" />
        </svg>

        <div className="absolute top-[250px] left-[1000px]">
          <p className="text-[#FF6817] font-IBM text-[18px] font-bold skill_text">
            REACT JS
          </p>
        </div>

        {/* for TAILWINDCSS */}
        <svg
          width="350"
          height="100"
          xmlns="http://www.w3.org/2000/svg"
          className="Line-one tailwind"
        >
          <path d="M 150 80 l -80 0 l -80 -60" fill="none" stroke="white" />
        </svg>

        <div className="absolute top-[450px] left-[900px]">
          <p className="text-[#FF6817] font-IBM text-[18px] font-bold skill_text">
            TAILWIND CSS
          </p>
        </div>

        {/* for JAVA */}
        <svg
          width="350"
          height="100"
          xmlns="http://www.w3.org/2000/svg"
          className="Line-one java"
        >
          <path d="M 200 40 l -120 0 l -80 60" fill="none" stroke="white" />
        </svg>

        <div className="absolute top-[80px] left-[920px]">
          <p className="text-[#FF6817] font-IBM text-[18px] font-bold skill_text">JAVA</p>
        </div>
      </div>)}

      <div  data-aos='fade-up' onClick={handleBallClick} className="absolute top-0 left-0 z-10 w-full h-full pt-[20px]">
        <Ball
          speedX={0.001}
          speedY={0.002}
          color="#fda600"
          TexturePath={"./mars_tex.jpg"}
        />
      </div>
    </div>
  );
}
