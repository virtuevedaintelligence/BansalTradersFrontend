import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import CategoryService from "../../services/CategoryService";

function Example({ name, ...props }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [Catloading, CatsetLoading] = useState(true);
  const [categories, setCategory] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      CatsetLoading(true);
      try {
        const response1 = await CategoryService.getCategories();
        console.log(response1.data);
        setCategory(response1.data);
      } catch (error) {
        console.log(error);
      }
      CatsetLoading(false);
    };
    fetchData();
  }, []);
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
          {!Catloading && (
            <div className="row">
              {categories.map((category) => (
                <div key={category.id} className="col-sm-12">
                  <div className="card p-4">{category.categoryName}</div>
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
