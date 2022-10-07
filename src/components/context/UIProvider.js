import { createContext, useEffect, useState } from "react";

const UIContext = createContext({});

export const UIProvider = ({ children }) => {
  const [navView, setNavView] = useState(false);
  useEffect(() => {
    setNavView(false);
  }, []);

  return (
    <UIContext.Provider value={{ navView, setNavView }}>
      {children}
    </UIContext.Provider>
  );
};

export default UIContext;
