import Image from "next/image";
import home from '../../asset/images/badges/home.svg'
import havan2 from '../../asset/images/badges/havan2.svg'
import gallary from '../../asset/images/badges/gallary.svg'
import menu from '../../asset/images/badges/menu.svg'

const WhatWeDoSection = () => {
  return (
    <div className="w-[90%] m-auto mt-25 flex flex-col gap-10 text-center">
      <div>
        <p className="text-center mb-10 heading">
          What we <span className="text-[#A42D2B]">do</span> for you?
        </p>
        <p className="text-justify md:text-center px-5 para">
          At TriyuginarayanShaadi.com, we make your wedding simple, soulful, and
          fully taken care of. From rituals to hospitality, every detail is
          planned with love — so you can focus on the moments that matter.
        </p>
      </div>

      <div className="flex flex-col gap-15 p-5 text-center m-auto">
        <div className="flex flex-col gap-4">
          <div className="flex justify-center">
            <Image src={havan2} alt="image" className="w-[100px]"/>
          </div>
          <p className="text-[22px] md:text-[32px] font-bold">
            Sacred ceremonies
          </p>
          <p className="text-justify md:text-center para">
            Your sacred union is officiated with heartfelt wedding rituals led
            by an experienced local temple priest, including a traditional Havan
            at the Akhand Dhuni — the very fire where Shiva and Parvati are
            believed to have wed. We also provide complete support and guidance
            for your marriage registration paperwork, making the process smooth
            and hassle-free.
          </p>
        </div>

        <div className="flex flex-col gap-4">
          <div className="flex justify-center">
            <Image src={home} alt="image" className="w-[100px]"/>
          </div>
          <p className="text-[22px] md:text-[32px] font-bold">
            Stay & Hospitality
          </p>
          <p className="text-justify md:text-center para">
            We provide comfortable local accommodation for up to 30 guests,
            ensuring everyone feels at home. Alongside this, enjoy delicious
            vegetarian meals — breakfast, lunch, and dinner — served with warmth
            and care. For those magical mountain evenings, bonfire arrangements
            can also be made on request, adding an extra touch of coziness to
            your celebration.
          </p>
        </div>

        <div className="flex flex-col gap-4">
          <div className="flex justify-center">
            <Image src={gallary} alt="image" className="w-[100px]"/>
          </div>
          <p className="text-[22px] md:text-[32px] font-bold">
            Memories & Moments
          </p>
          <p className="text-justify md:text-center para">
            Cherish your memories with 5 beautifully crafted wedding reels and a
            framed photo of the couple with the iconic Triyuginarayan Temple in
            the backdrop.
          </p>
        </div>

        <div className="flex flex-col gap-4">
          <div className="flex justify-center">
            <Image src={menu} alt="image" className="w-[100px]"/>
          </div>
          <p className="text-[22px] md:text-[32px] font-bold">
            Planning & Support
          </p>
          <p className="text-justify md:text-center para">
            We offer assistance with transportation from nearby cities or
            Dehradun, along with flexible planning for rituals, décor, meals,
            and schedules — so your celebration unfolds just the way you
            envision it.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WhatWeDoSection;
