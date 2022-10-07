import { createContext, useEffect, useState } from "react";
import axios from "../../api/axios";
import Cookies from "js-cookie";

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({});
  const [search, setSearch] = useState("");

  useEffect(() => {
    // console.log("cookie",Cookies.get("auth"));
    setAuth(Cookies.get("auth"));
    isLoggedIn();
    console.log("Log: connecting to server", auth?.username);
  }, []);

  const isLoggedIn = async () => {
    console.log("Log: connected to server", auth?.username);

    try {
      const loggedInRes = await axios.get("/loggedIn", {
        withCredentials: true,
      });

      console.log("Log: trying to get data ", auth?.username);
      await setAuth(loggedInRes?.data);
      console.log("Log: getting data successfully", auth?.username);
    } catch (error) {
      console.log(error);
      console.log("Log: getting error");
    }

    console.log("Log: terminating server", auth?.username);
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, auth, search, setSearch }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
