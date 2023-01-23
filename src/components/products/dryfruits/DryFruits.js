import React, { useEffect, useState } from "react";
import { MDBContainer, MDBRow } from "mdb-react-ui-kit";
import DryFruit from "../dryfruits/DryFruit";
import { useProductContext } from "../../../context/productcontext";
import { useCategoryContext } from "../../../context/categorycontext";
import Category from "../categories/Category";
import { NavLink } from "react-router-dom";
import Addcatmodal from "../Addcatmodal";
import { Button } from "react-bootstrap";
import { GrAddCircle } from "react-icons/gr";
const DryFruits = () => {
  const { isLoading, products } = useProductContext();
  const { isLoadingCategory, categories } = useCategoryContext();

  const [showCat, setShowCat] = useState(false);

  const handleCloseCategory = () => setShowCat(false);
  const handleShowCategory = () => setShowCat(true);

  if (isLoading) {
    return <div>... Loading</div>;
  }
  if (isLoadingCategory) {
    return <div>... Loading</div>;
  }

  return (
    <>
      <div className="categories">
        <div className="scrollmenu">
          {categories.map((category) => {
            return <Category key={category.categoryId} category={category} />;
          })}
        </div>
        <Button className="btn btn-primary btn-sm" style={{ marginRight: "10px" }} onClick={handleShowCategory}>
          <GrAddCircle />
        </Button>
        <NavLink to="/addproduct">
          <button className="btn btn-primary btn-sm">Add New Product</button>
        </NavLink>
      </div>
      <MDBContainer fluid className="my-5">
        <MDBRow>
          {products.map((product) => {
            return <DryFruit key={product.productId} product={product} />;
          })}
        </MDBRow>
      </MDBContainer>
      <Addcatmodal handleCloseCategory={handleCloseCategory} showCat={showCat} />
    </>
  );
};

export default DryFruits;
