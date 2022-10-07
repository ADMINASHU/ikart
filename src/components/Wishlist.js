import React, { useEffect } from "react";
import useAuth from "./hooks/useAuth";
import useUI from "./hooks/useUI";

const Wishlist = () => {
  const { isLoggedIn } = useAuth();
  const { setNavView } = useUI();
  useEffect(() => {
    isLoggedIn();
    setNavView(false);
  }, []);

  return <div>Wishlist</div>;
};

export default Wishlist;
