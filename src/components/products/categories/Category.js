import React, { useState } from "react";
import { Button, Form, Modal, Row } from "react-bootstrap";
import { FiEdit2 } from "react-icons/fi";
import { MdDelete } from "react-icons/md";

function Category({ category }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <a key={category.id} href="#home">
        {category.categoryName}
      </a>
      <Button className="btn-sm btn-success" style={{ marginRight: "10px" }} onClick={handleShow}>
        <FiEdit2 />
      </Button>
      <Button className="btn-sm btn-danger">
        <MdDelete />
      </Button>

      <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false}>
        <Modal.Header closeButton>
          <Modal.Title>Add New Category</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="container text-center">
            <Row className="mb-3">
              <Form.Group className="col col-sm-12">
                <Form.Control type="name" name="categoryName" placeholder="Category Name" className="form-control" defaultValue={category.categoryName} />
              </Form.Group>
            </Row>
            <Row className="mb-3">
              <Form.Group className="col col-sm-12">
                <button type="submit" className="me-4 btn btn-success btn-sm btn-block">
                  Edit
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

export default Category;
