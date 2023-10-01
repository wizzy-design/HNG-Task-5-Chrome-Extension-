import feat1 from "../assets/icons/feat1.svg";
import feat2 from "../assets/icons/feat2.svg";
import feat3 from "../assets/icons/feat3.svg";
import dashboard from "../assets/images/video-repo.svg";

const Features = () => {
  return (
    <section className="my-32 px-8 mt-36">
      {/* Title */}
      <div className="text-center space-y-2 pb-2">
        <h1 id="title" className="text-[#141414] font-bold text-4xl font-sora">
          Features
        </h1>
        <p id="sub-title" className="text-[#616163] font-work">
          Key Highlights of Our Extension
        </p>
      </div>

      {/* Info Section */}
      <div className="flex justify-between px-12 py-12 items-center gap-x-4">
        {/* left */}
        <div id="left" className="space-y-10">
          <div id="card1" className="flex gap-x-4">
            <div id="logo">
              <img src={feat1} alt="Record button" className="w-8"/>
            </div>
            <div>
              <h2 className="text-[#1B233D] font-bold text-xl font-inter">Simple Screen Recording</h2>
              <p>
                Effortless screen recording for everyone. Record <br /> with
                ease, no tech expertise required.
              </p>
            </div>
          </div>

          <div id="card2" className="flex gap-x-4">
            <div id="logo">
              <img src={feat2} alt="Share button" className="w-8"/>
            </div>
            <div>
              <h2 className="text-[#1B233D] font-bold text-xl font-inter">Easy-to-Share URL</h2>
              <p>
                Share your recordings instantly with a single link. <br /> No
                attachments, no downloads.
              </p>
            </div>
          </div>

          <div id="card3" className="flex gap-x-4">
            <div id="logo">
              <img src={feat3} alt="Refresh button" className="w-8"/>
            </div>
            <div>
              <h2 className="text-[#1B233D] font-bold text-xl font-inter">Revisit Recordings</h2>
              <p>
                Access and review your past content effortlessly. <br /> Your
                recordings, always at your fingertips.
              </p>
            </div>
          </div>
        </div>

        {/* Right */}
        <div id="right" className="max-w-fit">
          <img src={dashboard} alt="Dashboard of saved videos" className="w-[446px]"/>
        </div>
      </div>
    </section>
  );
};

export default Features;