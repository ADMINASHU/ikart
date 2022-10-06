import React from "react";
import axios from "../api/axios";
import useAuth from "./hooks/useAuth";

const LogOutBtn = () => {
  const { isLoggedIn } = useAuth();
  const logOut = async () => {
    try {
      await axios.get("/logout");
      await isLoggedIn();
   
    } catch (error) {
      console.log(error);
    }
  };
  return <button onClick={logOut}>Log out</button>;
};

export default LogOutBtn;
