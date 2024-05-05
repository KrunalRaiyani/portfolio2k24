import React from "react";
import SkillCard from "../SkillCard";

const Skill = () => {
  return (
    <div className="main bg-[#17173A] text-white px-5 py-16 mx-auto">
      <h2 className="text-[40px] font-bold mb-1 text-center">
        My Softwere <span className="text-[#01EEFF]">Skills</span>
      </h2>

      <div className="grid grid-cols-3 grid-rows-2">
        <div className="col-span-3 self-center justify-self-center">
          <SkillCard img={"/images/skillFigma.svg"} />
        </div>
        <div className="row-start-2 self-center justify-self-center">
          <SkillCard img={"/images/skillXd.svg"} />
        </div>
        <div className="row-start-2 self-center justify-self-center">
          <img src="/images/skill-charactor.png" className="h-fit" alt="" />
        </div>
        <div className="row-start-2 self-center justify-self-center">
          <SkillCard img={"/images/skillPs.svg"} />
        </div>
      </div>
    </div>
  );
};

export default Skill;
