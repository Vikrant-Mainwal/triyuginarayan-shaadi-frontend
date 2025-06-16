import Image from 'next/image';
import React from 'react'
import about_image from '../../asset/images/about_image.png';

const WhoWeAreSection = () => {
  return (
    <div className="w-[90%] m-auto px-5 text-center mt-25 flex flex-col md:flex-row gap-10">
      <div className='hidden w-[40%] md:flex justify-center'>
        <Image src={about_image} alt='image'/>
      </div>
      <div className='md:w-[60%] w-full'>
     <h2 className="text-center md:text-start mb-10">
        Who <span className="text-[#A42D2B]">we</span> are?
      </h2>
      <div className="flex flex-col gap-10">
        <p className="text-justify md:text-start">
          We’re a small, passionate team that believes weddings should be
          about more than just decoration and noise. They should have heart,
          meaning, and a deeper connection.
        </p>
        <p className="text-justify md:text-start">
          That’s why we started TriyuginarayanShaadi.com — to help couples
          like you experience something truly special. This is the only temple
          where Lord Shiva and Goddess Parvati got married, and it holds a
          powerful energy that you feel the moment you arrive. We wanted to
          make this place more accessible to couples looking for a calm,
          spiritual, and soulful wedding. And we made it easy too — from your
          stay to your rituals, we take care of it all.
        </p>
        <p className="text-justify md:text-start">
          Our promise? A wedding you’ll remember not just with photos, but
          with your heart.
        </p>
      </div>

      </div>
      <div className=' md:hidden'>
        <Image src={about_image} alt='image'/>
      </div>
    </div>
  );
};

export default WhoWeAreSection;

