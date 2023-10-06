/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import { auth } from "./Firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  // Function that handles what happens after submit button is hit.
  const handleSubmit = (e) => {
    e.preventDefault();

    // Sign the user up
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed up
        const user = userCredential.user;
        console.log(user);
        navigate("/dashboard");
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });
  };

  return (
    <section>
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

        {/* Sign Up Button */}
        <input
          type="submit"
          value="Sign Up"
          className="w-[18rem] md:w-[28rem] font-work font-medium text-[1rem] md:text-[1.125rem] bg-[#120B48] border-[#120B48] border-solid border-[1px] text-white rounded-xl py-2 pl-2 cursor-pointer mt-6"
        />
      </form>
      <p className="mt-2 text-sm font-medium text-center font-work">
        Already have an account? Sign In{" "}
        <Link to="/login" className="text-[#413c69] font-semibold">
          here
        </Link>
        .
      </p>
    </section>
  );
};

export default SignUp;
