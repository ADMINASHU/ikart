import { useContext } from "react";
import SellerProductContext from "../context/SellerProductProvider";

const useSellerProduct = () => {
  return useContext(SellerProductContext);
};

export default useSellerProduct;
