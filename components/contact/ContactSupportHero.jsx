import Image from "next/image";
import contactUsHero from "../../asset/images/contact-us.svg";

const ContactSupportHero = () => {
  return (
    <div className="w-[90%] max-w-7xl mx-auto my-16 flex flex-col md:flex-row items-center gap-10">
      <div className="w-full md:w-1/2">
        <Image
          src={contactUsHero}
          alt="Contact support illustration"
          className="w-full h-auto object-contain"
        />
      </div>

      <div className="w-full md:w-1/2 flex flex-col gap-6 text-center md:text-start">
        <h2 className="text-[35px] md:text-[52px] font-semibold leading-snug">
          “We're here to help <span className="text-[#A42D2B]">Begin</span> your{" "}
          <span className="text-[#A42D2B]">New journey</span>”
        </h2>
        <div className="flex flex-col gap-4 text-[16px] md:text-[18px] text-justify md:text-center">
          <p>
            Planning a wedding is a big step. Planning one at a sacred place
            like Triyuginarayan Temple makes it even more special — and we
            understand how important it is to get every detail just right.
          </p>
          <p>
            Whether you’re just starting to think about a temple wedding or
            you’ve already chosen your date, our team is here to support you
            with care, clarity, and complete attention. No pressure. No rush.
            Just a friendly hand to guide you toward a meaningful and memorable
            wedding in the lap of the Himalayas.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactSupportHero;
