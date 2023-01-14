import Nav from "./components/nav/Nav";
import Home from "./components/home/Home";
import Products from "./components/dryfruits/products/Products";
import Contact from "./components/contact/Contact";
import Login from "./components/login/Login";
import About from "./components/about/About";
import NotFound from "./components/notfound/NotFound";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import { BrowserRouter as Route } from "react-router-dom";

import Footer from "./components/footer/Footer";

function App() {
  return (
    <>
      <Router>
        <Nav />
        <Routes>
          <Route activeClassName="active_class" exact path="/" element={<Home />}></Route>
          <Route activeClassName="active_class" exact path="/products" element={<Products />}></Route>
          <Route activeClassName="active_class" exact path="/about" element={<About />}></Route>
          <Route activeClassName="active_class" exact path="/contact" element={<Contact />}></Route>
          <Route activeClassName="active_class" exact path="/login" element={<Login />}></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
