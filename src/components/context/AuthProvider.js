import { createContext, useEffect, useState } from "react";
import axios from "../../api/axios";

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  // const [loggedIn, setLoggedIn] = useState(undefined);
  const [auth, setAuth] = useState({});
  const [search, setSearch] = useState("");

  async function isLoggedIn() {
    // console.log("preset", auth);

    const loggedInRes = await axios.get("/loggedIn", { withCredentials: true });
    setAuth(loggedInRes.data);
    // console.log("loggedIn response",loggedInRes.data);
    // console.log("afterSet", auth);
  }

  useEffect(() => {
    isLoggedIn();
  }, [auth]);

  return (
    <AuthContext.Provider
      value={{ isLoggedIn, auth, search, setSearch }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
