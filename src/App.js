import { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import SignUp from "./pages/SignUp";
import "./App.css";
import SignIn from "./pages/SignIn";
import { auth } from "./firebase-config";
import { signOut } from "firebase/auth";
import CreateReview from "./pages/CreateReview";
import MyReviews from "./pages/MyReviews";

function App() {
  const [isAuth, setAuth] = useState(localStorage.getItem("isAuth"));

  const logout = async () => {
    await signOut(auth);
    localStorage.clear();
    setAuth(false);
    window.location.pathname = "/";
  };

  return (
    <div className="App">
      <nav className="App-header">
        <Link to="/" className="title">
          <h3>Review App</h3>
        </Link>

        {isAuth && (
          <button
            style={{ position: "absolute", right: "5%" }}
            onClick={logout}
            className="signOut"
          >
            SignOut
          </button>
        )}
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sign-up" element={<SignUp setAuth={setAuth} />} />
        <Route path="/sign-in" element={<SignIn setAuth={setAuth} />} />
        <Route path="/create-review" element={<CreateReview />} />
        <Route path="/my-reviews" element={<MyReviews isAuth={isAuth} />} />
      </Routes>
    </div>
  );
}

export default App;
