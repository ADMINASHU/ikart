import React from "react";

const SellerProductCard = (prop) => {
  return (
    <div className="card">
      <div className="productImage">
        <img src={prop.image} alt="product" />
      </div>
      <div className="property">
        <div className="name">{prop.name}</div>
        <div className="color">{prop.color}</div>
        <div className="price">{prop.price}</div>
        <div className="button">
          <button
            className="edit"
            onClick={() => {
              prop.setUpdateFormView((prevState) => !prevState);
              prop.setProductId(prop.id);
            }}
          >
            edit
          </button>
          <button className="del" onClick={() => prop.deleteProduct(prop.id)}>
            del
          </button>
        </div>
      </div>
    </div>
  );
};

export default SellerProductCard;
