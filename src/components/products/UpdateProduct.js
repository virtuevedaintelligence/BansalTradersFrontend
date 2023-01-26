import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { Form } from "react-bootstrap";
import { useCategoryContext } from "../../context/categorycontext";
import { useProductContext } from "../../context/productcontext";

function UpdateProduct({ product }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const { isUpdateProductLoading, updateProductCall } = useProductContext();

  const { productId, productName, productImageUrl, productDescription, productPrice, quantity, weight } = product;

  const [productUpdate, setProductUpdate] = useState(product);
  const { categories } = useCategoryContext();
  const handleChange = (e) => {
    const value = e.target.value;
    setProductUpdate({ ...productUpdate, [e.target.name]: value });
  };
  const update = (e) => {
    e.preventDefault();
    updateProductCall(productId, productUpdate);
  };

  if (isUpdateProductLoading) {
    return <div>... Loading</div>;
  }

  return (
    <>
      <Button className="btn-sm btn-success" style={{ marginRight: "10px" }} onClick={handleShow}>
      </Button>
      <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false}>
        <Modal.Header closeButton>
          <Modal.Title>Edit {productName}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Control type="text" name="productName" placeholder="Product Name" defaultValue={productName} autoFocus onChange={(e) => handleChange(e)} />
            </Form.Group>
            <Form.Group className="mb-3">
              {categories.map((category) => {
                <Form.Select defaultValue="Choose..." key={category.categoryId} className="form-control" name="categoryName" onChange={(e) => handleChange(e)}>
                  return (<option value={category.categoryName}>{category.categoryName}</option>
                  );
                </Form.Select>;
              })}
            </Form.Group>
            <Form.Group className="col col-sm-6">
              <Form.Control aria-label="Upload Product Image" type="file" className="form-control" name="productImageUrl" defaultValue={productImageUrl} onChange={(e) => handleChange(e)} />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Control as="textarea" rows={3} placeholder="Product Description" name="productDescription" defaultValue={productDescription} onChange={(e) => handleChange(e)} />
            </Form.Group>
            <Form.Group className="col col-sm-4">
              <Form.Select defaultValue="Choose..." className="form-control" name="weight" onChange={(e) => handleChange(e)}>
                <option value="Choose...">Select Weight</option>
                <option value="250">250gm</option>
                <option value="500">500gm</option>
                <option value="1000">1000gm</option>
              </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Control type="text" name="productPrice" placeholder="Selling Price" defaultValue={productPrice} onChange={(e) => handleChange(e)} />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Control type="text" placeholder="Quantity" defaultValue={quantity} onChange={(e) => handleChange(e)} />
            </Form.Group>
            <Form.Group className="col col-sm-12">
              <Form.Check inline type={"checkbox"} label="Featured" name="featured" onChange={(e) => handleChange(e)} />
              <Form.Check inline type={"checkbox"} label="Active" name="isactive" onChange={(e) => handleChange(e)} />
            </Form.Group>

            <Form.Group>
              <button type="submit" className="me-4 btn btn-success btn-sm " onClick={update}>
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
