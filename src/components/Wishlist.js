import React, { useEffect } from "react";
import useAuth from "./hooks/useAuth";

const Wishlist = () => {
  const { isLoggedIn } = useAuth();
  useEffect(() => {
    isLoggedIn();
  }, []);

  return <div>Wishlist</div>;
};

export default Wishlist;
