import React from "react";

const AboutMe = () => {
  return (
    <div className="bg-[#272766]">
      <div className="main bg-[#272766] text-white px-5 py-10 mx-auto flex flex-col lg:flex-row items-center">
        <div className="flex items-center justify-center lg:w-1/2 w-full mb-6 lg:mb-0 rounded-lg overflow-hidden">
          <div className="relative">
            <img
              alt="feature"
              className="relative z-10 max-w-[89%] mx-auto"
              src="/images/about.png"
            />
            <img
              alt="feature"
              className="bg-circle absolute md:left-6 top-20 left-4 filter drop-shadow-custom max-w-[85%]"
              src="/images/bg-circle.png"
            />
          </div>
        </div>
        <div className="flex flex-col lg:w-1/2 w-full gap-5 md:gap-8 lg:pr-6">
          <div className="text-center md:text-start ">
            <h2 className="text-[40px] lg:text-4xl font-bold mb-1">
              About <span className="text-[#01EEFF]">Me</span>
            </h2>
            <p className="text-2xl lg:text-3xl font-bold">UI/UX Developer</p>
          </div>
          <p className="text-md lg:text-xl text-center md:text-start">
            Word preserves the original formatting when you paste content into a
            document using Ctrl+V. Word preserves the original formatting when
            you paste content into. Word preserves the original formatting when
            you paste content into a document using Ctrl+V. Word preserves the
            original formatting when you paste content into.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 mt-4 md:mt-0 gap-5 md:gap-8 w-full xl:w-[80%]">
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
          <button className="bg-[#01EEFF] w-full md:w-fit rounded-md p-3 px-6 hover:shadow-[0px_0px_10px_0px_#01EEFF] transition ease-in-out duration-[0.2s]">
            See More
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
