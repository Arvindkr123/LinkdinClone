import React, { useState } from "react";
import "../Sass/LoginComponent.scss";
import { LoginApi, RegisterWithGoogle } from "../api/LoginApi"; // Import only LoginApi
import logo from "../images/LI-Logo.png";
import GoogleButton from "react-google-button";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const LoginComponent = () => {
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const response = await LoginApi(credentials.email, credentials.password); // Pass the correct password value
      // console.log(``, response);
      toast.success("login successfully");
      navigate("/home");
    } catch (error) {
      toast.error("please check your credentials and try again");
      console.log(error.message);
    }
  };

  const googleSignIn = async () => {
    let res = await RegisterWithGoogle();
    navigate("/home");
  };

  return (
    <div className="login-wrapper">
      <img src={logo} alt="linkedin logo" className="linkedinlogo" />
      <div className="login-wrapper-inner">
        <h1 className="heading">Sign in</h1>
        <p className="sub-heading">Stay updated on your professional world</p>
        <div className="auth-inputs">
          <input
            onChange={(event) =>
              setCredentials({ ...credentials, email: event.target.value })
            }
            type="email"
            className="common-input"
            placeholder="Email or Phone"
          />
          <input
            onChange={(event) =>
              setCredentials({ ...credentials, password: event.target.value })
            }
            type="password"
            className="common-input"
            placeholder="Password"
          />
        </div>
        <button onClick={submitHandler} type="submit" className="login-btn">
          Sign in
        </button>
      </div>
      <hr className="hr-text" data-content="or" />
      <div className="google-btn-container">
        <GoogleButton
          onClick={googleSignIn}
          className="google-btn"
        ></GoogleButton>
        <p className="gotoSignup">
          New to Linkedin ?{" "}
          <span className="join-now" onClick={() => navigate("/register")}>
            Join now
          </span>
        </p>
      </div>
    </div>
  );
};

export default LoginComponent;
