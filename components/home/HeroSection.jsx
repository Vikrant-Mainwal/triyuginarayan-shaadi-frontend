'use client'
import React, { useState } from 'react'
import TopUpForm from '../top-up-form/TopUpForm';

const HeroSection = () => {

  const [isOpen, setIsOpen] = useState(false);

  const openTopUp = () => setIsOpen(true);
  const closeTopUp = () => setIsOpen(false);

  return (
    <div
  className="min-h-screen w-full bg-cover bg-center bg-no-repeat
             bg-[url('/heroImage.jpg')] md:bg-[url('/HeroImage.svg')]"
>
  <div className="h-full w-full flex justify-center md:justify-end items-center md:items-start text-center md:text-start">
    <div className="flex flex-col gap-13 p-4 md:p-10 md:px-18 w-[850px]">
      <div className="flex flex-col gap-5">
        <p className="hidden lg:block text-white text-sm pt-2 text-right">
          Rudraprayag, Uttarakhand | Triyuginarayan Temple Wedding Experts
        </p>
        <div className="flex flex-col gap-9 mt-10">
          <h2 className="text-white text-[35px] md:text-[52px] pt-6 raleway font-bold">
            Wedding at <span className="text-[#FFE4B8]">Triyuginarayan</span>
          </h2>
          <h4 className="text-white text-[24px] md:text-[42px] font-open-sans font-semibold">
            Where Divine Love Began
          </h4>
          <p className="text-white text-[16px] md:text-[18px] leading-relaxed open-sans">
            Host your wedding where Lord Shiva and Goddess Parvati united
            in sacred vows. <br />A serene Himalayan setting for couples
            seeking a soulful start.
          </p>
        </div>
      </div>
      <button
        className="bg-[#FFB52C] text-black text-[16px] md:text-[18px] font-semibold cursor-pointer px-4 md:px-6 py-2 md:py-3 rounded-lg w-fit flex m-auto md:m-0 open-sans"
        onClick={openTopUp}
      >
        Plan your Wedding
      </button>
      {isOpen && <TopUpForm onClose={closeTopUp} />}
    </div>
  </div>
</div>

  )
}

export default HeroSection
