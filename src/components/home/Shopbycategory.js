import React, { useEffect, useState } from "react";
import Offcanvas from "react-bootstrap/Offcanvas";
import { useCategoryContext } from "../../context/categorycontext";
import "./shopbycategory.css";

function Example({ name, ...props }) {
  const { isLoadingCategory, categories } = useCategoryContext();
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <p onClick={handleShow} className="m-0">
        Categories
      </p>
      <Offcanvas show={show} onHide={handleClose} {...props}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Shop By Categories</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          {!isLoadingCategory && (
            <div className="row">
              {categories.map((category) => (
                <div key={category.id} className="col-sm-12 ">
                  <div className="card p-4 sidebar-cat">{category.categoryName}</div>
                </div>
              ))}
            </div>
          )}
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}
function Shopbycategory() {
  return (
    <>
      {["end"].map((placement, idx) => (
        <Example key={idx} placement={placement} name={placement} />
      ))}
    </>
  );
}

export default Shopbycategory;
