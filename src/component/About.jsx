import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import SplitType from "split-type";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const textRef = useRef(null);

  useEffect(() => {
    // Ensure GSAP animations only run on the client-side
    if (typeof window !== "undefined") {
      // Split the text up using SplitType
      const typeSplit = new SplitType(textRef.current, {
        types: "lines, words",
      });

      // Create animation timeline with GSAP
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: textRef.current,
          start: "top 65%",
          end: "bottom center",
          scrub: 1,
        },
      });

      tl.from(typeSplit.lines, {
        opacity: 0,
        y: 50,
        stagger: 0.1,
        duration: 1,
      });
    }
  }, []);

  return (
    <section
      id="about"
      className="section-padding-x rounded-t-3xl relative  pb-[30px] z-40 min-h-screen w-full overflow-x-clip flex items-center bg-main text-[#D1D1C7] pr-2"
      aria-label="about"
    >
      <div className="flex justify-between w-full items-start gap-4">
        <h3 className="text-[#C5BD99] text-[35px] font-mono =" ref={textRef}>
          A Little About Me
        </h3>
        <div className="flex flex-col items-start mt-10">
          <p className="text-[50px] text-[#BFBFB1] mb-[80px]" ref={textRef}>
            Creating intuitive and beautiful websites is my passion — because
            great design makes the web feel more human
          </p>
          <a href="" className="text-[#C5BD99] text-[30px] ">
            Let's Work Together!{" "}
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
