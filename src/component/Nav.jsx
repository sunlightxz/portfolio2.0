import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import Lenis from "@studio-freight/lenis";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Nav = () => {
  const navBar = useRef(null);
  const linkRef = useRef(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const lastScrollTop = useRef(0);
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    const handleMouseMove = (event) => {
      setMousePosition({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  useEffect(() => {
    const lenis = new Lenis();
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  });

  useEffect(() => {
    // Initial animation to show the navbar
    gsap.to(navBar.current, {
      y: 0,
      duration: 3,
      delay: 1.3,
      ease: "power4.inOut",
    });

    // Create scroll trigger for hiding/showing navbar
    const showAnim = gsap.from(navBar.current, { 
      yPercent: -100,
      paused: true,
      duration: 0.2
    }).progress(1);

    ScrollTrigger.create({
      start: "top top",
      end: "max",
      onUpdate: (self) => {
        const scrollTop = self.scroll();
        
        if (scrollTop > lastScrollTop.current) {
          // Scrolling down
          showAnim.reverse();
        } else {
          // Scrolling up
          showAnim.play();
        }
        
        lastScrollTop.current = scrollTop;
      }
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  const linkStyle = {
    transform: `translate(${mousePosition.x * 0.05}px, ${mousePosition.y * 0.05}px)`,
  };

  return (
    <header
      className="fixed top-0 z-50 flex w-full items-center -translate-y-full justify-between bg-secondary-200 px-[50px] py-3 transition-all duration-75"
      ref={navBar}
    >
      <a href="" className="z-50 font-medium text-[24px]" ref={linkRef} style={linkStyle}>
        Amine
      </a>

      <nav className="space-x-7 font-grotesk text-body-3 sm:block">
        <a href="#about" className="group relative hidden md:inline-block navLetterB">
          <span>About</span>
        </a>
        <a href="#services" className="group relative hidden md:inline-block navLetterB">
          <span>Resume</span>
        </a>
        <a href="#works" className="group relative hidden md:inline-block navLetterB">
          <span>Portfolio</span>
        </a>
        <a
          className="button group relative hover:bg-[#D1D1C7] hover:text-[#0E0E0C]"
          href="#contact"
        >
          <span className="relative w-fit">
            <span className="absolute bottom-2 h-[0.15em] w-0 bg-secondary-700 opacity-90 duration-300 ease-out group-hover:w-full"></span>
            <span>Lets Talk.</span>
          </span>
        </a>
      </nav>
    </header>
  );
};

export default Nav;