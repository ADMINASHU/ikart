import ProductCard from "./ProductCard";
import useProduct from "./hooks/useProduct";

const SearchView = () => {
  const { products } = useProduct();

  return (
    <div className="cards">
      {products?.length ? (
        products?.map((product, index) => {
          return (
            <ProductCard
              key={index}
              name={product.productName}
              price={product.productPrice}
              color={product.productColor}
              image={product.productImage}
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
