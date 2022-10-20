import React, { useEffect } from "react";
import useProduct from "./hooks/useProduct";
import ProductView from "./ProductView";
import useAuth from "./hooks/useAuth";
import useUI from "./hooks/useUI";

const Home = () => {
  const { isLoggedIn } = useAuth();
  // const { setNavView } = useUI();
  useEffect(() => {
    isLoggedIn();
    // setNavView(false);
  }, []);

  return (
    <div className="product">
      <ProductView />
    </div>
  );
};

export default Home;
