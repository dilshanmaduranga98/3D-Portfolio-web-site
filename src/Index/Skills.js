import React, { useEffect, useState } from "react";
import "../CSS/index.css";
import Aos from "aos";
import "aos/dist/aos.css";
import Ball from "../components/Ball";
import ThreeDText from "../components/ThreeDText";
import ThreeDTextTwo from "../components/ThreeDTextTwo";

export default function Skills() {
  useEffect(() => {
    Aos.init({ duration: 3000 });
  }, []);

  return (
    <div className="z-10 relative overflow-hidden flex flex-col justify-start items-start pt-[30px] mb-[40px] h-[100vh]">
      <div
        data-aos="fade-up"
        data-aos-once="true"
        className="z-[30] flex flex-col items-center justify-center w-full pt-[20px]"
      >
        <p className="text-[#FF6817] font-Orbitron text-[35px] leading-[45px]">
          SKILLS
        </p>
      </div>

      <div  data-aos="fade-up" data-aos-once="true" ata-aos-delay="600"className="absolute top-[40px] left-0 z-[20] w-full h-full">
        <ThreeDText />
      </div>

      <div  data-aos="fade-up" data-aos-once="true" data-aos-delay="600" className="absolute top-[40px] left-5 w-full h-[95%] z-[5]">
        <ThreeDTextTwo />
      </div>
      
      <div
        data-aos="fade-up"
        data-aos-delay="1200"
        data-aos-once="true"
        className="absolute top-[10px] left-0 z-[10] w-full h-full pt-[20px]"
      >
        <Ball
          speedX={0.001}
          speedY={0.002}
          color="#f4ac85"
          TexturePath={"./mars_tex.jpg"}
        />
      </div>

      <div
        data-aos="fade-right"
        data-aos-once="true"
        className="absolute top-[20px] left-0 z-10 w-[250px] h-300px pt-[20px]"
      >
        <Ball
          speedX={0.008}
          speedY={0.005}
          color="#94adff"
          TexturePath={"./earth_tex.jpg"}
        />
      </div>
    </div>
  );
}
