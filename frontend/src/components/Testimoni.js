import React from "react";
import avatar1 from "../assets/img/avaters/avatar1.png";
import { Pagination, A11y, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Container } from "react-bootstrap";
import "swiper/css";
import "swiper/css/pagination";
const Testimoni = () => {
  return (
    <div>
      <div className="testimonail-section mt-150 mb-150">
        <div className="container">
          <div className="row">
            <div class="row">
              <div class="col-lg-8 offset-lg-2 text-center">
                <div class="section-title">
                  <h3>
                    <span class="orange-text">Our</span> Testimonial
                  </h3>
                </div>
              </div>
            </div>
            <div className="col-lg-10 offset-lg-1 text-center">
              <Swiper
                className="testimonial-sliders"
                modules={[Pagination, A11y, Autoplay]}
                autoplay={{
                  delay: 2500,
                  disableOnInteraction: false,
                }}
                breakpoints={{
                  // when window width is >= 640px
                  640: {
                    slidesPerView: 1,
                    spaceBetween: 0,
                  },
                  // when window width is >= 768px
                  768: {
                    slidesPerView: 1,
                    spaceBetween: 40,
                  },
                }}
               
              >
                <SwiperSlide className="">
                  <div className="client-avater">
                    <img src={avatar1} alt="" />
                  </div>
                  <div className="client-meta">
                    <h3>
					Elon musk <span>Local shop owner</span>
                    </h3>
                    <p className="testimonial-body">
                      " Sed ut perspiciatis unde omnis iste natus error
                      veritatis et quasi architecto beatae vitae dict eaque ipsa
                      quae ab illo inventore Sed ut perspiciatis unde omnis iste
                      natus error sit voluptatem accusantium "
                    </p>
                    <div className="last-icon">
                      <i className="fas fa-quote-right"></i>
                    </div>
                  </div>
                </SwiperSlide>
				<SwiperSlide className="">
                  <div className="client-avater">
                    <img src={avatar1} alt="" />
                  </div>
                  <div className="client-meta">
                    <h3>
                      Bill Gates <span>Local shop owner</span>
                    </h3>
                    <p className="testimonial-body">
                      " Sed ut perspiciatis unde omnis iste natus error
                      veritatis et quasi architecto beatae vitae dict eaque ipsa
                      quae ab illo inventore Sed ut perspiciatis unde omnis iste
                      natus error sit voluptatem accusantium "
                    </p>
                    <div className="last-icon">
                      <i className="fas fa-quote-right"></i>
                    </div>
                  </div>
                </SwiperSlide>
                <div className="testimonial-paggination"></div>
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </div>
    
  );
};

export default Testimoni;
