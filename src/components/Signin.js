import React, { useState, useEffect, useRef } from "react";
import useAuth from "./hooks/useAuth";
import { NavLink } from "react-router-dom";
import { useNavigate, useLocation } from "react-router-dom";
import "./signup.scss";
import { faUser, faLock } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "../api/axios";
import Cookies from "js-cookie";

const Signin = () => {
  const { isLoggedIn } = useAuth();

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  //useRef for input fields..................................
  const userNameRef = useRef();
  const errRef = useRef();

  //useState for input fields..................................
  const [userName, setUserName] = useState("");
  const [userNameFocus, setUserNameFocus] = useState(false);

  const [password, setPassword] = useState("");
  const [passwordFocus, setPasswordFocus] = useState(false);

  const [errMsg, setErrMsg] = useState("");

  // useEffect ........................................................
  useEffect(() => {
    userNameRef.current.focus();
  }, []); // useEffect for first time focus in userName field

  useEffect(() => {
    setErrMsg("");
  }, [userName, password]); // useEffect for set Error

  // functions define ................................................
  const priColor = "#040480";
  // const insColor = "white";
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post(
        "/signin",
        {
          uname: userName,
          password: password,
        },
        {
          header: { "content-Type": "application/json" },
          withCredentials: true,
        }
      );
      setUserName("");
      setPassword("");
      await isLoggedIn();
      await Cookies.set("auth", userName, {
        expires: 1/24,
      });
      await navigate(from, { replace: true });
    } catch (error) {
      if (!error?.response) {
        setErrMsg("Server not responding");
      } else if (error.response?.status === 400) {
        setErrMsg("Please fill all field");
      } else if (error.response?.status === 401) {
        setErrMsg("invalid credentials");
      } else {
        setErrMsg("User SignIn failed");
      }
    }
  };

  return (
    <div className="logInPage">
      <form method="post" onSubmit={handleSubmit} className="logInForm">
        <h1>LogIn</h1>
        <div className="inputBox">
          <FontAwesomeIcon icon={faUser} color={priColor} size="xl" />
          <input
            className="input"
            type="text"
            placeholder="username"
            name="userName"
            value={userName}
            autoComplete="none"
            required
            ref={userNameRef}
            onChange={(e) => setUserName(e.target.value)}
            onFocus={() => setUserNameFocus(true)}
            onBlur={() => setUserNameFocus(false)}
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
    </div>
  );
};

export default Signin;
