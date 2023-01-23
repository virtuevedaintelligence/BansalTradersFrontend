import React, { useState } from "react";
import { Button, Form, Modal, Row } from "react-bootstrap";
import { useCategoryContext } from "../../context/categorycontext";

function Addcatmodal(handleCloseCategory, showCat) {
  const [category, setCategory] = useState({
    categoryName: "",
  });

  const { saveCategoryCall } = useCategoryContext();

  const saveCategory = (e) => {
    e.preventDefault();
    saveCategoryCall(category);
  };

  const handleChange = (e) => {
    const value = e.target.value;
    setCategory({ ...category, [e.target.name]: value });
  };
  return (
    <>
      <Modal show={showCat} onHide={handleCloseCategory} backdrop="static" keyboard={false}>
        <Modal.Header closeButton>
          <Modal.Title>Add New Category</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="container text-center">
            <h1 className="">Add Category</h1>
            <Row className="mb-3">
              <Form.Group className="col col-sm-12">
                <Form.Control type="name" name="categoryName" placeholder="Category Name" className="form-control" defaultValue={category.categoryName} onChange={(e) => handleChange(e)} />
              </Form.Group>
            </Row>
            <Row className="mb-3">
              <Form.Group className="col col-sm-12">
                <button type="submit" className="me-4 btn btn-success btn-sm btn-block" onClick={saveCategory}>
                  Submit
                </button>
                <button type="reset" className="me-4 btn btn-danger btn-sm btn-block">
                  Cancel
                </button>
              </Form.Group>
            </Row>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseCategory}>
            Close
          </Button>
          <Button variant="primary" onClick={handleCloseCategory}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Addcatmodal;
