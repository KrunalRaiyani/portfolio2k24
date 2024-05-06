"use client";
import React from "react";
import TabSection from "../TabSection";

const Project = () => {
  return (
    <div className="bg-[#272766]">
      <div className="main bg-[#272766] text-white px-5 py-16 mx-auto">
        <h2 className="text-[40px] font-bold mb-1 text-center">
          Our <span className="text-[#01EEFF]">Projects</span>
        </h2>
        <TabSection />
        <div className="w-full mt-14 flex justify-center items-center">
          <button className="bg-[#01EEFF] w-fit rounded-md p-3 px-6 hover:shadow-[0px_0px_10px_0px_#01EEFF] transition ease-in-out duration-[0.2s]">
            See More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Project;
