import React from "react";

const SkillCard = ({ img, detail }) => {
  return (
    <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 items-center relative bg-[#30304f] rounded-lg p-6 lg:pt-16 w-full lg:w-[350px] text-center">
      <div className="static lg:absolute bottom-32 inset-x-0 rounded-full">
        <div className=" p-1 bg-[#17173A] w-20 md:w-full lg:w-fit mx-auto rounded-full">
          <img src={img} alt="" className="w-full h-full" />
        </div>
      </div>
      <p className="text-sm">
        Word preserves the original formatting when you paste content into a
        document using Ctrl+V. Word preserves the original formatting when you
        paste content into
      </p>
    </div>
  );
};

export default SkillCard;
