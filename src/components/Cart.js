import React, { useEffect } from "react";
import CartItemCard from "./CartItemCard";
import useUI from "./hooks/useUI";
import "./Cart.scss";
import useCartItem from "./hooks/useCartItem";
import useAuth from "./hooks/useAuth";

const Cart = () => {
  const { setNavView } = useUI();
  const { isLoggedIn } = useAuth();
  const { cartItem, removeCartItem, getCartItems } = useCartItem();
  useEffect(() => {
    getCartItems();
    setNavView(false);
    isLoggedIn();
  }, []);

  return (
    <div className="cartPage page">
      <div className="cartItemBlock">
        <div>Cart Item</div>
        <div className="itemsList">
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
        <div className="placeOrder">
          <button>Place Order</button>
        </div>
      </div>
      <div className="priceDetailsBlock">
        <div className="priceDetails">
          <div>PRICE DETAILS</div>
          <div>//price block//</div>
          <div>Total Amount</div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
