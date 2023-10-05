/* eslint-disable no-unused-vars */
import facebook from "../../assets/icons/facebook.svg";
import { FacebookAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "./Firebase";

const Facebook = () => {
  const provider = new FacebookAuthProvider();

  const continueWithFacebook = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        // The signed-in user info.
        const user = result.user;

        // This gives you a Facebook Access Token. You can use it to access the Facebook API.
        const credential = FacebookAuthProvider.credentialFromResult(result);
        const accessToken = credential.accessToken;

        // IdP data available using getAdditionalUserInfo(result)
        // ...
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = FacebookAuthProvider.credentialFromError(error);

        // ...
      });
  };

  return (
    <button
      className="flex text-[#141414] font-inter font-medium text-[1rem] border-[#141414] border-solid border-[1px] w-[18rem] md:w-[28rem] rounded-xl justify-center py-2"
      onClick={continueWithFacebook}
    >
      <img src={facebook} alt="Facebook icon" className="pr-5" /> Continue with
      Facebook
    </button>
  );
};

export default Facebook;
