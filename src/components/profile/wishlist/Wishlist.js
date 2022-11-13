import React, { useEffect } from "react";
import { useGetWishlistItemsQuery } from "../../../api/iKartApi";
import Loading from "../../Loading";
import WishItemCard from "./WishItemCard";
import "./wishlist.scss";
const Wishlist = () => {
  const {
    isLoading,
    isError,
    error,
    data: wishlist,
  } = useGetWishlistItemsQuery(undefined, { refetchOnMountOrArgChange: true });

  return (
    <div className="wishPage">
      <span>My Wishlist</span>
      {isLoading ? (
        <Loading />
      ) : isError ? (
        <div>`Oh no, there was an error ${error}`</div>
      ) : wishlist?.itemCount ? (
        wishlist?.wishlistItems.map((item, index) => {
          return (
            <WishItemCard
              key={index}
              id={item._id}
              name={item.productName}
              price={item.productPrice}
              discount={item.productDiscount}
              color={item.productColor}
              image={item.productImage}
              seller={item.productSellers}
              count={item.count}
            />
          );
        })
      ) : (
        
        <h2 className="empty" >Wishlist is Empty</h2>
      )}
    </div>
  );
};

export default Wishlist;
