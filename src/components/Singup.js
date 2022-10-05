import React, { useState, useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./signup.scss";
import {
  faUser,
  faEnvelope,
  faLock,
  faInfoCircle,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "../api/axios";
import useAuth from "./hooks/useAuth";

const Signup = () => {
  
  const { isLoggedIn} = useAuth();

  const USER_REGEX = /^[a-zA-Z][a-zA-Z0-9-_]{3,23}$/;
  const EMAIL_REGEX = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{6,24}$/;
  //useRef for input fields..................................
  const userNameRef = useRef();

  //useState for input fields..................................
  const [userName, setUserName] = useState("");
  const [validUserName, setValidUserName] = useState(false);
  const [userNameFocus, setUserNameFocus] = useState(false);

  const [email, setEmail] = useState("");
  const [validEmail, setValidEmail] = useState(false);
  const [emailFocus, setEmailFocus] = useState(false);

  const [password, setPassword] = useState("");
  const [validPassword, setValidPassword] = useState(false);
  const [passwordFocus, setPasswordFocus] = useState(false);

  const [matchPassword, setMatchPassword] = useState("");
  const [validMatchPassword, setValidMatchPassword] = useState(false);
  const [matchPasswordFocus, setMatchPasswordFocus] = useState(false);

  const [errMsg, setErrMsg] = useState("");

  // useEffect ........................................................
  useEffect(() => {
    userNameRef.current.focus();
  }, []); // useEffect for first time focus in userName field

  useEffect(() => {
    setValidUserName(() => USER_REGEX.test(userName));
  }, [userName]); // useEffect for set valid userName field

  useEffect(() => {
    setValidEmail(() => EMAIL_REGEX.test(email));
  }, [email]); // useEffect for set valid email field

  useEffect(() => {
    setValidPassword(() => PWD_REGEX.test(password));
    setValidMatchPassword(() => password === matchPassword);
  }, [password, matchPassword]); // useEffect for set valid password & matchPassword field

  useEffect(() => {
    setErrMsg("");
  }, [userName, email, password, matchPassword]); // useEffect for set Error
  const navigate = useNavigate();

  // functions define ...................................................

  const priColor = "#040480";
  const insColor = "040480";

  // functions define ...................................................

  const handleSubmit = async (e) => {
    e.preventDefault();
    const v1 = USER_REGEX.test(userName);
    const v2 = EMAIL_REGEX.test(email);
    const v3 = PWD_REGEX.test(password);
    if (!v1 || !v2 || !v3) {
      setErrMsg("Invalid Entry");
      return;
    }
    try {
      await axios.post(
        "/signup",
        {
          uname: userName,
          email: email,
          password: password,
          cPassword: matchPassword,
          role: "User",
        },
        { withCredentials: true }
      );
      isLoggedIn();
      navigate("/profile");
    } catch (error) {
      if (!error?.response) {
        setErrMsg("Server not responding");
      } else if (error.response?.status === 409) {
        setErrMsg("Username already existed");
      } else {
        setErrMsg("User Registration Failed");
      }
    }
  };

  return (
    <div className="signUpPage">
      <form
        method="post"
        onSubmit={handleSubmit}
        className="signUpForm"
        id="signUpForm"
      >
        <h1>SignUp</h1>
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
        <p
          className={
            (userNameFocus && userName && !validUserName) ||
            (!validUserName && errMsg)
              ? "instruction"
              : "offScreen"
          }
        >
          <FontAwesomeIcon icon={faInfoCircle} color={insColor} size="sm" />
          &nbsp; 4 to 24 characters.
          <br />
          Must begin with a letter.
          <br />
          Letters, numbers, underscores, hyphens allowed.
        </p>
        <div className="inputBox">
          <FontAwesomeIcon icon={faEnvelope} color={priColor} size="xl" />
          <input
            className="input"
            type="email"
            placeholder="email"
            name="email"
            value={email}
            autoComplete="none"
            required
            onChange={(e) => setEmail(e.target.value)}
            onFocus={() => setEmailFocus(true)}
            onBlur={() => setEmailFocus(false)}
          />
        </div>
        <p
          className={
            (emailFocus && email && !validEmail) || (!validEmail && errMsg)
              ? "instruction"
              : "offScreen"
          }
        >
          <FontAwesomeIcon icon={faInfoCircle} color={insColor} size="sm" />
          &nbsp; You have entered an invalid email address!
        </p>
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
        <p
          className={
            (passwordFocus && password && !validPassword) ||
            (!validPassword && errMsg)
              ? "instruction"
              : "offScreen"
          }
        >
          <FontAwesomeIcon icon={faInfoCircle} color={insColor} size="sm" />
          &nbsp; 6 to 24 characters.
          <br />
          Must include uppercase and lowercase letters, a number and a special
          character.
          <br />
          Allowed special characters: !, @, #, $, %
        </p>
        <div className="inputBox">
          <FontAwesomeIcon icon={faLock} color={priColor} size="xl" />
          <input
            className="input"
            type="password"
            placeholder="Confirm Password"
            name="matchPassword"
            value={matchPassword}
            // autoComplete="off"
            required
            onChange={(e) => setMatchPassword(e.target.value)}
            onFocus={() => setMatchPasswordFocus(true)}
            onBlur={() => setMatchPasswordFocus(false)}
          />
        </div>
        <p
          className={
            (matchPasswordFocus && !validMatchPassword) ||
            (!validMatchPassword && errMsg)
              ? "instruction"
              : "offScreen"
          }
        >
          <FontAwesomeIcon icon={faInfoCircle} color={insColor} size="sm" />
          &nbsp; Must match with the Password input field.
        </p>
        <button className="btn btn-signUp" type="submit">
          SignUp
        </button>
        <br />
        <span className="invalidError">{errMsg}</span>
        <br />
        <p className="logInLink">
          Already registered?
          <br />
          <NavLink to={"/signin"}>SignIn</NavLink>
        </p>
      </form>
    </div>
  );
};

export default Signup;
