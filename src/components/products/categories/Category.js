import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useCategoryContext } from "../../../context/categorycontext";
import { useFilterContext } from "../../../context/fitercontext";
import Preloader from "../../preloader/Preloader";
import UpdateDeleteCategory from "../admin/UpdateDeleteCategory";

function Category({ category, filters, filterDryfruits }) {
  const adminData = useSelector((state) => {
    return state.admin;
  });
 
  

  if (adminData.dataAdminLogin) {
  }

  return (
    <>
      <a href="">{categoryName}</a>
      <UpdateDeleteCategory category={category.categoryName} categoryId={category.id} />
      {/* <button className="btn-sm btn btn-success" style={{ marginRight: "10px" }} onClick={handleShow}>
        <FiEdit2 />
      </button>
      <button className="btn-sm btn btn-danger">
        <MdDelete onClick={deleteCat} />
      </button> */}

      
    </>
  );
}

export default Category;
