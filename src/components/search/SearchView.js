import ProductCard from "../product/ProductCard";
import { useSelector } from "react-redux";
import { useGetSearchProductsQuery } from "../../api/iKartApi";


const SearchView = () => {
  const search = useSelector((state) => state.search.search);
  const {
    isLoading,
    isError,
    error,
    data: products,
  } = useGetSearchProductsQuery(search);

  return (
    <div className="cards">
      {isLoading ? (
        <h2>Loading...</h2>
      ) : isError ? (
        <h2>`Oh no, there was an error ${error}`</h2>
      ) : products?.length ? (
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
