import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import footerlg from '/footerlg.png'
gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
  const circleRef = useRef(null);
  const footerRef = useRef(null);


  useEffect(() => {

    ScrollTrigger.create({
      trigger: footerRef.current,
      start: "bottom top",
      end: "bottom bottom",
      onEnter: () => gsap.to(footerRef.current, { zIndex: 20 }),
      onLeaveBack: () => gsap.to(footerRef.current, { zIndex: 0 }),
    });
  }, []);


  return (
    <footer
      ref={footerRef}
      className="sticky bottom-0 w-full min-h-[70vh] bg-secondary-200"
    >
      <div className="w-full h-full overflow-hidden pt-14 sm:pt-16 3xl:px-[10%] px-6  sm:px-[4%]">
      <div className="w-full h-full flex flex-col items-center justify-center overflow-hidden">
        <h1 className="lg:text-[160px] text-[140px] text-[#353535] font-bold">
          GET IN TOUCH
        </h1>
        <button className="uppercase text-white py-4 px-6 bg-black rounded-3xl">
          drop me an email
        </button>
      </div>
      <div className="relative w-full h-full flex justify-center items-center">
        <svg
          ref={circleRef}
          width="886"
          height="886"
          className="absolute inset-0 mx-auto my-auto -z-10"
          viewBox="0 0 1186 1186"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            cx="593"
            cy="593"
            r="593"
            fill="url(#paint0_linear_54949_267)"
          ></circle>
          <defs>
            <linearGradient
              id="paint0_linear_54949_267"
              x1="593"
              y1="0"
              x2="593"
              y2="1186"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#DDDDD5"></stop>
              <stop offset="1" stopColor="#DDDDD5" stopOpacity="0"></stop>
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className="relative flex w-full  max-w-full mt-5 h-full justify-center items-center">
      <div className="px-12 border-t border-[#353535]  py-10 mx-auto w-5/6">
        <div className="flex flex-col">
          <div className="flex flex-row justify-between items-center gap-16">
            <div className="">
              <img
                src={footerlg}
                className="w-[300px]"
                alt=""
              />
            </div>
            <div className="flex flex-row justify-between gap-16">
              <div className="flex flex-col ">
                <span className="text-[#3C3935] font-medium text-lg">Navigation</span>
                <a
                  href=""
                  className="text-gray-400 hover:text-[#6C655D] mb-3 mt-4"
                >
                  Home
                </a>
                <a href="" className="text-gray-400 hover:text-[#6C655D] mb-3">
                  About
                </a>
                <a href="" className="text-gray-400 hover:text-[#6C655D] mb-3">
                  Projects
                </a>
                <a href="" className="text-gray-400 hover:text-[#6C655D] mb-3">
                  Services
                </a>
              </div>
              <div className="flex flex-col ">
                <span className="text-[#3C3935] font-medium text-lg">Socials</span>
                <a
                  href=""
                  className="text-gray-400 hover:text-[#6C655D] mb-3 mt-4"
                >
                  Linkedin
                </a>
                <a href="" className="text-gray-400 hover:text-[#6C655D] mb-3">
                  Instagram
                </a>
                <a href="" className="text-gray-400 hover:text-[#6C655D] mb-3">
                  Twitter
                </a>
                <a href="" className="text-gray-400 hover:text-[#6C655D] mb-3">
                  Github
                </a>
              </div>
              <div className="flex flex-col ">
              <span className="text-[#3C3935] font-medium text-lg">Help</span>
                <a
                  href=""
                  className="text-gray-400 hover:text-[#6C655D] mb-3 mt-4"
                >
                  Contact Me
                </a>
                <a href="" className="text-gray-400 hover:text-[#6C655D] mb-3">
                  FAQ
                </a>
              </div>
            </div>
          </div>
        </div>
        <p className="mt-10 text-sm text-gray-700 flex flex-col">
            <span>LOCAL TIME
</span>
          ©Sunglightxz, All rights resereved.</p>
      </div>
      </div>
      </div>
    </footer>
  );
};

export default Footer;
