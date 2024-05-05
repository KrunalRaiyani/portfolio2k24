import React from "react";

const SkillCard = ({ img, detail }) => {
  return (
    <div className="relative bg-[#30304f] rounded-lg p-6 pt-16 w-[350px] text-center">
      <div className="absolute bottom-32 inset-x-0 rounded-full">
        <div className=" p-1 bg-[#17173A] w-fit mx-auto rounded-full">
          <img src={img} alt="" />
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
