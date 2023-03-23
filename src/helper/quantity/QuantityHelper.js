import React, { useState } from "react";

function QuantityHelper({ productInfo, setOrderQuantity, orderQuantity }) {
  const { quantity } = productInfo;

  const decreaseQuantity = () => {
    orderQuantity > 1 ? setOrderQuantity(orderQuantity - 1) : setOrderQuantity(1);
  };

  const increaseQuantity = () => {
    orderQuantity < quantity ? setOrderQuantity(orderQuantity + 1) : setOrderQuantity(quantity);
  };
  return (
    <>
      <div className="col-md-12 py-2">
        <div className="d-flex align-middle">
          <button className="btn btn-sm btn-danger mb-0" onClick={decreaseQuantity}>
            -
          </button>
          <div size="m" readOnly disabled type="text" className="text-center qty_cost_bg" placeholder="1">
            {orderQuantity}
          </div>
          <button className="btn btn-sm btn-success mb-0" onClick={increaseQuantity}>
            +
          </button>
        </div>
      </div>
    </>
  );
}

export default QuantityHelper;
