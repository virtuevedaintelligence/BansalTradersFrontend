import React from "react";
import { NavLink } from "react-router-dom";
const footerMain = "fixed inset-x-0 bottom-0 p-4 bg-white rounded-lg shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800";
const footerSpanOne = "text-sm text-gray-500 sm:text-center dark:text-gray-400";
const footerNavlinkOne = " hover:underline";
const footerUl = "flex flex-wrap items-center mt-3 text-sm text-gray-500 dark:text-gray-400 sm:mt-0";
const mr4 = "mr-4";
const footerNavlinkTwo = "mr-4 hover:underline md:mr-6";
function Footer() {
    return (
        <footer className={footerMain}>
            <span className={footerSpanOne}>
                © 2023{" "}
                <NavLink to="/" className={footerNavlinkOne}>
                    Bansal Traders
                </NavLink>
                . All Rights Reserved.
            </span>
            <ul className={footerUl}>
                <li className={mr4}>
                    <NavLink to="/about" className={footerNavlinkTwo}>
                        About
                    </NavLink>
                </li>
                <li className={mr4}>
                    <NavLink to="/faq" className={footerNavlinkTwo}>
                        FAQ
                    </NavLink>
                </li>
                <li className={mr4}>
                    <NavLink to="/products" className={footerNavlinkTwo}>
                        Products
                    </NavLink>
                </li>
                <li className={mr4}>
                    <NavLink to="/contact" className={footerNavlinkOne}>
                        Contact
                    </NavLink>
                </li>
            </ul>
        </footer>
    );
}

export default Footer;
