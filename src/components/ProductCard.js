import React from "react";
import useAuth from "./hooks/useAuth";
import useCartItem from "./hooks/useCartItem";

const ProductCard = (prop) => {
  const { addCartItem, getCartItems } = useCartItem();
  const { auth } = useAuth();

  return (
    <div className="card">
      <div className="productImage">
        <img src={prop.image} alt="product" />
      </div>
      <div className="property">
        <div className="name">{prop.name}</div>
        <div className="color">{prop.color}</div>
        <div className="price">{prop.price}</div>
        {auth ? (
          <div className="button">
            <button className="like">/</button>
            <button
              className="add"
              onClick={async () => {
                await addCartItem(prop.id);
                await getCartItems();
              }}
            >
              Add To Cart
            </button>
          </div>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default ProductCard;
