import React from "react";
import "./Product.scss";
import SellerProductView from "./SellerProductView";
import SellerProductFilter from "./SellerProductFilter";

const Product = () => {
  return (
    <div className="product">
      <SellerProductFilter />
      <SellerProductView />
    </div>
  );
};

export default Product;
