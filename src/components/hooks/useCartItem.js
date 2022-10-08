import { useContext } from "react";
import CartContext from "../context/CartProvider";

const useCartItem = () => {
  return useContext(CartContext);
};

export default useCartItem;
