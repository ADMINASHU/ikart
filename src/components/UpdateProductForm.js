import React, { useEffect, useState } from "react";
import axios from "../api/axios";
import { useNavigate } from "react-router-dom";
import useAuth from "./hooks/useAuth";
import useSellerProduct from "./hooks/useSellerProduct";

const UpdateProductForm = ({ setUpdateFormView, id }) => {
  const { auth } = useAuth();
  const { getSellerProduct } = useSellerProduct();
  const [productName, setProductName] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [productQuantity, setProductQuantity] = useState("");
  const [productCategory, setProductCategory] = useState("");
  const [productImage, setProductImage] = useState("");
  const [productColor, setProductColor] = useState("");
  const [productCode, setProductCode] = useState("");
  const [errMsg, setErrMsg] = useState("");

  useEffect(() => {
    setErrMsg("");
  }, [
    productName,
    productPrice,
    productQuantity,
    productCategory,
    productImage,
    productColor,
    productCode,
    auth,
  ]); // useEffect for set Error
  useEffect(() => {
    getProductDetails();
  }, []);

  const navigate = useNavigate();

  // functions define ...................................................

  const getProductDetails = async () => {
    try {
      const response = await axios.get(`/gProduct/${id}`);
      const getProduct = await response?.data;
      setProductName(getProduct.productName);
      setProductPrice(getProduct.productPrice);
      setProductQuantity(getProduct.productQuantity);
      setProductCategory(getProduct.productCategory);
      setProductImage(getProduct.productImage);
      setProductColor(getProduct.productColor);
      setProductCode(getProduct.productCode);
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.put(
        `/updateProduct/${id}`,
        {
          productName: productName,
          productPrice: productPrice,
          productQuantity: productQuantity,
          productCategory: productCategory,
          productImage: productImage,
          productColor: productColor,
          productCode: productCode,
        },
        {
          header: { "content-Type": "application/json" },
          withCredentials: false,
        }
      );
      // console.log(response?.data);

      setProductName("");
      setProductPrice("");
      setProductQuantity("");
      setProductCategory("");
      setProductImage("");
      setProductColor("");
      setProductCode("");
      getSellerProduct();
      setUpdateFormView(false);
    } catch (error) {
      if (!error?.response) {
        setErrMsg("Server not responding");
      } else if (error.response?.status === 400) {
        setErrMsg("Please fill all field");
      } else {
        setErrMsg("Adding Product failed");
      }
    }
  };

  return (
    <form method="put" onSubmit={handleSubmit}>
      <label>product Name: </label>
      <div className="inputBox">
        <input
          className="input"
          type="text"
          placeholder="productName"
          name="productName"
          value={productName}
          autoComplete="none"
          required
          onChange={(e) => setProductName(e.target.value)}
        />
      </div>
      <label>Price: </label>
      <div className="inputBox">
        <input
          className="input"
          type="text"
          placeholder="productPrice"
          name="productPrice"
          value={productPrice}
          autoComplete="none"
          required
          onChange={(e) => setProductPrice(e.target.value)}
        />
      </div>
      <label>Quantity: </label>
      <div className="inputBox">
        <input
          className="input"
          type="text"
          placeholder="productQuantity"
          name="productQuantity"
          value={productQuantity}
          autoComplete="none"
          required
          onChange={(e) => setProductQuantity(e.target.value)}
        />
      </div>
      <label>Category: </label>
      <div className="inputBox">
        <input
          className="input"
          type="text"
          placeholder="productCategory"
          name="productCategory"
          value={productCategory}
          autoComplete="none"
          required
          onChange={(e) => setProductCategory(e.target.value)}
        />
      </div>
      <label>Image: </label>
      <div className="inputBox">
        <input
          className="input"
          type="text"
          placeholder="productImage"
          name="productImage"
          value={productImage}
          autoComplete="none"
          required
          onChange={(e) => setProductImage(e.target.value)}
        />
      </div>
      <label>Color: </label>
      <div className="inputBox">
        <input
          className="input"
          type="text"
          placeholder="productColor"
          name="productColor"
          value={productColor}
          autoComplete="none"
          required
          onChange={(e) => setProductColor(e.target.value)}
        />
      </div>
      <label>Product Code: </label>
      <div className="inputBox">
        <input
          className="input"
          type="text"
          placeholder="productCode"
          name="productCode"
          value={productCode}
          autoComplete="none"
          required
          onChange={(e) => setProductCode(e.target.value)}
        />
      </div>
      <br />
      <button className="btn btn-seller" type="submit">
        Update Product
      </button>
      <br />
      <span className="invalidError">{errMsg}</span>
      <br />
    </form>
  );
};

export default UpdateProductForm;
