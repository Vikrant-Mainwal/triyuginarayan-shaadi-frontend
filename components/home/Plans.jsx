import React from "react";
import Image from "next/image";
import Triyuginarayan from "../../asset/images/triyuginarayan.svg";
import Tick from "../../asset/images/tick.svg";
import Pepicons from "../../asset/images/pepicons.svg";
import Calender from "../../asset/images/calender.svg";
import packageData from "../../asset/plan.json";

const Plans = () => {
  return (
    <div className="w-[90%] m-auto mt-25 mb-5">
      <div className="flex flex-col gap-4 justify-center items-center">
        <div>
          <Image src={Triyuginarayan} alt="image" />
        </div>

        <h1 className="text-[28px] md:text-[52px] font-bold">
          {" "}
          <span> Our </span>{" "}
          <span className="text-[#A42D2B]">Wedding Packages</span>{" "}
        </h1>

        <p className="text-[16px] md:text-[22px] text-center open-sans ">
          We offer two thoughtfully crafted wedding packages designed to fit
          different visions and budgets. Both ensure an authentic Triyuginarayan
          destination wedding experience.
        </p>
      </div>

      <div className="flex flex-col md:flex-row gap-20 w-fit m-auto mt-20 mb-10">
        {packageData.map((item, index) => (
          <div
            key={index}
            className={`flex flex-col justify-between items-center rounded-[21px] shadow-[0px_4px_31.8px_rgba(0,0,0,0.18)] h-[1100px] md:h-[1200px] w-[316px] md:w-[550px] mt-10 p-3 ${
              index === 1 ? "bg-[#FFF0E8]" : "bg-white "
            }`}
          >
            <div className="flex flex-col items-center gap-4 mt-10">
              <h2 className="text-[26px] md:text-[45px]">{item.title}</h2>
              <p className="text-[14px] md:text-[18px] text-center p-[12px]">
                {item.description}
              </p>
              <h3 className="text-[48px] md:text-[67px] text-[#A42D2B] font-bold">
                {item.price}
              </h3>
              <div className="flex gap-5">
                <p className="flex text-[12px] md:text-[16px]">
                  <Image src={Pepicons} alt="image" />
                  <span>{item.nights} Night </span>
                </p>
                <p className="flex text-[12px] md:text-[16px]">
                  <Image src={Calender} alt="image" />
                  <span>{item.guests}</span>
                </p>
              </div>

              <div className="h-[2px] bg-[#EACAB9] w-[250px] md:w-[500px]" />
              <div className="flex flex-col gap-5">
                <h5 className="text-[#A42D2B] py-3 md:py-6 text-[20px] font-medium text-center">
                  Package Includes
                </h5>
                <ul className="flex flex-col text-start px-5">
                  {item.features.map((feature, i) => {
                    return (
                      <div className="flex gap-4 p-2" key={i}>
                        <Image
                          src={Tick}
                          alt="image"
                          className="w-[27px] md:w-[30px]"
                        />
                        <li className="text-[12px] md:text-[16px]">
                          {feature}
                        </li>
                      </div>
                    );
                  })}
                </ul>
              </div>
            </div>

            <button className="bg-[#A42D2B] rounded-[7px] px-6 py-3 text-white mb-15 cursor-pointer">
              Select Package
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Plans;
