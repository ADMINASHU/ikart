import React from "react";

const PriceBlock = ({ itemCount, cartPrice, cartDiscount, CartAmount }) => {
  return (
    <div className="price_block">
      <div className="price block">
        <span>{`Price ( ${itemCount} items )`}</span>
        <span>
          {cartPrice.toLocaleString("us-US", {
            style: "currency",
            currency: "INR",
            maximumFractionDigits: 0,
          })}
        </span>
      </div>
      <div className="block">
        <span>Discount</span>
        <span>
          {cartDiscount.toLocaleString("us-US", {
            style: "currency",
            currency: "INR",
            maximumFractionDigits: 0,
          })}
        </span>
      </div>
      <div className="block">
        <span>Delivery Charges</span>
        <span>{` ₹${0}`}</span>
      </div>
      <div className="block total">
        <span>Total Amount</span>
        <span>
          {CartAmount.toLocaleString("us-US", {
            style: "currency",
            currency: "INR",
            maximumFractionDigits: 0,
          })}
        </span>
      </div>
    </div>
  );
};

export default PriceBlock;
