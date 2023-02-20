import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import Offcanvas from "react-bootstrap/Offcanvas";
import { FaTrash } from "react-icons/fa";
import { BsHandbagFill } from "react-icons/bs";

import Cartitem from "./Cartitem";
import { useDispatch, useSelector } from "react-redux";
function Cart() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const dispatch = useDispatch();
  const { cartItems, totalQuantity, totalCartAmount } = useSelector((store) => store.cart);
  if (totalCartAmount < 1) {
    return (
      <section className='cart'>
        <header>
          <h2>Your Cart</h2>
          <h4 className='empty-cart'>is currently empty</h4>
        </header>
      </section>
    );
  }
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
          {
            cartItems.map((item) => {
              return <Cartitem key={item.id} {...item}
                totalCartAmount={totalCartAmount}
                totalQuantity={totalQuantity} />;
            })
          }
          <div className="cartTotal">Total Quantity: {totalQuantity}</div>
          <div className="subTotal">Total Price: {totalCartAmount}</div>
          <div className="Checkout">
            <Button className="col-12">Proceed To Payment</Button>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default Cart;
