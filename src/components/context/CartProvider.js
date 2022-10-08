import { createContext, useEffect, useState } from "react";
import useAuth from "../hooks/useAuth";
import axios from "../../api/axios";
const CartContext = createContext({});

export const CartProvider = ({ children }) => {
  const [cartItem, setCartItem] = useState([]);
  const { auth } = useAuth();

  useEffect(() => {
    getCartItems();
  }, []);

  const addCartItem = async (id) => {
    try {
      await axios.put(
        `/addCart/${id}`,
        {
          userId: auth?.userId,
        },
        {
          headers: {
            "Content-Type": "application/json",
            authorization: auth.accessToken,
          },
        }
      );
      // console.log(response?.data);
    } catch (error) {
      console.log(error);
    }
  };

  const getCartItems = async () => {
    try {
      const response = await axios.get(`/getCart/${auth?.userId}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          authorization: auth.accessToken,
        },
      });
      setCartItem(response?.data);
    } catch (error) {
      console.log(error);
    }
  };

  const removeCartItem = async (id) => {
    try {
      await axios.put(
        `/updateCart/${id}`,
        {
          userId: auth?.userId,
        },
        {
          headers: {
            "Content-Type": "application/json",
            authorization: auth.accessToken,
          },
        }
      );
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <CartContext.Provider
      value={{ cartItem, addCartItem, getCartItems, removeCartItem }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;
