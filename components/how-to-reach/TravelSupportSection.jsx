const TravelSupportSection = () => {
  return (
    <section className="w-[90%] max-w-5xl mx-auto mt-10 p-10 text-start">
      {/* Heading and Intro */}
      <div className="flex flex-col text-center mb-14 gap-4">
        <h2 className="text-[28px] md:text-[50px] font-semibold">
          Travel support and <span className="text-[#A42D2B]">charges</span>
        </h2>
        <p className="text-[16px] md:text-[18px] text-justify md:text-center max-w-3xl mx-auto">
          We offer optional transport assistance to help you travel with ease.
          Whether you’re arriving by air or road, our team can arrange pickup and drop.
        </p>
      </div>

      {/* Travel Options */}
      <div className="flex flex-col text-center gap-10">
        <h3 className="text-[28px] md:text-[50px] font-semibold">Travel Options</h3>
        <div className="flex flex-col md:flex-row border border-dashed border-[#717171] rounded-[21px] gap-10 bg-[#FFF8F4] p-8 justify-center items-center">
          <div className="flex flex-col gap-3">
            <h6 className="text-[2.3rem] font-medium">Route</h6>
            <p>Dehradun Airport ⇄ Resort ⇄ Airport</p>
          </div>

          <div className="hidden md:block border-l-2 border-dashed h-40 border-[#717171]" />
          <div className="block md:hidden border border-dashed w-[200px] h-[1px] border-[#717171]" />

          <div className="flex flex-col gap-3">
            <h6 className="text-[2.3rem] font-medium">Approx. Charges</h6>
            <p>₹1,00,000 (Round-trip)</p>
          </div>

          <div className="hidden md:block border-l-2 border-dashed h-40 border-[#717171]" />
          <div className="block md:hidden border border-dashed w-[200px] h-[1px] border-[#717171]" />


          <div className="flex flex-col gap-3">
            <h6 className="text-[2.3rem] font-medium">Includes</h6>
            <p>Private vehicle, fuel, tolls</p>
          </div>
        </div>
        <p className="max-w-3xl mx-auto text-[16px] md:text-[18px] text-justify md:text-center mt-6">
          Final costs depend on group size, season, and vehicle type — we’ll
          share exact details before confirming. Want us to take care of your
          travel? Just let us know during your wedding booking.
        </p>
      </div>
    </section>
  );
};

export default TravelSupportSection;
