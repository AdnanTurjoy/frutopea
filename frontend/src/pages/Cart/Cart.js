import axios from "axios";
import React, { useContext, useEffect } from "react";
import { Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

import { Store } from "../../Store/Store";
export const Cart = () => {
  const navigate = useNavigate();
  const { state, dispatch: ctxDispatch } = useContext(Store);
  const {
    cart: { cartItems },
  } = state;
  const updateCartHandler = async (item, quantity) => {
    const { data } = await axios.get(
      `${process.env.REACT_APP_API_URL}/api/products/${item._id}`
    );
    if (data.countInStock < quantity) {
      window.alert("Sorry. Product is out of stock");
      return;
    }
    ctxDispatch({
      type: "CART_ADD_ITEM",
      payload: { ...item, quantity },
    });
  };
  const removeItemHandler = (item) => {
    ctxDispatch({ type: "CART_REMOVE_ITEM", payload: item });
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <div className="cart-section mb-80" style={{ marginTop: "20px" }}>
        <div class="section-title" style={{ textAlign: "center" }}>
          <h3>Chart</h3>
        </div>
        <div className="container">
          {cartItems.length === 0 ? (
            <h1>Cart is empty, Please add to cart</h1>
          ) : (
            <div className="row">
              <div className="col-lg-8 col-md-12">
                <div className="cart-table-wrap">
                  <table className="cart-table">
                    <thead className="cart-table-head">
                      <tr className="table-head-row">
                        <th className="product-remove"></th>
                        <th className="product-image">Product Image</th>
                        <th className="product-name">Name</th>
                        <th className="product-price">Price</th>
                        <th className="product-quantity">Quantity</th>
                        <th className="product-total">Total</th>
                      </tr>
                    </thead>
                    <tbody>
                      {cartItems?.map((item, _id) => {
                        return (
                          <tr className="table-body-row" key={_id}>
                            <td className="product-remove" key={_id}>
                              <button onClick={() => removeItemHandler(item)}>
                                <i className="far fa-window-close"></i>
                              </button>
                            </td>
                            <td className="product-image">
                              <img src={item.image} alt="" />
                            </td>
                            <td className="product-name">{item.name}</td>
                            <td className="product-price">${item.price}</td>
                            <td className="product-quantity">
                              <Button
                                variant="light"
                                disabled={item.quantity === 1}
                                onClick={() =>
                                  updateCartHandler(item, item.quantity - 1)
                                }
                              >
                                {" "}
                                <i className="fas fa-minus-circle"></i>{" "}
                              </Button>
                              {item.quantity}{" "}
                              <Button
                                variant="light"
                                disabled={item.quantity === item.countInStock}
                                onClick={() =>
                                  updateCartHandler(item, item.quantity + 1)
                                }
                              >
                                {" "}
                                <i className="fas fa-plus-circle"></i>{" "}
                              </Button>{" "}
                            </td>
                            <td className="product-total">
                              {item.price * item.quantity}
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="col-lg-4">
                <div className="total-section">
                  <table className="total-table">
                    <thead className="total-table-head">
                      <tr className="table-total-row">
                        <th>Total</th>
                        <th>Price</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="total-data">
                        <td>
                          <strong>Subtotal: </strong>
                        </td>

                        <td>
                          $
                          {cartItems.reduce(
                            (a, c) => a + c.price * c.quantity,
                            0
                          )}
                        </td>
                      </tr>
                      <tr className="total-data">
                        <td>
                          <strong>Shipping: </strong>
                        </td>
                        <td>$45</td>
                      </tr>
                      <tr className="total-data">
                        <td>
                          <strong>Total: </strong>
                        </td>
                        <td>
                          $
                          {cartItems.reduce(
                            (a, c) => a + c.price * c.quantity,
                            0
                          ) + 45}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <div className="cart-buttons">
                    <button
                      className="boxed-btn black"
                      onClick={() => navigate("/login?redirect=/checkout")}
                    >
                      {" "}
                      Check Out
                    </button>
                  </div>
                </div>

                {/* <div className="coupon-section">
                  <h3>Apply Coupon</h3>
                  <div className="coupon-form-wrap">
                    <form action="index.html">
                      <p>
                        <input type="text" placeholder="Coupon" />
                      </p>
                      <p>
                        <input type="submit" value="Apply" />
                      </p>
                    </form>
                  </div>
                </div> */}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
