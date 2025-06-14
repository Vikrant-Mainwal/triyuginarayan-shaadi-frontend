import Image from 'next/image';
import imageSrc from '../../asset/images/shivparvati.png';

const SacredJourneySection = () => {
  return (
    <section className="flex flex-col md:flex-row m-auto mt-10 gap-4 md:gap-7 w-[90%] max-w-[1200px]">
      <div className="flex-shrink-0">
        <Image src={imageSrc} alt="Shivparvati" className="object-contain h-[500px]" />
      </div>

      <div className='text-center md:text-start px-5 flex flex-col gap-10'>
        <h1 className="leading-tight ">
          “Your <span className="text-[#A42D2B]">Journey</span> to a{" "}
          <span className="text-[#A42D2B]">Sacred</span> Beginning”
        </h1>
        <div className="flex flex-col gap-5 mt-3 text-justify md:text-start">
          <p>
            Planning your wedding at Triyuginarayan Temple means beginning your married life
            with blessings, peace, and nature all around you. Located in the hills of Rudraprayag, Uttarakhand,
            this is the same place where Lord Shiva and Goddess Parvati were married. The sacred fire from their
            wedding still burns at the temple — a symbol of eternal love.
          </p>
          <p>
            Whether you're coming from near or far, we’re here to guide you — every step of the way.
          </p>
        </div>
      </div>
    </section>
  );
};

export default SacredJourneySection;
