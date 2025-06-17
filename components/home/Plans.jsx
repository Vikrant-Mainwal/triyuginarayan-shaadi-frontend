"use client";
import React, { useState } from "react";
import Image from "next/image";
import Triyuginarayan from "../../asset/images/logo/logo.svg";
import Tick from "../../asset/images/others/tick.svg";
import Pepicons from "../../asset/images/others/people-icon.svg";
import Calender from "../../asset/images/others/calender.svg";
import packageData from "../../asset/plan.json";
import TopUpForm from "../top-up-form/TopUpForm";

const Plans = () => {
  const [isOpenForm, setIsOpenForm] = useState(false);

  return (
    <div className="m-auto mt-25 mb-5 max-w-[1400px]">
      <div className="flex flex-col gap-4 justify-center items-center ">
        <div>
          <Image src={Triyuginarayan} alt="image" />
        </div>

        <p className="heading pb-6">
          {" "}
          <span> Our </span>{" "}
          <span className="text-[#A42D2B]">Wedding Packages</span>{" "}
        </p>

        <p className="para text-justify md:text-center px-6">
          We offer two thoughtfully crafted wedding packages designed to fit
          different visions and budgets. Both ensure an authentic Triyuginarayan
          destination wedding experience.
        </p>
      </div>

      <div className="flex flex-col lg:flex-row gap-10 w-fit m-auto mt-3 mb-10">
        {packageData.map((item, index) => (
          <div
            key={index}
            className={`flex flex-col justify-between items-center rounded-[21px] shadow-[0px_4px_31.8px_rgba(0,0,0,0.18)] h-fit md:h-[1200px] w-[350px] md:w-[550px] mt-10 p-3 ${
              index === 1 ? "bg-[#FFF0E8]" : "bg-white "
            }`}
          >
            <div className="flex flex-col items-center gap-4 mt-10">
              <p className="text-[28px] md:text-[38px] font-bold">{item.title}</p>
              <p className="!text-[14px] text-center p-[12px] font-bold text-[#656565]">
                {item.description}
              </p>
              <p className="text-[#A42D2B] !open-sans !md:text-[67px] !text-[48px] !font-bold">
                {item.price}
              </p>
              <div className="flex gap-5">
                <p className="flex text-[12px] items-center gap-1 md:text-[16px]">
                  <Image src={Pepicons} alt="image" />
                  <span>{item.nights} Night </span>
                </p>
                <p className="flex text-[12px] items-center gap-1 md:text-[16px]">
                  <Image src={Calender} alt="image" />
                  <span>{item.guests}</span>
                </p>
              </div>

              <div className="h-[2px] bg-[#EACAB9] w-[270px] md:w-[500px]" />
              <div className="flex flex-col gap-5">
                <p className="text-[#A42D2B] py-3 md:py-6 text-[20px] font-medium text-center">
                  Package Includes
                </p>
                <ul className="flex flex-col text-start gap-4">
                  {item.features.map((feature, i) => {
                    return (
                      <li className="flex gap-4" key={i}>
                        <Image
                          src={Tick}
                          alt="image"
                          className="w-[27px] md:w-[30px]"
                        />
                        <p>{feature}</p>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>

            <button className="bg-[#A42D2B] rounded-[7px] px-8 py-3 text-white my-10 cursor-pointer " onClick={()=>setIsOpenForm(true)}>
              Select Package
            </button>
            {isOpenForm && <TopUpForm onClose={() => setIsOpenForm(false)} />}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Plans;
