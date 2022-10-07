import React, { useEffect } from "react";
import "./Product.scss";
import SellerProductView from "./SellerProductView";
import { SellerProductProvider } from "../components/context/SellerProductProvider";
import SellerProductFilter from "./SellerProductFilter";
import useAuth from "./hooks/useAuth";

const Product = () => {
  const { isLoggedIn } = useAuth();
  useEffect(() => {
    isLoggedIn();
  }, []);

  return (
    <div className="product">
      <SellerProductProvider>
        <SellerProductFilter />
        <SellerProductView />
      </SellerProductProvider>
    </div>
  );
};

export default Product;
