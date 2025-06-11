import Image from "next/image";
import React from "react";
import footerImage from "../../asset/images/logo/footer-image.png";

const Footer = () => {
  return (
    <div className="bg-[#FFE4B8] p-[40px] flex flex-col gap-[50px] max-w-[1400px] w-full mx-auto mt-60 text-[#000]">
      
      {/* Top Section */}
      <div className="flex flex-col md:flex-row gap-10 justify-between items-center">
        <div className="w-full md:w-[50%] flex flex-col gap-4">
          <h2 className="text-center md:text-start">
            Begin Your <br /> <span className="text-[#A42D2B]">Journey</span> With Us
          </h2>
          <p className="text-[16px] md:text-[18px] text-justify md:text-start">
            Your love deserves a sacred start. Let us help you plan a wedding
            that’s deeply meaningful, beautifully organized, and forever remembered.
          </p>
        </div>
        <div className="flex flex-col gap-2 text-center md:text-start ">
          <h2 >Contact Us</h2>
          <p className="text-[#656565] !text-[14px]">Triyuginarayan Temple, Rudraprayag, Uttarakhand.</p>
          <p className="text-[#656565] !text-[14px]">triyuginarayanweddingwork@gmail.com</p>
          <p className="text-[#656565] !text-[14px]">+91-xxx-xxxxx</p>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="flex flex-col md:flex-row gap-10 justify-between items-center text-center md:text-start">
        
        <div className="flex items-center justify-center gap-4">
          <Image src={footerImage} alt="Footer image" className="w-[170px] md:w-[250px]" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
