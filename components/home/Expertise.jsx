import React from "react";
import Image from "next/image";
import Focus from "../../asset/images/badges/focus.svg";
import Knowledge from "../../asset/images/badges/knowledge.svg";
import Planning from "../../asset/images/badges/planning.svg";
import Pricing from "../../asset/images/badges/pricing.svg";

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
    <div className="w-[90%] flex flex-col items-center text-center mt-10 md:mt-25 mb-5 max-w-[1400px] m-auto">
      
      {/* Heading */}
      <div className="flex flex-col py-3">
        <p className="heading py-6">
          Our <span className="text-[#A42D2B]">Expertise</span>
        </p>
        <p className="para">
          We’re not just planners — we’re <span className="text-[#A42D2B]">storytellers</span>  of a sacred beginning.
        </p>
      </div>

      {/*  Cards */}
      <div className="flex flex-wrap justify-center gap-15 p-6 md:p-10 md:mt-0">
        {expertise.map((item, index) => (
          <div
            key={index}
            className="flex flex-col gap-4 items-center w-[250px] md:w-[220px] text-center"
          >
            <Image src={item.src} alt={item.alt} className="w-[100px]" />
            <p className="!text-[14px]">{item.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Expertise;
