import React from "react";

export default function AboutMe() {
  return (
    <div className="flex flex-col items-center justify-center w-full h-[100vh]">
      <div className="pt-0 pb-[30px]">
        <p className="text-[#FF6817] font-Orbitron text-[35px] leading-[30px]">
          ABOUT ME
        </p>
      </div>

      <div className="w-[60%] pt-[30px]">
        <p className="text-center text-white leading-[35px] font-Montserrat text-[18px] text-[100] tracking-[2px]">
           Hello!👋 I'm a versatile web developer 💻 and designer 👨‍🎨
          with proficiency in HTML, CSS, JavaScript, PHP, Java, and React.js. My
          skills extend to the art of styling with Tailwind CSS. My creativity 🖊️
          fuels innovative solutions 💡, and I'm passionate about crafting
          captivating digital experiences that seamlessly blend functionality
          with aesthetics.
        </p>
      </div>
    </div>
  );
}
