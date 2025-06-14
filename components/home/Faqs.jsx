"use client";
import React, { useState } from "react";
import faqs from "../../asset/faqs.json";
import Image from "next/image";
import Plus from "../../asset/images/others/plus.svg";
import Minus from "../../asset/images/others/minus.svg";

const Faqs = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFaqs = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-[90%] md:w-[80%] m-auto flex flex-col gap-6 mb-35 mt-25 max-w-[1400px]">
      <h2 className="text-center p-6">
        Frequently <span className="text-[#A42D2B]">Asked</span> Questions
      </h2>

      <div className="flex flex-col gap-4 ">
        {faqs.map((item, index) => (
          <div key={index} className="border border-black rounded-lg p-4 bg-white">
            <div
              className="cursor-pointer flex justify-between items-center"
              onClick={() => toggleFaqs(index)}
              aria-expanded={openIndex === index}
              aria-controls={`faq-content-${index}`}
            >
              <h3 className="text-[16px] font-medium py-2">{item.question}</h3>
              <div className="px-2">
                <Image
                src={openIndex === index ? Minus : Plus}
                alt={openIndex === index ? "Collapse" : "Expand"}
                className={`transition-transform duration-300 ${
                  openIndex === index ? "rotate-180" : ""
                } w-[21px] h-[21px] `}
              />
              </div>
            </div>

            <div
              className={`transition-all duration-300 ease-in-out overflow-hidden ${
                openIndex === index ? "max-h-[500px] mt-2 opacity-100" : "max-h-0 opacity-0"
              }`}
            >
              <p className="text-gray-600">{item.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faqs;
