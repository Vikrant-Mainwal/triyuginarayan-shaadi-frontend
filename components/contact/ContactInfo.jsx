import Image from "next/image";
import React from "react";
import ContactImage from "../../asset/images/contact-info.png";
import Call from "../../asset/images/icons/call-icon.svg";
import Whatsapp from "../../asset/images/icons/whatsapp-icon.svg";
import Email from "../../asset/images/icons/message-icon.svg";

const ContactInfo = () => {

  return (
    <div className="w-[90%] max-w-7xl mx-auto my-16 flex flex-col md:flex-row items-center gap-10">
      <div className="hidden md:block">
        <Image src={ContactImage} alt="image" className=" md:w-[500px]" />
      </div>
      <div className="flex flex-col gap-5">
        <h2 className="text-[28px] md:text-[50px] font-bold raleway py-6">
          Want to <span className="text-[#A42D2B]">talk</span> right away ?
        </h2>
        <p className="text-[16px] md:text-[18px]">
          Sometimes, speaking to someone directly feels easier — we completely
          understand.
        </p>
        {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-6">
          {contactInfo.map((info, index) => (
            <div key={index} className="flex gap-4">
              <div className="flex justify-center items-center">
                <Image src={info.image} alt="image" />
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="text-[20px] font-bold">{info.title}</h3>
                <p className="text-[16px] md:text-[18px] w-[200px] text-wrap">{info.value}</p>
              </div>
            </div>
          ))}
        </div> */}

        <div className="flex flex-col gap-10 mt-8">
          <div className="flex flex-col md:flex-row gap-15">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex justify-center items-center">
                <Image src={Call} alt="image" />
              </div>
               <div className="flex flex-col justify-center gap-2 text-center md:text-start">
                <h3 className="text-[20px] font-bold">Call Us at</h3>
                <p className="text-[16px] md:text-[18px]">+91-9023577149</p>
              </div>
            </div>
            <div className="flex flex-col md:flex-row gap-4 ">
              <div className="flex justify-center items-center">
                <Image src={Whatsapp} alt="image" />
              </div>
               <div className="flex flex-col justify-center gap-2 text-center md:text-start">
                <h3 className="text-[20px] font-bold">Whatsapp at</h3>
                <p className="text-[16px] md:text-[18px]">+91-9023577149</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex justify-center items-center ">
                <Image src={Email} alt="image" />
              </div>
               <div className="flex flex-col justify-center gap-2 text-center md:text-start">
                <h3 className="text-[20px] font-bold">Email Us</h3>
                <p className="text-[16px] md:text-[18px]">triyuginarayanshaadiwork@gmail.com</p>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
