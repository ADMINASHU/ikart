import React from "react";
import { useGetAuthUserQuery } from "../../api/authApi";
import { useAddCartItemMutation, useGetCartCountQuery } from "../../api/kartApi";
import { NavLink } from "react-router-dom";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ProductCard = (prop) => {
  const { data: user } = useGetAuthUserQuery();
  const [addCartItem] = useAddCartItemMutation();
  const { data: count } = useGetCartCountQuery({
    id: prop.id,
    token: user.accessToken,
    userId: user.userId,
  });


  return (
    <div className="card">
      <div className="productImage">
        <img src={prop.image} alt="product" />
      </div>
      <div className="property">
        <div className="name">{prop.name}</div>
        <div className="color">{prop.color}</div>
        <div className="price">{prop.price}</div>
        {user?.userId ? (
          <div className="button">
            <button className="like">/</button>
            {count ? (
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
                    id: prop.id,
                    token: user.accessToken,
                    body: { userId: user.userId, count: 1 },
                  })
                }
              >
                Add To Cart
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
