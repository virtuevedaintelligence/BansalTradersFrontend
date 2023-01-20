import React from "react";
import { Button } from "react-bootstrap";
import { IoIosAddCircle } from "react-icons/io";
import { MdDelete } from "react-icons/md";

function Category({ category }) {
  return (
    <>
      <a key={category.id} href="#home">
        {category.categoryName}
      </a>
      <Button className="btn-sm btn-success" style={{ marginRight: "10px" }}>
        <IoIosAddCircle />
      </Button>
      <Button className="btn-sm btn-danger">
        <MdDelete />
      </Button>
    </>
  );
}

export default Category;
