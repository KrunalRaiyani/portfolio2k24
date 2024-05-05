import React from "react";

const AboutMe = () => {
  return (
    <div className="main mt-9 h-screen bg-[#272766] text-white px-5 py-10 mx-auto flex items-center">
      <div className="relative flex items-center justify-center lg:w-1/2 w-full mb-10 lg:mb-0 rounded-lg overflow-hidden">
        <img alt="feature" className="z-10" src="/images/about.png" />
        <img
          alt="feature"
          className="bg-circle absolute left-28 filter drop-shadow-custom"
          src="/images/bg-circle.png"
        />
      </div>
      <div className="flex flex-col w-1/2 gap-8 pr-6">
        <div>
          <h2 className="text-[40px] font-bold mb-1">
            About <span className="text-[#01EEFF]">Me</span>
          </h2>
          <p className="text-2xl font-bold">UI/UX Developer</p>
        </div>
        <p className="text-lg">
          Word preserves the original formatting when you paste content into a
          document using Ctrl+V. Word preserves the original formatting when you
          paste content into. Word preserves the original formatting when you
          paste content into a document using Ctrl+V. Word preserves the
          original formatting when you paste content into.
        </p>
        <div className="grid grid-cols-2 grid-rows-2 gap-8 w-[80%]">
          <div className="about-detail-box text-black bg-white rounded-lg px-6 py-4">
            <p className="font-semibold">Name</p>
            <p>Lodaliya Jenish</p>
          </div>
          <div className="about-detail-box text-black bg-white rounded-lg px-6 py-4">
            <p className="font-semibold">Email</p>
            <p>jklodaliya@gmail.com</p>
          </div>
          <div className="about-detail-box text-black bg-white rounded-lg px-6 py-4">
            <p className="font-semibold">Address</p>
            <p>Surat, Gujarat</p>
          </div>
          <div className="about-detail-box text-black bg-white rounded-lg px-6 py-4">
            <p className="font-semibold">Mobile No.</p>
            <p>9664781007</p>
          </div>
        </div>
        <button className="bg-[#01EEFF] w-fit rounded-md p-3 px-6 hover:shadow-[0px_0px_10px_0px_#01EEFF] transition ease-in-out duration-[0.2s]">
          See More
        </button>
      </div>
    </div>
  );
};

export default AboutMe;
