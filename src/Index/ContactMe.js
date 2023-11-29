import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { useForm, ValidationError } from "@formspree/react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

export default function ContactMe() {
  useEffect(() => {
    Aos.init({ duration: 3000 });
  }, []);

  
  const navigate = useNavigate();

  const [state, handleSubmit] = useForm("mvojjpoe");
  if (state.succeeded) {

    return(
      {
      }
    )
  }
  
  return (
    <div className="flex flex-col items-center justify-start w-full h-[100vh] z-[20]">
      <div
        data-aos="fade-up"
        className=" flex flex-col justify-center items-center pt-[40px] pb-[30px]"
      >
        <p className="text-[#FF6817] font-Orbitron text-[35px] leading-[50px]">
          REACH ME
        </p>
        <p className="text-center text-white leading-[35px] font-Montserrat text-[16px]">
          Feel free to contact me via this portal.if you have any offer to me
          i'm really appreciate it 😉.
        </p>
      </div>

      <div
        data-aos="fade-up"
        className="flex flex-col items-center justify-center w-full h-auto gap-5 mt-5"
      >
        <form className="flex flex-col items-center justify-center w-full h-auto gap-5 mt-5" onSubmit={handleSubmit}>
          <input
            data-aos="fade-up"
            id="name"
            name="name"
            type="text"
            placeholder="full name"
            className="pb-[20px] bg-[#ff68174c] rounded-[8px] w-[750px] pl-5 p-[5px] outline-none placeholder-[#ffb685] text-white"
          />
          <input
            data-aos="fade-up"
            data-aos-delay="300"
            id="email"
            type="email"
            name="email"
            placeholder="email"
            className="pb-[20px] bg-[#ff68174c] rounded-[8px] w-[750px] pl-5 p-[5px] outline-none placeholder-[#ffb685] text-white"
          />

          <textarea
            data-aos="fade-up"
            data-aos-delay="600"
            id="message"
            name="message"
            placeholder="message"
            rows={6}
            className="pb-[20px] bg-[#ff68174c] rounded-[8px] w-[750px] pl-5 p-[5px] outline-none placeholder-[#ffb685] text-white"
          />
          <button type="submit" disabled={state.submitting} className="w-[750px] pt-[6px] pb-[6px] bg-[#FF6817] text-white rounded-[8px] font-Montserrat hover:bg-[#f78e55]">
            send 🚀
          </button>
          <ToastContainer />
        </form>
        
      </div>
      
    </div>
  );
}
