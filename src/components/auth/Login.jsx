/* eslint-disable no-unused-vars */
import Logo from "../../assets/icons/navLogo.svg";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { auth } from "../auth/Firebase";
import { signInWithEmailAndPassword } from "firebase/auth";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log("I user ", user, "has logged in");
        if (user) {
          navigate("/dashboard");
        }
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error("Sign-in error:", errorCode, errorMessage);

        // Set the error message in the state
        setErrorMessage(errorMessage);
      });
  };

  const handleOnClick = () => {
    navigate("/");
  };

  return (
    <section>
      {/* nav */}
      <nav className="pt-4 pl-4 cursor-pointer md:pt-6 md:pl-14">
        <img src={Logo} alt="Nav Logo" onClick={handleOnClick} />
      </nav>

      {/* LogIn form */}
      <div className="absolute space-y-4 -translate-x-1/2 -translate-y-1/2 top-[45%] left-1/2">
        <h1
          id="title"
          className="text-3xl md:text-4xl font-inter text-[#141414] font-bold text-center"
        >
          Login
        </h1>
        <p className="font-inter text-[#434343] text-center font-light text-sm">
          Welcome Back
        </p>

        {/* Form */}
        <form className="flex flex-col gap-2" onSubmit={handleSubmit}>
          {/* Email */}
          <label htmlFor="email" className="text-sm font-medium font-work">
            Email
          </label>
          <input
            type="email"
            id="email"
            placeholder="Enter your email address"
            className="w-[18rem] md:w-[28rem] font-work font-medium text-[1rem] border-[#B6B3C6] border-solid border-[1px] text-[#626262] rounded-xl py-2 pl-2"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            required
          />

          {/* Password */}
          <label
            htmlFor="password"
            className="mt-2 text-sm font-medium font-work"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            placeholder="Enter your Password"
            className="w-[18rem] md:w-[28rem] font-work font-medium text-[1rem] border-[#B6B3C6] border-solid border-[1px] text-[#626262] rounded-xl py-2 pl-2"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            required
          />

          {/* LogIn Button */}
          <input
            type="submit"
            value="Log In"
            className="w-[18rem] md:w-[28rem] font-work font-medium text-[1rem] md:text-[1.125rem] bg-[#120B48] border-[#120B48] border-solid border-[1px] text-white rounded-xl py-2 pl-2 cursor-pointer mt-6"
          />
        </form>
        <p>{errorMessage}</p>
      </div>
    </section>
  );
};

export default Login;
