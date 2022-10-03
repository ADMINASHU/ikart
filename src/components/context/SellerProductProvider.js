import React, {createContext, useEffect, useState } from "react";
import axios from "../../api/axios";
import useAuth from "../hooks/useAuth";

const SellerProductContext = createContext({});

export const SellerProductProvider = ({ children }) => {
  const [sellerProducts, setSellerProduct] = useState([]);
  const { auth} = useAuth();

  useEffect(() => {
    let isMounted = true;
    const controller = new AbortController();

    const getSellerProduct = async () => {
      try {
        console.log(`/getProduct/${auth.username}`);
        const response = await axios.get(`/getProduct/${auth.username}`, {  
          signal: controller.signal,
        });
        isMounted && setSellerProduct(response.data);
        console.log(`/getProduct/${auth.username}`);

        console.log(sellerProducts);
      } catch (error) {
        console.log(error);
      }
    };
    getSellerProduct();
    return () => {
      isMounted = false;
      controller.abort();
    };
  },[auth]); // [auth] *****put sellerProducts as a dependency to refresh page when product is add or deleted ***************************

  return (
    <SellerProductContext.Provider value={{ sellerProducts, setSellerProduct }}>
      {children}
    </SellerProductContext.Provider>
  );
};

export default SellerProductContext;
