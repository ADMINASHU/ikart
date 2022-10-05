import { createContext, useEffect, useState } from "react";
import axios from "../../api/axios";

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({});
  const [search, setSearch] = useState("");


  useEffect(() => {
    isLoggedIn();
    console.log("run effect hook");
  }, []);

  const isLoggedIn = async () => {
    try {
      const loggedInRes = await axios.get("/loggedIn", {
        withCredentials: true,
      });
      await setAuth(loggedInRes.data);
      // console.log("Auth Provider: ", auth.accessToken);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, auth, search, setSearch }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
