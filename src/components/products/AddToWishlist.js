import React, { useState } from "react";
import { FcLike, FcLikePlaceholder } from "react-icons/fc";
import Modal from "react-modal";
import { useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AddToWishlist = ({ isFavorite }) => {
  const data = useSelector((state) => {
    return state.users;
  });
  const loggedInUser = data.dataOTPVerify;

  const [isLoggedIn, setIsLoggedIn] = useState(false); // assume the user is not logged in initially
  const [wishlist, setWishlist] = useState([]);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  if (loggedInUser && loggedInUser.message === "User logged in successfully") {
    setIsLoggedIn(true);
  }
  const handleAddToWishlist = (product) => {
    if (isLoggedIn) {
      setWishlist([...wishlist, product]);
      toast.success(`${product} added to wishlist!`);
    } else {
      setModalIsOpen(true);
    }
  };

  return (
    <div>
      {/* <button onClick={() => setIsLoggedIn(!isLoggedIn)}>{isLoggedIn ? "Log Out" : "Log In"}</button> */}

      <div className=" rounded-circle d-flex align-items-center justify-content-center shadow-1-strong" style={{ width: "35px", height: "35px" }} onClick={() => handleAddToWishlist("product1")}>
        <p className="text-white mb-0 small">
          {isFavorite === true ? <FcLike /> : <FcLikePlaceholder />}
          {/* isFavorite */}
        </p>
      </div>

      {/* <p>Wishlist: {wishlist.join(", ")}</p> */}

      <Modal isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)} contentLabel="Please log in to add to wishlist">
        <h2>Please log in to add to wishlist</h2>
        <button onClick={() => setModalIsOpen(false)}>Close</button>
      </Modal>

      <ToastContainer />
    </div>
  );
};

export default AddToWishlist;
