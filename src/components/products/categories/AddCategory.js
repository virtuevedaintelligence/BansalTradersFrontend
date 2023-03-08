import React, { useEffect, useState } from "react";
import { Button, Form, Modal, Row } from "react-bootstrap";
import { useCategoryContext } from "../../../context/categorycontext";

function Addcatmodal(handleCloseCategory, showCat) {
  const [category, setCategory] = useState({
    categoryName: "",
    categoryType: "",
  });

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const { isSaveCategoryLoading, saveCategoryCall, fetchCategory } = useCategoryContext();
  useEffect(() => {
    fetchCategory();
  }, []);

  const saveCategory = (e) => {
    e.preventDefault();
    saveCategoryCall(category);
    setShow(false);
    fetchCategory();
  };

  const handleChange = (e) => {
    const value = e.target.value;
    setCategory({ ...category, [e.target.name]: value });
  };

  if (isSaveCategoryLoading) {
    return <div>... Loading</div>;
  }
  return (
    <>
      <Button className="btn btn-primary btn-sm" style={{ marginRight: "10px" }} onClick={handleShow}>
        Add New Category
      </Button>
      <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false}>
        <Modal.Header closeButton>
          <Modal.Title>Add New Category</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="container text-center">
            <Row className="mb-3">
              <Form.Group className="col col-sm-12">
                <Form.Control type="name" name="categoryName" placeholder="Category Name" className="form-control-sm" defaultValue={category.categoryName} onChange={(e) => handleChange(e)} />
              </Form.Group>
              <Form.Group className="col col-sm-12">
                <Form.Select name="categoryType" className="form-control-sm" size="sm" onChange={(e) => handleChange(e)}>
                  <option value="Dryfruit">Dryfruit</option>
                  <option value="Spices">Spices</option>
                </Form.Select>
              </Form.Group>
            </Row>
            <Row className="mb-3">
              <Form.Group className="col col-sm-12">
                <button type="submit" className="me-4 btn btn-success btn-sm btn-block" onClick={saveCategory}>
                  Submit
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
}

export default Addcatmodal;
