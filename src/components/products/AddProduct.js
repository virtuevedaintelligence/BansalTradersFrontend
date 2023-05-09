import { useState } from "react";
import { Button, Form, Modal, Row } from "react-bootstrap";
import { useCategoryContext } from "../../context/categorycontext";
import { useProductContext } from "../../context/productcontext";
import Preloader from "../preloader/Preloader";

import { useFormik } from "formik";
import { productSchema } from "../../validations";
import { useSelector } from "react-redux";

const initialValues = {
  productName: "",
  productImageUrl: "",
  productDescription: "",
  productPrice: "",
  productPriceWithoutDiscount: "",
  quantity: "",
  weight: "",
  categoryName: "",
  featured: "off",
  isactive: "off",
};
function AddProduct({ token }) {
  const { values, errors, handleBlur, touched, handleChange, handleSubmit } = useFormik({
    initialValues: initialValues,
    onSubmit: (values, action) => {
      save();
      action.resetForm();
    },
    validationSchema: productSchema,
  });

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const { isLoadingCategory, categories } = useCategoryContext();

  const { isSaveProductLoading, saveProductCall } = useProductContext();
  const adminData = useSelector((state) => {
    return state.admin;
  });
  const save = (e) => {
    // e.preventDefault();
    const token = adminData.dataAdminLogin.response.token;
    saveProductCall(values, token);
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
          <form className="container mt-3 mb-3" onSubmit={handleSubmit}>
            <Row className="mb-3">
              <Form.Group className="col col-sm-6">
                <Form.Control type="name" name="productName" placeholder="Product Name" className="form-control-sm" defaultValue={values.productName} onChange={(e) => handleChange(e)} onBlur={handleBlur} />
                {errors.productName && touched.productName ? <p className="form-error">{errors.productName}</p> : null}
              </Form.Group>
              <Form.Group className="col col-sm-6">
                <Form.Select size="sm" className="form-control-sm" name="categoryName" onChange={(e) => handleChange(e)} onBlur={handleBlur}>
                  <option disabled selected>
                    Select Category
                  </option>
                  {categories &&
                    categories.map((category) => {
                      return (
                        <>
                          <option key={category.categoryId} value={category.categoryName}>
                            {category.categoryName}
                          </option>
                        </>
                      );
                    })}
                </Form.Select>
                {errors.categoryName && touched.categoryName ? <p className="form-error">{errors.categoryName}</p> : null}
              </Form.Group>
            </Row>
            <Row className="mb-3">
              <Form.Group className="col col-sm-6">
                <Form.Control aria-label="Upload Product Image" type="file" size="sm" className="form-control" name="productImageUrl" onChange={(e) => handleChange(e)} onBlur={handleBlur} />
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
                <Form.Control as="textarea" placeholder="Product Description" className="form-control-sm" type="text-area" name="productDescription" defaultValue={values.productDescription} onChange={(e) => handleChange(e)} onBlur={handleBlur} />
              </Form.Group>
              {errors.productDescription && touched.productDescription ? <p className="form-error">{errors.productDescription}</p> : null}
            </Row>
            <Row className="mb-3">
              <Form.Group className="col col-sm-6">
                <Form.Select className="form-control-sm mb-2" size="sm" name="weight" onChange={(e) => handleChange(e)} onBlur={handleBlur}>
                  <option disabled selected>
                    Select Weight
                  </option>
                  <option value="250">250gm</option>
                  <option value="500">500gm</option>
                  <option value="1000">1000gm</option>
                </Form.Select>
                {errors.weight && touched.weight ? <p className="form-error">{errors.weight}</p> : null}
              </Form.Group>
              <Form.Group className="col col-sm-6">
                <Form.Control className="form-control-sm mb-2" type="number" name="quantity" placeholder="Enter Quantity" defaultValue={values.quantity} onChange={(e) => handleChange(e)} onBlur={handleBlur} />
                {errors.quantity && touched.quantity ? <p className="form-error">{errors.quantity}</p> : null}
              </Form.Group>
              <Form.Group className="col col-sm-6">
                <Form.Control className="form-control-sm mb-2" type="pin" name="productPrice" placeholder="Enter Price" defaultValue={values.productPrice} onChange={(e) => handleChange(e)} onBlur={handleBlur} />
                {errors.productPrice && touched.productPrice ? <p className="form-error">{errors.productPrice}</p> : null}
              </Form.Group>
              <Form.Group className="col col-sm-6">
                <Form.Control className="form-control-sm mb-2" type="pin" name="productPriceWithoutDiscount" placeholder="Enter MRP" defaultValue={values.productPriceWithoutDiscount} onChange={(e) => handleChange(e)} onBlur={handleBlur} />
                {errors.productPriceWithoutDiscount && touched.productPriceWithoutDiscount ? <p className="form-error">{errors.productPriceWithoutDiscount}</p> : null}
              </Form.Group>
            </Row>
            <Row className="mb-3">
              <Form.Group className="col col-sm-12">
                <button type="submit" className="me-4 btn btn-success btn-sm btn-block">
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
