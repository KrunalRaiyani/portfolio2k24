import React from "react";
import SkillCard from "../SkillCard";

const Skill = () => {
  return (
    <div className="bg-[#17173A]">
      <div className="main bg-[#17173A] text-white px-5 py-16 mx-auto">
        <h2 className="text-[28px] md:text-[40px] font-bold mb-1 text-center">
          My Software <span className="text-[#01EEFF]">Skills</span>
        </h2>
        <div className="flex flex-col gap-8 md:gap-14 lg:gap-28 xl:gap-12 mt-12 md:mt-24">
          <div className="flex items-center justify-center">
            <SkillCard img={"/images/skillFigma.svg"} />
          </div>
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 lg:gap-8 xl:gap-20">
            <div>
              <SkillCard img={"/images/skillXd.svg"} />
            </div>
            <div className="">
              <img
                src="/images/skill-charactor.png"
                className="h-auto md:h-fit hidden xl:block"
                alt=""
              />
            </div>
            <div>
              <SkillCard img={"/images/skillPs.svg"} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skill;
