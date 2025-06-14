"use client"
import Image from "next/image";
import Mandir from "../../asset/images/about-section.png";
import Link from "next/link";

const About = () => {
  // const navigate = useNavigate();

  return (
    <div>
      <div className="flex flex-col md:flex-row w-[90%] m-auto gap-10 mt-15 md:mt-25 mb-5 max-w-[1400px]">
        <div className="flex flex-col gap-4 md:w-[50%] text-center md:text-left justify-center px-6">
          <h2 className="text-[28px] md:text-[38px] font-bold raleway">
            About <span className="text-[#A42D2B]">Us</span>
          </h2>
          <p className="text-[16px] text-justify md:text-start">
            At Triyuginarayan Shaadi, we specialize in planning authentic and
            beautiful Triyuginarayan temple weddings. This is the place where
            Lord Shiva and Goddess Parvati were married, and the eternal fire
            from their wedding still burns here today.
          </p>
          <p className="text-[16px] text-justify md:text-start">
            We've got a team of local pros and experienced planners ready to
            make sure your big day goes off without a hitch. We totally get how
            important and emotional weddings are, so we'll handle everything –
            ceremonies, decor, food, where folks stay, and all those special
            traditions. Basically, we're here to take care of all the details
            from start to finish.
          </p>
          <p className="text-[16px] text-justify md:text-start">
            As your dedicated Triyuginarayan wedding planner, our goal is
            simple: to make your sacred celebration peaceful, personalized, and
            unforgettable.
          </p>

          <div className="mt-10 m-auto md:mt-15 md:ml-0">
             <Link href={'/about'} >
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
