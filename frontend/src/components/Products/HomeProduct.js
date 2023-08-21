import React, { useContext, useEffect, useReducer, useState } from "react";
import axios from "axios";

import Product from "./Product";
import { BackendServerUrl } from "../../Constant";

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

const HomeProduct = () => {
  const [{ loading, error, products }, dispatch] = useReducer(reducer, {
    products: [],
    loading: true,
    error: "",
  });
  useEffect(() => {
    const fetchData = async () => {
      dispatch({ type: "FETCH_REQUEST" });
      try {
        const result = await axios.get(
          `${BackendServerUrl}/api/products`
        );

        dispatch({ type: "FETCH_SUCCESS", payload: result.data });
      } catch (error) {
        dispatch({ type: "FETCH_FAIL", payload: error.message });
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <div className="product-section  mb-150">
        <div className="section-title pt-5 mb-4" style={{ textAlign: "center" }}>
          <h3>Products</h3>
        </div>

        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="row product-lists">
                {products &&
                  products.map((product) => {
                    return <Product product={product} />;
                  })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeProduct;
