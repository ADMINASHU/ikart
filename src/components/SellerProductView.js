import ProductCard from "./ProductCard";
import useSellerProduct from "./hooks/useSellerProduct";
import { useEffect } from "react";

const SellerProductView = () => {
  const { sellerProducts, getSellerProduct } = useSellerProduct();

  // useEffect(() => {
  //   getSellerProduct();
  // }, []);

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
