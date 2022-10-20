import ProductCard from "./ProductCard";
import { useGetAllProductsQuery } from "../services/productApi";

const ProductView = () => {

  const {
    isLoading,
    isSuccess,
    isError,
    error,
    data: products,
  } = useGetAllProductsQuery();

  return (
    <div className="cards">
      {isError ? (
        <>`Oh no, there was an error ${error}`</>
      ) : isLoading ? (
        <>Loading...</>
      ) : isSuccess ? (
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
        <h2>No Product added</h2>
      )}
    </div>
  );
};

export default ProductView;
