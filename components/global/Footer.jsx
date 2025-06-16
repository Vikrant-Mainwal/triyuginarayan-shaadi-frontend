import Image from "next/image";
import React from "react";
import footerImage from "../../asset/images/logo/footer-image.png";
import Insta from "../../asset/images/others/instagram.svg";
import Facebook from "../../asset/images/others/facebook.svg";

const Footer = () => {
  return (
    <div className="bg-[#FFE4B8]">
      <div className="max-w-[1400px] w-full mx-auto p-10 text-[#000] flex flex-col gap-[50px]">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between gap-10 items-start">
          <div className="md:w-1/2 flex flex-col gap-4">
            <h1 className="text-center md:text-left font-semibold">
              Begin Your <br />
              <span className="text-[#A42D2B]">Journey</span> With Us
            </h1>
            <p className="text-[16px] md:text-[18px] text-justify md:text-left">
              Your love deserves a sacred start. Let us help you plan a wedding
              that’s deeply meaningful, beautifully organized, and forever
              remembered.
            </p>
          </div>
          <div className="flex flex-col gap-2 text-center md:w-1/4 md:text-start">
            <h2>Contact Us</h2>
            <p className="text-[#656565] text-[14px]">
              Triyuginarayan Temple, Rudraprayag, Uttarakhand.
            </p>
            <p className="text-[#656565] text-[14px]">
              triyuginarayanweddingwork@gmail.com
            </p>
            <p className="text-[#656565] text-[14px]">+91-xxx-xxxxx</p>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center md:items-end">
          <div className=" flex justify-center md:justify-start">
            <Image
              src={footerImage}
              alt="Footer image"
              className="w-[170px] md:w-[250px] object-contain"
            />
          </div>
          <div className="hidden w-1/4 md:flex flex-col text-center md:text-start gap-3">
            <h2>Follow us</h2>
            <div className="flex gap-4">
              <Image src={Insta} alt="Instagram" className="w-10" />
              <Image src={Facebook} alt="Facebook" className="w-10" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
