import Image from "next/image";
import React from "react";
import thank from "../../asset/images/badges/thank-image.svg";
import tick from "../../asset/images/badges/success-tick.svg";
import Sloganlogo from "../../asset/images/logo/logo-slogan.svg";
import Link from "next/link";

const page = () => {
  return (
    <div className="flex justify-center items-center bg-[#FFE4B8] h-screen m-auto">
      <div className="inset-0 flex flex-col gap-5 items-center justify-center w-[800px] bg-[#FDFFF2] rounded-[22px] p-[40px]">
        <div className="flex items-start w-full">
          <Image src={Sloganlogo} alt="imah" />
        </div>
        <div className="hidden md:block">
        <Image src={thank} alt="image" />
        </div>

        <div className="flex md:flex-col  gap-4">
          <div className="flex items-center justify-center gap-4">
            <Image src={tick} alt="image" className="w-[45px] h-auto" />
            <h3 className="text-[38px] font-bold">
              Your request has been submitted.
            </h3>
          </div>
          <p className="text-center">
            Thank you for reaching out. Our team will connect with you shortly
            to help you plan your sacred wedding at Triyuginarayan Temple.
          </p>
        </div>

        <Link href="/">
          <button className="bg-[#A42D2B] rounded-[7px] px-6 py-3 text-white cursor-pointer">
            Back to Home
          </button>
        </Link>
      </div>
    </div>
  );
};

export default page;
