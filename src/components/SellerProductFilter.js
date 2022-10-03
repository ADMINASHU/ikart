import React, { useState } from "react";
import ProductForm from "./ProductForm";
import "./Filter.scss"


const SellerProductFilter = () => {
  const [formView, setFormView] = useState(false);
  return (
    <div className="filter">
      <h1>ProductFilter</h1>
      <button onClick={() => setFormView((prevState) => !prevState)}>
        Add Product
      </button>
      {formView ? (
        <div className="ProductForm">
          <ProductForm/>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default SellerProductFilter;
