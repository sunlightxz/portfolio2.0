import React, { useEffect, useRef,useState } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import footerlg from '/footerlg.png'
import { format } from 'date-fns';
import { enUS } from 'date-fns/locale';
import { MdOutlineEmail } from "react-icons/md";

gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
  const circleRef = useRef(null);
  const footerRef = useRef(null);

  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(intervalId); // Cleanup interval on component unmount
  }, []);

  const options = {
    timeZone: 'Africa/Casablanca',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: true,
  };

  const formattedTime = currentTime.toLocaleTimeString('en-US', options);

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
        <a href="mailto:amineasfar101@gmail.com" className="uppercase text-white py-4 px-6 bg-black rounded-3xl flex justify-center items-center gap-3">
        <MdOutlineEmail className= "text-[25px]" />

          drop me an email
        </a>
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
      <div className=" border-t border-[#353535]  py-10 mx-auto w-5/6">
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
                  href="https://www.linkedin.com/in/amine-asfar/"
                  className="text-gray-400 hover:text-[#6C655D] mb-3 mt-4"
                >
                  Linkedin
                </a>
                <a href="https://www.instagram.com/portugas_d.amine/" className="text-gray-400 hover:text-[#6C655D] mb-3">
                  Instagram
                </a>
                <a href="https://x.com/AmineAsfar" className="text-gray-400 hover:text-[#6C655D] mb-3">
                  Twitter
                </a>
                <a href="https://github.com/sunlightxz" className="text-gray-400 hover:text-[#6C655D] mb-3">
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
       <div className="mt-10 flex flex-col items-end w-full">
       <p className="text-sm text-gray-700 flex flex-col items-start">
            <span className="font-bold">LOCAL TIME</span>
            {formattedTime} Casablanca, MA </p>
       </div>
      </div>
      </div>
      </div>
    </footer>
  );
};

export default Footer;
