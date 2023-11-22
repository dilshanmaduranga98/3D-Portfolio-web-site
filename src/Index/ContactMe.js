import React,{useEffect} from "react";
import Aos from "aos";
import "aos/dist/aos.css";

export default function ContactMe() {
     useEffect(() => {
    Aos.init({ duration: 3000 });
  }, []);
  return (
    <div className="flex flex-col items-center justify-start w-full h-[100vh] z-[20]">
      <div  data-aos="fade-up" className=" flex flex-col justify-center items-center pt-[40px] pb-[30px]">
        <p className="text-[#FF6817] font-Orbitron text-[35px] leading-[50px]">
          REACH ME
        </p>
        <p className="text-center text-white leading-[35px] font-Montserrat text-[16px]">
          Feel free to contact me via this portal.if you have any offer to me
          i'm really appreciate it 😉.
        </p>
      </div>

      <div  data-aos="fade-up" className="flex flex-col items-center justify-center w-full h-auto gap-5 mt-5">
        <input
         data-aos="fade-up"
          type="text"
          placeholder="full name"
          className="pb-[20px] bg-[#ff68174c] rounded-[8px] w-[750px] pl-5 p-[5px] outline-none placeholder-[#ffb685] text-white"
        />
        <input
         data-aos="fade-up"
         data-aos-delay="300"
          type="text"
          placeholder="email"
          className="pb-[20px] bg-[#ff68174c] rounded-[8px] w-[750px] pl-5 p-[5px] outline-none placeholder-[#ffb685] text-white"
        />
        <textarea
         data-aos="fade-up"
         data-aos-delay="600"
          placeholder="message"
          rows={6}
          className="pb-[20px] bg-[#ff68174c] rounded-[8px] w-[750px] pl-5 p-[5px] outline-none placeholder-[#ffb685] text-white"
        />

        <button className="w-[750px] pt-[6px] pb-[6px] bg-[#FF6817] text-white rounded-[8px] font-Montserrat hover:bg-[#f78e55]">
            send 🚀
        </button>
      </div>
    </div>
  );
}
