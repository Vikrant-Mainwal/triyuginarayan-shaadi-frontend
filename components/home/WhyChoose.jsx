import Image from 'next/image'
import React from 'react'
import MarriedCouple from "../../asset/images/married-couple-image.svg";
import Ellipse from "../../asset/images/Ellipse.svg";

const WhyChoose = () => {
  return (
    <div className="flex flex-col md:flex-row gap-40 mt-20">
        <div className="m-auto">
        <Image src={MarriedCouple} alt="image" className='w-[300px] md:w-[50%]'/>
        </div>
        <div className="flex flex-col gap-6 w-[80%] md:w-[50%] m-auto">
          <h2 className="text-[28px] md:text-[50px] font-bold raleway">
            {" "}
            Why Choose <span className="text-[#A42D2B]">Triyuginarayan</span>  for Your Destination Wedding
          </h2>
          <div className="flex gap-4 ">
            <Image src={Ellipse} alt="image"  className='w-[18px] md:w-fit'/>
            <p className="text-[16px] md:text-[18px]">
              Host your wedding at the only temple where Shiva and Parvati were
              married.
            </p>
          </div>
          <div className="flex gap-4">
            <Image src={Ellipse} alt="image" className='w-[18px] md:w-fit'/>
            <p className="text-[16px] md:text-[18px]">
              Seamless planning by a professional Triyuginarayan wedding
              planner.
            </p>
          </div>
          <div className="flex gap-4">
            <Image src={Ellipse} alt="image" className='w-[18px] md:w-fit'/>
            <p className="text-[16px] md:text-[18px]">
              Authentic Triyuginarayan destination wedding experience.
            </p>
          </div>
          <div className="flex gap-4">
            <Image src={Ellipse} alt="image" className='w-[18px] md:w-fit'/>
            <p className="text-[16px] md:text-[18px]">
              Transparent pricing and customizable packages.
            </p>
          </div>
          <div className="flex gap-4">
            <Image src={Ellipse} alt="image" className='w-[18px] md:w-fit'/>
            <p className="text-[16px] md:text-[18px]">
              Warm hospitality: bonfires, electric blankets, and local meals.
            </p>
          </div>
        </div>
      </div>
  )
}

export default WhyChoose