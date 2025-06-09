import React from 'react'
import Testimonial from "../../asset/images/testinomials.svg";
import Image from 'next/image';


const Testimonials = () => {
  return (
    <div><div className="w-[90%] m-auto mt-25 mb-5">
        <h2 className="text-center text-[52px]">
          What <span className="text-[#A42D2B]">Couples</span> Are Saying
        </h2>
        <div className="flex justify-center items-center">
          <Image src={Testimonial} alt="image" />
        </div>
      </div></div>
  )
}

export default Testimonials