import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const WhatIDo = () => {
  const [activeSection, setActiveSection] = useState(0); // Initialize with 0 instead of null
  const sectionRef = useRef(null);
  const titleRef = useRef(null);

  const handleSectionClick = (index) => {
    if (activeSection === index) {
      // Close section
      gsap.to(`#content-${index}`, {
        height: 0,
        opacity: 0,
        duration: 0.5,
        ease: "power2.inOut",
        onComplete: () => setActiveSection(null),
      });
    } else {
      // Close current section if one is open
      if (activeSection !== null) {
        gsap.to(`#content-${activeSection}`, {
          height: 0,
          opacity: 0,
          duration: 0.5,
          ease: "power2.inOut",
        });
      }
      // Open new section
      setActiveSection(index);
      gsap.fromTo(
        `#content-${index}`,
        { height: 0, opacity: 0 },
        { height: "auto", opacity: 1, duration: 0.5, ease: "power2.inOut" }
      );
    }
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate the main title
      gsap.from(titleRef.current, {
        y: 100,
        opacity: 0,
        duration: 1,
        scrollTrigger: {
          trigger: titleRef.current,
          start: "top bottom",
          end: "top center",
          scrub: 1,
        },
      });

      // Animate each section
      const sections = document.querySelectorAll(".section-item");
      sections.forEach((section, index) => {
        gsap.fromTo(
          section,
          { y: 100, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1,
            scrollTrigger: {
              trigger: section,
              start: "top bottom",
              end: "top center",
              scrub: 1,
            },
          }
        );
      });

      // Set initial state of first section
      gsap.set("#content-0", {
        height: "auto",
        opacity: 1,
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const sections = [
    {
      title: "EXPERTISES",
      description:
        "Lorem ipsum dolor sit amet consectetur. Morbi nunc pellentesque sed at lorem viverra enim et.",
      items: ["Web Development", "Web Design", "UI/UX Design", "Branding"],
    },
    {
      title: "MY SKILLS",
      description:
        "Lorem ipsum dolor sit amet consectetur. Morbi nunc pellentesque sed at lorem viverra enim et.",
      items: ["CMS integration", "Motion & Animation", "3D Development"],
    },
    {
      title: "MY EXPERIENCE",
      description:
        "Lorem ipsum dolor sit amet consectetur. Morbi nunc pellentesque sed at lorem viverra enim et.",
      items: ["3 Years in Web Development", "2 Years in UI/UX Design"],
    },
  ];

  return (
    <div
      ref={sectionRef}
      className="section-padding-x relative z-40 min-h-screen py-[150px] w-full overflow-x-clip flex flex-col items-start bg-main text-white pr-2"
    >
      <div className="w-full py-24">
        <div className="flex flex-col gap-8 mb-12">
          <h1 ref={titleRef} className="text-[#C5BD99] text-6xl font-bold">
            WHAT I DO
          </h1>
          <div className="w-full flex">
            <div className="basis-1/2"></div>
            <p className="basis-1/2 items-end text-[25px] font-light text-[#A59D8E]">
              I design and develop websites that are both functional and visually
              captivating, making sure your digital presence stands out.
            </p>
          </div>
        </div>
        <div className="space-y-12">
          {sections.map((section, index) => (
            <div key={index} className="section-item border-t border-[#333] pt-8">
              <button
                onClick={() => handleSectionClick(index)}
                className="section-header flex justify-between items-center w-full group"
              >
                <h2 className="text-[#E6DFD3] text-3xl font-medium">
                  {section.title}
                </h2>
                <button className="text-3xl hover:opacity-50 hover:rotate-[50deg] hover:ease-in-out hover:duration-200 transition-opacity">
                  ✦
                </button>
              </button>
              <div
                id={`content-${index}`}
                className="overflow-hidden"
                style={{
                  height: index === 0 ? "auto" : 0,
                  opacity: index === 0 ? 1 : 0,
                }}
              >
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 py-8">
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
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhatIDo;