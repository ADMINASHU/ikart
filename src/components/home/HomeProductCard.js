import React from "react";
import { NavLink } from "react-router-dom";
import "./homeProductCard.scss"

const HomeProductCard = (prop) => {
  return (
    <div className="proCard">
      <NavLink to={`/product/${prop.id}`}>
        <div className="productImage">
          <img src={prop.image} alt="product" />
        </div>
      </NavLink>
      <div className="proProperty">
        <div className="name">{prop.name}</div>
        <div className="color">{prop.color}</div>
        <div className="price">{prop.price}</div>
      </div>
    </div>
  );
};

export default HomeProductCard;
