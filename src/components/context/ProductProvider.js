import React, {createContext, useEffect, useState } from "react";
import axios from "../../api/axios";

const ProductContext = createContext({});

export const ProductProvider = ({ children }) => {
  const [products, setProduct] = useState([]);

  useEffect(() => {
    let isMounted = true;
    const controller = new AbortController();

    const getProduct = async () => {
      try {
        const response = await axios.get("/product", {
          signal: controller.signal,
        });
        isMounted && setProduct(response.data);
        console.log(products);
      } catch (error) {
        console.log(error);
      }
    };
    getProduct();
    return () => {
      isMounted = false;
      controller.abort();
    };
  },[]);  // [] *****put sellerProducts as a dependency to refresh page when product is add or deleted ***************************

  return (
    <ProductContext.Provider value={{ products, setProduct }}>
      {children}
    </ProductContext.Provider>
  );
};

export default ProductContext;
