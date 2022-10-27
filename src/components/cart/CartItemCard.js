import React, { useEffect } from "react";
import { useGetAuthUserQuery } from "../../api/authApi";
import {
  useAddCartItemMutation,
  useRemoveCartItemMutation,
} from "../../api/kartApi";
import "./Cart.scss";

const CartItemCard = ({ name, price, color, image, seller, id, count }) => {
  const { data: user } = useGetAuthUserQuery();

  const [addCartItem] = useAddCartItemMutation();
  const [removeCartItem] = useRemoveCartItemMutation();

  return (
    <div className="CartItem">
      <div className="itemView">
        <img className="itemImage" src={image} alt="item" />
        <div className="itemCount">
          <button
            onClick={() => {
              addCartItem({
                id: id,
                token: user.accessToken,
                body: { userId: user.userId, count: count - 1 },
              });
            }}
          >
            -
          </button>
          <span>{count}</span>
          <button
            onClick={() => {
              addCartItem({
                id: id,
                token: user.accessToken,
                body: { userId: user.userId, count: count + 1 },
              });
            }}
          >
            +
          </button>
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
            onClick={() =>
              removeCartItem({
                id: id,
                token: user.accessToken,
                body: { userId: user.userId },
              })
            }
          >
            REMOVE
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItemCard;
