import React from "react";
import ServiceCard from "../ServiceCard";

const Services = () => {
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
  ];

  return (
    <div className="bg-[#17173A]">
      <div className="main bg-[#17173A] text-white px-5 py-16 mx-auto">
        <h2 className="text-[40px] font-bold mb-1 text-center">
          Our <span className="text-[#01EEFF]">Services</span>
        </h2>
        <div className="flex gap-8 pt-16 mb-10">
          {serviceData?.map((item, index) => {
            return (
              <ServiceCard
                key={index}
                img={item?.img}
                title={item?.title}
                detail={item?.detail}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Services;
