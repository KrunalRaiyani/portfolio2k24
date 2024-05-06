import React from "react";
import SkillCard from "../SkillCard";

const Skill = () => {
  return (
    <div className="bg-[#17173A]">
      <div className="main bg-[#17173A] text-white px-5 py-16 mx-auto">
        <h2 className="text-[40px] font-bold mb-1 text-center">
          My Softwere <span className="text-[#01EEFF]">Skills</span>
        </h2>

        <div className="flex flex-col gap-12 mt-24">
          <div className="flex items-center justify-center">
            <SkillCard img={"/images/skillFigma.svg"} />
          </div>
          <div className="flex items-center justify-center gap-20">
            <div>
              <SkillCard img={"/images/skillXd.svg"} />
            </div>
            <div>
              <img src="/images/skill-charactor.png" className="h-fit" alt="" />
            </div>
            <div>
              {" "}
              <SkillCard img={"/images/skillPs.svg"} />
            </div>
          </div>
        </div>

        {/* <div className="grid grid-cols-3 grid-rows-2">
        <div className="col-span-3 self-center justify-self-center h-fit">
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
      </div> */}
      </div>
    </div>
  );
};

export default Skill;
