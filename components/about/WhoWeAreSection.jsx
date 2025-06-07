import React from 'react'

const WhoWeAreSection = () => {
  return (
    <div className="w-[90%] m-auto p-10 text-center">
     <h2 className="text-[35px] md:text-[67px] font-bold raleway">
        Who <span className="text-[#A42D2B]">we</span> are?
      </h2>
      <div className="flex flex-col gap-10 p-10">
        <p className="text-[18px]">
          We’re a small, passionate team that believes weddings should be
          about more than just decoration and noise. They should have heart,
          meaning, and a deeper connection.
        </p>
        <p className="text-[18px]">
          That’s why we started TriyuginarayanShaadi.com — to help couples
          like you experience something truly special. This is the only temple
          where Lord Shiva and Goddess Parvati got married, and it holds a
          powerful energy that you feel the moment you arrive. We wanted to
          make this place more accessible to couples looking for a calm,
          spiritual, and soulful wedding. And we made it easy too — from your
          stay to your rituals, we take care of it all.
        </p>
        <p className="text-[18px]">
          Our promise? A wedding you’ll remember not just with photos, but
          with your heart.
        </p>
      </div>
    </div>
  );
};

export default WhoWeAreSection;

