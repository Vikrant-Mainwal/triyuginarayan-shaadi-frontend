"use client";
import React, { useState } from "react";
import TopUpForm from "../top-up-form/TopUpForm";
import Image from "next/image";
import gift from "../../asset/images/gift.png"; // right-side image with price included
import gift2 from "../../asset/images/gift2.png"; // left-side image with price included

const WeddingCost = () => {
  const [isOpenForm, setIsOpenForm] = useState(false);

  return (
    <div className="relative mt-10 md:mt-25 px-4 md:px-10 text-center overflow-hidden">
      <div className="absolute left-[-6%] top-[50%] transform -translate-y-1/2 hidden md:block z-10 w-[350px] h-[350px] rotate-[-75deg]">
        <Image src={gift2} alt="Gift 2 with Price" className="object-contain" />
      </div>
      <div className="absolute right-[-4%] top-[50%] transform -translate-y-1/2 hidden md:block z-10 w-[350px] h-[350px] rotate-[75deg]">
        <Image src={gift} alt="Gift 2 with Price" className="object-contain" />
      </div>

      <div className="max-w-[900px] m-auto z-20 relative px-6 md:px-0">
        <p className="heading py-6">
          Triyuginarayan Temple
          <span className="text-[#A42D2B]"> Wedding Cost</span>
        </p>
        <p className="para text-justify md:text-center mb-4">
          Customized quotes can be offered based on your requirement and guest
          list. Our Triyuginarayan wedding planning team provides complete
          assistance to every couple.{" "}
        </p>
        <p className="para text-justify md:text-center">
          A wedding at the sacred Triyuginarayan Temple is not just spiritually
          fulfilling but also incredibly cost-effective. The Triyuginarayan
          Temple Wedding Cost starts at as little as ₹99,999 for an intimate
          wedding. For those looking for a more detailed setup including
          rituals, décor, music, and registration, our inclusive packages start
          from ₹4,99,999. All our packages are designed to amalgamate comfort,
          tradition, and heartfelt hospitality — a heavenly beginning to your
          life without hurting your pocketbook.{" "}
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
