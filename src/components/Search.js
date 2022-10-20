import React, { useEffect } from "react";
import useProduct from "./hooks/useProduct";
import ProductFilter from "./ProductFilter";
import SearchView from "./SearchView";
import useAuth from "./hooks/useAuth";
import useUI from "./hooks/useUI";
const Search = () => {
  const { products, searchProduct } = useProduct();
  const { isLoggedIn } = useAuth();
  // const { setNavView } = useUI();
  useEffect(() => {
    // searchProduct();
    isLoggedIn();
    // setNavView(false);
  }, []);
  return (
    <div className="product">
      <ProductFilter />
      <SearchView />
    </div>
  );
};

export default Search;
