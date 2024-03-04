import React from "react";
import { useGetCatProductQuery } from "../../api/iKartApi";
import Loading from "../Loading";
import HomeProductCard from "./HomeProductCard";

const HomeView = () => {
  const { isLoading, isError, error, data } = useGetCatProductQuery();

  return (
    <div className="prodCatView">
      {isLoading ? (
        <Loading />
      ) : isError ? (
        <>`Oh no, there was an error ${error}`</>
      ) : (
        data?.cat.map((item, index) => {
          return (
            <div className="homeCard" key={index}>
              <div className="prodCat">
                <div className="catName">{item}</div>
                <button>VIEW ALL</button>
              </div>

              {data?.prod[index].map((prod, idx) => {
                return (
                  
                    <HomeProductCard
                      key={idx}
                      name={prod?.productName}
                      price={prod?.productPrice}
                      color={prod?.productColor}
                      image={prod?.productImage}
                      id={prod?._id}
                    />
                  
                );
              })}
            </div>
          );
        })
      )}
    </div>
  );
};

export default HomeView;
