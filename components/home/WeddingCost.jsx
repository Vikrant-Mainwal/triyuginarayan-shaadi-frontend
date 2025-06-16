"use client";
import React, { useState } from "react";
import TopUpForm from "../top-up-form/TopUpForm";
import Image from "next/image";
import gift from "../../asset/images/gift.png";   // right-side image with price included
import gift2 from "../../asset/images/gift2.png"; // left-side image with price included

const WeddingCost = () => {
  const [isOpenForm, setIsOpenForm] = useState(false);

  return (
    <div className="relative py-16 px-4 md:px-10 text-center overflow-hidden">
      <div className="absolute left-[-6%] top-[50%] transform -translate-y-1/2 hidden md:block z-10 w-[400px] h-[400px] rotate-[-75deg]">
        <Image
          src={gift2}
          alt="Gift 2 with Price"
          className="object-contain"
        />
      </div>
      <div className="absolute right-[-4%] top-[50%] transform -translate-y-1/2 hidden md:block z-10 w-[400px] h-[400px] rotate-[75deg]">
        <Image
          src={gift}
          alt="Gift 2 with Price"
          className="object-contain"
        />
      </div>

    
      <div className="max-w-[900px] m-auto z-20 relative">
        <h2 className="text-[28px] md:text-[38px] font-bold raleway py-6">
          Triyuginarayan Temple
          <span className="text-[#A42D2B]"> Wedding Cost</span>
        </h2>
        <p className="text-[16px] text-justify md:text-center mb-4">
          Custom quotes are available based on your guest count and preferences. Every couple receives complete support from our Triyuginarayan wedding planner team.
        </p>
        <p className="text-[16px] text-justify md:text-center">
          Planning a wedding at the sacred Triyuginarayan Temple is not only spiritually fulfilling but also surprisingly affordable. Whether you're looking for an intimate ceremony or a complete destination wedding experience, the Triyuginarayan temple wedding cost starts at just ₹60,000. For couples seeking a more elaborate setup with rituals, décor, music, and registration, our all-inclusive packages begin from ₹3,00,000. Every cost is thoughtfully designed to include comfort, tradition, and warm hospitality — giving you a divine start without overwhelming expenses.
        </p>
        <div className="mt-10">
          <button
            className="bg-[#A42D2B] rounded-[7px] px-6 py-3 m-auto text-white cursor-pointer text-[16px]"
            onClick={() => setIsOpenForm(true)}
          >
            Get my Custom Quote
          </button>
          {isOpenForm && <TopUpForm onClose={() => setIsOpenForm(false)} />}
        </div>
      </div>
    </div>
  );
};

export default WeddingCost;
