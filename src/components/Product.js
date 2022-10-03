import React from "react";
import "./Product.scss";
import SellerProductView from "./SellerProductView";
import { SellerProductProvider } from "../components/context/SellerProductProvider";
import SellerProductFilter from "./SellerProductFilter";

const Product = () => {
  return (
    <div className="product">
      <SellerProductProvider>
        <SellerProductFilter/>
        <SellerProductView />
      </SellerProductProvider>
    </div>
  );
};

export default Product;
