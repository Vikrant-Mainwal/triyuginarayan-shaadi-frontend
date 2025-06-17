"use client";
import React from "react";
import Slider from "react-slick";
import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";

import image1 from '../../asset/images/gallary/gallary-image1.png';
import image2 from '../../asset/images/gallary/gallary-image2.png';
import image3 from '../../asset/images/gallary/gallary-image3.png';
import image4 from '../../asset/images/gallary/gallary-image4.png';
import image5 from '../../asset/images/gallary/gallary-image5.png';

// Custom Arrows
const PrevArrow = ({ onClick }) => (
  <div
    className="absolute top-1/2 left-2 -translate-y-1/2 z-20 cursor-pointer w-[50px] flex items-center justify-center text-center"
    onClick={onClick}
  >
    <div className="bg-[#A42D2B] text-white rounded-full p-2 shadow text-center flex items-center justify-center">
      <MdArrowBackIos size={20} className="" />
    </div>
  </div>
);

const NextArrow = ({ onClick }) => (
  <div
    className="absolute top-1/2 right-2 -translate-y-1/2 z-20 cursor-pointer"
    onClick={onClick}
  >
    <div className="bg-[#A42D2B] text-white rounded-full p-2 shadow">
      <MdArrowForwardIos size={20} />
    </div>
  </div>
);

function GallarySection() {

  const settings = {
  className: "center",
  centerMode: true,
  centerPadding: "80px",
  dots: false,
  infinite: true,
  slidesToShow: 3, // default (desktop)
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />,
  responsive: [
    {
      breakpoint: 1024, // below 1024px
      settings: {
        slidesToShow: 1,
        centerMode: true,
        centerPadding: "30px", // optional, can be adjusted
      },
    },
  ],
};


  const gallary = [
    { img: image1 },
    { img: image2 },
    { img: image3 },
    { img: image4 },
    { img: image5 },
  ];

  return (
    <div className="relative slider-container mx-auto py-10 px-5 mb-25 md:mb-35 mt-10 md:mt-25">
      <Slider {...settings}>
        {gallary.map((num, index) => (
          <div key={index}>
            <div className="slide-item flex items-center justify-center rounded-lg transition-all duration-300 mx-2">
              <Image
                src={num.img}
                alt="images"
                className="!w-[600px] h-[300px] object-cover"
              />
            </div>
          </div>
        ))}
      </Slider>

      {/* Styling */}
      <style jsx global>{`
        .slick-prev::before,
        .slick-next::before {
          display: none !important;
        }

        .slide-item {
          opacity: 0.4;
          transform: scale(0.9);
          transition: all 0.3s ease;
        }

        .slick-center .slide-item {
          opacity: 1 !important;
          transform: scale(1.2) !important;
        }
      `}</style>
    </div>
  );
}

export default GallarySection;
