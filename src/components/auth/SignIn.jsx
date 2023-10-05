import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "./Firebase";
import { useEffect, useState } from "react";
import Home from "../auth/Home";

const SignIn = () => {
  const [value, setValue] = useState("");

  const handleClick = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        setValue(result.user.email);
        localStorage.setItem("email", result.user.email);
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = provider.credentialFromError(error);
        console.log(errorCode, errorMessage, email, credential);
      });
  };

  useEffect(() => {
    setValue(localStorage.getItem("email"));
  }, [setValue]);

  return (
    <section>
      {value ? <Home /> : <button onClick={handleClick}>Sign In</button>}
    </section>
  );
};

export default SignIn;
