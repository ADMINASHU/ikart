import ProductCard from "./ProductCard";
import useSellerProduct from "./hooks/useSellerProduct";

const SellerProductView = () => {
  const { sellerProducts } = useSellerProduct();

  return (
    <div className="cards">
      {sellerProducts?.length ? (
        sellerProducts?.map((product, index) => {
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
        <h2>No Product added</h2>
      )}
    </div>
  );
};

export default SellerProductView;
