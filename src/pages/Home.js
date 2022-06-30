import { useState } from "react";
import { Link } from "react-router-dom";
import { auth } from "../firebase-config";
import { onAuthStateChanged } from "firebase/auth";

function Home() {
  const [userLoggedIn, setUserLoggedIn] = useState(null);
  onAuthStateChanged(auth, (currentUser) => {
    setUserLoggedIn(currentUser);
  });
  return (
    <>
      <div className="pageContainer">
        <header>
          <p className="pageHeader">Welcome {userLoggedIn?.displayName}</p>
        </header>
      </div>
      {!userLoggedIn && (
        <div>
          <Link to="/sign-up">
            <div>Sign Up</div>
          </Link>
          <Link to="/sign-in">
            <div>Sign In</div>
          </Link>
        </div>
      )}
    </>
  );
}

export default Home;
