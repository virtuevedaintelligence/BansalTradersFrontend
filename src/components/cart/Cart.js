import React, { useState } from "react";
import { Form } from "react-bootstrap";
import Offcanvas from "react-bootstrap/Offcanvas";

import "./cart.css";
function Cart() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <p variant="primary" onClick={handleShow} className="cartOpenBtn">
        Cart{" "}
      </p>

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Your Cart</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <div className="container">
            <div class="card mb-3">
              <div class="row no-gutters">
                <div class="col-md-4">
                  <img src="http://kolambkarashutosh.000webhostapp.com/al/img/product_01a.png" class="img-fulid card-img" alt="..." />
                </div>
                <div class="col-md-8">
                  <div class="card-body px-0 py-1">
                    <h5 class="card-title m-0">Product 1</h5>
                    <div class="row">
                      <div className="col-md-12">
                        <Form.Select aria-label="Default select example" size="sm">
                          <option>Select Weight</option>
                          <option value="1">250 GM</option>
                          <option value="2">500 GM</option>
                          <option value="3">1000 Gm</option>
                        </Form.Select>
                      </div>
                      <div className="col-md-6 d-flex">
                        <button className="btn btn-sm btn-primary mb-0">-</button>
                        <Form.Control size="sm" readOnly disabled type="text" className="text-center qty_cost_bg" placeholder="1" />
                        <button className="btn btn-sm btn-primary mb-0">+</button>
                      </div>
                      <div className="col-md-6">
                        <Form.Control size="sm" readOnly disabled type="text" className="qty_cost_bg" placeholder="Cost" />
                      </div>
                    </div>
                    <p class="card-text">
                      <small class="text-muted">Last updated 3 mins ago</small>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>product 1</div>
          <div>product 1</div>
          <div>product 1</div>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default Cart;
