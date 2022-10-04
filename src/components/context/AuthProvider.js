import { createContext, useState } from "react";

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({});
  const [search, setSearch] = useState("");

  return (
    <AuthContext.Provider value={{ auth, setAuth, search, setSearch }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
