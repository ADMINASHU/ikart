import React from "react";
import ProductFilter from "./ProductFilter";
import "./Product.scss";
import SellerProductView from "./SellerProductView";
import { SellerProductProvider } from "../components/context/SellerProductProvider";

const Product = () => {
  return (
    <div className="product">
      <SellerProductProvider>
        <ProductFilter />
        <SellerProductView />
      </SellerProductProvider>
    </div>
  );
};

export default Product;
