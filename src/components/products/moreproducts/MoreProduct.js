import React from "react";
import { NavLink } from "react-router-dom";

function MoreProduct({ product }) {
  const { productId } = product;
  console.log(product);
  return (
    <>
      <div className="col-lg-3 pb-2">
        <div className="pro-box border p-0 m-0">
          <NavLink to={`/dryfruitdetails/${productId}`}>
            <img src={product.productImageUrl} />
          </NavLink>
          <p className="d-inline-block">{product.productName}</p>
          <p className="d-inline-block">{product.categoryName}</p>
        </div>
      </div>
    </>
  );
}

export default MoreProduct;
