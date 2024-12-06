import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const WhatIDo = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const sectionsRef = useRef(null);



  const sections = [
    {
      title: "EXPERTISES",
      description: "Lorem ipsum dolor sit amet consectetur. Morbi nunc pellentesque sed at lorem viverra enim et.",
      items: ["Web Development", "UI/UX Design", "Frontend Development"]
    },
    {
      title: "MY SKILLS",
      description: "Lorem ipsum dolor sit amet consectetur. Morbi nunc pellentesque sed at lorem viverra enim et.",
      items: ["React", "Next.js", "Tailwind CSS", "GSAP"]
    },
    {
      title: "MY EXPERIENCE",
      description: "Lorem ipsum dolor sit amet consectetur. Morbi nunc pellentesque sed at lorem viverra enim et.",
      items: ["3 Years in Web Development", "2 Years in UI/UX Design"]
    }
  ];

  return (
    <div 
      ref={sectionRef}
      className="min-h-screen w-full relative z-40 bg-black text-white overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-8 py-24">
        <h1 
          ref={titleRef}
          className="text-[#E6DFD3] text-6xl font-bold mb-24"
        >
          WHAT I DO
        </h1>

        <div 
          ref={sectionsRef}
          className="space-y-12"
        >
          {sections.map((section, index) => (
            <div 
              key={index}
              className="section-item border-t border-[#333] pt-8"
            >
              <div className="flex justify-between items-center mb-8">
                <h2 className="text-[#E6DFD3] text-3xl font-medium">
                  {section.title}
                </h2>
                <div className="w-8 h-8 opacity-30">
                  {/* You can add your icons here */}
                  ✦
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                <p className="text-[#999] text-lg max-w-xl">
                  {section.description}
                </p>
                <div className="space-y-4">
                  {section.items.map((item, idx) => (
                    <div
                      key={idx}
                      className="text-[#999] text-lg pb-2 border-b border-[#333]"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhatIDo;