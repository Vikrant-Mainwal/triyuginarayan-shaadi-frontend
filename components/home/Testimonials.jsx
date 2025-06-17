import React from "react";
import Image from "next/image";
import Comma from "../../asset/images/inverted-comma.png";
import Profilepic from "../../asset/images/profile-pic.png";

const Testimonials = () => {
  return (
    <div>
      <div className="w-[90%] m-auto mt-10 md:mt-25 mb-5 max-w-[1400px]">
        <p className="text-center heading py-6">
          What <span className="text-[#A42D2B]">Couples</span> Are Saying
        </p>
        {/* <div className="flex justify-center items-center">
          <Image src={Testimonial} alt="image" />
        </div> */}

        <div className="relative md:flex items-center justify-center mt-10 h-[900px] md:h-[600px] p-5 md:p-0">
          <div className="absolute md:top-[10%] md:left-[18%] rotate-6 md:rotate-0 z-10 md:z-0">
            <div className="relative w-full max-w-md md:w-[500px] md:h-[300px] bg-[#FFFFFF] shadow-2xl shadow-[0px 4px 40px 0px rgba(0, 0, 0, 0.10)]">
              <div className=" absolute top-[-20px] left-[-30px]">
                <Image src={Comma} alt="quotation marks" />
              </div>

            <div className="flex flex-col gap-3 md:gap-5 p-6 items-center justify-center text-center">
              <div className="w-fit border-[1px] rounded-full">
                <Image src={Profilepic} alt="profile-pic"/>
              </div>
              <p className="open-sans italic px-6">“Felt like a dream wedding in heaven. The team was supportive every step.”</p>
              <div>
                
                <p className="font-semibold"> Neha and Rohan</p>
                <p className="text-gray-500">Mumbai,India</p>
              </div>
            </div>
          </div>
          </div>
          <div className="absolute top-[30%] -rotate-4 md:rotate-0 md:top-[2%] md:right-[11%]">
            <div className="relative w-full max-w-md md:w-[500px] h-[300px] bg-[#FFFFFF] shadow-2xl shadow-[0px 4px 40px 0px rgba(0, 0, 0, 0.10)] ">
              <div className=" absolute top-[-20px] left-[-30px]">
                <Image src={Comma} alt="quotation marks" />
              </div>

            <div className="flex flex-col gap-3 md:gap-5 p-6 items-center justify-center text-center">
              <div className="w-fit border-[1px] rounded-full">
                <Image src={Profilepic} alt="profile-pic"/>
              </div>
              <p className="open-sans italic px-6 text-[16px] ">“From rituals to reception, they made everything seamless and spiritual.”</p>
              <div>
                <p className="font-semibold">Priya and Ankit</p>
                <p className="text-gray-500">Kerala, India</p>
              </div>
            </div>
          </div>
          </div>
          <div className="absolute top-[59%] md:top-[53%] md:right-[20%] z-[10px]">
            <div className="relative w-full max-w-md md:w-[500px] h-[300px] bg-[#FFFFFF] shadow-2xl shadow-[0px 4px 40px 0px rgba(0, 0, 0, 0.10)] ">
              <div className=" absolute top-[-20px] left-[-30px]">
                <Image src={Comma} alt="quotation marks" />
              </div>

            <div className="flex flex-col gap-5 p-6 items-center justify-center text-center">
              <div className="w-fit border-[1px] rounded-full">
                <Image src={Profilepic} alt="profile-pic"/>
              </div>
              <p className="open-sans italic px-6 text-[16px]">“It felt like a blessing. The team helped with every detail and treated us like family.”</p>
              <div>
                <p className="font-semibold">Shreya and Hitesh</p>
                <p className="text-gray-500">Delhi, India</p>
              </div>
            </div>
          </div>
          </div>
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
