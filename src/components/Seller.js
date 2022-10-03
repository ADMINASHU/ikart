import React, { useState } from "react";
import SellerForm from "./SellerForm";
import "./Seller.scss";

const Seller = () => {
  const [formView, setFormView] = useState(false);
  return (
    <div className="page">
      <button onClick={() => setFormView((prevState) => !prevState)}>
        Join iKart
      </button>
      {formView ? (
        <div className="sellerForm">
          <SellerForm />
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default Seller;
