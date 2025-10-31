import React from "react";
import success from "../assets/success.png";
import Image from "next/image";

function Result() {
  return (
    <div className="flex flex-col justify-center items-center mt-20 px-4 text-center">
      <Image
        src={success}
        alt="Success icon"
        className="w-16 h-16 sm:w-20 sm:h-20 object-contain"
        priority
      />

      <p className="font-semibold text-[24px] sm:text-[32px] text-[#161616] mt-4">
        Booking Confirmed
      </p>

      <p className="text-[#656565] text-[16px] sm:text-[20px] mt-2">
        Ref ID: <span className="font-medium">HUF56&SO</span>
      </p>

      <button
        className="w-[140px] sm:w-40 h-10 sm:h-11 py-2 px-4 mt-6 rounded-md 
                   bg-[#E3E3E3] text-[#656565] text-[14px] sm:text-[16px] 
                   hover:bg-[#d5d5d5] transition-all duration-200"
      >
        Back to Home
      </button>
    </div>
  );
}

export default Result;
