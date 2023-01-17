import React from "react";
import company1 from "../../assets/img/company-logos/1.png";
import company2 from "../../assets/img/company-logos/2.png";
import company3 from "../../assets/img/company-logos/3.png";
import company4 from "../../assets/img/company-logos/4.png";
import company5 from "../../assets/img/company-logos/5.png";
import "./ClientCarosol.css";
import { Pagination, A11y, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
const ClientCarosol = () => {
  return (
    <div className="logo-carousel-section">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <Swiper
              modules={[Pagination, A11y, Autoplay]}
              autoplay={{
                delay: 2000,
                disableOnInteraction: false,
              }}
              breakpoints={{
                // when window width is >= 640px
                470: {
                  slidesPerView: 2,
                  spaceBetween: 1,
                },
                // when window width is >= 640px
                640: {
                  slidesPerView: 3,
                  spaceBetween: 10,
                },
                // when window width is >= 768px
                768: {
                  slidesPerView: 4,
                  spaceBetween: 60,
                },
              }}
              pagination={{ clickable: true }}
            >
              <SwiperSlide>
                {" "}
                <img src={company1} alt="company name" />{" "}
              </SwiperSlide>
              <SwiperSlide>
                {" "}
                <img src={company2} alt="company name" />
              </SwiperSlide>
              <SwiperSlide>
                {" "}
                <img src={company3} alt="company name" />
              </SwiperSlide>
              <SwiperSlide>
                {" "}
                <img src={company4} alt="company name" />
              </SwiperSlide>
              <SwiperSlide>
                {" "}
                <img src={company5} alt="company name" />
              </SwiperSlide>
              <SwiperSlide>
                {" "}
                <img src={company2} alt="company name" />
              </SwiperSlide>
            </Swiper>
            {/* <div className="logo-carousel-inner">
						<div className="single-logo-item">
							<img src={company1} alt=""/>
						</div>
						<div className="single-logo-item">
							<img src={company1} alt=""/>
						</div>
						<div className="single-logo-item">
							<img src={company1} alt=""/>
						</div>
						<div className="single-logo-item">
							<img src={company1} alt=""/>
						</div>
						<div className="single-logo-item">
							<img src={company1} alt=""/>
						</div>
					</div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientCarosol;
