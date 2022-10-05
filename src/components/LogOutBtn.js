import React from "react";
import axios from "../api/axios";

const LogOutBtn = () => {

  const logOut = async () => {
    try {
      await axios.get("/logout");
    } catch (error) {
        console.log(error);
    }
  };
  return <button onClick={logOut}>Log out</button>;
};

export default LogOutBtn;
