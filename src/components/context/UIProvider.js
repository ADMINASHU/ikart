import { createContext, useEffect, useState } from "react";

const UIContext = createContext({});

export const UIProvider = ({ children }) => {
  const [navView, setNavView] = useState(false);
  const [search, setSearch] = useState("");

  useEffect(() => {
    setNavView(false);
    setSearch("");
  }, []);

  return (
    <UIContext.Provider value={{ navView, setNavView, search, setSearch }}>
      {children}
    </UIContext.Provider>
  );
};

export default UIContext;
