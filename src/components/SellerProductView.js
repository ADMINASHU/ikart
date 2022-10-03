import useSellerProduct from "./hooks/useSellerProduct";
import { useState, useEffect } from "react";
import { faAdd } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ProductForm from "./ProductForm";
import UpdateProductForm from "./UpdateProductForm";
import SellerProductCard from "./SellerProductCard";
import axios from "../api/axios";


const SellerProductView = () => {
  const [formView, setFormView] = useState(false);
  const [updateFormView, setUpdateFormView] = useState(false);
  const { sellerProducts, getSellerProduct, productId, setProductId } = useSellerProduct();

  // useEffect(() => {
  //   getSellerProduct();
  // }, []);

  const deleteProduct = async (id) => {
    try {
      const response = await axios.delete(`/deleteProduct/${id}`);
      getSellerProduct();
    } catch (error) {
      console.log(error);
    }
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
        <div className="property">
          <div className="button">
            <button className="like">edit</button>
            <button className="add">delete</button>
          </div>
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
