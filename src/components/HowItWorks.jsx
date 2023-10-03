import illustration from "../assets/images/illustration.svg";

const HowItWorks = () => {
  return (
    <section className="flex flex-col items-center md:block">
      {/* Title */}
      <div id="title">
        <h1 className="text-center mb-5 md:mb-0 text-3xl md:text-4xl text-[#141414] font-bold font-sora">
          How it works
        </h1>
      </div>

      {/* The steps to use product */}
      <div
        id="steps"
        className="flex flex-col pt-6 space-y-6 md:flex-row md:px-20 md:py-14 md:space-y-0 md:justify-between"
      >
        {/* Step 1 */}
        <div id="step1" className="flex flex-col items-center space-y-3">
          <div
            id="step-title"
            className="flex items-center space-x-2 md:flex-col md:space-y-4 md:space-x-0"
          >
            <h1 className="text-center text-2xl font-bold bg-[#120B48] text-white px-3 py-0.5 md:px-4 md:py-1.5 rounded-full cursor-pointer font-inter">
              1
            </h1>
            <h1 className="text-center font-inter text-[#1B233D] text-xl font-semibold">
              Record Screen
            </h1>
          </div>

          <div id="step-body">
            <p className="text-center text-[#616163] font-work text-[.8rem] md:text-[1rem]">
              Click the &quot;Start Recording&quot; button in <br /> our
              extension. choose which part <br /> of your screen to capture and
              who <br /> you want to send it to.
            </p>
          </div>

          <div id="step-illustration">
            <img
              className="w-[15rem] md:w-[20rem]"
              src={illustration}
              alt="Image illustrating how to use product"
            />
          </div>
        </div>

        {/* Step 2 */}
        <div id="step2" className="flex flex-col items-center space-y-3">
          <div
            id="step-title"
            className="flex items-center space-x-2 md:flex-col md:space-y-4 md:space-x-0"
          >
            <h1 className="text-center text-2xl font-bold bg-[#120B48] text-white px-3 py-0.5 md:px-4 md:py-1.5 rounded-full cursor-pointer font-inter">
              2
            </h1>
            <h1 className="text-center font-inter text-[#1B233D] text-xl font-semibold">
              Share Your Recording
            </h1>
          </div>

          <div id="step-body">
            <p className="text-center text-[#616163] font-work text-[.8rem] md:text-[1rem]">
              We generate a shareable link for <br /> your video. Simply send it
              to your <br /> audience via email or copy the link <br /> to send
              via any platform.
            </p>
          </div>

          <div id="step-illustration">
            <img
              className="w-[15rem] md:w-[20rem]"
              src={illustration}
              alt="Image illustrating how to use product"
            />
          </div>
        </div>

        {/* Step 3 */}
        <div id="step3" className="flex flex-col items-center space-y-3">
          <div
            id="step-title"
            className="flex items-center space-x-2 md:flex-col md:space-y-4 md:space-x-0"
          >
            <h1 className="text-center text-2xl font-bold bg-[#120B48] text-white px-3 py-0.5 md:px-4 md:py-1.5 rounded-full cursor-pointer font-inter">
              3
            </h1>
            <h1 className="text-center font-inter text-[#1B233D] text-xl font-semibold">
              Learn Effortlessly
            </h1>
          </div>

          <div id="step-body">
            <p className="text-center text-[#616163] font-work text-[.8rem] md:text-[1rem]">
              Recipients can access your video <br /> effortlessly through the
              provided <br />
              link, with our user-friendly interface <br /> suitable for
              everyone.
            </p>
          </div>

          <div id="step-illustration">
            <img
              className="w-[15rem] md:w-[20rem]"
              src={illustration}
              alt="Image illustrating how to use product"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
