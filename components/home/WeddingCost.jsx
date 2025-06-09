import React from 'react'

const WeddingCost = () => {
  return (
    <div className=" w-[80%] flex flex-col gap-6 m-auto mt-25 mb-5 text-center">
        <h2 className="text-[28px] md:text-[50px] font-bold raleway">
          Triyuginarayan Temple
          <span className="text-[#A42D2B]">{"   "}Wedding Cost</span>
        </h2>
        <div>
          <p className="text-[16px] md:text-[18px] text-center m-auto">
            Custom quotes are available based on your guest count and
            preferences. Every couple receives complete support from our
            Triyuginarayan wedding planner team.
          </p>
        </div>
        <div>
          <p className="text-[16px] md:text-[18px] text-center m-auto">
            Planning a wedding at the sacred Triyuginarayan Temple is not only
            spiritually fulfilling but also surprisingly affordable. Whether
            you’re looking for an intimate ceremony or a complete destination
            wedding experience, the Triyuginarayan temple wedding cost starts at
            just ₹60,000. For couples seeking a more elaborate setup with
            rituals, décor, music, and registration, our all-inclusive packages
            begin from ₹3,00,000. Every cost is thoughtfully designed to include
            comfort, tradition, and warm hospitality — giving you a divine start
            without overwhelming expenses.
          </p>
        </div>
        <button className="bg-[#A42D2B] rounded-[7px] px-6 py-3 m-auto text-white">
          Get my Custom Quote
        </button>
      </div>
  )
}

export default WeddingCost