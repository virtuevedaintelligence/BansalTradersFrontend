import React from "react";
import { NavLink } from "react-router-dom";
import { RiTwitterFill } from "react-icons/ri";
import { RiFacebookCircleFill } from "react-icons/ri";
import { RiInstagramFill } from "react-icons/ri";
import { RiLinkedinBoxFill } from "react-icons/ri";
import "./footer.css";

const footerMain = "fixed inset-x-0 bottom-0 p-4 bg-white rounded-lg shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800";
const footerSpanOne = "text-sm text-gray-500 sm:text-center dark:text-gray-400";
const footerNavlinkOne = " hover:underline";
const footerUl = "flex flex-wrap items-center mt-3 text-sm text-gray-500 dark:text-gray-400 sm:mt-0";
const mr4 = "mr-4";
const footerNavlinkTwo = "mr-4 hover:underline md:mr-6";

function Footer() {
  return (
    <>
      <footer className="py-3 footer">
        <div className="container d-md-flex py-4 ">
          <div className="me-md-auto text-center text-md-start">
            <div className="copyright">
              © Copyright
              <strong>
                <span>OnePage</span>
              </strong>
              . All Rights Reserved
            </div>
            <div className="credits">
              Designed by <NavLink to="/">Bansal Trader</NavLink>
            </div>
          </div>
          <div className="social-links text-center text-md-right pt-3 pt-md-0">
            <NavLink to="/" className="twitter">
              <i>
                <RiTwitterFill />
              </i>
            </NavLink>
            <NavLink to="/" className="facebook">
              <i>
                <RiFacebookCircleFill />
              </i>
            </NavLink>
            <NavLink to="/" className="instagram">
              <i>
                <RiInstagramFill />
              </i>
            </NavLink>
            <NavLink to="/" className="linkedin">
              <i>
                <RiLinkedinBoxFill />
              </i>
            </NavLink>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
