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
      <NavLink to={"/productDetails"}>
        <div className="productImage">
          <img src={prop.image} alt="product" />
        </div>
      </NavLink>
      <div className="property">
        <div className="name">{prop.name}</div>
        <div className="color">{prop.color}</div>
        <div className="price">{prop.price}</div>
        {auth ? (
          <div className="button">
            <button className="like">/</button>
            {itemCount ? (
              <button>
                <NavLink to={"/cart"}>
                  <FontAwesomeIcon icon={faCartShopping} size="sm" /> Go to Cart
                </NavLink>
              </button>
            ) : (
              <button
                className="add"
                onClick={() =>
                  addCartItem({
                    body: { id: prop.id, count: 1 },
                  })
                }
              >
                <NavLink to={"/cart"}>Add To Cart</NavLink>
              </button>
            )}
          </div>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default ProductCard;
