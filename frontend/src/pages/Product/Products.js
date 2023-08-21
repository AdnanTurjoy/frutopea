import React, { useContext, useEffect, useReducer, useState } from "react";

import axios from "axios";
import "./Product.css";
import { Button, Spinner } from "react-bootstrap";

import Product from "../../components/Products/Product";
import { toast } from "react-toastify";
import { getError } from "../../utils";
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

const Products = () => {
  const [categories, setCategories] = useState([]);
  const [totalProducts, setTotalProducts] = useState([]);
  const [searchedName, setSearchedName] = useState("");
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
        setTotalProducts(result.data);
        dispatch({ type: "FETCH_SUCCESS", payload: result.data });
      } catch (error) {
        dispatch({ type: "FETCH_FAIL", payload: error.message });
      }
    };
    const fetchCategories = async () => {
      try {
        const { data } = await axios.get(
          `${BackendServerUrl}/api/products/categories`
        );
        setCategories(data);
      } catch (err) {
        toast.error(getError(err));
      }
    };

    window.scrollTo(0, 0);

    fetchCategories();
    fetchData();
  }, []);
  const handleCategory = (category) => {
    setTotalProducts(
      products.filter((product) => product.category === category)
    );
  };

  useEffect(() => {
    let value = searchedName.toLowerCase();
    const SearchedProductText = products.filter((product) => {
      const productValue = product.name.toLowerCase();
      return productValue.includes(value);
    });
    setTotalProducts(SearchedProductText);
  }, [searchedName]);

  return (
    <div>
      <div className="product-section  mb-150">
        <div className="section-title pt-5 m-0" style={{ textAlign: "center" }}>
          <h3>Products</h3>
        </div>

        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="product-filters m-0">
                <ul>
                  <li
                    className="active"
                    data-filter="*"
                    onClick={() => setTotalProducts(products)}
                  >
                    All
                  </li>
                  {categories?.map((category) => {
                    return (
                      <li onClick={() => handleCategory(category)}>
                        {category}
                      </li>
                    );
                  })}
                  <p className="mb-4">
                    {" "}
                    <input
                      className="search-input"
                      type="text"
                      placeholder="search"
                      name="name"
                      value={searchedName}
                      onChange={(e) => setSearchedName(e.target.value)}
                    />{" "}
                  </p>
                </ul>
              </div>
            </div>
          </div>

          <div className="row product-lists">
            <div style={{ textAlign: "center" }}>
              {loading && <Spinner animation="border" />}
            </div>

            {totalProducts &&
              totalProducts.map((product) => {
                return <Product product={product} />;
              })}
          </div>

          {/* <div className="row">
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
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Products;
