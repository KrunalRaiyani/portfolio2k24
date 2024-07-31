"use client";
import React, { useState, useEffect, useRef } from "react";

const ImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const sliderRef = useRef(null);

  const images = [
    {
      src: "https://raw.githubusercontent.com/Mohammed-Faysal/Image-slider-using-HTML-CSS-JavaScript/main/image/img1.jpg",
      title: "MAGIC SLIDER",
      type: "FLOWER",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti temporibus quis eum consequuntur voluptate quae doloribus distinctio. Possimus, sed recusandae. Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, aut.",
    },
    {
      src: "https://raw.githubusercontent.com/Mohammed-Faysal/Image-slider-using-HTML-CSS-JavaScript/main/image/img2.jpg",
      title: "MAGIC SLIDER",
      type: "NATURE",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti temporibus quis eum consequuntur voluptate quae doloribus distinctio. Possimus, sed recusandae. Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, aut.",
    },
    {
      src: "https://raw.githubusercontent.com/Mohammed-Faysal/Image-slider-using-HTML-CSS-JavaScript/main/image/img4.jpg",
      title: "MAGIC SLIDER",
      type: "PLANT",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti temporibus quis eum consequuntur voluptate quae doloribus distinctio. Possimus, sed recusandae. Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, aut.",
    },
    {
      src: "https://raw.githubusercontent.com/Mohammed-Faysal/Image-slider-using-HTML-CSS-JavaScript/main/image/img3.jpg",
      title: "MAGIC SLIDER",
      type: "NATURE",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti temporibus quis eum consequuntur voluptate quae doloribus distinctio. Possimus, sed recusandae. Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, aut.",
    },
  ];

  const moveSlider = (direction) => {
    if (direction === "next") {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    } else {
      setCurrentIndex(
        (prevIndex) => (prevIndex - 1 + images.length) % images.length
      );
    }
  };

  useEffect(() => {
    const slider = sliderRef.current;
    slider.addEventListener("animationend", () => {
      slider.classList.remove("next", "prev");
    });
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden bg-black text-white">
      <header className="absolute top-0 left-0 w-full p-4 z-50 flex justify-center items-center">
        <nav className="flex space-x-4">
          <a
            href="#"
            className="text-white px-4 py-2 transition duration-200 hover:bg-green-500 active:bg-green-500 rounded">
            Home
          </a>
          <a
            href="#"
            className="text-white px-4 py-2 transition duration-200 hover:bg-green-500 rounded">
            About
          </a>
          <a
            href="#"
            className="text-white px-4 py-2 transition duration-200 hover:bg-green-500 rounded">
            Portfolio
          </a>
          <a
            href="#"
            className="text-white px-4 py-2 transition duration-200 hover:bg-green-500 rounded">
            Services
          </a>
          <a
            href="#"
            className="text-white px-4 py-2 transition duration-200 hover:bg-green-500 rounded">
            Contact
          </a>
        </nav>
      </header>

      <div className="relative h-full">
        <div
          ref={sliderRef}
          className="absolute inset-0 w-full h-full flex items-center justify-center">
          {images.map((image, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ease-linear ${
                index === currentIndex ? "opacity-100 z-10" : "opacity-0 z-0"
              }`}>
              <img
                src={image.src}
                alt=""
                className="w-full h-full object-cover"
              />
              <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2 p-4 text-center max-w-lg">
                <div className="text-5xl font-bold">{image.title}</div>
                <div className="text-5xl font-bold text-green-400">
                  {image.type}
                </div>
                <div className="mt-4">{image.description}</div>
                <div className="mt-8 grid grid-cols-2 gap-4">
                  <button className="px-4 py-2 bg-white text-black font-bold transition duration-200 hover:bg-gray-200">
                    SEE MORE
                  </button>
                  <button className="px-4 py-2 border border-white text-white font-bold transition duration-200 hover:bg-white hover:text-black">
                    SEE MORE
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 flex space-x-4 z-50">
          {images.map((image, index) => (
            <div key={index} className="w-24 h-36 overflow-hidden rounded-xl">
              <img
                src={image.src}
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>

        <div className="absolute bottom-1/4 left-1/2 transform -translate-x-1/2 flex space-x-4 z-50">
          <button
            onClick={() => moveSlider("prev")}
            className="w-10 h-10 bg-green-500 text-white font-bold rounded-full transition duration-200 hover:bg-white hover:text-black">
            &lt;
          </button>
          <button
            onClick={() => moveSlider("next")}
            className="w-10 h-10 bg-green-500 text-white font-bold rounded-full transition duration-200 hover:bg-white hover:text-black">
            &gt;
          </button>
        </div>
      </div>
    </div>
  );
};

export default ImageSlider;
