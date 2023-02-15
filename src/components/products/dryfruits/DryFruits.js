import React from "react";
import { MDBContainer, MDBRow } from "mdb-react-ui-kit";
import Product from "../Product";
import { useProductContext } from "../../../context/productcontext";
import { useCategoryContext } from "../../../context/categorycontext";
import Category from "../categories/Category";

import AddCategory from "../categories/AddCategory";
import AddProduct from "../AddProduct";
import { useFilterContext } from "../../../context/fitercontext";
import Preloader from "../../preloader/Preloader";

const DryFruits = () => {
  const { isLoading, products } = useProductContext();
  const { filterdryfruits } = useFilterContext();
  const { isLoadingCategory, categories } = useCategoryContext();

  if (isLoading) {
    return <Preloader />;
  }
  if (isLoadingCategory) {
    return <Preloader />;
  }

  return (
    <>
      <div className="categories">
        <div className="scrollmenu">
          {categories
            .filter((category) => category.categoryName !== "Choose Category")
            .filter((category) => category.categoryName !== "all")
            .map((category) => {
              return <Category key={category.categoryId} category={category} />;
            })}
        </div>
        <div className="container row">
          <div className="col-sm-12 d-flex">
            <AddCategory />
            <AddProduct />
          </div>
        </div>
      </div>
      <MDBContainer fluid className="my-5">
        <MDBRow>
          {filterdryfruits.map((product) => {
            return <Product key={product.productId} product={product} />;
          })}
        </MDBRow>
      </MDBContainer>
    </>
  );
};

export default DryFruits;
