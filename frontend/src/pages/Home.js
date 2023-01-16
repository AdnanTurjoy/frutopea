import React from "react";
import Banner from "../components/Banner/Banner";
import BestMonth from "../components/BestMonth";
import ClientCarosol from "../components/ClientCarosol/ClientCarosol";

import LatestNews from "../components/LatestNews";
import HomeProduct from "../components/Products/HomeProduct";

import Product from "../components/Products/Product";

import Section from "../components/Section";
import Testimoni from "../components/Testimoni";
import Products from "./Product/Products";
const Home = () => {
  return (
    <>
      {/* <Search/> */}

      <Banner />
      <Section />
      <HomeProduct />
      <BestMonth />
      <Testimoni />
      <LatestNews />
      <ClientCarosol />
    </>
  );
};

export default Home;
