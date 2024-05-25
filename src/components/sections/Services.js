"use client";
import React from "react";
import ServiceCard from "../ServiceCard";
import ServiceSlider from "../ServiceSlider";

const Services = () => {
  return (
    <div className="bg-[#17173A]">
      <div className="main bg-[#17173A] text-white px-5 py-10 md:py-16 pb-14 mx-auto">
        <h2 className="text-[28px] md:text-[40px] font-bold mb-1 text-center">
          Our <span className="text-[#01EEFF]">Services</span>
        </h2>
        {/* <div className="flex gap-8 pt-16 mb-10"> */}
        <ServiceSlider />
        {/* </div> */}
      </div>
    </div>
  );
};

export default Services;
