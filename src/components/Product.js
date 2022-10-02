import React from "react";
import ProductFilter from "./ProductFilter";
import ProductView from "./ProductView";
import useProduct from "./hooks/useProduct";

const Product = () => {
  const { products } = useProduct();
  return (
    <div className="product">
      {products?.length ? (
        <>
          <ProductFilter />
          <ProductView />
        </>
      ) : (
        <h2>No Product added</h2>
      )}
    </div>
  );
};

export default Product;
