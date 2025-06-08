import Image from "next/image";
import Pheras from "../../asset/images/pheras.svg";
import Havan from "../../asset/images/havan.svg";
import Geet from "../../asset/images/mangal-geet.svg";
import Dhol from "../../asset/images/dhol.svg";
import Jaimala from "../../asset/images/jaimala.svg";

const ExperienceSection = () => {
  return (
    <div className="w-[90%] m-auto p-10 mt-5 flex flex-col items-center gap-10 text-center">
      <h2 className="text-[35px] md:text-[67px] font-bold raleway">What you will experience?</h2>
      <p className="text-[16px] md:text-[18px]">
        The rituals at Triyuginarayan Temple are simple but deeply meaningful:
      </p>

      <div className="flex flex-col gap-10 p-5 md:p-10 m-auto">
        <div className="flex gap-4 justify-center flex-wrap">
          <div className="flex flex-col gap-2 justify-center items-center w-[200px] md:w-[300px]">
            <Image src={Pheras} alt="Pheras image" className="w-[100px] md:w-[150px]" />
            <p className="text-[16px] md:text-[18px]">
              Pheras around the same fire where Shiva-Parvati got married
            </p>
          </div>
          <div className="flex flex-col gap-2 justify-center items-center w-[200px] md:w-[300px]">
            <Image src={Havan} alt="Havan image" className="w-[100px] md:w-[150px]" />
            <p className="text-[16px] md:text-[18px]">
              Havan (sacred fire ceremony) with holy chants
            </p>
          </div>
          <div className="flex flex-col gap-2 justify-center items-center w-[200px] md:w-[300px]">
            <Image src={Geet} alt="Geet image" className="w-[100px] md:w-[150px]" />
            <p className="text-[16px] md:text-[18px]">
              Mangal Geet – local songs that bless the bride and groom
            </p>
          </div>
        </div>

        <div className="flex gap-4 justify-center flex-wrap">
          <div className="flex flex-col gap-2 justify-center items-center w-[200px] md:w-[300px]">
            <Image src={Dhol} alt="Dhol image" className="w-[100px] md:w-[150px]" />
            <p className="text-[16px] md:text-[18px]">
              Dhol–Damau music to celebrate your love
            </p>
          </div>
          <div className="flex flex-col gap-2 justify-center items-center w-[200px] md:w-[300px]">
            <Image src={Jaimala} alt="Jaimala image" className="w-[100px] md:w-[150px]" />
            <p className="text-[16px] md:text-[18px]">
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
