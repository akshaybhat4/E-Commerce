import React from "react";
import './App.css';
import {Home} from "./pages/home.js";
//import {Counter} from "./counter";
//import {Hooksdemo} from "./Hooksdemo.js";
import ProductsPage from "./pages/ProductsPage";
import IndivisualProduct from "./pages/IndivisualProduct";
import Signup from "./pages/SignUp";
import Signin from "./pages/Signin";
import { BrowserRouter as Router, Route, Routes, Navigate} from "react-router-dom";
//import { useLocation } from "react-router";
import Cart from "./pages/Cart";
import Navbar from "./components/Navbar";
import { useSelector } from "react-redux";
import Order from "./pages/order";
import MyOrders from "./pages/MyOrders";


function App() {
  const user = useSelector(state => state.user.currentUser); 

  return (
    <Router>
       <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route path="/order" element={ <Order /> } ></Route> 
        <Route path="/products/:category" element={<ProductsPage />}></Route>
        <Route path="/product/:id" element={<IndivisualProduct />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
        <Route path="/myorders" element={<MyOrders />}></Route>
        <Route path="/Signin" element= {user ? <Navigate to="/" /> : <Signin />}> </Route>
        <Route path="/Signup" element={<Signup />}> </Route>  
      </Routes>
    </Router>
  );
}
export default App;
