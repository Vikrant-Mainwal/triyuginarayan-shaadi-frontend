import Image from "next/image";
import VehicleIcon from "../../asset/images/icons/vehicleIcon.svg";
import CompassIcon from "../../asset/images/icons/compass-icon.svg";
import IdIcon from "../../asset/images/icons/id-icon.svg";
import NetworkIcon from "../../asset/images/icons/network-icon.svg";
import StopIcon from "../../asset/images/icons/stop-icon.svg";
import WalkIcon from "../../asset/images/icons/walk.svg";

const travelTips = [
  {
    icon: VehicleIcon,
    alt: "Vehicle icon",
    text: "Mountain roads are narrow — smaller vehicles (SUVs or jeeps) are recommended.",
  },
  {
    icon: StopIcon,
    alt: "Stop icon",
    text: "Avoid late-night travel, especially with elderly guests.",
  },
  {
    icon: IdIcon,
    alt: "ID icon",
    text: "Keep valid ID proof for all guests.",
  },
  {
    icon: WalkIcon,
    alt: "Walk icon",
    text: "Vehicles may stop a short walk from the temple depending on traffic or weather.",
  },
  {
    icon: CompassIcon,
    alt: "Compass icon",
    text: "In winter, light snow is possible — we’ll coordinate local travel and timing for you.",
  },
  {
    icon: NetworkIcon,
    alt: "Network icon",
    text: "Phone network may be limited near the temple — we’ll guide you in advance.",
  },
];

const TravelTipsSection = () => {
  return (
    <section className="w-[90%] max-w-7xl mx-auto mt-10 p-10 text-start">
      <h2 className="text-[2.8rem] text-center font-semibold mb-10">
        Helpful Travel <span className="text-[#A42D2B]">Tips</span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {travelTips.map(({ icon, alt, text }, index) => (
          <article
            key={index}
            className="flex flex-col gap-4 bg-[#FFF0E8] shadow-[0_4px_32px_rgba(0,0,0,0.18)] p-8 rounded-[21px]"
          >
            <div className="flex justify-center md:justify-start">
            <Image src={icon} alt={alt} />
            </div>
            <p className="text-center md:text-start leading-relaxed">{text}</p>
          </article>
        ))}
      </div>
    </section>
  );
};

export default TravelTipsSection;
