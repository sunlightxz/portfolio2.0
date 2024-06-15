import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
  const circleRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      circleRef.current,
      { scale: 0.1 },
      {
        scale: 1,
        ease: "none",
        scrollTrigger: {
          trigger: circleRef.current,
          start: "top bottom", // Start the animation when the top of the circle hits the bottom of the viewport
          end: "bottom top", // End the animation when the bottom of the circle hits the top of the viewport
          scrub: true,
          markers: true, // Enable markers for debugging; remove or set to false for production
        },
      }
    );
  }, []);

  return (
    <footer className="section-padding-x relative z-40 min-h-screen py-[150px] w-full overflow-hidden flex flex-col items-center justify-center bg-[#E5E6E0] pr-2">
      <div className="w-full h-full flex flex-col items-center justify-center">
        <h1 className="lg:text-[160px] text-[140px] text-black font-bold">
          GET IN TOUCH
        </h1>
        <button className="uppercase text-white py-4 px-6 bg-black rounded-3xl">
          drop me an email
        </button>
      </div>
      <div className="relative w-full h-full flex justify-center items-center">
        <svg
          ref={circleRef}
          width="1186"
          height="1186"
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
    </footer>
  );
};

export default Footer;
