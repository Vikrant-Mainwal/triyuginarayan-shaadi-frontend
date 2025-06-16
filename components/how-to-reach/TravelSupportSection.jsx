const TravelSupportSection = () => {
  return (
    <section className="w-[90%] max-w-5xl mx-auto mt-25 mb-35 text-start">
      {/* Heading and Intro */}
      <div className="flex flex-col text-center mb-14 gap-4">
        <h2 className="mb-10 px-5">
          Travel support and <span className="text-[#A42D2B]">charges</span>
        </h2>
        <p className="text-justify md:text-center mx-auto px-5">
          We offer optional transport assistance to help you travel with ease.
          Whether you’re arriving by air or road, our team can arrange pickup
          and drop.
        </p>
      </div>

      {/* Travel Options */}
      <div className="flex flex-col text-center gap-10">
        <h2 className="">Travel Options</h2>
        <div className="flex flex-col md:flex-row border border-dashed border-[#717171] rounded-[21px] gap-10 bg-[#FFF8F4] p-8 justify-center items-center">
          <div className="flex flex-col gap-5 w-[260px] py-6">
            <h6 className="font-bold text-[#A42D2B]">Route</h6>
            <p className="!text-[14px]">Dehradun Airport ⇄ Resort ⇄ Airport</p>
          </div>

          <div className="hidden md:block border-l-2 border-dashed h-40 border-[#717171]" />
          <div className="block md:hidden border border-dashed w-[200px] h-[1px] border-[#717171]" />

          <div className="flex flex-col gap-5 w-[260px] py-6">
            <h6 className="font-bold text-[#A42D2B]">Approx. Charges</h6>
            <p className="!text-[14px]">₹1,00,000 (Round-trip)</p>
          </div>

          <div className="hidden md:block border-l-2 border-dashed h-40 border-[#717171]" />
          <div className="block md:hidden border border-dashed w-[200px] h-[1px] border-[#717171]" />

          <div className="flex flex-col gap-5 w-[260px] py-6">
            <h6 className="font-bold text-[#A42D2B]">Includes</h6>
            <p className="!text-[14px]">Private vehicle, fuel, tolls</p>
          </div>
        </div>
        <p className="mx-auto text-justify md:text-center mt-6 px-5">
          Final costs depend on group size, season, and vehicle type — we’ll
          share exact details before confirming. Want us to take care of your
          travel? Just let us know during your wedding booking.
        </p>
      </div>
    </section>
  );
};

export default TravelSupportSection;
