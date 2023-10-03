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
      <div className="space-y-4 flex flex-col items-center md:block">
        <h1 className="text-[#141414] text-2xl text-center md:text-left md:text-6xl font-bold font-sora">
          Show Them <br /> Don&apos;t Just Tell
        </h1>
        <p className="text-lg pb-5 text-center md:text-left">
          Help your friends and loved ones by creating and sending <br /> videos
          on how to get things done on a website.
        </p>
        <button className="bg-[#120B48] text-white flex px-4 gap-x-2 md:px-8 py-2 md:py-4 md:gap-2 items-center rounded-lg">
          Install HelpMeOut <img src={arrow} alt="Arrow" className="pl-0.5"/>
        </button>
      </div>

      {/* Images display */}
      <div className="grid grid-cols-2 grid-rows-1 gap-6 max-w-fit mb-4 md:mb-0 md:w-[45%]">
        <div className="max-w-fit space-y-5 relative">
          <img src={boy} alt="Boy" className="rounded-xl relative z-20" />
          <img
            src={lwoman}
            alt="Woman with laptop"
            className="rounded-xl z-20 relative"
          />
          <img src={blue} alt="Blue grid" className="hidden md:block absolute z-10 top-44 right-10" />
        </div>

        <div className="max-w-fit relative">
          <img
            src={pwoman}
            alt="Woman with phone"
            className="rounded-xl relative z-20"
          />
          <img
            src={grey}
            alt="Grey grid"
            className="hidden md:block absolute z-10 left-12 bottom-44"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
