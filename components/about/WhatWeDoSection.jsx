const WhatWeDoSection = () => {
  return (
    <div className="w-[90%] m-auto p-10 mt-5 flex flex-col gap-10 text-center">
      <div>
        <h2 className="text-[35px] md:text-[67px] font-bold raleway">
          What we <span className="text-[#A42D2B]">do</span> for you?
        </h2>
        <p className="text-[18px]">
          At TriyuginarayanShaadi.com, we make your wedding simple, soulful, and
          fully taken care of. From rituals to hospitality, every detail is
          planned with love — so you can focus on the moments that matter.
        </p>
      </div>

      <div className="flex flex-col gap-10 p-10 text-center m-auto">
        <div className="flex flex-col gap-4">
          <h2 className="text-[38px]">Sacred ceremonies</h2>
          <p>
            Your sacred union is officiated with heartfelt wedding rituals led
            by an experienced local temple priest, including a traditional Havan
            at the Akhand Dhuni — the very fire where Shiva and Parvati are
            believed to have wed. We also provide complete support and guidance
            for your marriage registration paperwork, making the process smooth
            and hassle-free.
          </p>
        </div>

        <div className="flex flex-col gap-4">
          <h2 className="text-[38px]">Stay & Hospitality</h2>
          <p className="text-[18px]">
            We provide comfortable local accommodation for up to 30 guests,
            ensuring everyone feels at home. Alongside this, enjoy delicious
            vegetarian meals — breakfast, lunch, and dinner — served with warmth
            and care. For those magical mountain evenings, bonfire arrangements
            can also be made on request, adding an extra touch of coziness to
            your celebration.
          </p>
        </div>

        <div className="flex flex-col gap-4">
          <h2 className="text-[38px]">Memories & Moments</h2>
          <p className="text-[18px]">
            Cherish your memories with 5 beautifully crafted wedding reels and a
            framed photo of the couple with the iconic Triyuginarayan Temple in
            the backdrop.
          </p>
        </div>

        <div className="flex flex-col gap-4">
          <h2 className="text-[38px]">Planning & Support</h2>
          <p className="text-[18px]">
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
