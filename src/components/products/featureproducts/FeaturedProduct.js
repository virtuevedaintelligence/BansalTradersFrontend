import { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import "./FeaturedProduct.css";

function FeaturedProduct({ product }) {
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
      <div className="col-sm-4 mb-3 fpbox" data-aos="flip-right">
        <div className="card rounded p-2 icon-box">
          <img className="img-fluid featuredProductImg" src={productImageUrl} alt="Sunset in the mountains" />
          <div className="px-6 pt-4">
            <div className="font-bold text-xl mb-2">{productName}</div>
            <p className="text-dark m-0 text-base featuredProductDesc" title={productDescription.toString()}>
              {productDescription}
            </p>
          </div>
          <div className="px-6">
            <span className="d-inline-block bg-danger rounded px-3 py-1 text-sm text-light m-2">
              <s>₹{actualPrice}</s>
            </span>
            <span className="d-inline-block bg-success rounded  px-3 py-1 text-sm text-light m-2">₹{productPrice}</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default FeaturedProduct;
