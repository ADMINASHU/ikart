import React, { useEffect } from "react";
import useAuth from "./hooks/useAuth";
import useUI from "./hooks/useUI";

const Orders = () => {
  const { isLoggedIn } = useAuth();
  const { setNavView } = useUI();
  useEffect(() => {
    isLoggedIn();
    setNavView(false);
  }, []);

  return <div>Orders</div>;
};

export default Orders;
