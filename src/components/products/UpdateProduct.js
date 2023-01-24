import React from "react";
import { Button, Modal } from "react-bootstrap";
import { Form } from "react-bootstrap";
import { useCategoryContext } from "../../context/categorycontext";

function UpdateProduct({ handleClose, show, product }) {
  const { productId, productName, productImageUrl, productDescription, productPrice, quantity, weight, categoryName, featured } = product;
  const { categories } = useCategoryContext();
  return (
    <>
      <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false}>
        <Modal.Header closeButton>
          <Modal.Title>Edit {productName}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Control type="text" placeholder="Enter Product Name" defaultValue={productName} autoFocus />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Control type="text" placeholder="Enter Quantity" defaultValue={quantity} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Select defaultValue="Choose..." className="form-control" name="categoryName">
                <option>250</option>
                <option>500</option>
                <option>750</option>
              </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Control type="text" placeholder="Enter Selling Price" defaultValue={productPrice} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Select defaultValue="Choose..." className="form-control" name="categoryName">
                {categories.map((category) => {
                  return (
                    <option key={category.categoryId} value={category.categoryName}>
                      {category.categoryName}
                    </option>
                  );
                })}
              </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
              <Form.Control as="textarea" rows={3} placeholder="Product Description" defaultValue={productDescription} />
            </Form.Group>
            <Form.Group className="col col-sm-12">
              <Form.Check inline type={"checkbox"} label="Featured" name="featured" />
              <Form.Check inline type={"checkbox"} label="Active" name="isctive" />
            </Form.Group>

            <Form.Group>
              <button type="submit" className="me-4 btn btn-success btn-sm ">
                Submit
              </button>
              <button type="reset" className="me-4 btn btn-danger btn-sm " onClick={handleClose}>
                Cancel
              </button>
            </Form.Group>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default UpdateProduct;
