import React, { useEffect } from "react";
import useProduct from "./hooks/useProduct";
import ProductView from "./ProductView";
import useAuth from "./hooks/useAuth";
import useUI from "./hooks/useUI";

const Home = () => {
  const { products, getProduct } = useProduct();
  const { isLoggedIn } = useAuth();
  const { setNavView } = useUI();
  useEffect(() => {
    getProduct();
    isLoggedIn();
    setNavView(false);
  }, []);

  return (
    <div className="product">
      {products?.length ? (
        <>
          {/* <ProductFilter /> */}
          <ProductView />
        </>
      ) : (
        <h2>Loading...</h2>
      )}
    </div>
  );
};

export default Home;
