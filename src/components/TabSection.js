import { motion } from "framer-motion";
import { useState } from "react";
import ProjectCard from "./ProjectCard";
import { tabData } from "../../data";

const TabSection = () => {
  let [activeTab, setActiveTab] = useState(0);
  console.log(activeTab);

  console.log(tabData?.[activeTab]?.project);

  return (
    <div>
      <div className="hidden md:flex space-x-1 bg-white rounded-full p-1.5 lg:max-w-[62%] xl:max-w-[55%] my-10 mx-auto">
        {tabData?.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={` relative rounded-full w-full p-4 text-sm font-semibold text-black outline-sky-400 transition focus-visible:outline-2`}
            style={{
              WebkitTapHighlightColor: "transparent",
            }}>
            {activeTab === tab.id && (
              <motion.span
                layoutId="bubble"
                className="absolute inset-0 z-10 bg-white mix-blend-difference"
                style={{ borderRadius: 9999 }}
                transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
              />
            )}
            {tab.label}
          </button>
        ))}
      </div>
      <div className="md:hidden text-black mt-10 w-full">
        <select className="w-full p-2 px-4 rounded-lg">
          {tabData?.map((tab) => (
            <option value={tab?.id} key={tab?.id}>
              {tab?.label}
            </option>
          ))}
        </select>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 grid-rows-2 gap-6 mt-12 xl:mx-20">
        {tabData?.[activeTab]?.project?.map((project) => (
          <ProjectCard
            key={project.id}
            image={project.image}
            name={project.name}
            detail={project.detail}
          />
        ))}
      </div>
    </div>
  );
};
export default TabSection;
