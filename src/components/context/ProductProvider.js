import React, { createContext, useEffect, useState } from "react";
import axios from "../../api/axios";
import useUI from "../hooks/useUI";

const ProductContext = createContext({});

export const ProductProvider = ({ children }) => {
  const { search, setSearch } = useUI();
  const [products, setProduct] = useState([]);

  useEffect(() => {
    getProduct();
    searchProduct();
  }, []); // [] *****put sellerProducts as a dependency to refresh page when product is add or deleted ***************************
  const getProduct = async () => {
    try {
      const response = await axios.get("/product");
      await setProduct(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  const searchProduct = async () => {
    try {
      if (search) {
        const response = await axios.get(`/searchProduct/${search.trim()}`); // `/searchProduct/${search}`
        setProduct(response.data);
      } else {
        setProduct([]);
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <ProductContext.Provider value={{ products, getProduct, searchProduct }}>
      {children}
    </ProductContext.Provider>
  );
};

export default ProductContext;
