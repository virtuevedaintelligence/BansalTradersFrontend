import React from "react";
import AddCategory from "../categories/AddCategory";
import AddProduct from "../AddProduct";
import ExcelFuncProducts from "../excelfunctionality/ExcelFuncProducts";
import ExcelFuncCategories from "../excelfunctionality/ExcelFuncCategories";
import { useSelector } from "react-redux";

const AdminFeatures = () => {
    const adminData = useSelector((state) => {
        return state.admin;
    });
    if (adminData.dataAdminLogin && adminData.dataAdminLogin.message === "Admin logged in successfully") {
        const token = adminData.dataAdminLogin.response.token;
        return (
            <>
                <AddCategory />
                <AddProduct token={token} />
                <ExcelFuncProducts />
                <ExcelFuncCategories />
            </>
        );
    } else {
        return null;
    }
};

export default AdminFeatures;
