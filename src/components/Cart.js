import React, { useEffect } from "react";
import useUI from "./hooks/useUI";

const Cart = () => {
  const { setNavView } = useUI();
  useEffect(() => {
    setNavView(false);
  }, []);

  return <div>Cart</div>;
};

export default Cart;
