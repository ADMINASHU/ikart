import React, { useEffect } from "react";
import useAuth from "./hooks/useAuth";

const Orders = () => {
  const { isLoggedIn } = useAuth();
  useEffect(() => {
    isLoggedIn();
  }, []);

  return <div>Orders</div>;
};

export default Orders;
