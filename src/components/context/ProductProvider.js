import React, { createContext, useEffect, useState } from "react";
import axios from "../../api/axios";
import useAuth from "../hooks/useAuth";

const ProductContext = createContext({});

export const ProductProvider = ({ children }) => {
  const { search, setSearch } = useAuth();
  const [products, setProduct] = useState([]);

  useEffect(() => {
    getProduct();
    searchProduct();
  }, []); // [] *****put sellerProducts as a dependency to refresh page when product is add or deleted ***************************
  const getProduct = async () => {
    try {
      const response = await axios.get("/product");
      setProduct(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  const searchProduct = async () => {
    try {
      if (search) {
        const response = await axios.get(`/searchProduct/${search}`); // `/searchProduct/${search}`
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
