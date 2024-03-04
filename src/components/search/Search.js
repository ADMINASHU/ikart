import React from "react";
import ProductFilter from "../product/ProductFilter";
import SearchView from "./SearchView";


const Search = () => {
  return (
    <div className="product">
      <ProductFilter />
      <SearchView />
    </div>
  );
};

export default Search;
