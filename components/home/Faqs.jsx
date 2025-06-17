"use client";
import React, { useState } from "react";
import faqs from "../../asset/faqs.json";
import Image from "next/image";
import { LuPlus } from "react-icons/lu";
import { LuMinus } from "react-icons/lu";

const Faqs = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFaqs = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-[90%] md:w-[80%] m-auto flex flex-col gap-6 mb-25 md:mb-35 mt-10 md:mt-25 max-w-[1400px]">
      <p className="text-center p-6 heading">
        Frequently <span className="text-[#A42D2B]">Asked</span> Questions
      </p>

      <div className="flex flex-col gap-4 ">
        {faqs.map((item, index) => (
          <div
            key={index}
            className="border border-black rounded-lg p-4 bg-white"
          >
            <div
              className="cursor-pointer flex justify-between items-center"
              onClick={() => toggleFaqs(index)}
              aria-expanded={openIndex === index}
              aria-controls={`faq-content-${index}`}
            >
              <p className="text-[16px] font-medium py-2">{item.question}</p>
              <div className="px-2">
                {openIndex === index ?<LuMinus className="w-7 h-7"/> :<LuPlus className="w-7 h-7"/>}
              </div>
            </div>

            <div
              className={`transition-all duration-300 ease-in-out overflow-hidden ${
                openIndex === index
                  ? "max-h-[500px] mt-2 opacity-100"
                  : "max-h-0 opacity-0"
              }`}
            >
              <p className="text-gray-600 para">{item.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faqs;
