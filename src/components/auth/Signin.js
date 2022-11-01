import React, { useState, useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import "./signup.scss";

// toast
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { faLock, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useGetAuthQuery, useGetSignInMutation } from "../../api/iKartApi";


const Signin = () => {
  const { data: auth } = useGetAuthQuery();
  const [getSignIn] = useGetSignInMutation();

  //useRef for input fields..................................
  const emailRef = useRef();
  const errRef = useRef();

  //useState for input fields..................................
  const [email, setEmail] = useState("");
  const [emailFocus, setEmailFocus] = useState(false);

  const [password, setPassword] = useState("");
  const [passwordFocus, setPasswordFocus] = useState(false);

  const [errMsg, setErrMsg] = useState("");

  // useEffect ........................................................
  useEffect(() => {
    emailRef.current.focus();
  }, []); // useEffect for first time focus in userName field

  useEffect(() => {
    setErrMsg("");
  }, [email, password]); // useEffect for set Error

  // functions define ................................................
  const priColor = "#040480";
  // const insColor = "white";
  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const response = await getSignIn({
      email,
      password,
    });

    if (auth) {
      setEmail("");
      setPassword("");
      // navigate(from, { replace: true });
    }
    toast(response?.data?.message || response?.error?.data?.message);
  };

  return (
    <div className="logInPage">
      <form method="post" onSubmit={handleSubmit} className="logInForm">
        <h1>LogIn</h1>
        <div className="inputBox">
          <FontAwesomeIcon icon={faEnvelope} color={priColor} size="xl" />
          <input
            className="input"
            type="email"
            placeholder="Email"
            name="email"
            value={email}
            autoComplete="none"
            required
            ref={emailRef}
            onChange={(e) => setEmail(e.target.value)}
            onFocus={() => setEmailFocus(true)}
            onBlur={() => setEmailFocus(false)}
          />
        </div>
        <div className="inputBox">
          <FontAwesomeIcon icon={faLock} color={priColor} size="xl" />
          <input
            className="input"
            type="password"
            placeholder="password"
            name="password"
            value={password}
            // autoComplete="off"
            required
            onChange={(e) => setPassword(e.target.value)}
            onFocus={() => setPasswordFocus(true)}
            onBlur={() => setPasswordFocus(false)}
          />
        </div>
        <button className="btn btn-logIn" type="submit">
          SignIn
        </button>
        <br />
        <span className="invalidError" ref={errRef}>
          {errMsg}
        </span>
        <br />
        <p className="logInLink">
          Create Account?
          <br />
          <NavLink to={"/signup"}>SignUp</NavLink>
        </p>
      </form>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </div>
  );
};

export default Signin;
