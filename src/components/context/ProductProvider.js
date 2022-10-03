import React, { createContext, useEffect, useState } from "react";
import axios from "../../api/axios";

const ProductContext = createContext({});

export const ProductProvider = ({ children }) => {
  const [products, setProduct] = useState([]);

  useEffect(() => {
    getProduct();
  }, []); // [] *****put sellerProducts as a dependency to refresh page when product is add or deleted ***************************
  const getProduct = async () => {
    try {
      const response = await axios.get("/product");
      setProduct(response.data);
      // console.log(products);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <ProductContext.Provider value={{ products, getProduct }}>
      {children}
    </ProductContext.Provider>
  );
};

export default ProductContext;
