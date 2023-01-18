import React, { useEffect, useState } from "react";
import { MDBContainer, MDBRow } from "mdb-react-ui-kit";
import DryFruit from "./DryFruit";
import { useProductContext } from "../../../context/productcontext";
import { useCategoryContext } from "../../../context/categorycontext";

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
      <div className="scrollmenu">
        <div>
          {categories.map((category) => (
            <a key={category.id} href="#home">
              {category.categoryName}
            </a>
          ))}
        </div>
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
