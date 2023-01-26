import axios from "axios";
import React, { useContext, useEffect, useReducer } from "react";
import CountUp from "react-countup";
import { useNavigate } from "react-router-dom";
import deal from "../assets/img/deal.jpg";
import { Store } from "../Store/Store";
import { getError } from "../utils";
const reducer = (state, action) => {
  switch (action.type) {
    case "FETCH_REQUEST":
      return { ...state, loading: true };
    case "FETCH_SUCCESS":
      return { ...state, product: action.payload, loading: false };
    case "FETCH_FAIL":
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};
const BestMonth = () => {
  const slug = "Strwaberry2-slug"; // Demo, Next time parfectly used for real time purposesssss...
  const navigate = useNavigate();
  const [{ loading, error, product, loadingCreateReview }, dispatch] =
    useReducer(reducer, {
      product: [],
      loading: true,
      error: "",
    });
  useEffect(() => {
    const fetchData = async () => {
      dispatch({ type: "FETCH_REQUEST" });
      try {
        const result = await axios.get(
          `${process.env.REACT_APP_API_URL}/api/products/slug/${slug}`
        );
        dispatch({ type: "FETCH_SUCCESS", payload: result.data });
      } catch (err) {
        dispatch({ type: "FETCH_FAIL", payload: getError(err) });
      }
    };
    fetchData();
  }, [slug]);
  const { state, dispatch: ctxDispatch } = useContext(Store);
  const { cart, userInfo } = state;
  const addToCartHandler = async () => {
    const existItem = cart.cartItems.find((x) => x._id === product._id);
    const quantity = existItem ? existItem.quantity + 1 : 1;
    const { data } = await axios.get(
      `${process.env.REACT_APP_API_URL}/api/products/${product._id}`
    );
    if (data.countInStock < quantity) {
      window.alert("Sorry. Product is out of stock");
      return;
    }
    ctxDispatch({
      type: "CART_ADD_ITEM",
      payload: { ...product, quantity },
    });
    navigate("/cart");
  };

  return (
    <div>
      <section class="cart-banner pb-100 " style={{ marginTop: "0px" }}>
        <div class="container">
          <div class="row clearfix">
            <div class="image-column col-lg-6">
              <div class="image">
                <div class="price-box">
                  <div class="inner-price">
                    <span class="price">
                      <strong>30%</strong> <br /> off per kg
                    </span>
                  </div>
                </div>
                <img src={deal} alt="" width={450} height={420} />
              </div>
            </div>

            <div class="content-column col-lg-6">
              <h3>
                <span class="orange-text">Deal</span> of the month
              </h3>
              <h4>Hikan Strwaberry</h4>
              <div class="text">
                Quisquam minus maiores repudiandae nobis, minima saepe id, fugit
                ullam similique! Beatae, minima quisquam molestias facere ea.
                Perspiciatis unde omnis iste natus error sit voluptatem accusant
              </div>

              <div class="time-counter">
                <div class="time-countdown clearfix" data-countdown="2020/2/01">
                  <div class="counter-column">
                    <div class="inner">
                      <span class="count">
                        <CountUp start={0} end={20} duration={3} />
                      </span>
                      Days
                    </div>
                  </div>{" "}
                  <div class="counter-column">
                    <div class="inner">
                      <span class="count">
                        {" "}
                        <CountUp start={0} end={14} duration={3} />
                      </span>
                      Hours
                    </div>
                  </div>{" "}
                  <div class="counter-column">
                    <div class="inner">
                      <span class="count">
                        {" "}
                        <CountUp start={0} end={80} duration={3} />
                      </span>
                      Mins
                    </div>
                  </div>{" "}
                  <div class="counter-column">
                    <div class="inner">
                      <span class="count">
                        {" "}
                        <CountUp start={0} end={420} duration={4} />
                      </span>
                      Secs
                    </div>
                  </div>
                </div>
              </div>
              <button
                class="cart-btn mt-3"
                className="cart-btn"
                onClick={addToCartHandler}
              >
                <i class="fas fa-shopping-cart"></i> Add to Cart
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BestMonth;
