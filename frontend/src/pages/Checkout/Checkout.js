import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Store } from "../../Store/Store";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
const Checkout = () => {
  const navigate = useNavigate();
  const { state, dispatch: ctxDispatch } = useContext(Store);
  const {
    fullBox,
    userInfo,
    cart: { shippingAddress, paymentMethod },
  } = state;
  const [fullName, setFullName] = useState(shippingAddress.fullName || "");
  const [address, setAddress] = useState(shippingAddress.address || "");
  const [city, setCity] = useState(shippingAddress.city || "");
  const [postalCode, setPostalCode] = useState(
    shippingAddress.postalCode || ""
  );
  useEffect(() => {
    if (!userInfo) {
      navigate("/login?redirect=/checkout");
    }
  }, [userInfo, navigate]);
  const [country, setCountry] = useState(shippingAddress.country || "");
  const submitHandler = (e) => {
    e.preventDefault();
    ctxDispatch({
      type: "SAVE_SHIPPING_ADDRESS",
      payload: {
        fullName,
        address,
        city,
        postalCode,
        country,
        location: shippingAddress.location,
      },
    });
    localStorage.setItem(
      "shippingAddress",
      JSON.stringify({
        fullName,
        address,
        city,
        postalCode,
        country,
        location: shippingAddress.location,
      })
    );
  };

  useEffect(() => {
    ctxDispatch({ type: "SET_FULLBOX_OFF" });
  }, [ctxDispatch, fullBox]);
  const [paymentMethodName, setPaymentMethod] = useState(
    paymentMethod || "PayPal"
  );

  useEffect(() => {
    if (!shippingAddress.address) {
      navigate("/checkout");
    }
  }, [shippingAddress, navigate]);
  const submitPaymentHandler = (e) => {
    e.preventDefault();
    ctxDispatch({ type: "SAVE_PAYMENT_METHOD", payload: paymentMethodName });
    localStorage.setItem("paymentMethod", paymentMethodName);
    navigate("/placeorder");
  };
  // Toggle
  const [isShow, setIsShow] = useState(false);
  return (
    <div>
    
      <div className="checkout-section mt-100 mb-150">
	  <div class="section-title" style={{textAlign:"center"}}>
                  <h3>
                     Checkout
                  </h3>
                </div>
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="checkout-accordion-wrap">
                <div className="accordion" id="accordionExample">
                  <div className="card single-accordion">
                    <div className="card-header" id="headingOne">
                      <h5 className="mb-0">
                        <button
                          className="btn btn-link"
                          type="button"
                          data-toggle="collapse"
                          data-target="#collapseOne"
                          aria-expanded="true"
                          aria-controls="collapseOne"
                        >
                          Shipping Address
                        </button>
                      </h5>
                    </div>

                    <div
                      id="collapseOne"
                      className="collapse show"
                      aria-labelledby="headingOne"
                      data-parent="#accordionExample"
                    >
                      <div className="card-body">
                        <div className="billing-address-form">
                          <form onSubmit={submitHandler}>
                            <p>
                              <input
                                value={fullName}
                                onChange={(e) => setFullName(e.target.value)}
                                required
                                type="text"
                                placeholder="Full Name"
                              />
                            </p>
                            <p>
                              <input
                                value={address}
                                onChange={(e) => setAddress(e.target.value)}
                                required
                                type="text"
                                placeholder="Address"
                              />
                            </p>
                            <p>
                              <input
                                value={city}
                                onChange={(e) => setCity(e.target.value)}
                                required
                                type="text"
                                placeholder="City"
                              />
                            </p>
                            <p>
                              <input
                                value={postalCode}
                                onChange={(e) => setPostalCode(e.target.value)}
                                required
                                type="text"
                                placeholder="Postal Code"
                              />
                            </p>
                            <p>
                              <input
                                value={country}
                                onChange={(e) => setCountry(e.target.value)}
                                required
                                type="text"
                                placeholder="Country"
                              />
                            </p>
                            <p>
                              <textarea
                                name="bill"
                                id="bill"
                                cols="30"
                                rows="10"
                                placeholder="Say Something"
                              ></textarea>
                            </p>
                            <button
                              onClick={() => setIsShow(true)}
                              className="boxed-btn"
                            >
                              Continue
                            </button>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                
                </div>
              </div>
            </div>

            <div className="col-lg-4">
			<div className="card single-accordion">
                    <div className="card-header" id="headingThree">
                      <h5 className="mb-0">
                        <button
                          onClick={() => setIsShow(true)}
                          className="btn btn-link collapsed"
                          type="button"
                          data-toggle="collapse"
                          data-target="#collapseThree"
                          aria-expanded="false"
                          aria-controls="collapseThree"
                        >
                          Payment Details
                        </button>
                      </h5>
                    </div>
                    <div
                      id="collapseThree"
                      className={`collapse ${isShow && "show"}`}
                      aria-labelledby="headingThree"
                      data-parent="#accordionExample"
                    >
                      <div className="card-body">
                        <div className="card-details">
                          <Form onSubmit={submitPaymentHandler}>
                            <div className="mb-3">
                              <Form.Check
                                type="radio"
                                id="PayPal"
                                label="PayPal"
                                value="PayPal"
                                checked={paymentMethodName === "PayPal"}
                                onChange={(e) =>
                                  setPaymentMethod(e.target.value)
                                }
                              />
                            </div>
                            <div className="mb-3">
                              <Form.Check
                                type="radio"
                                id="Stripe"
                                label="Stripe"
                                value="Stripe"
                                checked={paymentMethodName === "Stripe"}
                                onChange={(e) =>
                                  setPaymentMethod(e.target.value)
                                }
                              />
                            </div>
                            <div className="mb-3">
                              <button className="boxed-btn" type="submit">Place Order</button>
                            </div>
                          </Form>
                        </div>
                      </div>
                    </div>
                  </div>
              {/* <div className="order-details-wrap">
                <table className="order-details">
                  <thead>
                    <tr>
                      <th>Your order Details</th>
                      <th>Price</th>
                    </tr>
                  </thead>
                  <tbody className="order-details-body">
                    <tr>
                      <td>Product</td>
                      <td>Total</td>
                    </tr>
                    <tr>
                      <td>Strawberry</td>
                      <td>$85.00</td>
                    </tr>
                    <tr>
                      <td>Berry</td>
                      <td>$70.00</td>
                    </tr>
                    <tr>
                      <td>Lemon</td>
                      <td>$35.00</td>
                    </tr>
                  </tbody>
                  <tbody className="checkout-details">
                    <tr>
                      <td>Subtotal</td>
                      <td>$190</td>
                    </tr>
                    <tr>
                      <td>Shipping</td>
                      <td>$50</td>
                    </tr>
                    <tr>
                      <td>Total</td>
                      <td>$240</td>
                    </tr>
                  </tbody>
                </table>
                {"  "}
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
