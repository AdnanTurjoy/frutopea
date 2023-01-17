import React from "react";
import slide1 from "../../assets/img/slide1.jpg";
import slide2 from "../../assets/img/slide2.jpg";
import slide3 from "../../assets/img/slide3.jpg";
import { Carousel } from "react-bootstrap";
import "./Banner.css";
import { useNavigate } from "react-router-dom";
const Banner = () => {
  const navigate = useNavigate();
  return (
    <div className="banner">
      <Carousel fade>
        <Carousel.Item>
          <img className="d-block w-100" src={slide1} alt="First slide" />
          <Carousel.Caption>
            <h3 className="sliderTitle">fast and testy</h3>
            <p className="sliderDescription">
              Fruit is such a fundamental word that underpins not only who we{" "}
              <br /> are as people, but echoes through all cultures.
            </p>
            <button
              type="button"
              onClick={() => navigate("/product/Strwaberry2-slug")}
              className="sliderButton"
            >
              Shop Now
            </button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={slide2} alt="Second slide" />
          <Carousel.Caption>
            <h3 className="sliderTitle">organic testy</h3>
            <p className="sliderDescription">
              Fruit is such a fundamental word that underpins not only who we{" "}
              <br /> are as people, but echoes through all cultures.
            </p>
            <button
              type="button"
              onClick={() => navigate("/product/deshi-cherry-slug")}
              className="sliderButton"
            >
              Shop Now
            </button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={slide3} alt="Third slide" />
          <Carousel.Caption>
            <h3 className="sliderTitle">sale up 50%</h3>
            <p className="sliderDescription">
              Fruit is such a fundamental word that underpins not only who we{" "}
              <br /> are as people, but echoes through all cultures.
            </p>
            <button
              type="button"
              onClick={() => navigate("/product/watermelon-slug")}
              className="sliderButton"
            >
              Shop Now
            </button>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Banner;
