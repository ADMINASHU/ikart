import ProductCard from "./ProductCard";
import useProduct from "./hooks/useProduct";



const ProductView = () => {
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
