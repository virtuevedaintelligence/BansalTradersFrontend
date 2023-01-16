import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "./nav.css";
import "./responsive.css";
import React from "react";
import { NavLink } from "react-router-dom";
import Cart from "../cart/Cart";

function Topnavbar() {
  return (
    <>
      <Navbar expand="lg" className="nav-bg">
        <Container>
          <Navbar.Brand href="/">Bansal Traders</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <NavLink className="nav-link" to="/">
                Home
              </NavLink>
              <NavDropdown title="Products" id="basic-nav-dropdown" className="">
                <NavLink className="dropdown-item" to="/products/dryfruits">
                  Dry Fruits
                </NavLink>
                <NavDropdown.Divider />
                <NavLink className="dropdown-item" to="/products/spices">
                  Spices
                </NavLink>
              </NavDropdown>
              <NavLink className="nav-link" to="/contact">
                Contact
              </NavLink>
              <NavLink className="nav-link" to="/about">
                About
              </NavLink>
              <NavLink className="nav-link" to="/mission">
                Our Mission
              </NavLink>
              <div className="loginNavLink d-flex">
                <NavLink className="nav-link" to="/orders">
                  Orders
                </NavLink>
                <NavLink className="nav-link">
                  <Cart />
                </NavLink>
                <NavLink className="nav-link" to="/login">
                  Login
                </NavLink>
              </div>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Topnavbar;
