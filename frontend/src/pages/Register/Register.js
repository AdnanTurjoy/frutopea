import React, { useContext, useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "./Register.css";
import { getError } from "../../utils";
import { Store } from "../../Store/Store";
import axios from "axios";
const Register = () => {
  const navigate = useNavigate();
  const { search } = useLocation();
  const redirectInUrl = new URLSearchParams(search).get("redirect");
  const redirect = redirectInUrl ? redirectInUrl : "/";

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const { state, dispatch: ctxDispatch } = useContext(Store);
  const { userInfo } = state;
  const submitHandler = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }
    try {
      const { data } = await axios.post(
        `${process.env.REACT_APP_API_URL}/api/users/signup`,
        {
          name,
          email,
          password,
        }
      );
      ctxDispatch({ type: "USER_SIGNIN", payload: data });
      localStorage.setItem("userInfo", JSON.stringify(data));
      navigate(redirect || "/");
    } catch (err) {
      toast.error(getError(err));
    }
  };

  useEffect(() => {
    if (userInfo) {
      navigate(redirect);
    }
  }, [navigate, redirect, userInfo]);
  return (
    <div className="Auth-form-container">
      <form className="Auth-form" onSubmit={submitHandler}>
        <div className="Auth-form-content">
          <div class="section-title Auth-form-title">
            <h3>
              <span class="orange-text">Your</span> Register
            </h3>
          </div>
          <div className="form-group mt-3">
            <label>Name</label>
            <input
              onChange={(e) => setName(e.target.value)}
              required
              type="text"
              className="form-control mt-1"
              placeholder="Enter name"
            />
          </div>
          <div className="form-group mt-3">
            <label>Email address</label>
            <input
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              className="form-control mt-1"
              placeholder="Enter email"
            />
          </div>
          <div className="form-group mt-3">
            <label>Password</label>
            <input
              onChange={(e) => setPassword(e.target.value)}
              required
              type="password"
              className="form-control mt-1"
              placeholder="Enter password"
            />
          </div>
          <div className="form-group mt-3">
            <label>Confirm Password</label>
            <input
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
              type="password"
              className="form-control mt-1"
              placeholder="Enter password again"
            />
          </div>
          <div className="d-grid gap-2 mt-3">
            <button
              type="submit"
              className="btn btn-primary"
              style={{ backgroundColor: "#F28123", border: "none" }}
            >
              Submit
            </button>
          </div>
          <p className="forgot-password text-right mt-2">
            have a account already <Link to={"/login"}>sign in?</Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Register;
