import Image from "next/image";
import React from "react";
import ContactImage from "../../asset/images/contact-info.png";
import Call from "../../asset/images/badges/call-icon.svg";
import Whatsapp from "../../asset/images/badges/whatsapp-icon.svg";
import Email from "../../asset/images/badges/message-icon.svg";

const ContactInfo = () => {

  return (
    <div className="w-[90%] max-w-7xl mx-auto mt-20 mb-25 md:mb-35 flex flex-col md:flex-row items-center gap-25">
      <div className="hidden md:block">
        <Image src={ContactImage} alt="image" className=" md:w-[500px]" />
      </div>
      <div className="flex flex-col gap-5 text-center md:text-start">
        <p className="py-6 heading">
          Want to <span className="text-[#A42D2B]">talk</span> right away ?
        </p>
        <p className="text-justify md:text-start px-5 md:px-0 para">
          Sometimes, speaking to someone directly feels easier — we completely
          understand.
        </p>

        <div className="flex flex-col gap-10 mt-8">
          <div className="flex flex-col md:flex-row gap-15">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex justify-center items-center">
                <Image src={Call} alt="image" className="w-[70px]" />
              </div>
               <div className="flex flex-col justify-center gap-2 text-center md:text-start">
                <p className="text-[20px] font-bold">Call Us at</p>
                <p className="para">+91-9084684360</p>
              </div>
            </div>
            <div className="flex flex-col md:flex-row gap-4 ">
              <div className="flex justify-center items-center">
                <Image src={Whatsapp} alt="image" className="w-[70px]" />
              </div>
               <div className="flex flex-col justify-center gap-2 text-center md:text-start">
                <p className="text-[20px] font-bold">Whatsapp at</p>
                <p className="para">+91-9084684360</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex justify-center items-center ">
                <Image src={Email} alt="image" className="w-[70px]" />
              </div>
               <div className="flex flex-col justify-center gap-2 text-center md:text-start">
                <p className="text-[20px] font-bold">Email Us</p>
                <p className="para">triyuginarayanshaadiwork@gmail.com</p>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
