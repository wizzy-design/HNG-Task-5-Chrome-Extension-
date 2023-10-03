import logo from "../assets/icons/footLogo.svg";

const Footer = () => {
  return (
    <section className="flex flex-col items-center md:items-start md:flex-row md:justify-between bg-[#120B48] px-20 py-14 mt-14">
      {/* Left side */}
      <div id="logo">
        <img src={logo} alt="Footer Logo" />
      </div>

      {/* Right side */}
      <div
        id="footLinks"
        className="flex flex-col space-y-8 md:space-y-0 md:flex-row md:justify-between md:gap-x-40"
      >
        <div id="footLink1" className="mt-10 space-y-2 text-white md:mt-0">
          <h2 className="font-bold text-center font-sora md:text-left">Menu</h2>
          <ul className="space-y-2 cursor-pointer">
            <li className="text-center font-work md:text-left">Home</li>
            <li className="text-center font-work md:text-left">Converter</li>
            <li className="text-center font-work md:text-left">How it works</li>
          </ul>
        </div>

        <div id="footLink2" className="space-y-2 text-white">
          <h2 className="font-bold text-center font-sora md:text-left">
            About Us
          </h2>
          <ul className="space-y-2 cursor-pointer">
            <li className="text-center font-work md:text-left">About</li>
            <li className="text-center font-work md:text-left">Contact Us</li>
            <li className="text-center font-work md:text-left">
              Privacy Policy
            </li>
          </ul>
        </div>

        <div id="footLink3" className="space-y-2 text-white">
          <h2 className="font-bold text-center font-sora md:text-left">
            Screen Record
          </h2>
          <ul className="space-y-2 cursor-pointer">
            <li className="text-center font-work md:text-left">
              Browser Window
            </li>
            <li className="text-center font-work md:text-left">Desktop</li>
            <li className="text-center font-work md:text-left">Application</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Footer;
