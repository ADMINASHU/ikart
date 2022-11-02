import React from "react";


import { NavLink } from "react-router-dom";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useAddCartItemMutation, useGetAuthQuery, useGetCartItemCountQuery } from "../../api/iKartApi";

const ProductCard = (prop) => {
  const { data: auth } = useGetAuthQuery(undefined, { refetchOnMountOrArgChange: true });
  const [addCartItem] = useAddCartItemMutation();
  const { data: itemCount } = useGetCartItemCountQuery({ id: prop.id });

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
