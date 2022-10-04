import React, { useEffect } from "react";
import useProduct from "./hooks/useProduct";
import ProductFilter from "./ProductFilter";
import SearchView from "./SearchView";

const Search = () => {
  const { products, searchProduct } = useProduct();
  useEffect(() => {
    searchProduct();
  }, []);
  return (
    <div className="product">
      {products?.length ? (
        <>
          <ProductFilter />
          <SearchView />
        </>
      ) : (
        <h2>Product not Found</h2>
      )}
    </div>
  );
};

export default Search;
