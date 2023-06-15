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
import Cart from "./components/cart/Cart";
import Orders from "./components/orders/Orders";
import Order from "./components/orders/Order";
import Footer from "./components/footer/Footer";
import AddProduct from "../src/components/products/AddProduct";
import UpdateProduct from "../src/components/products/UpdateProduct";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ProductDetail from "./components/products/ProductDetail";
import AddCategory from "./components/products/categories/AddCategory";
import Admin from "./components/admin/Admin";
import ExcelFunc from "./components/products/excelfunctionality/ExcelFuncProducts";
import AdminProfile from "./components/admin/AdminProfile";

function App() {
  return (
    <>
      Bansal is now live
    </>
    // <>
    //   <Router>
    //     <Nav />
    //     <Routes>
    //       <Route activeClassName="active_class" exact path="/" element={<Home />}></Route>
    //       <Route exact path="/secureadmin" element={<Admin />}></Route>
    //       <Route exact path="/welcomeadmin" element={<AdminProfile />}></Route>
    //       <Route activeClassName="active_class" exact path="/products" element={<Products />}>
    //         <Route path="dryfruits" element={<DryFruits />}></Route>
    //         <Route path="spices" element={<Spices />}></Route>
    //       </Route>
    //       {/* <Route path="/dryfruitdetail/:id" element={<ProductDetail />} /> */}
    //       <Route activeClassName="active_class" exact path="/about" element={<About />}></Route>
    //       <Route activeClassName="active_class" exact path="/contact" element={<Contact />}></Route>
    //       <Route activeClassName="active_class" exact path="/mission" element={<Mission />}></Route>
    //       <Route activeClassName="active_class" exact path="/cart" element={<Cart />}></Route>
    //       <Route activeClassName="active_class" exact path="/orders" element={<Orders />}></Route>
    //       <Route activeClassName="active_class" exact path="/Order" element={<Order />}></Route>
    //       <Route activeClassName="active_class" exact path="/login" element={<Login />}></Route>
    //       <Route activeClassName="active_class" exact path="/dryfruitdetails/:productId" element={<ProductDetail />}></Route>
    //       <Route activeClassName="active_class" exact path="/addproduct" element={<AddProduct />}></Route>
    //       <Route activeClassName="active_class" exact path="/addproductwithexcel" element={<ExcelFunc />}></Route>
    //       <Route activeClassName="active_class" exact path="/addcategory" element={<AddCategory />}></Route>
    //       <Route activeClassName="active_class" exact path="/update/:productId" element={<UpdateProduct />}></Route>
    //       <Route path="*" element={<NotFound />}></Route>
    //     </Routes>
    //     <Footer />
    //   </Router>
    //</>
  );
}

export default App;
