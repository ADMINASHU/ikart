import React, { useEffect, useState } from "react";

// toast
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useAddSellerProductMutation } from "../../../api/iKartApi";
// toast

const ProductForm = ({ setFormView }) => {
  const [addSellerProduct] = useAddSellerProductMutation();

  const [productName, setProductName] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [productQuantity, setProductQuantity] = useState("");
  const [productCategory, setProductCategory] = useState("");
  const [productImage, setProductImage] = useState("");
  const [productColor, setProductColor] = useState("");
  const [productCode, setProductCode] = useState("");
  const [discount, setDiscount] = useState("");
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
    discount,
  ]); // useEffect for set Error

  // functions define ...................................................

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("productName", productName);
    formData.append("productPrice", productPrice);
    formData.append("productQuantity", productQuantity);
    formData.append("productCategory", productCategory);
    formData.append("productImage", productImage);
    formData.append("productColor", productColor);
    formData.append("productDiscount", discount);
    formData.append("productCode", productCode);
    // console.log("formData", formData);
    // console.log("productImage", productImage);

    try {
      const response = addSellerProduct({
        body: formData,
      });

      // console.log(response?.data);

      setProductName("");
      setProductPrice("");
      setProductQuantity("");
      setProductCategory("");
      setProductImage("");
      setProductColor("");
      setProductCode("");
      setDiscount("");
      setFormView(false);
      toast(response.message);
    } catch (error) {
      setErrMsg("Adding Product failed");
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit} encType="multipart/form-data">
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
        <label>Discount: </label>
        <div className="inputBox">
          <input
            className="input"
            type="text"
            placeholder="Discount"
            name="Discount"
            value={discount}
            autoComplete="none"
            required
            onChange={(e) => setDiscount(e.target.value)}
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
            type="file"
            placeholder="productImage"
            filename="productImage"
            accept="image/*"
            multiple
            autoComplete="none"
            required
            onChange={(e) => setProductImage(e.target.files[0])}
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
          Add Product
        </button>
        <br />
        <span className="invalidError">{errMsg}</span>
        <br />
      </form>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </>
  );
};

export default ProductForm;
