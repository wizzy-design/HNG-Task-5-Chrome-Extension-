import arrow from "../assets/icons/white-arrow-right.svg"; // White Arrow
import boy from "../assets/images/boy-using-laptop.svg";
import lwoman from "../assets/images/woman-using-laptop.svg";
import pwoman from "../assets/images/woman-using-phone.svg";
import grey from "../assets/icons/greydots.svg";
import blue from "../assets/icons/bluedots.svg";

const HeroSection = () => {
  return (
    <section className="flex flex-col-reverse px-20 mt-10 md:flex-row md:justify-between md:mt-24 md:items-center">
      {/* Word Descriptions */}
      <div className="flex flex-col items-center space-y-4 md:block">
        <h1 className="text-[#141414] text-3xl text-center md:text-left md:text-6xl font-bold font-sora">
          Show Them <br /> Don&apos;t Just Tell
        </h1>
        <p className="pb-5 text-lg text-center md:text-left">
          Help your friends and loved ones by creating and sending <br /> videos
          on how to get things done on a website.
        </p>
        <button className="bg-[#120B48] text-white flex px-4 gap-x-2 md:px-8 py-2 md:py-4 md:gap-2 items-center rounded-lg">
          Install HelpMeOut <img src={arrow} alt="Arrow" className="pl-0.5"/>
        </button>
      </div>

      {/* Images display */}
      <div className="grid grid-cols-2 grid-rows-1 gap-6 max-w-fit mb-4 md:mb-0 md:w-[45%]">
        <div className="relative space-y-5 max-w-fit">
          <img src={boy} alt="Boy" className="relative z-20 rounded-xl" />
          <img
            src={lwoman}
            alt="Woman with laptop"
            className="relative z-20 rounded-xl"
          />
          <img src={blue} alt="Blue grid" className="absolute z-10 hidden md:block top-44 right-10" />
        </div>

        <div className="relative max-w-fit">
          <img
            src={pwoman}
            alt="Woman with phone"
            className="relative z-20 rounded-xl"
          />
          <img
            src={grey}
            alt="Grey grid"
            className="absolute z-10 hidden md:block left-12 bottom-44"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
