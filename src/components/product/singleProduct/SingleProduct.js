import React from "react";
import { useParams } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { faBolt, faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  useAddCartItemMutation,
  useGetAuthQuery,
  useGetCartItemCountQuery,
  useGetSingleProductQuery,
} from "../../../api/iKartApi";
import "./singleProduct.scss";
import Loading from "../../Loading";
const SingleProduct = () => {
  const { id } = useParams();
  const { data: auth } = useGetAuthQuery(undefined, {
    refetchOnMountOrArgChange: true,
  });
  const {
    isLoading,
    isError,
    error,
    data: product,
  } = useGetSingleProductQuery(
    { id },
    {
      refetchOnMountOrArgChange: true,
    }
  );
  const [addCartItem] = useAddCartItemMutation();
  const { data: itemCount } = useGetCartItemCountQuery(
    { id },
    {
      refetchOnMountOrArgChange: true,
      skip: !auth,
    }
  );

  return (
    <div className="cards">
      {isLoading ? (
        <Loading />
      ) : isError ? (
        <>`Oh no, there was an error ${error}`</>
      ) : (
        <div className="singleProductPage page">
          <div className="productImageSlider">
            <div className="imageSlider">
              <div className="slider"></div>
              <div className="productImage">
                <img src={product?.productImage} alt="product" />
              </div>
            </div>
            <div className="productAction">
              {itemCount ? (
                <NavLink to={"/cart"}>
                  <button className="cart">
                    <FontAwesomeIcon icon={faCartShopping} size="sm" /> Go to
                    Cart
                  </button>
                </NavLink>
              ) : (
                <NavLink to={"/cart"}>
                  <button
                    className="cart"
                    onClick={() =>
                      addCartItem({
                        body: { id: id, count: 1 },
                      })
                    }
                  >
                    <FontAwesomeIcon icon={faCartShopping} size="sm" /> &nbsp;
                    Add To Cart
                  </button>
                </NavLink>
              )}
              <button className="buy">
                <FontAwesomeIcon icon={faBolt} size="sm" />
                &nbsp; Buy Now
              </button>
            </div>
          </div>
          <div className="productDetails">
            <div>Address</div>
            <div className="name">{product.productName}</div>
            <div className="rating">Ratings not available</div>
            <div className="special">Special Price</div>
            <div className="priceDetails">
              <span className="price">
                {(
                  product.productPrice - product.productDiscount
                ).toLocaleString("us-US", {
                  style: "currency",
                  currency: "INR",
                  maximumFractionDigits: 0,
                })}
              </span>
              <span className="mrp">
                {product.productPrice.toLocaleString("us-US", {
                  style: "currency",
                  currency: "INR",
                  maximumFractionDigits: 0,
                })}
              </span>
              <span className="discount">
                {(
                  (product.productDiscount * 100) /
                  product.productPrice
                ).toLocaleString("us-US", {
                  maximumFractionDigits: 0,
                })}
                % off
              </span>
            </div>
            <div className="offers">Available offers</div>
            <div>offer list</div>
            <div>
              <span>brand name</span>
              <span> Years Warranty on Product From Manufacturer</span>
            </div>
            <div>
              <span>filers</span>
              <div>size</div>
              <div>color</div>
            </div>
            <div>
              <span> highlights</span>
              <div>highlights list</div>
            </div>
            <div>
              <div>Seller</div>
              <div>
                <span>seller name</span>
                <span>seller ratings</span>
              </div>
              <div>relacement</div>
            </div>
            <div>
              <span>Description</span>
              <span>details</span>
            </div>
            <div className="specifications">
              <div className="specifications_header">
                <div>Specifications</div>
              </div>
              <div className="specifications_details">
                <div className="general">General</div>
                <div>All details</div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SingleProduct;
