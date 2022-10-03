import React, { useEffect } from "react";
import useProduct from "./hooks/useProduct";
import ProductFilter from "./ProductFilter";
import ProductView from "./ProductView";

const Home = () => {
  const { products, getProduct } = useProduct();
  useEffect(() => {
    getProduct();
  }, []);
  return (
    <div className="product">
      {products?.length ? (
        <>
          <ProductFilter />
          <ProductView />
        </>
      ) : (
        <h2>Loading...</h2>
      )}
    </div>
  );
};

export default Home;
