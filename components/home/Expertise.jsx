import React from "react";
import Image from "next/image";
import Focus from "../../asset/images/focus.svg";
import Knowledge from "../../asset/images/knowledge.svg";
import Planning from "../../asset/images/planning.svg";
import Pricing from "../../asset/images/pricing.svg";

const Expertise = () => {

   const expertise = [
    
          {
            src: Focus,
            alt: "Focus icon",
            text: "Exclusive focus on Triyuginarayan temple weddings",
          },
          {
            src: Knowledge,
            alt: "Knowledge icon",
            text: "Deep local knowledge with professional execution.",
          },
          {
            src: Planning,
            alt: "Planning icon",
            text: "End-to-end planning: rituals, food, stay, décor, music.",
          },
          {
            src: Pricing,
            alt: "Pricing icon",
            text: "Trusted and transparent pricing for all services.",
          },
        ]
   
  return (
    <div className="w-[90%] m-auto  flex flex-col items-center text-center mt-25 mb-5">
      
      {/* Heading */}
      <div className="flex flex-col gap-4 py-6">
        <h2 className="text-[32px] md:text-[52px] font-bold raleway">
          Our <span className="text-[#A42D2B]">Expertise</span>
        </h2>
        <p className="text-[16px] md:text-[22px] open-sans">
          We’re not just planners — we’re storytellers of a sacred beginning.
        </p>
      </div>

      {/*  Cards */}
      <div className="flex flex-wrap justify-center gap-10 p-6 md:p-10">
        {expertise.map((item, index) => (
          <div
            key={index}
            className="flex flex-col gap-4 items-center w-[250px] md:w-[220px] text-center"
          >
            <Image src={item.src} alt={item.alt} className="w-[80px] h-[80px]" />
            <p className="text-[16px] md:text-[18px]">{item.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Expertise;
