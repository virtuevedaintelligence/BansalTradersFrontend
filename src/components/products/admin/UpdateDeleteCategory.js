import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import UpdateProduct from "../UpdateProduct";
import { MdDelete } from "react-icons/md";
import { useProductContext } from "../../../context/productcontext";
import { FiEdit2 } from "react-icons/fi";
import { useCategoryContext } from "../../../context/categorycontext";

import { Button, Form, Modal, Row } from "react-bootstrap";
import Preloader from "../../preloader/Preloader";
import "./updatedelete.css";
function UpdateDeleteCategory({ category, categoryId }) {
  const [show, setShow] = useState(false);
  const { isDeleteProductLoading, deleteProductCall, singleProduct } = useProductContext();
  const deleteProd = (e) => {
    e.preventDefault();
    deleteProductCall(categoryId);
  };

  const { id, categoryName, categoryType } = category;
  const { isDeleteCategoryLoading, deleteCategoryCall, isUpdateCategoryLoading, updateCategoryCall, fetchCategory } = useCategoryContext();
  const [categoryToUpdate, setCategoryToUpdate] = useState({
    categoryName: categoryName,
    categoryType: categoryType,
  });

  const adminData = useSelector((state) => {
    return state.admin;
  });
  const handleShow = () => setShow(true);
  const deleteCat = (e) => {
    e.preventDefault();
    deleteCategoryCall(id);
    fetchCategory();
  };
  const handleClose = () => setShow(false);

  useEffect(() => {
    fetchCategory();
  }, []);
  const updateCat = (e) => {
    e.preventDefault();
    updateCategoryCall(id, categoryToUpdate);
    handleClose();
    fetchCategory();
  };
  const handleChange = (e) => {
    const value = e.target.value;
    setCategoryToUpdate({ ...categoryToUpdate, [e.target.name]: value });
  };
  if (isDeleteCategoryLoading) {
    return <Preloader />;
  }
  if (isUpdateCategoryLoading) {
    return <Preloader />;
  }

  if (adminData.dataAdminLogin && adminData.dataAdminLogin.message === "Admin logged in successfully") {
    return (
      <>
        <button className="btn-sm btn text-success " style={{ marginRight: "10px" }} onClick={handleShow}>
          <FiEdit2 />
        </button>
        <button className="btn-sm btn text-danger">
          <MdDelete onClick={deleteCat} />
        </button>
        <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false}>
          <Modal.Header closeButton>
            <Modal.Title>Update Category</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="container text-center">
              <Row className="mb-3">
                <Form.Group className="col col-sm-12">
                  <Form.Control type="name" name="categoryName" placeholder="Category Name" className="form-control-sm mb-2" defaultValue={category.categoryName} onChange={(e) => handleChange(e)} />
                </Form.Group>
                <Form.Group className="col col-sm-12">
                  <Form.Select name="categoryType" className="form-control-sm" size="sm" onChange={(e) => handleChange(e)} defaultValue={categoryType}>
                    <option value="Dryfruit">Dryfruit</option>
                    <option value="Spices">Spices</option>
                  </Form.Select>
                </Form.Group>
              </Row>
              <Row className="mb-3">
                <Form.Group className="col col-sm-12">
                  <button type="submit" className="me-4 btn btn-success btn-sm btn-block" onClick={updateCat}>
                    Update
                  </button>
                  <button type="reset" className="me-4 btn btn-danger btn-sm btn-block" onClick={handleClose}>
                    Cancel
                  </button>
                </Form.Group>
              </Row>
            </div>
          </Modal.Body>
        </Modal>
      </>
    );
  } else {
    return null;
  }
}

export default UpdateDeleteCategory;
