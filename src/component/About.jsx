import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import SplitType from 'split-type';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const textRef = useRef(null);

  useEffect(() => {
    // Ensure GSAP animations only run on the client-side
    if (typeof window !== 'undefined') {
      // Split the text up using SplitType
      const typeSplit = new SplitType(textRef.current, {
        types: 'lines, words',
      });

      // Create animation timeline with GSAP
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: textRef.current,
          start: 'top 65%',
          end: 'bottom center',
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
      <div className="container mx-auto p-6">
        <p
          ref={textRef}
          className="split-word lg:text-[60px] md:text-[45px] sm:text-[40px] xsmall:text-[30px] text-[28px] font-bold  leading-relaxed"
        >
          As a frontend developer and UI/UX designer, I focus on creating seamless
          and engaging user experiences that make digital interactions enjoyable
          and efficient.
        </p>
      </div>
    </section>
  );
};

export default About;


