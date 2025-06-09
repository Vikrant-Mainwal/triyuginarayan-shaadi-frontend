"use client";
import React, { useState } from "react";
import TopUpForm from "../top-up-form/TopUpForm";

const HeroSection = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="h-screen w-full bg-cover bg-center bg-no-repeat bg-image md:bg-image1 
                 flex flex-col md:flex-row justify-end items-end md:items-start text-center md:text-start"
    >
      <div className="flex flex-col justify-end gap-12 p-4 md:p-10 md:px-18 w-full max-w-[850px] mb-20">
        <p className="hidden lg:block text-white text-sm pt-2 text-right">
          Rudraprayag, Uttarakhand | Triyuginarayan Temple Wedding Experts
        </p>

        <div className="flex flex-col gap-5 mt-10">
          <h2 className="text-white text-[35px] md:text-[52px] pt-6 font-raleway font-bold">
            Wedding at{" "}
            <span className="text-[#FFE4B8]">Triyuginarayan</span>
          </h2>
          <h4 className="text-white text-[24px] md:text-[42px] font-open-sans font-semibold">
            Where Divine Love Began
          </h4>
          <p className="text-white text-[16px] md:text-[18px] leading-relaxed font-open-sans">
            Host your wedding where Lord Shiva and Goddess Parvati united in
            sacred vows. <br />A serene Himalayan setting for couples
            seeking a soulful start.
          </p>
        </div>

        <button
          className="bg-[#FFB52C] text-black text-[16px] md:text-[18px] font-semibold cursor-pointer 
                     px-4 md:px-6 py-2 md:py-3 rounded-lg w-fit mx-auto md:mx-0 font-open-sans"
          onClick={() => setIsOpen(true)}
        >
          Plan your Wedding
        </button>

        {isOpen && <TopUpForm onClose={() => setIsOpen(false)} />}
      </div>
    </div>
  );
};

export default HeroSection;
