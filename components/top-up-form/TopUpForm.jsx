import Image from "next/image";
import React from "react";
import image from "../../asset/images/wedding-hand.png";
import Slogan from "../../asset/images/logo/logo-slogan.svg";
import BookWedding from "../../asset/images/book-wedding.svg";
import { IoIosCloseCircle } from "react-icons/io";

const TopUpForm = ({ onClose }) => {
  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white rounded-[22px] flex flex-col md:flex-row w-[90%] max-w-3xl shadow-lg relative overflow-hidden">
        <div
          className="absolute top-4 right-4 cursor-pointer text-gray-500"
          onClick={onClose}
        >
          <IoIosCloseCircle className="w-[50px] h-[50px]" />
        </div>

        <div className="w-full md:w-1/2 p-6 md:p-10 bg-[#FFF9F4]">
          <Image src={Slogan} alt="logo" className="w-20 mb-4" />
          <div>
            <Image src={BookWedding} alt="image" />
          </div>
          <form className="space-y-4 mt-4">
            <div className="flex flex-col gap-3 text-start">
              <label htmlFor="">Name</label>
              <input
                type="text"
                placeholder="Your Name"
                className="w-full border border-gray-300 px-4 py-2 rounded"
              />
            </div>

            <div className="flex flex-col gap-3 text-start">
              <label htmlFor="">Phone Number</label>
              <input
                type="number"
                placeholder="Phone No."
                className="w-full border border-gray-300 px-4 py-2 rounded"
              />
            </div>

            <div className="flex flex-col gap-3 text-start">
              <label htmlFor="">Date</label>

              <input
                type="date"
                placeholder="sate"
                className="w-full border border-gray-300 px-4 py-2 rounded"
              />
            </div>

            <button
              type="button"
              className="bg-[#FFB52C] font-semibold py-4 px-6 rounded w-full mt-10 mb-5"
            >
              Plan your Wedding
            </button>
          </form>
        </div>

        <div className="hidden md:block md:w-1/2">
          <Image
            src={image}
            alt="Wedding"
            className="h-full w-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default TopUpForm;
