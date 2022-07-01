import { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import SignUp from "./pages/SignUp";
import "./App.css";
import SignIn from "./pages/SignIn";
import { auth } from "./firebase-config";
import { signOut } from "firebase/auth";

function App() {
  const [isLogged, setLogged] = useState(true);

  const logout = async () => {
    await signOut(auth);
    localStorage.clear();
    setLogged(false);
    window.location.pathname = "/";
  };

  return (
    <div className="App">
      <nav className="App-header">
        <Link to="/" className="title">
          <h3>Review App</h3>
        </Link>

        {isLogged && (
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
        <Route path="/sign-up" element={<SignUp setLogged={setLogged} />} />
        <Route path="/sign-in" element={<SignIn setLogged={setLogged} />} />
      </Routes>
    </div>
  );
}

export default App;
