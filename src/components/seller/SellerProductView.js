import { useState } from "react";
import { faAdd } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ProductForm from "../product/ProductForm";
import UpdateProductForm from "../product/UpdateProductForm";
import SellerProductCard from "./SellerProductCard";
import { useGetAuthUserQuery } from "../../api/authApi";
import {
  useGetSellerProductQuery,
  useDeleteSellerProductMutation,
} from "../../api/productApi";

const SellerProductView = () => {
  const { data: user } = useGetAuthUserQuery();
  const { data: sellerProducts } = useGetSellerProductQuery({
    username: user.username,
    token: user.accessToken,
  });
  const [deleteSellerProduct] = useDeleteSellerProductMutation();
  const [formView, setFormView] = useState(false);
  const [productId, setProductId] = useState("");
  const [updateFormView, setUpdateFormView] = useState(false);

  const deleteProduct = (id) => {
    deleteSellerProduct({
      id: id,
      token: user.accessToken,
    });
  };

  return (
    <div className="cards">
      {formView ? (
        <div className="ProductForm">
          <ProductForm setFormView={setFormView} />
        </div>
      ) : (
        <></>
      )}
      {updateFormView ? (
        <div className="ProductForm">
          <UpdateProductForm
            setUpdateFormView={setUpdateFormView}
            id={productId}
          />
        </div>
      ) : (
        <></>
      )}
      <div className="card">
        <div
          className="productImage"
          onClick={() => setFormView((prevState) => !prevState)}
        >
          <FontAwesomeIcon icon={faAdd} size="10x" />
        </div>
      </div>
      {sellerProducts?.length ? (
        sellerProducts
          ?.map((product, index) => {
            return (
              <SellerProductCard
                key={index}
                name={product.productName}
                price={product.productPrice}
                color={product.productColor}
                image={product.productImage}
                deleteProduct={deleteProduct}
                setProductId={setProductId}
                setUpdateFormView={setUpdateFormView}
                id={product._id}
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
