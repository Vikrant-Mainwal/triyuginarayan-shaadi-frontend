import React from 'react'
import Image from "next/image";
import Temple from "../../asset/images/temple.png";

const AboutSection = () => {
  return (
    <div className="flex flex-col md:flex-row w-[90%] m-auto mt-10 gap-10">
      <div className="md:w-[50%] flex flex-col gap-4 text-center md:text-start items-center md:items-start px-5">
        <h1>
          “Where <span className="text-[#A42D2B]">Every</span> Wedding Begins
          with a <span className="text-[#A42D2B]">Blessing”</span>
        </h1>

        <div className='flex flex-col gap-5 mt-5'>
          <p className="text-justify md:text-start">
          Get married at the same temple where Lord Shiva and Goddess Parvati
          took their vows. At Triyuginarayan Temple, in the quiet hills of
          Uttarakhand, the sacred fire from their wedding still burns — a
          symbol of forever.
        </p>
        <p className="text-justify md:text-start">
          At TriyuginarayanShaadi.com, we help you start your married life with
          blessings, traditions, and beauty — all in one of the most peaceful
          wedding spots in India.
        </p>
        </div>
        
      </div>
      <div>
        <Image src={Temple} alt="image" className='w-[500px]' />
      </div>
    </div>
  );
};

export default AboutSection