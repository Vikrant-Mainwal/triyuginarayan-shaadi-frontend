import Image from "next/image";
import Pheras from "../../asset/images/badges/pheras.svg";
import Havan from "../../asset/images/badges/havan.svg";
import Geet from "../../asset/images/badges/mangal-geet.svg";
import Dhol from "../../asset/images/badges/dhol.svg";
import Jaimala from "../../asset/images/badges/jaimala.svg";

const ExperienceSection = () => {
  return (
    <div className="w-[90%] m-auto p-10 mt-25 flex flex-col items-center gap-10 text-center">
      <h2 className="text-[35px] md:text-[52px] text-center raleway font-bold">
        What you will <span className="text-[#A42D2B]">experience?</span>{" "}
      </h2>
      <p>
        The rituals at Triyuginarayan Temple are simple but deeply meaningful:
      </p>

      <div className="flex flex-col gap-10 p-5 md:p-10 m-auto">
        <div className="flex gap-14 md:gap-10  justify-center flex-wrap">
          <div className="flex flex-col gap-2 justify-center items-center w-[250px]">
            <Image
              src={Pheras}
              alt="Pheras image"
              className="w-[100px]"
            />
            <p>Pheras around the same fire where Shiva-Parvati got married</p>
          </div>
          <div className="flex flex-col gap-2 justify-center items-center w-[250px]">
            <Image
              src={Havan}
              alt="Havan image"
              className="w-[100px]"
            />
            <p>Havan (sacred fire ceremony) with holy chants</p>
          </div>
          <div className="flex flex-col gap-2 justify-center items-center w-[250px]">
            <Image
              src={Geet}
              alt="Geet image"
              className="w-[100px]"
            />
            <p>Mangal Geet – local songs that bless the bride and groom</p>
          </div>
        </div>

        <div className="flex gap-14 md:gap-10 justify-center flex-wrap">
          <div className="flex flex-col gap-2 justify-center items-center w-[250px]">
            <Image
              src={Dhol}
              alt="Dhol image"
              className="w-[100px]"
            />
            <p>Dhol–Damau music to celebrate your love</p>
          </div>
          <div className="flex flex-col gap-2 justify-center items-center w-[250px]">
            <Image
              src={Jaimala}
              alt="Jaimala image"
              className="w-[100px]"
            />
            <p>
              Traditional rituals like Jaimala and Tilak, all guided by
              experienced priests
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExperienceSection;
