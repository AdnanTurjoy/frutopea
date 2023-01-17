import React, { useEffect } from "react";
import Banner from "../components/Banner/Banner";
import BestMonth from "../components/BestMonth";
import ClientCarosol from "../components/ClientCarosol/ClientCarosol";

import LatestNews from "../components/LatestNews";
import HomeProduct from "../components/Products/HomeProduct";

import Section from "../components/Section";
import Testimoni from "../components/Testimoni";

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
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
