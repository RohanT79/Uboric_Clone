import React from "react";
import { Routes, Route } from "react-router-dom";
import { Homepage } from "../Pages/Home/Homepage";
import Banner from "../Components/Navbar/Banner";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";
import FooterTop from "../Components/Footer/FooterTop";
import Category from "../Components/Navbar/Category";
import Loginmain from "../Pages/login/Loginmain";
import Products from "../Pages/Products/Products";
import Cart from "../Pages/Products/Cart";

import Checkout from "../Pages/Checkout/checkout";
import { Paysuccess } from "../Pages/Paysuccess/Paysuccess";

const AllRoutes = () => {
  return (
    <div>
      <Banner />
      <Navbar />
      <Routes>
        <Route path={"/"} element={<Homepage />}></Route>
        <Route path={"/category"} element={<Category />}></Route>
        <Route path={"/loginmain"} element={<Loginmain />}></Route>
        <Route path={"/products"} element={<Products />}></Route>
        <Route path={"/checkout"} element={<Checkout />}></Route>
        <Route path={"/cart"} element={<Cart />}></Route>
        <Route path={"/paysuccess"} element={<Paysuccess />}></Route>
      </Routes>
      <FooterTop />
      <Footer />
    </div>
  );
};

export default AllRoutes;
