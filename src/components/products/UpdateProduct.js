import React, { useEffect, useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { Form } from "react-bootstrap";
import { useCategoryContext } from "../../context/categorycontext";
import { useProductContext } from "../../context/productcontext";
import { FiEdit2 } from "react-icons/fi";
import Preloader from "../preloader/Preloader";

function UpdateProduct({ product }) {
  const { productId: id, productName, productImageUrl, productDescription, productPrice, quantity, weight, categoryName, isFeatured, isActive } = product;

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const { isUpdateProductLoading, updateProductCall } = useProductContext();

  const [productUpdate, setProductUpdate] = useState({
    productName: productName,
    productImageUrl: productImageUrl,
    productDescription: productDescription,
    productPrice: productPrice,
    quantity: quantity,
    weight: weight,
    categoryName: categoryName,
    featured: isFeatured,
    isactive: isActive,
  });

  const { categories } = useCategoryContext();
  const handleChange = (e) => {
    const value = e.target.value;
    setProductUpdate({ ...productUpdate, [e.target.name]: value });
  };
  const update = (e) => {
    e.preventDefault();
    updateProductCall(id, productUpdate);
  };

  if (isUpdateProductLoading) {
    return <Preloader />;
  }

  return (
    <>
      <button className="btn-sm btn btn-success" style={{ marginRight: "10px" }} onClick={handleShow}>
        <FiEdit2 />
      </button>
      <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false}>
        <Modal.Header closeButton>
          <Modal.Title>Edit {productName}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form className="row">
            <Form.Group className="mb-3 col col-sm-6">
              <Form.Control size="sm" type="text" name="productName" placeholder="Product Name" defaultValue={productName} autoFocus onChange={(e) => handleChange(e)} />
            </Form.Group>
            <Form.Group className="mb-3 col col-sm-6">
              <Form.Select defaultValue={categoryName} size="sm" className="form-control-sm col col-6" name="categoryName" onChange={(e) => handleChange(e)}>
                {categories.map((category) => {
                  return (
                    <>
                      <option key={category.categoryId} value={category.categoryName} {...(category.categoryName ? "" : "selected")}>
                        {category.categoryName}
                      </option>
                    </>
                  );
                })}
              </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3 col col-sm-6">
              <Form.Control size="sm" aria-label="Upload Product Image" type="file" className="form-control" name="productImageUrl" onChange={(e) => handleChange(e)} />
            </Form.Group>

            <Form.Group className="col col-sm-6">
              <Form.Check inline type={"checkbox"} label="Featured" checked={isFeatured} name="featured" onChange={(e) => handleChange(e)} />
              <Form.Check inline type={"checkbox"} label="Active" checked={isActive} name="isactive" onChange={(e) => handleChange(e)} />
            </Form.Group>

            <Form.Group className="mb-3 col col-sm-4">
              <Form.Select size="sm" defaultValue={weight} className="form-control" name="weight" onChange={(e) => handleChange(e)}>
                <option value="Choose...">Select Weight</option>
                <option value="250">250gm</option>
                <option value="500">500gm</option>
                <option value="1000">1000gm</option>
              </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3 col col-sm-4">
              <Form.Control size="sm" type="text" name="productPrice" placeholder="Selling Price" defaultValue={productPrice} onChange={(e) => handleChange(e)} />
            </Form.Group>
            <Form.Group className="mb-3 col col-sm-4">
              <Form.Control size="sm" type="text" placeholder="Quantity" defaultValue={quantity} onChange={(e) => handleChange(e)} />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Control as="textarea" rows={3} placeholder="Product Description" name="productDescription" defaultValue={productDescription} onChange={(e) => handleChange(e)} />
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
