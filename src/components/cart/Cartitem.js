import React from "react";
import { Form } from "react-bootstrap";
import { FaTrash } from "react-icons/fa";
import { useDispatch } from 'react-redux';
// import { removeFromCart, increase, decrease } from '../../store/slices/CartSlice';
import "./cart.css";
function Cartitem({ id, productName, categoryName, weight }) {
  const dispatch = useDispatch();

  return (
    <>
      <div className="card mb-3 py-2 cartItem">
        <div className="row no-gutters">
          <div className="col-4">
            <img src="http://kolambkarashutosh.000webhostapp.com/al/img/product_01a.png"
              className="img-fulid card-img" alt="..." />
          </div>
          <div className="col-8">
            <div className="card-body px-0 py-1">
              {/* <FaTrash className="deleteCartBtn" onClick={() => { dispatch(removeFromCart(id)) }} /> */}
              <h5 className="card-title m-0">{productName}</h5>
              <p className="text-secondary " style={{ fontSize: "12px", marginBottom: "5px" }}>
                {categoryName} <i>{weight}</i>
              </p>
              <div className="row">
                <div className="col-6 d-flex">
                  <div className="d-flex">
                    {/* <button className="btn btn-sm btn-danger mb-0" onClick={dispatch(increase)} >-</button> */}
                    <Form.Control size="sm" readOnly disabled type="text" className="text-center qty_cost_bg"
                      placeholder="1" />
                    {/* <button className="btn btn-sm btn-success mb-0" onClick={dispatch(decrease)} >+</button> */}
                  </div>
                </div>
                <div className="col-6">
                  <Form.Control size="sm" readOnly disabled type="text" className="text-left qty_cost_bg"
                    style={{ textAlign: "left" }} placeholder="Cost" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cartitem;
