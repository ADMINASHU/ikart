import { useState } from "react";
import { faAdd } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ProductForm from "./ProductForm";
import UpdateProductForm from "./UpdateProductForm";
import SellerProductCard from "./SellerProductCard";
import { useGetSellerProductQuery } from "../../../api/iKartApi";
import Loading from "../../Loading";

const SellerProductView = () => {
  const {
    isLoading,
    isError,
    error,
    data: sellerProducts,
  } = useGetSellerProductQuery(undefined, { refetchOnMountOrArgChange: true });
  const [formView, setFormView] = useState(false);
  const [productId, setProductId] = useState("");
  const [updateFormView, setUpdateFormView] = useState(false);

  return (
    <div className="cards">
      {formView && (
        <div className="ProductForm">
          <ProductForm setFormView={setFormView} />
        </div>
      )}
      {updateFormView && (
        <div className="ProductForm">
          <UpdateProductForm
            setUpdateFormView={setUpdateFormView}
            id={productId}
          />
        </div>
      )}
      <div className="card">
        <div
          className="productImage"
          onClick={() => setFormView((prevState) => !prevState)}
        >
          <FontAwesomeIcon icon={faAdd} size="10x" />
        </div>
      </div>
      {isLoading ? (
        <Loading />
      ) : isError ? (
        <>`Oh no, there was an error ${error}`</>
      ) : sellerProducts?.length ? (
        sellerProducts
          ?.map((product, index) => {
            return (
              <SellerProductCard
                id={product._id}
                key={index}
                name={product.productName}
                price={product.productPrice}
                color={product.productColor}
                image={product.productImage}
                setProductId={setProductId}
                setUpdateFormView={setUpdateFormView}
              />
            );
          })
          .reverse()
      ) : (
        <h2>No Product added</h2>
      )}
    </div>
  );
};

export default SellerProductView;
