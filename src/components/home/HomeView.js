import React from "react";
import { useGetCatProductQuery } from "../../api/iKartApi";
import Loading from "../Loading";
import ProductCard from "../product/ProductCard";

const HomeView = () => {
  const {
    isLoading,
    isError,
    error,
    data
  } = useGetCatProductQuery();

  

  return (
    <div className="prodCatView">
      {isLoading ? (
        <Loading/>
      ) : isError ? (
        <>`Oh no, there was an error ${error}`</>
      ) : data?.cat.map((item, index) => {
        return (
          <div className="prodCat" key={index}>
            {<div className="cat">{item[index]}</div>}
            {data?.prod[index].map((prod, idx) => {
              return (
                <div className="prod" key={idx}>
                  <ProductCard
                    key={idx}
                    name={prod?.productName}
                    price={prod?.productPrice}
                    color={prod?.productColor}
                    image={prod?.productImage}
                    id={prod?._id}
                  />
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
};

export default HomeView;
