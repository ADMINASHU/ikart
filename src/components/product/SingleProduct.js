import React from "react";
import "./singleProduct.scss";
const SingleProduct = () => {
  return (
    <div className="singleProductPage">
      <div className="productImageSlider">
        <div className="imageSlider">
            <div className="slider"></div>
            <div className="productImage"></div>
        </div>
        <div className="productAction"></div>
      </div>
      <div className="productDetails">product details</div>
    </div>
  );
};

export default SingleProduct;
