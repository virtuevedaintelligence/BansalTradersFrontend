import React, { useState } from "react";
import { useSelector } from "react-redux";
import UpdateProduct from "../UpdateProduct";
import { MdDelete } from "react-icons/md";
import { useProductContext } from "../../../context/productcontext";
import { FiEdit2 } from "react-icons/fi";
import { useCategoryContext } from "../../../context/categorycontext";

function UpdateDeleteCategory({ category, categoryId }) {
  const [show, setShow] = useState(false);
  const { isDeleteProductLoading, deleteProductCall, singleProduct } = useProductContext();
  const deleteProd = (e) => {
    e.preventDefault();
    deleteProductCall(categoryId);
  };
  const { id, categoryName, categoryType } = category;
  const { isDeleteCategoryLoading, deleteCategoryCall, isUpdateCategoryLoading, updateCategoryCall, fetchCategory } = useCategoryContext();

  const handleShow = () => setShow(true);
  const deleteCat = (e) => {
    e.preventDefault();
    deleteCategoryCall(id);
    fetchCategory();
  };
  const adminData = useSelector((state) => {
    return state.admin;
  });

  if (adminData.dataAdminLogin && adminData.dataAdminLogin.message === "Admin logged in successfully") {
    return (
      <>
        <button className="btn-sm btn btn-success" style={{ marginRight: "10px" }} onClick={handleShow}>
          <FiEdit2 />
        </button>
        <button className="btn-sm btn btn-danger">
          <MdDelete onClick={deleteCat} />
        </button>
      </>
    );
  } else {
    return null;
  }
}

export default UpdateDeleteCategory;
