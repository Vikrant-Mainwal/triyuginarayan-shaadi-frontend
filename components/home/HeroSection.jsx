"use client";
import React, { useState } from "react";
import TopUpForm from "../top-up-form/TopUpForm";

const HeroSection = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="h-[600px]] md:h-[600px]  w-full  bg-no-repeat bg-image"
    >
      <div className="flex flex-col md:flex-row justify-center md:justify-end items-end md:items-start text-center md:text-start max-w-[1400px] m-auto">
        <div className="flex flex-col justify-end gap-6 md:gap-12 mt-16 md:mt-0 p-4 md:p-10 md:px-18 w-full max-w-[850px] mb-20">
          <p className="hidden lg:block text-white text-sm pt-2 text-right">
            Rudraprayag, Uttarakhand | Triyuginarayan Temple Wedding Experts
          </p>

          <div className="flex flex-col gap-5 mt-10  ">
            <h1 className="text-white pt-6 font-bold leading-12">
              Wedding at <span className="text-[#FFE4B8]">Triyuginarayan</span>
            </h1>
            <h4 className="text-white text-[24px] md:text-[35px] open-sans font-semibold">
              Where Divine Love Began
            </h4>
            <p className="text-white w-[300px] md:w-full m-auto md:m-0 text-[16px] leading-relaxed font-open-sans">
              Host your wedding where Lord Shiva and Goddess Parvati united in
              sacred vows.A serene Himalayan setting for couples seeking a
              soulful start.
            </p>
          </div>

          <button
            className="bg-[#FFB52C] text-black text-[16px] font-semibold cursor-pointer 
                     px-6 py-4  rounded-lg w-fit mx-auto md:mx-0 font-open-sans"
            onClick={() => setIsOpen(true)}
          >
            Plan your Wedding
          </button>

          {isOpen && <TopUpForm onClose={() => setIsOpen(false)} />}
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
