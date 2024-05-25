import React from "react";

const Contact = () => {
  return (
    <div className="bg-[url('/images/heroBg.png')] bg-no-repeat bg-cover">
      <div className="main text-white p-8 lg:p-16">
        <h2 className="text-[28px] lg:text-[40px] font-bold mb-1 text-center">
          Contact <span className="text-[#01EEFF]">Us</span>
        </h2>
        <div className="flex flex-col lg:flex-row justify-center items-center gap-5 lg:gap-10 bg-[#272766] p-6 lg:p-14 mt-8 lg:mt-14 mx-auto lg:w-[90%] rounded-lg">
          {/* Left Side: Contact Form */}
          <div className="w-full lg:w-[45%]">
            <h2 className="text-xl lg:text-3xl font-bold mb-6">
              Write Me a Message
            </h2>
            <form className="flex flex-col items-center gap-5">
              <input
                type="text"
                placeholder="Name"
                className="w-full bg-[#ffffff15] rounded-md px-4 py-3"
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full bg-[#ffffff15] rounded-md px-4 py-3"
              />
              <input
                type="text"
                placeholder="Subject"
                className="w-full bg-[#ffffff15] rounded-md px-4 py-3"
              />
              <textarea
                placeholder="Message"
                rows="4"
                className="w-full bg-[#ffffff15] rounded-md px-4 py-3"></textarea>
              <button className="bg-[#01EEFF] w-full lg:w-fit rounded-md p-2 px-6 mt-8 hover:shadow-[0px_0px_10px_0px_#01EEFF] transition ease-in-out duration-[0.2s]">
                Send Message
              </button>
            </form>
            <div className="flex flex-col lg:flex-row items-center gap-5 lg:gap-10 justify-center mt-8 lg:mt-12">
              <div className="flex items-center gap-2 lg:gap-4">
                <div className="bg-[#ffffff15] p-3 rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-4 h-4 lg:w-5 lg:h-5">
                    <path
                      fillRule="evenodd"
                      d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <p className="whitespace-nowrap">+91 9664781007</p>
              </div>
              <div className="flex items-center gap-2 lg:gap-4">
                <div className="bg-[#ffffff15] p-3 rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-4 h-4 lg:w-5 lg:h-5">
                    <path d="M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z" />
                    <path d="M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z" />
                  </svg>
                </div>
                <p>jklodaliya@gmail.com</p>
              </div>
            </div>
          </div>
          {/* Right Side: Image Section */}
          <div className="w-full lg:w-1/2 flex justify-center items-center mt-8 lg:mt-0 mb-14 ">
            <div className="relative">
              <img
                alt="feature"
                className="relative z-10 w-[85%] lg:w-auto"
                src="/images/contact-img.png"
              />
              <img
                alt="feature"
                className="bg-circle absolute top-12 left-4 lg:left-6 lg:top-20 filter drop-shadow-custom max-w-[80%] lg:max-w-[85%]"
                src="/images/bg-circle.png"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
