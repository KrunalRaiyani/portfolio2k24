"use client";
import React from "react";
import NavBar from "../NavBar";
import Slider from "../Slider";
import TypingEffect from "../TypingEffect";

const HeroSection = () => {
  const downloadPDF = () => {
    const pdfUrl = "/resume/resume.pdf";

    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "Resume.pdf";

    document.body.appendChild(link);

    link.click();

    document.body.removeChild(link);
  };
  return (
    <div className="relative text-white mx-auto flex flex-col gap-8 z-10">
      <NavBar />
      <div>
        <div className="absolute z-20 flex flex-col items-center justify-center w-full xl:w-fit h-full top-0 left-0 xl:left-24">
          <div className="flex flex-col xl:flex-row gap-20">
            <div className="flex flex-col gap-6 text-center xl:text-left">
              <div className="flex flex-col gap-1">
                <p className="text-lg md:text-xl lg:text-2xl xl:text-3xl font-semibold">
                  Hello It’s Me
                </p>
                <h1 className="text-xl md:text-2xl lg:text-3xl xl:text-5xl font-bold">
                  Jenish Lodaliya
                </h1>
                <div className="text-base md:text-lg lg:text-xl xl:text-2xl font-semibold">
                  And I’m a &nbsp;
                  <span className="text-[#01EEFF]">
                    <TypingEffect />
                  </span>
                </div>
                <p className="mt-2 text-sm md:text-base lg:text-lg xl:text-xl max-w-[80%] mx-auto xl:mx-0">
                  Word preserves the original formatting when you paste content
                  into a document using Ctrl+V.
                </p>
              </div>
              <div className="flex justify-center xl:justify-start items-center gap-2">
                <button className="border-2 border-transparent p-2 hover:border-[#01EEFF] transition ease-in-out duration-[0.5s] rounded-full">
                  <img src="/images/x.svg" alt="twitter" />
                </button>
                <button className="border-2 border-transparent p-2 hover:border-[#01EEFF] transition ease-in-out duration-[0.5s] rounded-full">
                  <img src="/images/fb.svg" alt="facebook" />
                </button>
                <button className="border-2 border-transparent p-2 hover:border-[#01EEFF] transition ease-in-out duration-[0.5s] rounded-full">
                  <img src="/images/instagram.svg" alt="instagram" />
                </button>
              </div>
              <button
                onClick={downloadPDF}
                className="bg-[#01EEFF] w-fit rounded-md p-2 px-6 hover:shadow-[0px_0px_10px_0px_#01EEFF] transition ease-in-out duration-[0.2s] mx-auto xl:mx-0"
              >
                Download CV
              </button>
            </div>
          </div>
        </div>
        <div className="w-full h-full top-0 right-0 -z-10">
          <Slider />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
