"use client";
import Image from "next/image";
import Mandir from "../../asset/images/about-section.png";
import Link from "next/link";

const About = () => {
  // const navigate = useNavigate();

  return (
    <div>
      <div className="flex flex-col md:flex-row w-[90%] m-auto gap-10 mt-15 md:mt-25 mb-5 max-w-[1400px]">
        <div className="flex flex-col gap-4 md:w-[50%] text-center md:text-left justify-center px-6">
          <p className="heading">
            About <span className="text-[#A42D2B]">Us</span>
          </p>
          <p className="para text-justify md:text-start">
            At Triyuginarayan Shaadi, we deal with organizing original and
            lovely Triyuginarayan temple weddings. It is here that Lord Shiva
            and Goddess Parvati got married, and the ever-lasting fire from
            their wedding still exists here today.
          </p>
          <p className="para text-justify md:text-start">
            We have local experts and experienced planners who will make your
            big day go without any glitch. We know how important and sentimental
            weddings are, so we will take care of everything – ceremonies,
            decor, food, where people stay, and all that ritualistic stuff. We
            also offer complete support on Triyuginarayan Temple Wedding Cost
            and tailored packages.
          </p>
          <p className="para text-justify md:text-start">
            Being your own Triyuginarayan wedding planner, our goal is simple:
            to have your sacred ritual peaceful, tailored, and unforgettable.
          </p>

          <div className="mt-10 m-auto md:mt-15 md:ml-0">
            <Link href={"/about"}>
              <button className="bg-[#A42D2B] rounded-[7px] px-6 py-3 text-white cursor-pointer">
                Know more about us
              </button>
            </Link>
          </div>
        </div>
        <div className="md:w-[50%] flex justify-center mt-10">
          <Image
            src={Mandir}
            alt="Triyuginarayan Temple"
            className="w-[300px] md:w-[500px] object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
