import SacredJourneySection from "@/components/how-to-reach/SacredJourneySection";
import TempleInfoSection from "@/components/how-to-reach/TempleInfoSection";
import TravelSupportSection from "@/components/how-to-reach/TravelSupportSection";
import TravelTipsSection from "@/components/how-to-reach/TravelTipsSection";
import React from "react";

const HowToReach = () => {
  return <div className="max-w-[1400px] w-full mx-auto ">
    
    <SacredJourneySection/>
    <TempleInfoSection/>
    <TravelTipsSection/>
    <TravelSupportSection/>
  </div>;
};

export default HowToReach;
