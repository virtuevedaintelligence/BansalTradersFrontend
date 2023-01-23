import React, { useState } from "react";
import { Form, Row } from "react-bootstrap";
import { useCategoryContext } from "../../context/categorycontext";
function AddCategory() {
  const [category, setCategory] = useState({
    categoryName: "",
  });

  const { isSaveCategoryLoading, saveCategoryCall } = useCategoryContext();

  const saveCategory = (e) => {
    e.preventDefault();
    console.log(category);
    saveCategoryCall(category);
  };

  const handleChange = (e) => {
    const value = e.target.value;
    setCategory({ ...category, [e.target.name]: value });
  };

  return (
    <>
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
    </>
  );
}

export default AddCategory;
