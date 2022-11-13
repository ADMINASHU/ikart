import { faTrash } from "@fortawesome/free-solid-svg-icons";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { useRemoveWishlistItemMutation } from "../../../api/iKartApi";

const WishItemCard = ({
  name,
  price,
  color,
  image,
  seller,
  id,
  count,
  discount,
}) => {
  const [removeWishlistItem] = useRemoveWishlistItemMutation();

  return (
    <div className="wishItem">
      <div className="itemView">
        <NavLink to={`/product/${id}`}>
          <img className="itemImage" src={image} alt="item" />
        </NavLink>
      </div>
      <div className="detailsView">
        <div className="itemDetails">
          <div className="itemName">
            <NavLink to={`/product/${id}`}>{name}</NavLink>
          </div>
          <div className="color"> {`Color: ${color}`}</div>
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
      </div>
      <div>
        <FontAwesomeIcon
          className="itemAction"
          onClick={() => removeWishlistItem({ id })}
          icon={faTrash}
          size="sm"
        />
      </div>
    </div>
  );
};

export default WishItemCard;
