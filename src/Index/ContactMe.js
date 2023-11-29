import React, { useEffect, useState, useRef } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../CSS/toastyCSS.css";

import emailjs from "@emailjs/browser";

export default function ContactMe() {
  useEffect(() => {
    Aos.init({ duration: 3000 });
  }, []);

  // rocket travel function
  const [isRocketActive, setRocketActive] = useState(false);

  const handleButtonClick = () => {
    setRocketActive(!isRocketActive);
    console.log(isRocketActive);
  };

  const notify = () =>
    toast("Thank you for your feedback!", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });

const [nameVal, setNameVal] = useState();
const [emailVal, setEmailVal] = useState();
const [messageVal, setMessageVal] = useState();
     
    const reset = () => {
      setNameVal('');
      setEmailVal('');
      setMessageVal('');
      
    }
  const sendEmail = (e) => {
    e.preventDefault();
    notify();

    emailjs.sendForm(
      "service_9ud5w4t",
      "template_hrcro8a",
      e.target,
      "Y6KFlPHGYRyIO4SNG"
    );
    handleButtonClick();
    reset();
  };

  return (
    <div className="relative flex flex-col items-center justify-start w-full h-[95vh] z-[20] overflow-hidden">
      <div
        data-aos="fade-up"
        data-aos-once="true"
        className=" flex flex-col justify-center items-center pt-[40px] pb-[30px] z-10"
      >
        <p className="text-[#FF6817] font-Orbitron text-[35px] leading-[50px]">
          REACH ME
        </p>
        <p className="text-center text-white leading-[35px] font-Montserrat text-[16px]">
          Feel free to contact me via this portal.if you have any offer to me
          i'm really appreciate it 😉.
        </p>
      </div>

      <div className="z-10 flex flex-col items-center justify-center w-full h-auto gap-3 mt-2">
        <form
          className="flex flex-col items-center justify-center w-full h-auto gap-5 mt-5"
          onSubmit={sendEmail}
        >
          <input
            data-aos="fade-up"
            data-aos-once="true"
            id="name"
            name="name"
            type="text"
            required
            value={nameVal} 
            onChange={(e) => setNameVal(e.target.value)}
            placeholder="full name"
            className="pb-[10px] bg-[#ff68174c] rounded-[8px] w-[750px] pl-5 p-[5px] outline-none placeholder-[#ffb685] text-white"
          />
          <input
            data-aos="fade-up"
            data-aos-once="true"
            data-aos-delay="300"
            id="email"
            type="email"
            name="email"
            required
            value={emailVal} 
            onChange={(e) => setEmailVal(e.target.value)}
            placeholder="email"
            className="pb-[10px] bg-[#ff68174c] rounded-[8px] w-[750px] pl-5 p-[5px] outline-none placeholder-[#ffb685] text-white"
          />

          <textarea
            data-aos="fade-up"
            data-aos-once="true"
            data-aos-delay="600"
            id="message"
            name="message"
            required
            value={messageVal} 
            onChange={(e) => setMessageVal(e.target.value)}
            placeholder="message"
            rows={6}
            className="pb-[10px] bg-[#ff68174c] rounded-[8px] w-[750px] pl-5 p-[5px] outline-none placeholder-[#ffb685] text-white"
          />
          <button
            data-aos="zoom-in"
            data-aos-delay="1000"
            data-aos-once="true"
            type="submit"
            className="w-[750px] pt-[6px] mt-5 pb-[6px] bg-[#FF6817] text-white rounded-[8px] font-Montserrat hover:bg-[#f78e55]"
          >
            send 🚀
          </button>
        </form>
      </div>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />

      {/* rocket animation */}
      <div className={`rocket ${isRocketActive ? "active" : ""}`}>
        <img
          src="assests/rocket_3d.png"
          alt="rocket"
          width={50}
          className="rocket_img"
        />
      </div>
    </div>
  );
}
