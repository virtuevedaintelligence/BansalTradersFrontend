import React from "react";
import "./dryfruitdetail.css";
import MoreProducts from "./MoreProducts";
function DryFruitDetail() {
  return (
    <>
      <div className="container m-auto">
        <div className="col-lg-12 border p-3 bg-white">
          <div className="row hedding m-0 pl-3 pt-0 pb-3">Home / DryFruits / Almonds / California Almonds</div>
          <div className="row m-0">
            <div className="col-lg-4 left-side-product-box pb-3">
              <img src="http://nicesnippets.com/demo/pd-image1.jpg" className="border p-3" />
            </div>
            <div className="col-lg-8">
              <div className="right-side-pro-detail border p-3 m-0">
                <div className="row">
                  <div className="col-lg-12">
                    <span className="text-secondary">Cateogry Name</span>
                    <p className="text-dark m-0 p-0">Product Name</p>
                  </div>
                  <div className="col-lg-12  d-flex">
                    <p className="m-0 p-0 price-pro">₹30</p>
                    <p className="mx-4 p-0 price-pro">₹30</p>
                    <hr className="p-0 m-0" />
                  </div>
                  <div className="col-lg-12 pt-2">
                    <h5>Product Detail</h5>
                    <span>Product Description 255 chars</span>
                    <hr className="m-0 pt-2 mt-2" />
                  </div>
                  <div className="col-lg-12 pt-2">
                    <h5>In stock</h5>
                    <span>Product Description 255 chars</span>
                    <h5> Hurry Up</h5>
                    <hr className="m-0 pt-2 mt-2" />
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
                  <div className="col-lg-4">
                    <h6>Quantity :</h6>
                    <input type="number" className="form-control text-center w-100" />
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
            <MoreProducts />
          </div>
        </div>
      </div>
    </>
  );
}

export default DryFruitDetail;
