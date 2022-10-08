import React, { useEffect } from "react";
import "./Cart.scss";

const CartItemCard = ({
  name,
  price,
  color,
  image,
  seller,
  removeCartItem,
  id,
  getCartItems,
}) => {
  useEffect(() => {
    getCartItems();
  }, []);
  
  return (
    <div className="CartItem">
      <div className="itemView">
        <img className="itemImage" src={image} alt="item" />
        <div className="itemCount">
          <button>-</button>
          <span>1</span>
          <button>+</button>
        </div>
      </div>
      <div className="detailsView">
        <div className="itemDetails">
          <div>{name}</div>
          <div> {color}</div>
          <div>{seller}</div>
          <div>{price}</div>
        </div>
        <div className="itemAction">
          <button
            onClick={async() => {
              await removeCartItem(id);
              await getCartItems();
            }}
          >
            REMOVE
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItemCard;
