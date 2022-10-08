import React, { useEffect } from "react";
import CartItemCard from "./CartItemCard";
import useCartItem from "./hooks/useCartItem";

const CartItemCards = () => {
  const { cartItem, removeCartItem, getCartItems } = useCartItem();
  
  useEffect(() => {
    getCartItems();
  }, []);

  return (
    <div>
      {cartItem.map((item, index) => {
        return (
          <CartItemCard
            key={index}
            name={item.productName}
            price={item.productPrice}
            color={item.productColor}
            image={item.productImage}
            seller={item.productSellers[0]}
            id={item._id}
            removeCartItem={removeCartItem}
            getCartItems={getCartItems}
          />
        );
      })}
    </div>
  );
};

export default CartItemCards;
