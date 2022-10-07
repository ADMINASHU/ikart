import React, { useEffect } from "react";
import "./Product.scss";
import SellerProductView from "./SellerProductView";
import { SellerProductProvider } from "../components/context/SellerProductProvider";
import SellerProductFilter from "./SellerProductFilter";
import useAuth from "./hooks/useAuth";
import useUI from "./hooks/useUI";

const Product = () => {
  const { isLoggedIn } = useAuth();
  const { setNavView } = useUI();
  useEffect(() => {
    isLoggedIn();
    setNavView(false);
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
