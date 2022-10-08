import React, { createContext, useEffect, useState } from "react";
import axios from "../../api/axios";
import useAuth from "../hooks/useAuth";

const SellerProductContext = createContext({});

export const SellerProductProvider = ({ children }) => {
  const [sellerProducts, setSellerProduct] = useState([]);
  const [productId, setProductId] = useState("");
  const { auth } = useAuth();

  useEffect(() => {
    getSellerProduct();
  }, []); // [auth] *****put sellerProducts as a dependency to refresh page when product is add or deleted ***************************

  const getSellerProduct = async () => {
    try {
      const response = await axios.get(`/getProduct/${auth?.username}`, {
        method:"GET",
        headers: {
          "Content-Type": "application/json",
          authorization: auth.accessToken,
        },
      });
      await setSellerProduct(response.data);   
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <SellerProductContext.Provider
      value={{ sellerProducts, getSellerProduct, productId, setProductId }}
    >
      {children}
    </SellerProductContext.Provider>
  );
};

export default SellerProductContext;
