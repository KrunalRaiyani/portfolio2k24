"use client";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Navigation } from "swiper/modules";

const Slider = () => {
  return (
    <div>
      <Swiper
        // navigation={true}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, Navigation]}
        className="hero-swiper bg-[#272766]"
      >
        <SwiperSlide>
          <img
            src="/images/bg1.png"
            className="w-full max-h-screen object-cover h-full"
            alt="image"
          />{" "}
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="/images/bg2.png"
            className="w-full max-h-screen object-cover h-full"
            alt="image"
          />{" "}
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="/images/bg3.png"
            className="w-full max-h-screen object-cover h-full"
            alt="image"
          />{" "}
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slider;
