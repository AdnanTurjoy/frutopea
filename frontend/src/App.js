import { BrowserRouter, Route, Routes } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "bootstrap/dist/css/bootstrap.min.css";
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
import OrderHistory from "./pages/OrderHistory/OrderHistory";
import UserProfile from "./pages/UserProfile/UserProfile";
import { useContext, useEffect, useState } from "react";
import AdminRoute from "./Routes/AdminRoute";
import Dashboard from "./pages/Dashboard/Dashboard";
import ProtectedRoute from "./Routes/ProtectedRoute";
import ProductList from "./pages/Admin/ProductList/ProductList";
import ProductEdit from "./pages/Admin/ProductEdit/ProductEdit";
import OrderList from "./pages/Admin/OrderList/OrderList";
import UserList from "./pages/Admin/UserList/UserList";
import UserEdit from "./pages/Admin/UserEdit/UserEdit";
import { Store } from "./Store/Store";
import Map from "./pages/Map/Map";

function App() {
  const [sidebarIsOpen, setSidebarIsOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const { state, dispatch: ctxDispatch } = useContext(Store);
  const { fullBox } = state;
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);
  return (
    <>
      {loading && (
        <div class="loader">
          <div class="loader-inner">
            <div class="circle"></div>
          </div>
        </div>
      )}

      <BrowserRouter>
        <div
          className={
            sidebarIsOpen
              ? fullBox
                ? "site-container active-cont d-flex flex-column full-box"
                : "site-container active-cont d-flex flex-column"
              : fullBox
              ? "site-container d-flex flex-column full-box"
              : "site-container d-flex flex-column"
          }
        >
          <Navbar />
          <ToastContainer position="bottom-center" limit={1} />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/products" element={<Products />} />
            <Route path="/product/:slug" element={<SingleProduct />} />
            <Route path="/cart" element={<Cart />} />
            <Route
              path="/checkout"
              element={
                <ProtectedRoute>
                  <Checkout />
                </ProtectedRoute>
              }
            />
            <Route
              path="/placeorder"
              element={
                <ProtectedRoute>
                  <Placeorder />
                </ProtectedRoute>
              }
            />
            <Route
              path="/order/:id"
              element={
                <ProtectedRoute>
                  <Order />
                </ProtectedRoute>
              }
            ></Route>
            <Route
              path="/orderhistory"
              element={
                <ProtectedRoute>
                  {" "}
                  <OrderHistory />
                </ProtectedRoute>
              }
            ></Route>
            <Route
              path="/profile"
              element={
                <ProtectedRoute>
                  <UserProfile />
                </ProtectedRoute>
              }
            ></Route>
            <Route
              path="/map"
              element={
                <ProtectedRoute>
                  <Map />
                </ProtectedRoute>
              }
            ></Route>
            {/* Admin Routes */}
            <Route
              path="/admin/dashboard"
              element={
                <AdminRoute>
                  <Dashboard />
                </AdminRoute>
              }
            ></Route>
            <Route
              path="/admin/products"
              element={
                <AdminRoute>
                  <ProductList />
                </AdminRoute>
              }
            ></Route>
            <Route
              path="/admin/product/:id"
              element={
                <AdminRoute>
                  <ProductEdit />
                </AdminRoute>
              }
            ></Route>

            <Route
              path="/admin/orders"
              element={
                <AdminRoute>
                  <OrderList />
                </AdminRoute>
              }
            ></Route>

            <Route
              path="/admin/users"
              element={
                <AdminRoute>
                  <UserList />
                </AdminRoute>
              }
            ></Route>

            <Route
              path="/admin/user/:id"
              element={
                <AdminRoute>
                  <UserEdit />
                </AdminRoute>
              }
            ></Route>

            {/* AUTH */}
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
          <Footer />
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
