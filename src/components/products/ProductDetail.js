import React, { useEffect, useState } from "react";
import "./productdetail.css";
import MoreProducts from "./moreproducts/MoreProducts";
import { useParams } from "react-router-dom";
import { useProductContext } from "../../context/productcontext";
import Reviews from "../reviews/Reviews";
import FormatPrice from "../../helper/formatprice/FormatPrice";
import Quantity from "../../helper/quantity/QuantityHelper";
import StarRating from "../reviews/star/StarRating";
import Preloader from "../preloader/Preloader";
import { Form } from "react-bootstrap";

function ProductDetail() {
  const { productId } = useParams();
  const { getSingleProduct, isSingleProductLoading, singleProduct } = useProductContext();
  const { productId: id, productName, productImageUrl, productDescription, productInformation, productPrice, quantity, weight, categoryName, ratingResponse, avgStarRating } = singleProduct;
  const [orderQuantity, setOrderQuantity] = useState(1);
  const [selectedOption, setSelectedOption] = useState("");
  useEffect(() => {
    getSingleProduct(productId);
  }, []);

  const handleChange = (e) => {
    const value = e.target.value;
    let changedWeight = value;
    setSelectedOption(value);
  };

  function displayProductDetails() {
    return (
      productInformation &&
      productInformation.map((productInfo, i) => {
        if (selectedOption == productInfo.weight) {
          return (
            <>
              <div className="row py-2" key={i}>
                <div className="col-6 col-sm-6 p-0 text-center text-muted mb-1 productQty  m-0">
                  <Quantity productInfo={productInfo} orderQuantity={orderQuantity} setOrderQuantity={setOrderQuantity} />
                </div>
                <div className="col-6 col-sm-6 p-0 text-center text-muted mb-1 productQty  m-0">
                  <p className="text-muted mb-1   m-0">
                    <span className="fw-bold">Price: ₹{productInfo.productPrice} </span>

                    <span className="fw-bold">
                      MRP: <s>₹{productInfo.productMaxRetailPrice}</s>
                    </span>
                  </p>
                </div>
                <div className="col-6 col-sm-6 p-0 text-center text-muted mb-1 productQty  m-0">
                  In Stock: <span className="fw-bold">{productInfo.quantity} packets</span>
                </div>
                <div className="col-6 col-sm-6 p-0 text-center text-muted mb-1">
                  Weight: <span className="fw-bold">{productInfo.weight} gms</span>
                </div>
                <div className="col-12 col-sm-12 p-0 text-center text-muted mb-1">
                  <a href="#" className="btn btn-danger w-100">
                    Add To Cart
                  </a>
                </div>
              </div>
            </>
          );
        }
      })
    );
  }
  if (isSingleProductLoading) {
    return <Preloader />;
  }
  return (
    <>
      <div className="container m-auto">
        <div className="col-lg-12 border p-3 bg-white">
          <div className="row hedding m-0 pl-3 pt-0 pb-3">Home / DryFruits / Almonds / California Almonds</div>
          <div className="row m-0">
            <div className="col-lg-4 left-side-product-box pb-3">
              <img src={productImageUrl} className="border p-3" />
            </div>
            <div className="col-lg-8">
              <div className="right-side-pro-detail border p-3 m-0">
                <div className="row">
                  <div className="col-lg-12">
                    <span className="text-secondary">{categoryName}</span>
                    <p className="text-dark m-0 p-0">{productName}</p> <StarRating avgStarRating={avgStarRating} />
                  </div>

                  <div className="col-lg-12 pt-2">
                    <h5>Product Detail</h5>
                    <span>{productDescription}</span>
                    <hr className="hr hr-blurry" />
                  </div>

                  <div className="col-lg-4">
                    <h6>Weight :</h6>
                    {/* <input type="number" className="form-control text-center w-100" /> */}
                    <Form.Select name="weight" aria-label="Default select example" size="sm" onChange={(e) => handleChange(e)}>
                      <option disabled selected>
                        Select Weight
                      </option>
                      {productInformation &&
                        productInformation.map((productInfo, i) => {
                          return <option value={productInfo.weight}> {productInfo.weight} GM</option>;
                        })}
                    </Form.Select>
                  </div>
                  <div className="col-lg-12  d-flex">
                    <div className="col-sm-12 col-12">{displayProductDetails()}</div>
                    <hr className="p-0 m-0 hr_sperator" />
                  </div>
                  <div className="col-lg-12 mt-3"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12 text-center pt-3">
              <h4>More Product</h4>
            </div>
            <MoreProducts categoryName={categoryName} id={id} />
          </div>
          <div className="row">
            <div className="col-lg-12 text-center pt-3">
              <h4>Reviews</h4>
            </div>
            <Reviews id={id} ratingResponse={ratingResponse} productId={productId} />
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductDetail;
