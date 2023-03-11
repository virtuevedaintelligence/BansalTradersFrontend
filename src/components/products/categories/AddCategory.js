import React, { useEffect, useState } from "react";
import { Button, Form, Modal, Row } from "react-bootstrap";
import { useCategoryContext } from "../../../context/categorycontext";

import { useFormik } from "formik";
import { categorySchema } from "../../../validations";

const initialValues = {
  categoryName: "",
  categoryType: "",
};

function Addcatmodal(handleCloseCategory, showCat) {
  const { values, errors, handleBlur, touched, handleChange, handleSubmit } = useFormik({
    initialValues: initialValues,
    onSubmit: (values, action) => {
      console.log(values);
      saveCategory();
      action.resetForm();
    },
    validationSchema: categorySchema,
  });

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const { isSaveCategoryLoading, saveCategoryCall, fetchCategory } = useCategoryContext();
  useEffect(() => {
    fetchCategory();
  }, []);

  const saveCategory = (e) => {
    console.log("In Save Category");
    console.log(values);
    saveCategoryCall(values);
    setShow(false);
    fetchCategory();
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
            <form onSubmit={handleSubmit}>
              <Row className="mb-3">
                <Form.Group className="col col-sm-12">
                  <Form.Control type="text" name="categoryName" placeholder="Category Name" className="form-control-sm mb-2" value={values.categoryName} onChange={(e) => handleChange(e)} onBlur={handleBlur} />
                  {errors.categoryName && touched.categoryName ? <p className="form-error">{errors.categoryName}</p> : null}
                </Form.Group>
                <Form.Group className="col col-sm-12">
                  <Form.Select name="categoryType" className="form-control-sm" size="sm" onChange={(e) => handleChange(e)} onBlur={handleBlur}>
                    <option disabled selected>
                      Select Category
                    </option>
                    <option value="Dryfruit">Dryfruit</option>
                    <option value="Spices">Spices</option>
                  </Form.Select>
                  {errors.categoryType && touched.categoryType ? <p className="form-error">{errors.categoryType}</p> : null}
                </Form.Group>
              </Row>
              <Row className="mb-3">
                <Form.Group className="col col-sm-12">
                  <button type="submit" className="me-4 btn btn-success btn-sm btn-block">
                    Submit
                  </button>
                  <button type="reset" className="me-4 btn btn-danger btn-sm btn-block" onClick={handleClose}>
                    Cancel
                  </button>
                </Form.Group>
              </Row>
            </form>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default Addcatmodal;
