import React, { useState } from "react";
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
          <div>product 1</div>
          <div>product 1</div>
          <div>product 1</div>
          <div>product 1</div>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default Cart;
