import React from "react";

const ProjectCard = ({ image, name, detail }) => {
  return (
    <div className="group bg-white rounded-xl border border-gray-300 shadow-md cursor-pointer overflow-hidden">
      <div className="relative overflow-hidden h-full">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-contain rounded-t-md"
        />
        <div className="project-card-info flex flex-col items-center justify-center gap-4 p-6 text-center absolute inset-0 transition-all duration-300 transform translate-y-full group-hover:translate-y-0">
          <h3 className="text-xl font-semibold text-center z-10">{name}</h3>
          <p className="text-sm sm:text-base">{detail}</p>
          <button className="bg-white text-black p-2 sm:p-3 rounded-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-4 h-4 sm:w-6 sm:h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
