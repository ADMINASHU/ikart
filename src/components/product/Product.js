import React from "react";
import "./Product.scss";
import SellerProductView from "../seller/SellerProductView";
import SellerProductFilter from "../seller/SellerProductFilter";

const Product = () => {
  return (
    <div className="product">
      <SellerProductFilter />
      <SellerProductView />
    </div>
  );
};

export default Product;
