import React from "react";

const ServiceCard = ({ img, title, detail, link }) => {
  return (
    <div className="w-full text-center flex flex-col gap-5 items-center bg-[#323846] border-2 border-transparent rounded-xl p-8 hover:border-[#01EEFF]">
      <img src={img} alt="" className="mb-2" />
      <h2 className="text-[23px] font-semibold">{title}</h2>
      <p className="mb-2">{detail}</p>
      <button className="bg-[#01EEFF] w-fit rounded-md p-2 px-6 hover:shadow-[0px_0px_10px_0px_#01EEFF] transition ease-in-out duration-[0.2s]">
        Read More
      </button>
    </div>
  );
};

export default ServiceCard;
