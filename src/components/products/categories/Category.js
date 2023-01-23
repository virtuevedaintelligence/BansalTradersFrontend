import React from "react";
import { Button } from "react-bootstrap";
import { FiEdit2 } from "react-icons/fi";
import { MdDelete } from "react-icons/md";

function Category({ category }) {
  return (
    <>
      <a key={category.id} href="#home">
        {category.categoryName}
      </a>
      <Button className="btn-sm btn-success" style={{ marginRight: "10px" }}>
        <FiEdit2 />
      </Button>
      <Button className="btn-sm btn-danger">
        <MdDelete />
      </Button>
    </>
  );
}

export default Category;
