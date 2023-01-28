import React from "react";

function MoreProduct({ product }) {
  return (
    <>
      <div className="col-lg-3 pb-2">
        <div className="pro-box border p-0 m-0">
          <img src={product.productImageUrl} />
        </div>
      </div>
    </>
  );
}

export default MoreProduct;
