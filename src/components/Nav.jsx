// Navigation bar component
import logo from "../assets/icons/navLogo.svg";

const Nav = () => {
  return (
    <nav className="flex items-center justify-between px-6 py-6 md:px-20 shadow-navShadow">
      {/* Nav Logo */}
      <div id="logo">
        <img src={logo} alt="" />
      </div>

      {/* Nav Links */}
      <div id="links" className="hidden space-x-10 font-medium text-black md:flex">
        <a href="#">Feature</a>
        <a href="#">How It Works</a>
      </div>

      {/* Signup/Login Page Link */}
      <div id="getStarted">
        <a href="#" className="text-[#120B48] font-semibold text-md md:text-lg font-sora">Get Started</a>
      </div>
    </nav>
  );
};

export default Nav;
