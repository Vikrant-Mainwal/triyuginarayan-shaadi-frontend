import React from "react";
import Image from "next/image";
import Comma from "../../asset/images/inverted-comma.png"
import Profilepic from "../../asset/images/profile-pic.png"

const Testimonials = () => {
  return (
    <div>
      <div className="w-[90%] m-auto mt-25 mb-5 max-w-[1400px]">
        <h2 className="text-center text-[28px] md:text-[38px] raleway font-bold py-6">
          What <span className="text-[#A42D2B]">Couples</span> Are Saying
        </h2>
        {/* <div className="flex justify-center items-center">
          <Image src={Testimonial} alt="image" />
        </div> */}

        <div className="relative md:flex items-center justify-center mt-10 h-[900px] md:h-[600px] p-5 md:p-0">
          <div className="absolute md:top-[100px] md:left-[170px] rotate-6 md:rotate-0 z-10 md:z-0">
          <div className="relative w-full max-w-md md:w-[500px] md:h-[300px] bg-[#FFFFFF] shadow-2xl shadow-[0px 4px 40px 0px rgba(0, 0, 0, 0.10)]">
            <div className=" absolute top-[-20px] left-[-30px]">
              <Image src={Comma} alt="quotation marks"/>
            </div>

            <div className="flex flex-col gap-3 md:gap-5 p-6 items-center justify-center text-center">
              <div className="w-fit border-[1px] rounded-full">
                <Image src={Profilepic} alt="profile-pic"/>
              </div>
              <p className="open-sans italic px-6">“It felt like a blessing. The team helped with every detail and treated us like family.”</p>
              <div>
                <p>rating</p>
                <p>Senha and varun</p>
                <p>Mumbai,India</p>
              </div>
            </div>
          </div>
          </div>
          <div className="absolute top-[290px] -rotate-4 md:rotate-0 md:top-[35px] md:right-[150px]">
          <div className="relative w-full max-w-md md:w-[500px] h-[300px] bg-[#FFFFFF] shadow-2xl shadow-[0px 4px 40px 0px rgba(0, 0, 0, 0.10)] ">
            <div className=" absolute top-[-20px] left-[-30px]">
              <Image src={Comma} alt="quotation marks"/>
            </div>

            <div className="flex flex-col gap-3 md:gap-5 p-6 items-center justify-center text-center">
              <div className="w-fit border-[1px] rounded-full">
                <Image src={Profilepic} alt="profile-pic"/>
              </div>
              <p className="open-sans italic px-6 text-[16px] ">“It felt like a blessing. The team helped with every detail and treated us like family.”</p>
              <div>
                <p>rating</p>
                <p>Senha and varun</p>
                <p>Mumbai,India</p>
              </div>
            </div>
          </div>
          </div>
          <div className="absolute top-[590px] md:top-[340px] md:right-[200px] z-[10px]">
          <div className="relative w-full max-w-md md:w-[500px] h-[300px] bg-[#FFFFFF] shadow-2xl shadow-[0px 4px 40px 0px rgba(0, 0, 0, 0.10)] ">
            <div className=" absolute top-[-20px] left-[-30px]">
              <Image src={Comma} alt="quotation marks"/>
            </div>

            <div className="flex flex-col gap-5 p-6 items-center justify-center text-center">
              <div className="w-fit border-[1px] rounded-full">
                <Image src={Profilepic} alt="profile-pic"/>
              </div>
              <p className="open-sans italic px-6 text-[16px]">“It felt like a blessing. The team helped with every detail and treated us like family.”</p>
              <div>
                <p className="text-[16px]">rating</p>
                <p className="text-[16px]">Senha and varun</p>
                <p className="text-[16px]">Mumbai,India</p>
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
