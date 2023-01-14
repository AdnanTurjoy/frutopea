import { BrowserRouter, Route, Routes } from "react-router-dom";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar/Navbar";

import About from "./pages/About/About";
import { Cart } from "./pages/Cart/Cart";
import Checkout from "./pages/Checkout/Checkout";
import Contact from "./pages/Contact/Contact";
import Home from "./pages/Home";
import Products from "./pages/Product/Products";
import SingleProduct from "./pages/Product/SingleProduct";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Placeorder from "./pages/Placeorder/Placeorder";
import Order from "./pages/Order/Order";


function App() {
  
  return (
    <>
      {/* <div class="loader">
        <div class="loader-inner">
            <div class="circle"></div>
        </div>
    </div> */}
      <BrowserRouter>
      <Navbar/>
      <ToastContainer position="bottom-center" limit={1} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/products" element={<Products />} />
          <Route path="/product" element={<SingleProduct />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/placeorder" element={<Placeorder />} />
          <Route path="/order/:id" element={<Order />} />
          {/* AUTH */}
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

        </Routes>
        <Footer/>
      </BrowserRouter>
   
    </>
  );
}

export default App;
