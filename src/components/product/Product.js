import React from "react";
import "./Product.scss";
import SellerProductFilter from "./sellerProduct/SellerProductFilter";
import SellerProductView from "./sellerProduct/SellerProductView";


const Product = () => {
  return (
    <div className="product">
      <SellerProductFilter />
      <SellerProductView />
    </div>
  );
};

export default Product;
