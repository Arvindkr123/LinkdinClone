import React, { useState } from "react";
import "../Sass/LoginComponent.scss";
import { RegisterApi, RegisterWithGoogle } from "../api/LoginApi"; // Import only LoginApi
import logo from "../images/LI-Logo.png";
import GoogleButton from "react-google-button";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export const Register = () => {
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const response = await RegisterApi(
        credentials.email,
        credentials.password
      ); // Pass the correct password value
      // console.log(``, response);
      toast.success("account created successfully");
      navigate("/home");
    } catch (error) {
      toast.error("can't create your account");
      console.log(error.message);
    }
  };

  const googleSignIn = async () => {
    let res = await RegisterWithGoogle();
    navigate("/home");
  };

  return (
    <>
      <img src={logo} alt="linkedin logo" className="linkedinlogo" />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "5rem",
          alignItems: "center",
        }}
      >
        <div className="login-wrapper">
          <div className="login-wrapper-inner">
            <h1 className="heading">Make the most of your professional life</h1>
            <div className="auth-inputs">
              <input
                onChange={(event) =>
                  setCredentials({ ...credentials, email: event.target.value })
                }
                type="email"
                className="common-input"
                placeholder="Email or Phone Number"
              />
              <input
                onChange={(event) =>
                  setCredentials({
                    ...credentials,
                    password: event.target.value,
                  })
                }
                type="password"
                className="common-input"
                placeholder="Password (6 or more characters)"
              />
            </div>
            <button
              style={{ marginLeft: "-30px"}}
              onClick={submitHandler}
              type="submit"
              className="login-btn"
            >
              Agree & Join
            </button>
          </div>
          <hr className="hr-text" data-content="or" />
          <div className="google-btn-container">
            <GoogleButton
              onClick={googleSignIn}
              className="google-btn"
            ></GoogleButton>
            <p className="gotoSignup">
              Already on Linkedin ?{" "}
              <span className="join-now" onClick={() => navigate("/")}>
                Sign in
              </span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
