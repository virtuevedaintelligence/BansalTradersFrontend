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
    <footer className="py-3 bg-dark">
      <ul className="nav justify-content-center border-bottom pb-3 mb-3">
        <li className="nav-item">
          <NavLink className="nav-link px-2 text-muted" to="/">
            Home
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/contact" className="nav-link px-2 text-muted">
            Contact
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/about" className="nav-link px-2 text-muted">
            About
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/mission" className="nav-link px-2 text-muted">
            Our Mission
          </NavLink>
        </li>
      </ul>
      <p className="text-center text-muted">© 2023 Bansal Tranders</p>
    </footer>
  );
}

export default Footer;
