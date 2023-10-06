import Facebook from "./auth/Facebook";
import Google from "./auth/Google";
import SignUp from "./auth/SignUp";
import Logo from "../assets/icons/navLogo.svg";
import Line from "../assets/icons/line.svg";
import { useNavigate } from "react-router-dom";

const GetStarted = () => {
  const navigate = useNavigate();

  const handleOnClick = () => {
    navigate("/");
  };

  return (
    <>
      {/* nav */}
      <nav className="pt-4 pl-4 cursor-pointer md:pt-6 md:pl-14">
        <img src={Logo} alt="Nav Logo" onClick={handleOnClick} />
      </nav>

      {/* SignUp/SignIn form */}
      <section className="absolute space-y-4 -translate-x-1/2 -translate-y-1/2 top-[53%] left-1/2">
        <h1
          id="title"
          className="text-3xl md:text-4xl font-inter text-[#141414] font-bold text-center"
        >
          Create an account
        </h1>
        <p className="font-inter text-[#434343] text-center font-light text-sm">
          Join millions of others in sharing successful <br /> moves on
          HelpMeOut.
        </p>
        <Google />
        <Facebook />

        {/* OR */}
        <div className="flex items-center justify-between md:justify-around text-[#B9C2C8] font-inter w-1/2 md:w-full">
          <img src={Line} alt="Line" />
          or
          <img src={Line} alt="Line" />
        </div>

        <SignUp />
      </section>
    </>
  );
};

export default GetStarted;
