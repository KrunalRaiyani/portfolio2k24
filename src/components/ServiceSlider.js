import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "swiper/swiper-bundle.css";

// import required modules
import { FreeMode, Pagination } from "swiper/modules";
import ServiceCard from "./ServiceCard";

let serviceData = [
  {
    title: "Branding Banner",
    detail:
      "Word preserves the original formatting when you paste content into a document using Ctrl+V. Word preserves the original formatting when you paste content into",
    img: "/images/paint.svg",
  },
  {
    title: "Branding Banner",
    detail:
      "Word preserves the original formatting when you paste content into a document using Ctrl+V. Word preserves the original formatting when you paste content into",
    img: "/images/paint.svg",
  },
  {
    title: "Branding Banner",
    detail:
      "Word preserves the original formatting when you paste content into a document using Ctrl+V. Word preserves the original formatting when you paste content into",
    img: "/images/paint.svg",
  },
  {
    title: "Branding Banner",
    detail:
      "Word preserves the original formatting when you paste content into a document using Ctrl+V. Word preserves the original formatting when you paste content into",
    img: "/images/paint.svg",
  },
  {
    title: "Branding Banner",
    detail:
      "Word preserves the original formatting when you paste content into a document using Ctrl+V. Word preserves the original formatting when you paste content into",
    img: "/images/paint.svg",
  },
  {
    title: "Branding Banner",
    detail:
      "Word preserves the original formatting when you paste content into a document using Ctrl+V. Word preserves the original formatting when you paste content into",
    img: "/images/paint.svg",
  },
  {
    title: "Branding Banner",
    detail:
      "Word preserves the original formatting when you paste content into a document using Ctrl+V. Word preserves the original formatting when you paste content into",
    img: "/images/paint.svg",
  },
  {
    title: "Branding Banner",
    detail:
      "Word preserves the original formatting when you paste content into a document using Ctrl+V. Word preserves the original formatting when you paste content into",
    img: "/images/paint.svg",
  },
  {
    title: "Branding Banner",
    detail:
      "Word preserves the original formatting when you paste content into a document using Ctrl+V. Word preserves the original formatting when you paste content into",
    img: "/images/paint.svg",
  },
  {
    title: "Branding Banner",
    detail:
      "Word preserves the original formatting when you paste content into a document using Ctrl+V. Word preserves the original formatting when you paste content into",
    img: "/images/paint.svg",
  },
  {
    title: "Branding Banner",
    detail:
      "Word preserves the original formatting when you paste content into a document using Ctrl+V. Word preserves the original formatting when you paste content into",
    img: "/images/paint.svg",
  },
  {
    title: "Branding Banner",
    detail:
      "Word preserves the original formatting when you paste content into a document using Ctrl+V. Word preserves the original formatting when you paste content into",
    img: "/images/paint.svg",
  },
  {
    title: "Branding Banner",
    detail:
      "Word preserves the original formatting when you paste content into a document using Ctrl+V. Word preserves the original formatting when you paste content into",
    img: "/images/paint.svg",
  },
];

export default function ServiceSlider() {
  return (
    <>
      <Swiper
        // slidesPerView={8}
        spaceBetween={30}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        // centeredSlides={true}
        // centeredSlidesBounds={true}
        breakpoints={{
          320: {
            slidesPerView: 1,
          },
          640: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
          1536: {
            slidesPerView: 4,
          },
          1920: {
            slidesPerView: "6",
          },
        }}
        modules={[FreeMode, Pagination]}
        className="service-slider mt-12 !lg:pt-16 !pb-20"
      >
        {serviceData?.map((item, index) => {
          return (
            <SwiperSlide className="xl:min-w-[320px]" key={index}>
              <ServiceCard
                key={index}
                img={item?.img}
                title={item?.title}
                detail={item?.detail}
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
}
