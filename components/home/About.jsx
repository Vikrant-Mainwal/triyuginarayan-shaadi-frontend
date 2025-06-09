import Image from 'next/image';
import Mandir from '../../asset/images/about-us-image.svg';

const About = () => {
  return (
    <div>
    <div className="flex flex-col md:flex-row w-[90%] m-auto gap-10 md:mt-25 mb-5">
      
      <div className="md:w-[50%] flex justify-center">
        <Image src={Mandir} alt="Triyuginarayan Temple" className="h-[500px] w-auto object-contain" />
      </div>

      <div className="flex flex-col gap-4 md:w-[50%] text-center md:text-left justify-center px-6">
        <h1 className="text-[28px] md:text-[50px] font-bold raleway">
          About <span className="text-[#A42D2B]">Us</span>
        </h1>
        <p className="text-[16px] md:text-[18px] text-justify md:text-center">
          At Triyuginarayan Shaadi, we specialize in planning authentic and beautiful
          Triyuginarayan temple weddings. This is the place where Lord Shiva and
          Goddess Parvati were married, and the eternal fire from their wedding still
          burns here today.
        </p>
        <p className="text-[16px] md:text-[18px] text-justify md:text-center">
          We've got a team of local pros and experienced planners ready to make sure
          your big day goes off without a hitch. We totally get how important and
          emotional weddings are, so we'll handle everything – ceremonies, decor,
          food, where folks stay, and all those special traditions. Basically, we're
          here to take care of all the details from start to finish.
        </p>
        <p className="text-[16px] md:text-[18px] text-justify md:text-center">
          As your dedicated Triyuginarayan wedding planner, our goal is simple: to
          make your sacred celebration peaceful, personalized, and unforgettable.
        </p>

        <div className="mt-5">
          <button className="bg-[#A42D2B] hover:bg-[#8c2423] transition-colors rounded-[7px] px-6 py-3 text-white">
            Know more about us
          </button>
        </div>
      </div>
    </div>
    </div>
  );
};

export default About;
