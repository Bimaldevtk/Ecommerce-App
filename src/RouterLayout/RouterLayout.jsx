import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import TopHeader from "../components/TopHeader/TopHeader";
import Footer from "../components/Footer/Footer";
import Home from "../components/Home/Home";  
import Logout from "../components/logout/Logout"; 
import ProductDetails from "../components/productDetails/ProductDetails";
import Signup from "../components/Signup/Signup";
import Sigin from "../components/Signin/Sigin";
import ForgotPass from "../components/ForgotPassword/ForgotPass";

const RouterLayout = () => {
  return (
    <Router>
      <TopHeader />
      <Routes>
        <Route path="/" element={<Signup/>}/>
        <Route path="/Home" element={<Home />} />
        <Route path="/Forgot" element={<ForgotPass/>}  />
        <Route path="/logout" element={<Logout/>} />
        <Route path="/Sigin" element ={<Sigin/>} /> 
        <Route path="/product/:id" element={<ProductDetails/>}/>
        
      </Routes>
      <Footer />
    </Router>
  );
};

export default RouterLayout;
