
import ProductCard from "./ProductCard";
import useProduct from "./hooks/useProduct";



const ProductView = () => {
 
  const {products} = useProduct();



  return (
    <div className="cards">
      {products.map((product, index) => {
        return (
            <ProductCard 
            key={index} 
            name={product.productName}
            price={product.productPrice}
            color={product.productColor}
            image={product.productImage}
            />
        );
      })}
    </div>
  );
};

export default ProductView;
