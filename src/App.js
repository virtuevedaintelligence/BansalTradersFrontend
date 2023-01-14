import React from "react";
import Nav from "./components/nav/Nav";
import Home from "./components/home/Home";
import DryFruits from "./components/products/dryfruits/DryFruits";
import Spices from "./components/products/spices/Spices";
import Products from "./components/products/Products";
import Contact from "./components/contact/Contact";
import Login from "./components/login/Login";
import About from "./components/about/About";
import NotFound from "./components/notfound/NotFound";
import Mission from "./components/mission/Mission";
import Footer from "./components/footer/Footer";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import { BrowserRouter as Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Nav />
        <Routes>
          <Route activeClassName="active_class" exact path="/" element={<Home />}></Route>
          <Route activeClassName="active_class" exact path="/products" element={<Products />}>
            <Route activeClassName="active_class" path="dryfruits" element={<DryFruits />}>
              {" "}
            </Route>
            <Route activeClassName="active_class" path="spices" element={<Spices />}>
              {" "}
            </Route>
          </Route>
          <Route activeClassName="active_class" exact path="/about" element={<About />}></Route>
          <Route activeClassName="active_class" exact path="/contact" element={<Contact />}></Route>
          <Route activeClassName="active_class" exact path="/mission" element={<Mission />}></Route>
          <Route activeClassName="active_class" exact path="/login" element={<Login />}></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
