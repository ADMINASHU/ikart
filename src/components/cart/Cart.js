import React from "react";
import CartItemCard from "./CartItemCard";
import "./Cart.scss";
import PriceBlock from "./PriceBlock";
import { useGetCartItemsQuery } from "../../api/iKartApi";
import Loading from "../Loading";

const Cart = () => {
  const {
    isLoading,
    isError,
    error,
    data: cart,
  } = useGetCartItemsQuery(undefined, { refetchOnMountOrArgChange: true });

  return (
    <div className="cartPage page">
      <div className="cartItemBlock">
        <div className="address">Deliver to: </div>
        <div className="itemsList">
          {isLoading ? (
            <Loading />
          ) : isError ? (
            <>`Oh no, there was an error ${error}`</>
          ) : cart?.itemCount ? (
            cart?.cartItems.map((item, index) => {
              return (
                <CartItemCard
                  key={index}
                  id={item._id}
                  name={item.productName}
                  price={item.productPrice}
                  discount={item.productDiscount}
                  color={item.productColor}
                  image={item.productImage}
                  seller={item.productSellers}
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
          <PriceBlock
            itemCount={cart?.itemCount}
            cartPrice={cart?.cartPrice}
            cartDiscount={cart?.cartDiscount}
            CartAmount={cart?.CartAmount}
          />
          <div>{`You will save ₹${cart?.cartDiscount} on this order`}</div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
