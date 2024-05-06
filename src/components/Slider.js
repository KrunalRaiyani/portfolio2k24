"use client";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper/modules";

const Slider = () => {
  return (
    <div>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        {/* <div className="flex items-center justify-between flex-1 gap-20">
          <div className="flex flex-col gap-10">
            <div className="flex flex-col gap-1">
              <p className="text-[28px] font-semibold">Hello It’s Me</p>
              <h1 className="text-[52px] font-bold">Jenish Lodaliya</h1>
              <div>
                <p className="text-[28px] font-semibold">
                  And I’ m a Ui/Ux designer
                </p>
              </div>
              <p className="mt-3">
                Word preserves the original formatting when you paste content
                into a document using Ctrl+V.
              </p>
            </div>
            <div className="flex items-center gap-2">
              <button className="border-2 border-transparent p-2 hover:border-[#01EEFF] transition ease-in-out duration-[0.5s] rounded-full">
                <img src="/images/x.svg" alt="twitter" />
              </button>
              <button className="border-2 border-transparent p-2 hover:border-[#01EEFF] transition ease-in-out duration-[0.5s] rounded-full">
                <img src="/images/fb.svg" alt="facebook" />
              </button>
              <button className="border-2 border-transparent p-2 hover:border-[#01EEFF] transition ease-in-out duration-[0.5s] rounded-full">
                <img src="/images/instagram.svg" alt="instagram" />
              </button>
            </div>
            <button className="bg-[#01EEFF] w-fit rounded-md p-2 px-6 hover:shadow-[0px_0px_10px_0px_#01EEFF] transition ease-in-out duration-[0.2s]">
              Downloads CV
            </button>
          </div>
        </div> */}
        <SwiperSlide>
          <img src="/images/bg1.png" className="w-full h-full" alt="image" />{" "}
        </SwiperSlide>
        <SwiperSlide>
          <img src="/images/bg2.png" className="w-full h-full" alt="image" />{" "}
        </SwiperSlide>
        <SwiperSlide>
          <img src="/images/bg3.png" className="w-full h-full" alt="image" />{" "}
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slider;
