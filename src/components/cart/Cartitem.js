import React from "react";
import { Form } from "react-bootstrap";
import { FaTrash } from "react-icons/fa";
import "./cart.css";
function Cartitem() {
  return (
    <>
      <div className="card mb-3 py-2 cartItem">
        <div className="row no-gutters">
          <div className="col-4">
            <img src="http://kolambkarashutosh.000webhostapp.com/al/img/product_01a.png" className="img-fulid card-img" alt="..." />
          </div>
          <div className="col-8">
            <div className="card-body px-0 py-1">
              <FaTrash className="deleteCartBtn" />
              <h5 className="card-title m-0">California Almonds</h5>
              <p className="text-secondary " style={{ fontSize: "12px", marginBottom: "5px" }}>
                Almonds <i>250GM</i>
              </p>
              <div className="row">
                <div className="col-6 d-flex">
                  <div className="d-flex">
                    <button className="btn btn-sm btn-primary mb-0">-</button>
                    <Form.Control size="sm" readOnly disabled type="text" className="text-center qty_cost_bg" placeholder="1" />
                    <button className="btn btn-sm btn-primary mb-0">+</button>
                  </div>
                </div>
                <div className="col-6">
                  <Form.Control size="sm" readOnly disabled type="text" className="text-left qty_cost_bg" style={{ textAlign: "left" }} placeholder="Cost" />
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
