import Image from "next/image";
import React from "react";
import Logo from '../../asset/images/logo.svg'
import image from '../../asset/images/top-up.svg';

const TopUpForm = ({ onClose }) => {
  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl flex flex-col md:flex-row w-[90%] max-w-3xl shadow-lg relative overflow-hidden">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-600 hover:text-black text-xl z-10"
        >
          X
        </button>

        {/* Left side (form) */}
        <div className="w-full md:w-1/2 p-6 md:p-10 bg-[#FFF9F4]">
          <Image src={Logo} alt="logo" className="w-20 mb-4" />
          <h2 className="text-2xl font-semibold">
            Book your <span className="text-[#A42D2B] font-bold">Dream </span>Wedding!
          </h2>
          <form className="space-y-4 mt-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full border border-gray-300 px-4 py-2 rounded"
            />
            <input
              type="tel"
              placeholder="Phone No."
              className="w-full border border-gray-300 px-4 py-2 rounded"
            />
            <input
              type="date"
              className="w-full border border-gray-300 px-4 py-2 rounded"
            />
            <button
              type="button"
              className="bg-[#F5A623] hover:bg-[#d78e18] text-white font-semibold py-2 px-6 rounded w-full"
            >
              Plan your Wedding
            </button>
          </form>
        </div>

        {/* Right side (image) */}
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
