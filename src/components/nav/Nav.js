import "./nav.css";
import "./responsive.css";
import { NavLink, useNavigate } from "react-router-dom";
import Cart from "../cart/Cart";
import ShopByCategory from "../products/categories/ShopByCategory";
import Login from "../login/Login";
import Search from "../search/Search";
import { Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useState } from "react";
import { AuthService } from "../../services/AuthService";
import { useEffect } from "react";

function TopNavbar() {
  const [login, setLogin] = useState(false);
  const [user, setUser] = useState(undefined);
  const auth = new AuthService();
  useEffect(() => {
    setLogin(auth.isLoggedIn());
    setUser(auth.getToken());
  }, [login]);
  return (
    <>
      <Navbar bg="light" expand="lg" className="mx-2">
        <Link className="navbar-brand" to="/">
          Bansal Traders
        </Link>
        <div className="mb-cat-cart-login">
          <ShopByCategory />
          <Cart />
          <Login className="loginNavLink d-flex" />
        </div>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="px-2">
          <Nav className="mx-auto">
            <NavLink className="nav-link" to="/">
              Home
            </NavLink>
            <NavLink className="nav-link" to="/products/dryfruits">
              Dryfruits
            </NavLink>
            <NavLink className="nav-link" to="/products/spices">
              Spices
            </NavLink>
            {login && (
              <NavLink className="nav-link" to="/orders">
                Orders
              </NavLink>
            )}
            <NavLink className="nav-link" to="/about">
              About
            </NavLink>
            <NavLink className="nav-link" to="/contact">
              Contact
            </NavLink>
          </Nav>
          <Nav className="ml-auto">
            <Nav.Link className="desk-cat-cart-login">
              <ShopByCategory />
            </Nav.Link>
            {
              login && (
                <Nav.Link className="desk-cat-cart-login">
                  <Cart />
                </Nav.Link>
              )
            }
            <Nav.Link className="desk-cat-cart-login">
              <Login className="loginNavLink d-flex" />
            </Nav.Link>
            <Nav.Link className="">
              <Search />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}

export default TopNavbar;
