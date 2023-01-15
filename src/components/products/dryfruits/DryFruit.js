import React, { useEffect, useState } from "react";
import { FcLike } from "react-icons/fc";
import { MDBCard, MDBCardBody, MDBCardImage, MDBCol } from "mdb-react-ui-kit";
import "./dryfruits.css";

function DryFruit({ product }) {
  var [actualPrice, setActualPrice] = useState();
  function calculateActualPrice(productPrice) {
    actualPrice = productPrice + 200;
    setActualPrice(actualPrice);
  }
  const { productId, productName, productImageUrl, productDescription, productPrice, quantity, weight, categoryName, featured } = product;

  useEffect(() => {
    calculateActualPrice(productPrice);
  }, []);
  return (
    <>
      <MDBCol md="4" lg="4" className="mb-4 products">
        <MDBCard key={productId}>
          <div className="d-flex justify-content-between p-3">
            <p className="lead mb-0">{productName}</p>
            <div className=" rounded-circle d-flex align-items-center justify-content-center shadow-1-strong" style={{ width: "35px", height: "35px" }}>
              <p className="text-white mb-0 small">
                <FcLike />
              </p>
            </div>
          </div>
          <MDBCardImage src={productImageUrl} position="top" alt={productName} />
          <MDBCardBody>
            <div className="d-flex justify-content-between">
              <p className="small mb-2">
                <a href="#!" className="text-muted">
                  {categoryName}
                </a>
              </p>
              <div className="productDiscCost">
                ₹{productPrice} | <s value={actualPrice}>₹{actualPrice}</s>
              </div>
            </div>
            <div className="d-flex justify-content-between mb-2">
              <h6 className="mb-0 productDesc">{productDescription}</h6>
            </div>

            <div className="d-flex justify-content-between mb-2">
              <p className="text-muted mb-0 productQty  m-0">
                In Stock: <span className="fw-bold">{quantity} packets</span>
              </p>
              <p className="text-muted mb-0">
                Weight: <span className="fw-bold">{weight} gms</span>
              </p>
            </div>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
    </>
  );
}

export default DryFruit;
