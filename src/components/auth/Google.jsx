/* eslint-disable no-unused-vars */
import { auth } from "./Firebase";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import google from "../../assets/icons/google.svg";

const Google = () => {
  const provider = new GoogleAuthProvider();
  // Function that handles sign-in with Google
  const continueWithGoogle = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
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
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });
  };

  // Logged-in user
  // const user = auth.currentUser;
  /* {user && <p>{user.displayName}</p>} */

  return (
    <button
      onClick={continueWithGoogle}
      className="flex text-[#141414] font-inter font-medium text-[1rem] border-[#141414] border-solid border-[1px] w-[18rem] md:w-[28rem] rounded-xl justify-center py-2"
    >
      <img src={google} alt="Google icon" className="pr-5" /> Continue with
      Google
    </button>
  );
};

export default Google;
