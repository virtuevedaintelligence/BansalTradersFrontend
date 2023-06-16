import React, { useEffect, useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { Form } from "react-bootstrap";
import { useCategoryContext } from "../../context/categorycontext";
import { useProductContext } from "../../context/productcontext";
import { FiEdit2 } from "react-icons/fi";
import Preloader from "../preloader/Preloader";
import { useSelector } from "react-redux";
import { useFormik } from "formik";
import { productSchema } from "../../validations";

function UpdateProduct({ product }) {
  const [featured, setFeatured] = useState(0);
  const [isactive, setIsactive] = useState(0);
  const { productId: id, productName, productImageUrl, productDescription, productPrice, productPriceWithoutDiscount, quantity, weight, categoryName, isFeatured, isActive } = product;
  //console.log(product);

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const { isUpdateProductLoading, updateProductCall } = useProductContext();

  const { values, errors, handleBlur, touched, handleChange, handleSubmit, setValues } = useFormik({
    initialValues: {
      productName: productName,
      productImageUrl: productImageUrl,
      productDescription: productDescription,
      productPrice: productPrice,
      productPriceWithoutDiscount: productPriceWithoutDiscount,
      quantity: quantity,
      weight: weight,
      categoryName: categoryName,
      featured: isFeatured,
      isactive: isActive,
    },
    onSubmit: (values, action) => {
      update();
      action.resetForm();
    },
    validationSchema: productSchema,
  });

  const handleFeatured = () => {
    const updatedFeatured = featured === 0 ? 1 : 0;
    setFeatured(updatedFeatured);
    setValues((prevValues) => ({
      ...prevValues,
      featured: updatedFeatured,
    }));
  };

  const handleIsactive = () => {
    const updatedIsactive = isactive === 0 ? 1 : 0;
    setIsactive(updatedIsactive);
    setValues((prevValues) => ({
      ...prevValues,
      isactive: updatedIsactive,
    }));
  };

  const { categories } = useCategoryContext();

  const adminData = useSelector((state) => {
    return state.admin;
  });
  const update = (e) => {
    // e.preventDefault();
    const token = adminData.dataAdminLogin.response.token;
    updateProductCall(id, values, token);
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
          <form className="container mt-3 mb-3 row" onSubmit={handleSubmit}>
            <Form.Group className="mb-3 col col-sm-6">
              <Form.Control size="sm" type="text" name="productName" placeholder="Product Name" defaultValue={productName} autoFocus onChange={(e) => handleChange(e)} />
              {errors.productName && touched.productName ? <p className="form-error">{errors.productName}</p> : null}
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
              {errors.categoryName && touched.categoryName ? <p className="form-error">{errors.categoryName}</p> : null}
            </Form.Group>
            <Form.Group className="mb-3 col col-sm-6">
              <Form.Control size="sm" aria-label="Upload Product Image" type="file" className="form-control" name="productImageUrl" onChange={(e) => handleChange(e)} />
            </Form.Group>

            <Form.Group className="col col-sm-6">
              <Form.Check inline type={"checkbox"} label="Featured" value="0" name="featured" onClick={handleFeatured} />
              <Form.Check inline type={"checkbox"} label="Active" value="0" name="isactive" onClick={handleIsactive} />
            </Form.Group>

            <Form.Group className="mb-3 col col-sm-6">
              <Form.Select size="sm" defaultValue={weight} className="form-control" name="weight" onChange={(e) => handleChange(e)}>
                <option value="Choose...">Select Weight</option>
                <option value="250">250gm</option>
                <option value="500">500gm</option>
                <option value="1000">1000gm</option>
              </Form.Select>
              {errors.weight && touched.weight ? <p className="form-error">{errors.weight}</p> : null}
            </Form.Group>
            <Form.Group className="mb-3 col col-sm-6">
              <Form.Control size="sm" type="text" name="productPrice" placeholder="Selling Price" defaultValue={productPrice} onChange={(e) => handleChange(e)} />
              {errors.productPrice && touched.productPrice ? <p className="form-error">{errors.productPrice}</p> : null}
            </Form.Group>
            <Form.Group className="mb-3 col col-sm-6">
              <Form.Control size="sm" type="text" name="productPriceWithoutDiscount" placeholder="Selling Price without discount" defaultValue={productPriceWithoutDiscount} onChange={(e) => handleChange(e)} />
              {errors.productPriceWithoutDiscount && touched.productPriceWithoutDiscount ? <p className="form-error">{errors.productPriceWithoutDiscount}</p> : null}
            </Form.Group>
            <Form.Group className="mb-3 col col-sm-6">
              <Form.Control size="sm" type="text" name="quantity" placeholder="Quantity" defaultValue={quantity} onChange={(e) => handleChange(e)} />
              {errors.quantity && touched.quantity ? <p className="form-error">{errors.quantity}</p> : null}
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Control as="textarea" rows={3} placeholder="Product Description" name="productDescription" defaultValue={productDescription} onChange={(e) => handleChange(e)} />
            </Form.Group>
            {errors.productDescription && touched.productDescription ? <p className="form-error">{errors.productDescription}</p> : null}
            <Form.Group>
              <button type="submit" className="me-4 btn btn-success btn-sm ">
                Submit
              </button>
              <button type="reset" className="me-4 btn btn-danger btn-sm " onClick={handleClose}>
                Cancel
              </button>
            </Form.Group>
          </form>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default UpdateProduct;
