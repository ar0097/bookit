"use client";
import React from "react";
import Image from "next/image";
import logo from "./../assets/HDlogo.png";

interface NavbarProps {
  handleSearch?: () => void;
  text?: string;
  setText?: (value: string) => void;
}

function Navbar({ handleSearch, text, setText }: NavbarProps) {
  return (
    <div className="w-full bg-[#F9F9F9] py-4 px-6 md:px-16 lg:px-[124px] flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-0">
      <div className="w-[100px] h-[55px] flex justify-center sm:justify-start">
        <Image
          src={logo}
          alt="HD Logo"
          className="object-contain w-[100px] h-[55px]"
        />
      </div>

      <div className="w-full sm:w-auto flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
        <input
          type="text"
          placeholder="Search experiences"
          value={text}
          onChange={(e) => setText?.(e.target.value)}
          className="w-full sm:w-[340px] h-[42px] rounded-sm py-2 px-4 text-[#2D2D2D] bg-[#EDEDED] placeholder:text-[14px]/[18px] outline-none placeholder:font-normal placeholder:text-[#727272]"
        />
        <button
          onClick={handleSearch}
          className="w-full sm:w-[87px] h-[42px] py-2 px-5 bg-[#FFD643] rounded-lg text-[#161616] text-[14px]/[18px] font-medium transition hover:bg-[#f0c832]"
        >
          Search
        </button>
      </div>
    </div>
  );
}

export default Navbar;
