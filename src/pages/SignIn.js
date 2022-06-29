import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import visibilityIcon from "../assets/visibilityIcon.svg";
import { ReactComponent as ArrowRightIcon } from "../assets/keyboardArrowRightIcon.svg";

function SignIn() {
  const [showPassword, setshowPassword] = useState(false);
  const [formData, setformData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const navigate = useNavigate();
  const { email, password, name } = formData;

  const onChange = () => {
    console.log("testing form fields");
  };

  return (
    <>
      <div className="pageContainer">
        <header>
          <p className="pageHeader">Welcome to Sign In Page</p>
        </header>
        <main>
          <form>
            <input
              type="text"
              className="nameInput"
              placeholder="Name"
              id="name"
              value={name}
              onChange={onChange}
            />
            <input
              type="email"
              className="emailInput"
              placeholder="Email"
              id="email"
              value={email}
              onChange={onChange}
            />

            <div className="passwordInputDiv">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                className="passwordInput"
                id="password"
                value={password}
                onChange={onChange}
              />

              <img
                src={visibilityIcon}
                alt="show password"
                className="showPassword"
                onClick={() => setshowPassword((prevState) => !prevState)}
              />
            </div>
            <Link to="/forgot-password" className="forgotPasswordLink">
              Forgot Password
            </Link>

            <div className="signUpBar">
              <p className="signUpText">Sign Up</p>
              <button
                className="signUpButton"
                onClick={() => navigate("/sign-up")}
              >
                <ArrowRightIcon fill="#555" width="34px" height="34px" />
              </button>
            </div>
          </form>
        </main>
      </div>
    </>
  );
}

export default SignIn;
