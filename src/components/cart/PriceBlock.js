import React, { useEffect, useState } from "react";
import { useGetAuthUserQuery } from "../../api/authApi";
import { useGetCartItemsQuery } from "../../api/kartApi";

const PriceBlock = ({count, price}) => {





  return (
    <div>
      <div>
        <span>{`Price (${count} items)`}</span>
        <span>{`₹ ${price}`}</span>
      </div>
      <div>
        <span>Discount</span>
        <span>{`-₹ ${0}`}</span>
      </div>
      <div>
        <span>Delivery Charges</span>
        <span>{`₹ ${0}`}</span>
      </div>
      <div>
        <span>Total Amount</span>
        <span>{`₹ ${price}`}</span>
      </div>
    </div>
  );
};

export default PriceBlock;
