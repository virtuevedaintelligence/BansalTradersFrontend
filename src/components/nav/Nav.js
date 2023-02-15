import "./nav.css";
import "./responsive.css";
import { NavLink } from "react-router-dom";
import Cart from "../cart/Cart";
import ShopByCategory from "../products/categories/ShopByCategory";
import Login from "../login/Login";
import Search from "../search/Search";
import { Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

function TopNavbar() {
  return (
    <>
      <Navbar bg="light" expand="lg" className="mx-2">
        <Link className="navbar-brand" to="/">
          {/* <img src="logo.png" alt="Logo" /> */}Bansal Traders
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
            <NavLink className="nav-link" to="/about">
              About
            </NavLink>
            <NavLink className="nav-link" to="/contact">
              contact
            </NavLink>
          </Nav>
          <Nav className="ml-auto">
            <Nav.Link href="#" className="desk-cat-cart-login">
              <ShopByCategory />
            </Nav.Link>
            <Nav.Link href="#" className="desk-cat-cart-login">
              <Cart />
            </Nav.Link>
            <Nav.Link href="#" className="desk-cat-cart-login">
              <Login className="loginNavLink d-flex" />
            </Nav.Link>
            <Nav.Link href="#" className="">
              <Search />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      {/*
      <nav className="navbar navbar-expand-lg navbar-light bg-white px-2 ">
        <NavLink className="navbar-brand" to="">
          {/* <img src="logo.png" alt="Logo"> Bansal Traders
        </NavLink>
        <Navbar.Toggle />
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mx-auto">
            <li className="nav-item">
              <NavLink className="nav-link" to="/">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/products/dryfruits">
                Dryfruits
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/products/spices">
                Spices
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/about">
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/contact">
                Contact
              </NavLink>
            </li>
          </ul>
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink className="nav-link">
                <ShopByCategory />
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link">
                <Cart />
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link">
                <Login className="loginNavLink d-flex" />
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link">
                <Search />
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
      {/* <Navbar expand="lg" className="nav-bg">
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
              <NavLink className="nav-link">
                <ShopByCategory />
              </NavLink>
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
                <Search />
                <NavLink className="nav-link" to="/orders">
                  Orders
                </NavLink>
                <NavLink className="nav-link">
                  <Cart />
                </NavLink>
                <Login className="loginNavLink d-flex" />
              </div>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar> */}
    </>
  );
}

export default TopNavbar;
