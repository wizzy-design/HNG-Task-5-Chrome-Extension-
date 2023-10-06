/* eslint-disable no-unused-vars */
import { useNavigate } from "react-router-dom";
import { auth } from "../components/auth/Firebase";
import { signOut } from "firebase/auth";

const Dashboard = () => {
  const navigate = useNavigate();
  const user = auth.currentUser;

  let displayName, email, photoURL, emailVerified, uid;
  if (user !== null) {
    // The user object has basic properties such as display name, email, etc.
    displayName = user.displayName;
    email = user.email;
    uid = user.uid;
  }

  //   Sign Out
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        navigate("/");
      })
      .catch((error) => {
        // An error happened.
      });
  };

  return (
    <section>
      <div>Welcome to your dashboard {email}</div>
      <button onClick={handleSignOut}>Log Out</button>
    </section>
  );
};

export default Dashboard;
