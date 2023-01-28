import React, { useEffect } from "react";
import "./dryfruitdetail.css";
import MoreProducts from "../moreproducts/MoreProducts";
import { useParams } from "react-router-dom";
import { useProductContext } from "../../../context/productcontext";
import Reviews from "../../reviews/Reviews";
import FormatPrice from "../../../helper/formatprice/FormatPrice";
import Quantitycomp from "./Quantitycomp";

function DryFruitDetail() {
  const { productId } = useParams();
  const { getSingleProduct, isSingleProductLoading, singleProduct } = useProductContext();
  const { productId: id, productName, productImageUrl, productDescription, productPrice, quantity, weight, categoryName } = singleProduct;

  useEffect(() => {
    getSingleProduct(productId);
  }, []);

  if (isSingleProductLoading) {
    return <div>... Loading</div>;
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
                    <p className="text-dark m-0 p-0">{productName}</p>
                  </div>
                  <div className="col-lg-12  d-flex">
                    <p className="m-0 p-0 text-success price-pro">{<FormatPrice productPrice={productPrice} />} </p>
                    <p className="m-0 p-0 text-success price-pro">
                      <b className="px-2"> | </b>
                    </p>
                    <p className="m-0 p-0 text-danger price-pro">{<s>{<FormatPrice productPrice={productPrice + 200} />}</s>}</p>
                    <hr className="p-0 m-0 hr_sperator" />
                  </div>
                  <div className="col-lg-12 pt-2">
                    <h5>Product Detail</h5>
                    <span>{productDescription}</span>
                    <hr class="hr hr-blurry" />
                    {/* <hr className=" hr_sperator" /> */}
                  </div>
                  <div className="col-lg-12 pt-2">
                    <h5>In stock</h5>
                    <span>Only {quantity} left!!!</span>
                    <h5> Hurry Up</h5>
                    {/* <hr className="m-0 pt-2 mt-2 hr_sperator" /> */}
                    <hr class="hr hr-blurry" />
                  </div>
                  <div className="col-lg-4">
                    <h6>Weight :</h6>
                    {/* <input type="number" className="form-control text-center w-100" /> */}
                    <select className="form-control">
                      <option>250GM</option>
                      <option>500GM</option>
                      <option>1000GM</option>
                    </select>
                  </div>
                  <Quantitycomp singleProduct={singleProduct} />
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
            <Reviews />
          </div>
        </div>
      </div>
    </>
  );
}

export default DryFruitDetail;
