import React from "react";
import { NavLink } from "react-router-dom";
import "./productCard.scss"

const ProductCard = (prop) => {
  return (
    <div className="card">
      <NavLink to={`/product/${prop.id}`}>
        <div className="productImage">
          <img src={prop.image} alt="product" />
        </div>
      </NavLink>
      <div className="property">
        <div className="name">{prop.name}</div>
        <div className="color">{prop.color}</div>
        <div className="price">{prop.price}</div>
      </div>
    </div>
  );
};

export default ProductCard;
