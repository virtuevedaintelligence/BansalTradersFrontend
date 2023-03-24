import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import Modal from "react-modal";
import Offcanvas from "react-bootstrap/Offcanvas";
import { FaTrash } from "react-icons/fa";
import { BsHandbagFill } from "react-icons/bs";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Cartitem from "./Cartitem";
import { useDispatch, useSelector } from "react-redux";
import { AuthService } from "../../services/AuthService";

function Cart() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const dispatch = useDispatch();
  const { cartItems, totalQuantity, totalCartAmount } = useSelector((store) => store.cart);

  const [wishlist, setWishlist] = useState([]);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const authService = new AuthService();
  const handleProceedToCheckout = (product) => {
    if (authService.isLoggedIn()) {
      console.log("clocked 25");
      setWishlist([...wishlist, product]);
      toast.success(`${product} added to wishlist!`);
      debugger;
      let userId = authService.getToken().userId;
      console.log("about to order");
    } else {
      console.log("clocked 32");
      handleClose();
      setModalIsOpen(true);
    }
  };
  return (
    <>
      <span variant="primary" onClick={handleShow} className="cartOpenBtn">
        <BsHandbagFill />
        <span className="totalCartQty">{totalQuantity}</span>
      </span>

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Your Cart</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          {totalCartAmount < 1 ? (
            <section className="cart">
              <header>
                <h2>Your Cart</h2>
                <h4 className="empty-cart">is currently empty</h4>
              </header>
            </section>
          ) : (
            <>
              {cartItems.map((item) => {
                return <Cartitem key={item.id} {...item} totalCartAmount={totalCartAmount} totalQuantity={totalQuantity} />;
              })}
              <div className="cartTotal">Total Quantity: {totalQuantity}</div>
              <div className="subTotal">Total Price: {totalCartAmount}</div>
              <div className="Checkout">
                <Button type="button" className="col-12" onClick={() => handleProceedToCheckout("product")}>
                  Proceed To Payment
                </Button>
              </div>
            </>
          )}
        </Offcanvas.Body>
      </Offcanvas>

      <Modal isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)} contentLabel="Please log in to buy product">
        <h2>Please log in to buy product</h2>
        <button onClick={() => setModalIsOpen(false)}>Close</button>
      </Modal>

      <ToastContainer />
    </>
  );
}

export default Cart;
