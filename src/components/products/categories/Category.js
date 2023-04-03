import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useCategoryContext } from "../../../context/categorycontext";
import { useFilterContext } from "../../../context/fitercontext";
import Preloader from "../../preloader/Preloader";
import UpdateDeleteCategory from "../admin/UpdateDeleteCategory";

function Category({ category, filters, filterDryfruits }) {
  return (
    <>
      <a href="">{category.categoryName}</a>
      <UpdateDeleteCategory category={category} categoryId={category.id} />
    </>
  );
}

export default Category;
