import React, { useEffect, useRef } from 'react';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import project1 from '/project1.png';
import project2 from '/project2.png';
import project3 from '/project3.png';
import project4 from '/project4.png';
import project5 from '/project5.png';
import { MdSubdirectoryArrowRight } from "react-icons/md";

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
  const projectref = useRef(null);
  const lastproject = useRef(null);
  const cursorRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(projectref.current, {
        duration: 2,
        borderRadius: '20px',
        ease: "power.out",
        scrollTrigger: {
          trigger: projectref.current,
          start: "bottom bottom",
          end: "bottom bottom",
          scrub: true,
        },
      });
    }, projectref);

    const moveCursor = (e) => {
      const { clientX: x, clientY: y } = e;
      cursorRef.current.style.left = `${x}px`;
      cursorRef.current.style.top = `${y}px`;
    };

    const handleMouseEnter = () => {
      cursorRef.current.style.display = 'block';
    };

    const handleMouseLeave = () => {
      cursorRef.current.style.display = 'none';
    };

    document.addEventListener('mousemove', moveCursor);
    const projectElements = document.querySelectorAll('.project');
    projectElements.forEach(el => {
      el.addEventListener('mouseenter', handleMouseEnter);
      el.addEventListener('mouseleave', handleMouseLeave);
    });

    return () => {
      document.removeEventListener('mousemove', moveCursor);
      projectElements.forEach(el => {
        el.removeEventListener('mouseenter', handleMouseEnter);
        el.removeEventListener('mouseleave', handleMouseLeave);
      });
      ctx.revert();
    };
  }, []);

  return (
    <section className="section-padding-x relative z-40 min-h-screen py-[150px] w-full overflow-x-clip flex flex-col items-start bg-main text-white pr-2" ref={projectref}>
      <div>
        <div className="flex flex-col justify-center items-center mb-10">
          <h1 className="text-[76px] font-cairo font-semibold mb-4 text-[#D1D1C7]">FEATURED WORK</h1>
          <p className="flex flex-col items-center justify-center text-xl font-light text-gray-400">
            <span>Trailblazing the Future: Our Latest Projects</span>
            <span>Showcase Innovation and Excellence in Action.</span>
          </p>
        </div>

        <div className="mx-auto mt-20 w-fit font-cairo">
          <div className="border-t border-gray-500 cursor-pointer project">
            <div className="flex justify-between px-1 py-3 w-full items-center">
              <span className="font-light text-lg flex gap-3 cursor-pointer">
                {/* <img src="arrow.svg" alt="" width="20" height="20" /> */}
                <MdSubdirectoryArrowRight  className ="text-[30px]"/>

                <p className="uppercase">Speech Sync</p>
              </span>
              <span className="font-light">2024</span>
            </div>
            <div className="rounded-2xl w-full relative overflow-hidden h-[200px] xs:h-[400px] md:h-[500px] cursor-pointer">
              <div className="absolute top-0 left-0 pt-4 ml-3 flex justify-center items-center cursor-pointer">
                <span className="bg-red-600 py-1 px-3 rounded-full text-xs uppercase hover:bg-red-400">new</span>
              </div>
              <div>
                <a href="https://speechsyn.netlify.app/">
                <img src={project1} className="object-cover hover:grayscale duration-300 hover:scale-105 transition-all ease-in-out" alt="" />
                </a>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 mt-10 gap-10">
            {/* Repeat the project items as necessary */}
            <div className="border-t border-gray-500 cursor-pointer project">
              <div className="flex justify-between px-1 py-3 w-full items-center">
                <span className="font-light text-lg flex gap-3 cursor-pointer">
                <MdSubdirectoryArrowRight  className ="text-[30px]"/>
                  <p className="uppercase">Arctic Monkey website</p>
                </span>
                <span className="font-light">2024</span>
              </div>
              <div className="rounded-2xl w-full relative overflow-hidden cursor-pointer">
                <div className="absolute top-0 left-0 pt-4 ml-3 flex justify-center items-center cursor-pointer">
                  <span className="bg-red-600 py-1 px-3 rounded-full text-xs uppercase hover:bg-red-400">new</span>
                </div>
                <div>
                    <a href="https://main--arcticmonkey.netlify.app/">
                  <img src={project2} className="object-cover hover:grayscale duration-300 hover:scale-105 transition-all ease-in-out w-full h-full" alt="" />
                    </a>
                </div>
              </div>
            </div>

            {/* Other project items */}
            <div className="border-t border-gray-500 cursor-pointer project" ref={lastproject}>
              <div className="flex justify-between px-1 py-3 w-full items-center">
                <span className="font-light text-lg flex gap-3 cursor-pointer">
                    <MdSubdirectoryArrowRight  className ="text-[30px]"/>
                  <p className="uppercase">Portfolio1.0</p>
                </span>
                <span className="font-light">2022</span>
              </div>
              <div className="rounded-2xl w-full relative overflow-hidden cursor-pointer">
                
                <div>
                <a href="https://sunlightxz.github.io/Portfoliox/">
                    <img src={project3} className="object-cover hover:grayscale duration-300 hover:scale-105 transition-all ease-in-out w-full h-full" alt="" />
                    </a>                  </div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 mt-10 gap-10">
            {/* Repeat the project items as necessary */}
            <div className="border-t border-gray-500 cursor-pointer project">
              <div className="flex justify-between px-1 py-3 w-full items-center">
                <span className="font-light text-lg flex gap-3 cursor-pointer">
                <MdSubdirectoryArrowRight  className ="text-[30px]"/>
                  <p className="uppercase">Haff</p>
                </span>
                <span className="font-light">2024</span>
              </div>
              <div className="rounded-2xl w-full relative overflow-hidden cursor-pointer">
                <div>
                    <a href="https://steady-scone-29e2f2.netlify.app/">
                    <img src={project4} className="object-cover hover:grayscale duration-300 hover:scale-105 transition-all ease-in-out w-full h-full" alt="" />
                    </a>
                </div>
              </div>
            </div>

            {/* Other project items */}
            <div className="border-t border-gray-500 cursor-pointer project" ref={lastproject}>
              <div className="flex justify-between px-1 py-3 w-full items-center">
                <span className="font-light text-lg flex gap-3 cursor-pointer">
                <MdSubdirectoryArrowRight  className ="text-[30px]"/>
                  <p className="uppercase">Meet&More</p>
                </span>
                <span className="font-light">2024</span>
              </div>
              <div className="rounded-2xl w-full relative overflow-hidden cursor-pointer">
                <div className="absolute top-0 left-0 pt-4 ml-3 flex justify-center items-center cursor-pointer">
                  <span className="bg-red-600 py-1 px-3 rounded-full text-xs uppercase hover:bg-red-400">new</span>
                </div>
                <div>
                    <a href="https://meatandmore.regie404.ma/">
                    <img src={project5} className="object-cover hover:grayscale duration-300 hover:scale-105 transition-all ease-in-out w-full h-full" alt="" />
                    </a>                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div ref={cursorRef} className="custom-cursor p-7 ">View Project</div>
    </section>
  );
}

export default Projects;
