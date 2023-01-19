import React from "react";
import Category from "./Category";

function CategorySlider({ categories }) {
  return (
    <>
      {categories.map((category) => {
        return <Category key={category.categoryId} category={category} />;
      })}
    </>
  );
}

export default CategorySlider;
