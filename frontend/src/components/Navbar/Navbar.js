import React, { useContext, useEffect } from "react";
import { Badge, Container, Nav, Navbar, NavDropdown } from "react-bootstrap";

import { Link, useLocation } from "react-router-dom";

import "./Navbar.css";
import { useState } from "react";


import { Store } from "../../Store/Store";
const Header = () => {
  const location = useLocation();
  // CONTEXT API
  const { state, dispatch: ctxDispatch } = useContext(Store);
  const { cart, userInfo } = state;
  // const { state } = useContext(Store);
  // const { cart } = state;
  const [navbar, setNavbar] = useState(false);
  const windowScroll = "navbarScroll";
  const windowNotScroll = "navbarNotScroll";
  const [activeLink, setActiveLink] = useState("");
  useEffect(() => {
    setActiveLink(location.pathname + location.hash);
  }, [location, activeLink]);

  const scrollWindow = () => {
    if (window.scrollY >= 80) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };
  let user = true;
  window.addEventListener("scroll", scrollWindow);
  const signoutHandler = () => {
    ctxDispatch({ type: 'USER_SIGNOUT' });
    localStorage.removeItem('userInfo');
    localStorage.removeItem('shippingAddress');
    localStorage.removeItem('paymentMethod');
    window.location.href = '/login';
  };
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      className={`${navbar ? windowScroll : windowNotScroll} ${
        location.pathname === "/" || location.pathname === "/about"
          ? "fixedTop"
          : "stickyTop"
      }`}
    >
      <Container className="px-0">
        <Navbar.Brand className="m-0" to="/">
          <img
            src="https://demo.alura-studio.com/orgafresh/wp-content/uploads/2018/07/logo3-bottom.png"
            alt=""
          />
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          className="toggle-btn"
        />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mx-auto d-flex align-items-center pt-1">
            <Link
              className={`${activeLink === "/" ? "active-link-color" : ""} ${
                user ? "ms-4" : "ms-2"
              } navLink`}
              smooth
              to="/"
            >
              HOME
            </Link>

            <Link
              className={`${
                activeLink === "/about" ? "active-link-color" : ""
              } navLink`}
              smooth
              to="/about"
            >
              ABOUT US
            </Link>

            <Link
              className={`${
                activeLink === "/products" ? "active-link-color" : ""
              } navLink`}
              smooth
              to="/products"
            >
              PRODUCTS
            </Link>

            <Link
              className={`${
                activeLink === "/contact" ? "active-link-color" : ""
              } navLink`}
              smooth
              to="/contact"
            >
              CONTACT
            </Link>
          </Nav>
          <Nav>
            <Link
              className={`${
                activeLink === "/cart" ? "active-link-color" : ""
              } navLink`}
              smooth
              to="/cart"
            >
              <i className="fas fa-shopping-cart">
                {cart.cartItems.length > 0 && (
                  <Badge pill bg="danger" >
                    {cart.cartItems.reduce((a,c)=>a+c.quantity,0)}
                  </Badge>
                )}
              </i>
            </Link>
            <Link
              className={`${
                activeLink === "/search" ? "active-link-color" : ""
              } navLink`}
              smooth
              to="/search"
              style={{ marginRight: "20px" }}
            >
              <i className="fas fa-search"></i>
            </Link>
          </Nav>
          
          {userInfo ? (
                    <NavDropdown title={ <Link className="m-0">
                    <button className="button ripple " >{userInfo.name}</button>
                  </Link>} >
                      <Link to="/profile">
                        <NavDropdown.Item >User Profile</NavDropdown.Item>
                      </Link>
                      <Link to="/orderhistory">
                        <NavDropdown.Item>Order History</NavDropdown.Item>
                      </Link>
                      <NavDropdown.Divider />
                      <NavDropdown.Item><Nav className="logOut-lonIn">
                <button className="button ripple" onClick={signoutHandler}>Log Out</button>
                </Nav></NavDropdown.Item>
                   
                    </NavDropdown>
                  ) : (
                    <Link className="m-0" smooth to="/login">
                <button className="button ripple " >Log In</button>
              </Link>
                  )}
         {" "}
              
              
             
    
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
