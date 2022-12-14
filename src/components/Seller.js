import React, { useState, useEffect } from "react";
import SellerForm from "./SellerForm";
import "./Seller.scss";
import useAuth from "./hooks/useAuth";
import useUI from "./hooks/useUI";

const Seller = () => {
  const [formView, setFormView] = useState(false);
  const { isLoggedIn } = useAuth();
  const { setNavView } = useUI();
  useEffect(() => {
    isLoggedIn();
    setNavView(false);
  }, []);

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
