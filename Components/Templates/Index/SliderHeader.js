import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

export default function SliderHeader() {
  return (
    <>
      {/* <!-- Carousel Start --> */}
      <div className="container-fluid p-0 mb-5">
        <div
          id="blog-carousel"
          className="carousel slide overlay-bottom"
          data-ride="carousel"
        >
          <div className="carousel-inner">
            <Swiper
              slidesPerView={1}
              navigation={true}
              loop={true}
              autoplay={{ delay: 2500, disableOnInteraction: false }}
              modules={[Navigation, Autoplay]}
              className="mySwiper"
            >
              <SwiperSlide>
                <div className="carousel-item active">
                  <img
                    className="w-100"
                    src="/img/carousel-1.jpg"
                    alt="Image"
                  />
                  <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                    <h2 className="text-primary font-weight-medium m-0">
                      We Have Been Serving
                    </h2>
                    <h1 className="display-1 text-white m-0">COFFEE</h1>
                    <h2 className="text-white m-0">* SINCE 1950 *</h2>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="carousel-item active">
                  <img className="w-100" src="img/carousel-2.jpg" alt="Image" />
                  <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                    <h2 className="text-primary font-weight-medium m-0">
                      We Have Been Serving
                    </h2>
                    <h1 className="display-1 text-white m-0">COFFEE</h1>
                    <h2 className="text-white m-0">* SINCE 1950 *</h2>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
      {/* <!-- Carousel End --> */}
    </>
  );
}
