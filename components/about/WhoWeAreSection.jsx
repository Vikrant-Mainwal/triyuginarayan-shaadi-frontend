import React from 'react'

const WhoWeAreSection = () => {
  return (
    <div className="w-[90%] m-auto px-5 text-center mt-25">
     <h2 className="text-center mb-10">
        Who <span className="text-[#A42D2B]">we</span> are?
      </h2>
      <div className="flex flex-col gap-10">
        <p className="text-justify md:text-center">
          We’re a small, passionate team that believes weddings should be
          about more than just decoration and noise. They should have heart,
          meaning, and a deeper connection.
        </p>
        <p className="text-justify md:text-center">
          That’s why we started TriyuginarayanShaadi.com — to help couples
          like you experience something truly special. This is the only temple
          where Lord Shiva and Goddess Parvati got married, and it holds a
          powerful energy that you feel the moment you arrive. We wanted to
          make this place more accessible to couples looking for a calm,
          spiritual, and soulful wedding. And we made it easy too — from your
          stay to your rituals, we take care of it all.
        </p>
        <p className="ttext-justify md:text-center">
          Our promise? A wedding you’ll remember not just with photos, but
          with your heart.
        </p>
      </div>
    </div>
  );
};

export default WhoWeAreSection;

