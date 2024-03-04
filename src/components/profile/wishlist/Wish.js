import React from "react";
import Wishlist from "./Wishlist";
import "./Wish.scss";
import WishFilter from "./WishFilter";

const Wish = () => {
  return (
    <div className="wishlist page">
      <div className="filter">
        <WishFilter/>
      </div>
      <div className="list">
        <Wishlist />
      </div>
    </div>
  );
};

export default Wish;
