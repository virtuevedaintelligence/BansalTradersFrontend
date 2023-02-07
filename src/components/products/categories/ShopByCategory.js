import React, { useState } from "react";
import Offcanvas from "react-bootstrap/Offcanvas";
import { useCategoryContext } from "../../../context/categorycontext";
import { useFilterContext } from "../../../context/fitercontext";
import "./shopbycategory.css";

function Example({ name, ...props }) {
  const { isLoadingCategory, categories } = useCategoryContext();
  let { filters: { cat }, filterDryfruits } = useFilterContext();
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
              {
                categories && categories.filter((category) => category.categoryName === "all")
                  .map((category) => {
                    let { categoryName } = category;
                    cat = categoryName;
                    return (
                      <button key={category.id} className="col-sm-12"
                        type="button"
                        name="cat"
                        value={cat}
                        onClick={(event) => { filterDryfruits(event); handleClose(event); }}>
                        {category.categoryName}
                      </button>
                    );
                  })}
              {categories && categories.filter((category) => category.categoryName !== "Choose Category")
                .filter((category) => category.categoryName !== "all")
                .map((category) => {
                  let { categoryName } = category;
                  cat = categoryName;
                  return (
                    <button key={category.id} className="col-sm-12"
                      type="button"
                      name="cat"
                      value={cat}
                      onClick={(event) => { filterDryfruits(event); handleClose(event); }}>
                      {category.categoryName}
                    </button>
                  );
                })}
            </div>
          )
          }
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}
function ShopByCategory() {
  return (
    <>
      {["end"].map((placement, idx) => (
        <Example key={idx} placement={placement} name={placement} />
      ))}
    </>
  );
}

export default ShopByCategory;
