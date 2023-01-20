import React, { useEffect, useState } from "react";
import { MDBContainer, MDBRow } from "mdb-react-ui-kit";
import DryFruit from "../dryfruits/DryFruit";
import { useProductContext } from "../../../context/productcontext";
import { useCategoryContext } from "../../../context/categorycontext";
import Category from "../categories/Category";
const DryFruits = () => {
  const { isLoading, products } = useProductContext();
  const { isLoadingCategory, categories } = useCategoryContext();

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
        <button className="btn btn-primary btn-sm" style={{ marginRight: "10px" }}>
          Add New Category
        </button>
        <button className="btn btn-primary btn-sm">Add New Product</button>
      </div>
      <MDBContainer fluid className="my-5">
        <MDBRow>
          {products.map((product) => {
            return <DryFruit key={product.productId} product={product} />;
          })}
        </MDBRow>
      </MDBContainer>
    </>
  );
};

export default DryFruits;
