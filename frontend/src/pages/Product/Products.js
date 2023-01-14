import React, { useContext, useEffect, useReducer } from "react";
import productImg1 from "../../assets/img/products/product-img-5.jpg";
import productImg2 from "../../assets/img/products/product-img-4.jpg";
import axios from "axios";

import { Button } from "react-bootstrap";
import Data from "../../data";
import Product from "../../components/Products/Product";
const reducer = (state, action) => {
  switch (action.type) {
    case "FETCH_REQUEST":
      return {
        ...state,
        loading: true,
      };
    case "FETCH_SUCCESS":
      return {
        ...state,
        products: action.payload,
        loading: false,
      };
    case "FETCH_FAIL":
      return {
        ...state,
        loading: false,

        error: action.payload,
      };
    default:
      return state;
  }
};

const Products = () => {
  const [{ loading, error, products }, dispatch] = useReducer(reducer, {
    products: [],
    loading: true,
    error: "",
  });
  useEffect(() => {
    const fetchData = async () => {
      dispatch({ type: "FETCH_REQUEST" });
      try {
        const result = await axios.get("/api/products");
        dispatch({ type: "FETCH_SUCCESS", payload: result.data });
      } catch (error) {
        dispatch({ type: "FETCH_FAIL", payload: error.message });
      }
    };
    fetchData();
  }, []);

  console.log(products);
  return (
    <div>
      {loading ? (
        "loading..."
      ) : (
        <div className="product-section mt-150 mb-150">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="product-filters">
                  <ul>
                    <li className="active" data-filter="*">
                      All
                    </li>
                    <li data-filter=".strawberry">Strawberry</li>
                    <li data-filter=".berry">Berry</li>
                    <li data-filter=".lemon">Lemon</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="row product-lists">
              {products &&
                products.map((product) => {
                  return <Product product={product} />;
                })}
            </div>

            <div className="row">
              <div className="col-lg-12 text-center">
                <div className="pagination-wrap">
                  <ul>
                    <li>
                      <a href="#">Prev</a>
                    </li>
                    <li>
                      <a href="#">1</a>
                    </li>
                    <li>
                      <a className="active" href="#">
                        2
                      </a>
                    </li>
                    <li>
                      <a href="#">3</a>
                    </li>
                    <li>
                      <a href="#">Next</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Products;
