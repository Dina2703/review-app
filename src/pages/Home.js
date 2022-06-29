import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <Link to="/sign-up">
        <div>Sign Up</div>
      </Link>
      <Link to="/sign-in">
        <div>Sign In</div>
      </Link>
    </>
  );
}

export default Home;
