import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyARVnSyKanWGwVxrwV19I3VenC-T-UhcCQ",
  authDomain: "helpmeout-extension.firebaseapp.com",
  projectId: "helpmeout-extension",
  storageBucket: "helpmeout-extension.appspot.com",
  messagingSenderId: "893150619796",
  appId: "1:893150619796:web:71816ac5a3725c17086c81"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
export {auth, provider};