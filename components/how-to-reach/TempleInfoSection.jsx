import Image from "next/image";
import elloraCavesImg from "../../asset/images/Ellora-caves.svg";
import mapImg from "../../asset/images/map.svg";
import mapMobile from "../../asset/images/map-mob.svg";

const TempleInfoSection = () => {
  return (
    <section className="w-full flex flex-col items-center gap-20 py-10 mt-25">
      {/* Why Special Section */}
      <div className="flex flex-col gap-10 w-[90%] max-w-5xl text-center px-6">
        <h2 className="text-[35px] md:text-[52px] text-center mb-10 raleway font-bold">
          Why this place is so <span className="text-[#A42D2B]">Special</span>?
        </h2>
        <div className="flex flex-col gap-6 leading-relaxed">
          <p className="text-justify md:text-center">
            Triyuginarayan Temple isn’t just a wedding venue — it’s a divine location. According to mythology,
            this is where Lord Shiva and Parvati were married, and Lord Vishnu stood witness to their union.
            The temple’s eternal fire, called the Akhand Dhuni, still burns to this day.
            That’s why couples come from all over — to begin their forever where sacred love once started.
          </p>
          <p className="text-justify md:text-center">
            Triyuginarayan Temple isn’t just a wedding venue — it’s a divine location. According to mythology,
            this is where Lord Shiva and Parvati were married, and Lord Vishnu stood witness to their union.
            The temple’s eternal fire, called the Akhand Dhuni, still burns to this day.
            That’s why couples come from all over — to begin their forever where sacred love once started.
          </p>
        </div>

        <div className="flex flex-col gap-4 justify-center items-center mt-6">
          <Image
            src={elloraCavesImg}
            alt="Triyuginarayan Temple caves"
            className="w-[800px]"
          />
          <p className="mt-2 text-sm italic">A scene depicting the wedding of Shiva and Goddess Parvati</p>
        </div>
      </div>

      {/* How to Reach Section */}
      <div className="flex flex-col gap-10 w-[80%] text-center">
        <h2>How to Reach <span className="text-[#A42D2B]">Triyuginarayan Temple?</span> </h2>
        <p className="text-justify md:text-center">
          Triyuginarayan is around 15 km from Sonprayag, a key stop on the Kedarnath route.
          It’s well connected, but the last stretch is through the mountains — peaceful and scenic.
        </p>
        <div className="hidden md:flex md:gap-6 mt-6">
        <Image src={mapImg} alt="Triyuginarayan Temple location map" className="mx-auto rounded" />
        </div>
        <div className="block md:hidden">
        <Image src={mapMobile} alt="Triyuginarayan Temple location map" className="mx-auto rounded" />
        </div>
      </div>
    </section>
  );
};

export default TempleInfoSection;
