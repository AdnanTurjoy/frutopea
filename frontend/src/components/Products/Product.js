import React, { useContext } from "react";

import { Store } from "../../Store/Store";
import axios from "axios";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
const Product = ({ product }) => {
  const { state, dispatch: ctxDispatch } = useContext(Store);
  
  const { cart } = state;
  const addToCartHandler = async (item) => {
    const existItem = cart.cartItems.find((x) => x._id === product._id);
    const quantity = existItem ? existItem.quantity + 1 : 1;
    // API CALL `/api/products/${product._id}`

    const { data } = await axios.get(
      `${process.env.REACT_APP_API_URL}/api/products/${item._id}`
    );
    console.log(data);
    if (data.countInStock < quantity) {
      toast.error("sorry, product is out of stock");
      return;
    }
    ctxDispatch({
      type: "CART_ADD_ITEM",
      payload: {
        ...product,
        quantity,
      },
    });
  };
  return (
    <div className="col-lg-4 col-md-6 text-center strawberry">
      <div className="single-product-item">
        <div className="product-image">
          <Link to={`/product/${product?.slug}`}>
            <img src={product.image} alt={product.name} />
          </Link>
        </div>
        <h3>{product?.name}</h3>
        <p className="product-price">
          <span>Per Kg</span> {product?.price}${" "}
        </p>
        {/* <a href="cart.html" className="cart-btn"><i className="fas fa-shopping-cart"></i> Add to Cart</a> */}
        <button onClick={() => addToCartHandler(product)} className="cart-btn">
          <i className="fas fa-shopping-cart"></i> Add to Cart
        </button>
      </div>
    </div>
  );
};

export default Product;
