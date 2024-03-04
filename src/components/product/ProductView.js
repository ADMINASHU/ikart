import { useGetAllProductsQuery } from "../../api/iKartApi";
import Loading from "../Loading";
import ProductCard from "./ProductCard";

const ProductView = () => {
  const {
    isLoading,
    isError,
    error,
    data: products,
  } = useGetAllProductsQuery();

  return (
    <div className="cards">
      {isLoading ? (
        <Loading/>
      ) : isError ? (
        <>`Oh no, there was an error ${error}`</>
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
        <h2>No Product added</h2>
      )}
    </div>
  );
};

export default ProductView;
