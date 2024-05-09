import React from "react";

const NavBar = () => {
  return (
    <div className="absolute top-0 z-20 w-full px-24 text-white flex items-center justify-between gap-4 pt-14">
      <div className="text-xl font-bold cursor-pointer">Portfolio</div>
      <div className="flex items-center gap-12 text-xl">
        <div className="cursor-pointer nav-link relative">Home</div>
        <div className="cursor-pointer nav-link relative">About</div>
        <div className="cursor-pointer nav-link relative">Service</div>
        <div className="cursor-pointer nav-link relative">Project</div>
        <div className="cursor-pointer nav-link relative">Contact</div>
      </div>
    </div>
  );
};

export default NavBar;
