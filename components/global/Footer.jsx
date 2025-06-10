import Image from "next/image";
import React from "react";
import Logo from "../../asset/images/logo.svg";
import footerImage from "../../asset/images/footer.svg";

const Footer = () => {
  return (
    <div className="bg-[#FFE4B8] p-[40px] flex flex-col gap-[50px] max-w-[1400px] w-full mx-auto mt-60 text-[#000]">
      
      {/* Top Section */}
      <div className="flex flex-col md:flex-row gap-10 justify-between items-center">
        <div className="w-full md:w-[50%]">
          <h2 className="text-[35px] md:text-[67px] font-bold raleway leading-tight text-center">
            Begin Your <br /> <span className="text-[#A42D2B]">Journey</span> With Us
          </h2>
        </div>
        <div className="w-full md:w-[50%] flex items-center justify-center md:pr-5">
          <p className="text-[16px] md:text-[18px] text-justify md:text-start">
            Your love deserves a sacred start. Let us help you plan a wedding
            that’s deeply meaningful, beautifully organized, and forever remembered.
          </p>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="flex flex-col md:flex-row gap-10 justify-between items-center text-center md:text-start">
        <div className="flex flex-col gap-2">
          <h3 className="text-[28px] md:text-[35px]">Contact Us</h3>
          <p>Triyuginarayan Temple, Rudraprayag, Uttarakhand.</p>
          <p>triyuginarayanweddingwork@gmail.com</p>
          <p>+91-xxx-xxxxx</p>
        </div>
        <div className="flex items-center justify-center gap-4">
          <Image src={Logo} alt="Logo" className="w-[95px]" />
          <Image src={footerImage} alt="Footer image" className="w-[170px] md:w-[250px]" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
