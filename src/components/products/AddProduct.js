import { useState } from "react";
import { Button, Form, Modal, Row } from "react-bootstrap";
import { useCategoryContext } from "../../context/categorycontext";
import { useProductContext } from "../../context/productcontext";
import Preloader from "../preloader/Preloader";
function AddProduct() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const { isLoadingCategory, categories } = useCategoryContext();

  const [product, setProduct] = useState({
    productName: "",
    productImageUrl: "",
    productDescription: "",
    productPrice: "",
    quantity: "",
    weight: "",
    categoryName: "",
    featured: "off",
    isactive: "off",
  });

  const { isSaveProductLoading, saveProductCall } = useProductContext();

  const save = (e) => {
    e.preventDefault();
    saveProductCall(product);
  };

  const handleChange = (e) => {
    const value = e.target.value;
    setProduct({ ...product, [e.target.name]: value });
  };

  if (isLoadingCategory) {
    return <Preloader />;
  }
  if (isSaveProductLoading) {
    return <Preloader />;
  }
  return (
    <div>
      <button className="btn btn-primary btn-sm" style={{ marginRight: "10px" }} onClick={handleShow}>
        Add New Product
      </button>
      <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false}>
        <Modal.Header closeButton>
          <Modal.Title>Add New Product</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form className="container mt-3 mb-3">
            <Row className="mb-3">
              <Form.Group className="col col-sm-6">
                <Form.Control type="name" name="productName" placeholder="Product Name" className="form-control-sm" defaultValue={product.productName} onChange={(e) => handleChange(e)} />
              </Form.Group>
              <Form.Group className="col col-sm-6">
                <Form.Select defaultValue="Choose Category" size="sm" className="form-control-sm" name="categoryName" onChange={(e) => handleChange(e)}>
                  {categories.map((category) => {
                    return (
                      <>
                        <option key={category.categoryId} value={category.categoryName}>
                          {category.categoryName}
                        </option>
                      </>
                    );
                  })}
                </Form.Select>
              </Form.Group>
            </Row>
            <Row className="mb-3">
              <Form.Group className="col col-sm-6">
                <Form.Control aria-label="Upload Product Image" type="file" size="sm" className="form-control" name="productImageUrl" onChange={(e) => handleChange(e)} />
              </Form.Group>
              <Form.Group className="col col-sm-3">
                <Form.Check type={"checkbox"} onClick={(e) => handleChange(e)} label="featured" name="featured" />
              </Form.Group>
              <Form.Group className="col col-sm-3">
                <Form.Check type={"checkbox"} onClick={(e) => handleChange(e)} label="isactive" name="isactive" />
              </Form.Group>
            </Row>
            <Row className="mb-3">
              <Form.Group className=" col col-sm-12">
                <Form.Control as="textarea" placeholder="Product Description" className="form-control-sm" type="text-area" name="productDescription" defaultValue={product.productDescription} onChange={(e) => handleChange(e)} />
              </Form.Group>
            </Row>
            <Row className="mb-3">
              <Form.Group className="col col-sm-4">
                <Form.Select defaultValue="Choose..." className="form-control-sm" size="sm" name="weight" onChange={(e) => handleChange(e)}>
                  <option value="Choose...">Select Weight</option>
                  <option value="250">250gm</option>
                  <option value="500">500gm</option>
                  <option value="1000">1000gm</option>
                </Form.Select>
              </Form.Group>
              <Form.Group className="col col-sm-4">
                <Form.Control className="form-control-sm" type="pin" name="productPrice" placeholder="Enter Price" defaultValue={product.productPrice} onChange={(e) => handleChange(e)} />
              </Form.Group>
              <Form.Group className="col col-sm-4">
                <Form.Control className="form-control-sm" type="number" name="quantity" placeholder="Enter Quantity" defaultValue={product.quantity} onChange={(e) => handleChange(e)} />
              </Form.Group>
            </Row>
            <Row className="mb-3">
              <Form.Group className="col col-sm-12">
                <button type="submit" className="me-4 btn btn-success btn-sm btn-block" onClick={save}>
                  Submit
                </button>
                <button type="reset" className="me-4 btn btn-danger btn-sm btn-block">
                  Cancel
                </button>
              </Form.Group>
            </Row>
          </form>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default AddProduct;
