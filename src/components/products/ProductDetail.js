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
  const { productId: id, productName, productImageUrl, productDescription, productInformation,
    productPrice, quantity, weight, categoryName, ratingResponse, avgStarRating } = singleProduct;
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
    return productInformation && productInformation.map((productInfo, i) => {
      if (selectedOption == productInfo.weight) {
        return (
          <>
            <div className="row py-2" key={i}>
              <div className="col-6 col-sm-6 p-0 text-center text-muted mb-1 productQty  m-0">
                In Stock: <span className="fw-bold">{productInfo.quantity} packets</span>
              </div>
              <div className="col-6 col-sm-6 p-0 text-center text-muted mb-1">
                Weight: <span className="fw-bold">{productInfo.weight} gms</span>
              </div>
            </div>
            <Quantity productInfo={productInfo} orderQuantity={orderQuantity} setOrderQuantity={setOrderQuantity} />
            <p className="text-muted mb-1 productDiscCost  m-0">
              ₹<span className="fw-bold">{productInfo.productPrice}</span> |{" "}
              <s>
                ₹<span className="fw-bold">{productInfo.productMaxRetailPrice}</span>
              </s>
            </p>
          </>
        );
      }
    });
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
                  <div className="col-lg-12  d-flex">
                    <div className="col-sm-12 col-12">{displayProductDetails()}</div>
                    {/* <p className="m-0 p-0 text-success price-pro">{<FormatPrice productPrice={productPrice} />} </p>
                    <p className="m-0 p-0 text-success price-pro">
                      <b className="px-2"> | </b>
                    </p>
                    <p className="m-0 p-0 text-danger price-pro">{<s>{<FormatPrice productPrice={productPrice + 200} />}</s>}</p> */}
                    <hr className="p-0 m-0 hr_sperator" />
                  </div>
                  <div className="col-lg-12 pt-2">
                    <h5>Product Detail</h5>
                    <span>{productDescription}</span>
                    <hr className="hr hr-blurry" />
                    {/* <hr className=" hr_sperator" /> */}
                  </div>
                  <div className="col-lg-12 pt-2">
                    <h5>In stock</h5>
                    <span>
                      Only <b className="text-danger">{quantity}</b> left!!!
                    </span>
                    <h5> Hurry Up</h5>
                    {/* <hr className="m-0 pt-2 mt-2 hr_sperator" /> */}
                    <hr className="hr hr-blurry" />
                  </div>
                  <div className="col-lg-4">
                    <h6>Weight :</h6>
                    {/* <input type="number" className="form-control text-center w-100" /> */}
                    <Form.Select name="weight" aria-label="Default select example" size="sm" onChange={(e) => handleChange(e)}>
                      {productInformation && productInformation.map((productInfo, i) => {
                        return <option value={productInfo.weight}> {productInfo.weight} GM</option>;
                      })}
                    </Form.Select>
                  </div>

                  <div className="col-lg-4">
                    <h6>Cost :</h6>
                    <label className="my-1">₹60</label>
                  </div>
                  <div className="col-lg-12 mt-3">
                    <div className="row">
                      <div className="col-lg-6 pb-2">
                        <a href="#" className="btn btn-danger w-100">
                          Add To Cart
                        </a>
                      </div>
                      <div className="col-lg-6">
                        <a href="#" className="btn btn-success w-100">
                          Shop Now
                        </a>
                      </div>
                    </div>
                  </div>
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
