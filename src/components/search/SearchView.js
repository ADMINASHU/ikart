import ProductCard from "../product/ProductCard";
import { useSelector } from "react-redux";
import { useGetSearchProductsQuery } from "../../api/productApi";

const SearchView = () => {
  const search = useSelector((state) => state.search.search);
  const {
    isLoading,
    isSuccess,
    isError,
    error,
    data: products,
  } = useGetSearchProductsQuery(search);


  return (
    <div className="cards">
      {isError ? (
        <h2>`Oh no, there was an error ${error}`</h2>
      ) : isLoading ? (
        <h2>Loading...</h2>
      ) : isSuccess && products?.length ? (
        products?.map((product, index) => {
          return (
            <ProductCard
              key={index}
              name={product.productName}
              price={product.productPrice}
              color={product.productColor}
              image={product.productImage}
              id={product._id}
            />
          );
        })
      ) : (
        <h2>No Product matched</h2>
      )}
    </div>
  );
};

export default SearchView;
