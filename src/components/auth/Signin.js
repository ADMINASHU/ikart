import React, { useState, useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import { useNavigate, useLocation } from "react-router-dom";
import "./signup.scss";
import { faUser, faLock } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  useGetAuthUserQuery,
  useGetSignInMutation,
  useGetLogOutMutation,
} from "../../api/authApi";

const Signin = () => {
  const {
    isLoading,
    isSuccess,
    isError,
    error,
    data: auth,
  } = useGetAuthUserQuery();
  const [getSignIn] = useGetSignInMutation();
  const [getLogOut] = useGetLogOutMutation();

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
      getSignIn({
        uname: userName,
        password: password,
      });

      if (auth?.username) {
        setUserName("");
        setPassword("");
        navigate(from, { replace: true });
      } else {
        getLogOut();
      }
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
