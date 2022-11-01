import React from "react";


const PriceBlock = ({ itemCount,cartPrice,cartDiscount, CartAmount }) => {
  return (
    <div>
      <div>
        <span>{`Price ( ${itemCount} items )`}</span>
        <span>{` ₹${cartPrice}`}</span>
      </div>
      <div>
        <span>Discount</span>
        <span>{` -₹${cartDiscount}`}</span>
      </div>
      <div>
        <span>Delivery Charges</span>
        <span>{` ₹${0}`}</span>
      </div>
      <div>
        <span>Total Amount</span>
        <span>{` ₹${CartAmount}`}</span>
      </div>
    </div>
  );
};

export default PriceBlock;
