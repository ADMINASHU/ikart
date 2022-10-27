import React from "react";
import CartItemCard from "./CartItemCard";

import "./Cart.scss";

import { useGetCartItemsQuery } from "../../api/kartApi";
import { useGetAuthUserQuery } from "../../api/authApi";
import PriceBlock from "./PriceBlock";

const Cart = () => {
  const { data: user } = useGetAuthUserQuery();
  const {
    isLoading,
    isSuccess,
    isError,
    error,
    data: cart,
  } = useGetCartItemsQuery({
    userId: user.userId,
    token: user.accessToken,
  });

  return (
    <div className="cartPage page">
      <div className="cartItemBlock">
        <div>Cart Item</div>
        <div className="itemsList">
          {isError ? (
            <>`Oh no, there was an error ${error}`</>
          ) : isLoading ? (
            <>Loading...</>
          ) : isSuccess ? (
            cart.items.map((item, index) => {
              return (
                <CartItemCard
                  key={index}
                  name={item.productName}
                  price={item.productPrice}
                  color={item.productColor}
                  image={item.productImage}
                  seller={item.productSellers[0]}
                  id={item._id}
                  count={item.count}
                />
              );
            })
          ) : (
            <h2>Cart is Empty</h2>
          )}
        </div>
        <div className="placeOrder">
          <button>Place Order</button>
        </div>
      </div>
      <div className="priceDetailsBlock">
        <div className="priceDetails">
          <div>PRICE DETAILS</div>
          <PriceBlock count={cart?.tCount} price={cart?.tPrice} />
          <div>You will save ₹0 on this order</div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
