import { Box, TextField, TextareaAutosize } from "@mui/material";
import React from "react";

export default function ContactMe() {
  return (
    <div className="flex flex-col items-center justify-start w-full h-[100vh] z-[20]">
      <div className=" flex flex-col justify-center items-center pt-[40px] pb-[30px]">
        <p className="text-[#FF6817] font-Orbitron text-[35px] leading-[45px]">
          REACH ME
        </p>
        <p className="text-center text-white leading-[30px] font-Montserrat text-[16px]">
          Feel free to contact me via this portal.if you have any offer to me
          i'm really appreciate it 😉.
        </p>
      </div>

      <div className="flex flex-col items-center justify-center w-full h-auto gap-5 mt-5">
        <input
          type="text"
          placeholder="full name"
          className="pb-[20px] bg-[#ff68174c] rounded-[8px] w-[750px] pl-5 p-[10px] outline-none placeholder-[#ffb685] text-white"
        />
        <input
          type="text"
          placeholder="email"
          className="pb-[20px] bg-[#ff68174c] rounded-[8px] w-[750px] pl-5 p-[10px] outline-none placeholder-[#ffb685] text-white"
        />
        <textarea
          placeholder="message"
          rows={8}
          className="pb-[20px] bg-[#ff68174c] rounded-[8px] w-[750px] pl-5 p-[10px] outline-none placeholder-[#ffb685] text-white"
        />
      </div>
    </div>
  );
}
