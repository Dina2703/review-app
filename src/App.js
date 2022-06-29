import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import SignUp from "./pages/SignUp";
import "./App.css";
import SignIn from "./pages/SignIn";
import { auth } from "./firebase-config";
import { signOut } from "firebase/auth";

function App() {
  const logout = async () => {
    await signOut(auth);
  };
  return (
    <div className="App">
      <div className="App-header">
        <Link to="/">
          <h3>Review App</h3>
        </Link>

        <button style={{ position: "absolute", right: "5%" }} onClick={logout}>
          SignOut
        </button>
      </div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/sign-in" element={<SignIn />} />
      </Routes>
    </div>
  );
}

export default App;
