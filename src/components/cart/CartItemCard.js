import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  useAddCartItemMutation,
  useRemoveCartItemMutation,
} from "../../api/iKartApi";
import "./Cart.scss";

const CartItemCard = ({
  name,
  price,
  color,
  image,
  seller,
  id,
  count,
  discount,
}) => {
  const [addCartItem] = useAddCartItemMutation();
  const [removeCartItem] = useRemoveCartItemMutation();
  const [number, setNumber] = useState(count);

  return (
    <div className="CartItem">
      <div className="itemView">
        <NavLink to={`/product/${id}`}>
          <img className="itemImage" src={image} alt="item" />
        </NavLink>
        <div className="itemCount">
          <button
            disabled={count === 1}
            onClick={() => {
              setNumber(() => count - 1);
              addCartItem({
                body: { id: id, count: count - 1 },
              });
            }}
          >
            <FontAwesomeIcon icon={faMinus} size="sm" />
          </button>

          <input
            type="number"
            className="count"
            value={number}
            autoComplete="none"
            onBlur={() => {
              if (0 < number && number < 100) {
                // maximum stock ref
                addCartItem({
                  body: { id: id, count: number },
                });
              }
            }}
            onChange={(e) => setNumber(e.target.value)}
          />
          <button
            onClick={() => {
              setNumber(() => count + 1);
              addCartItem({
                body: { id: id, count: count + 1 },
              });
            }}
          >
            <FontAwesomeIcon icon={faPlus} size="sm" />
          </button>
        </div>
      </div>
      <div className="detailsView">
        <div className="itemDetails">
          <div className="itemName">
            <NavLink to={`/product/${id}`}>{name}</NavLink>
          </div>
          <div className="color"> {`Color: ${color}`}</div>
          <div className="seller">{`Seller: ${seller}`}</div>
          <div className="priceDetails">
            <span className="mrp">
              {price.toLocaleString("us-US", {
                style: "currency",
                currency: "INR",
                maximumFractionDigits: 0,
              })}
            </span>
            <span className="price">
              {(price - discount).toLocaleString("us-US", {
                style: "currency",
                currency: "INR",
                maximumFractionDigits: 0,
              })}
            </span>

            <span className="discount">
              {((discount * 100) / price).toLocaleString("us-US", {
                maximumFractionDigits: 0,
              })}
              % off
            </span>
          </div>
        </div>
        <div className="itemAction">
          <button onClick={() => removeCartItem({ id })}>REMOVE</button>
        </div>
      </div>
    </div>
  );
};

export default CartItemCard;
