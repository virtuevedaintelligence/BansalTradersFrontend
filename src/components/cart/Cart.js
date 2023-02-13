import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import Offcanvas from "react-bootstrap/Offcanvas";
import { FaTrash } from "react-icons/fa";
import { BsHandbagFill } from "react-icons/bs";

import Cartitem from "./Cartitem";
function Cart() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <span variant="primary" onClick={handleShow} className="cartOpenBtn">
        <BsHandbagFill />
      </span>

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Your Cart</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Cartitem />
          <Cartitem />
          <Cartitem />
          <Cartitem />
          <Cartitem />
          <Cartitem />
          <Cartitem />
          <div className="cartTotal">Total:</div>
          <div className="subTotal">Subtotal:</div>
          <div className="Checkout">
            <Button className="col-12">Proceed To Payment</Button>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default Cart;
