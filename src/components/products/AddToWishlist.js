import React, { useState } from "react";
import { FcLike, FcLikePlaceholder } from "react-icons/fc";
import Modal from "react-modal";
import { useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AuthService } from "../../services/AuthService";

const AddToWishlist = ({ isFavorite }) => {
  const data = useSelector((state) => {
    return state.users;
  });

  const [wishlist, setWishlist] = useState([]);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const authService = new AuthService();
  const handleAddToWishlist = (product) => {
    if (authService.isLoggedIn()) {
      setWishlist([...wishlist, product]);
      toast.success(`${product} added to wishlist!`);
    } else {
      setModalIsOpen(true);
    }
  };

  return (
    <div>
      <div className=" rounded-circle d-flex align-items-center justify-content-center shadow-1-strong"
        style={{ width: "35px", height: "35px" }} onClick={() => handleAddToWishlist("product1")}>
        <p className="text-white mb-0 small">
          {isFavorite === true ? <FcLike /> : <FcLikePlaceholder />}
        </p>
      </div>

      <Modal isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)} contentLabel="Please log in to add to wishlist">
        <h2>Please log in to add to wishlist</h2>
        <button onClick={() => setModalIsOpen(false)}>Close</button>
      </Modal>

      <ToastContainer />
    </div>
  );
};

export default AddToWishlist;
