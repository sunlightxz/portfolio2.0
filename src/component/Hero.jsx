import { useRef, useEffect } from "react";
import title from "/title.png";
import heroImg from "/heroImg.png";
import frame from "/frame.png";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Hero = () => {
  gsap.registerPlugin(ScrollTrigger);

  const imgTitle = useRef(null);
  const imgContainer = useRef(null);
  const textContainer = useRef(null);
  const heroSection = useRef(null);
  const herocontainer = useRef(null);

  useEffect(() => {
    const heroAnimation = gsap.timeline({ delay: 1.3 });

    heroAnimation
      .fromTo(
        imgContainer.current,
        { height: 0 },
        { height: "100%", duration: 1, delay: 1, ease: "power2.out" }
      )
      .fromTo(
        imgTitle.current,
        { y: '50%', opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: "power2.out" },
        "-=0."
      )
      .fromTo(
        textContainer.current,
        { y: '50%', opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: "power2.out" },
        "-=0.6"
      );

    gsap.to(herocontainer.current, {
      scale: 0.95,
      y: '20px',
      duration: 1.5,
      ease: "power2.out",
      scrollTrigger: {
        trigger: heroSection.current,
        start: "bottom bottom",
        end: "bottom center",
        scrub: true,
      }
    });
  }, []);

  return (
    <section
      id="hero"
      className="section-padding-x sticky top-0 flex min-h-[100vh] items-end pb-10 md:pb-[3%] z-20 bg-secondary-200 3xl:pb-[5%]"
      aria-label="hero"
      style={{ zIndex: 10 }}
      ref={heroSection}
    >
      <svg
          width="886"
          height="886"
          className="pointer-events-none absolute left-[10%] top-1 z-0 block w-5/6 md:hidden"
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
      <div
        className="flex flex-col w-full text-accent-300 relative"
        style={{ opacity: 1, transform: "none" }} ref={herocontainer}
      >
        <img className="" src={title} alt="Title" ref={imgTitle} />
        <div className="grid-gap mt-[3rem] flex grid-cols-12 flex-col md:grid">
          <div className="relative col-span-3 hidden aspect-[3/3.5] h-full w-full overflow-clip rounded-lg md:block">
            <div className="h-full w-full">
              <img
                src={heroImg}
                height={1230}
                width={1640}
                className="w-full h-full object-cover object-center"
                alt="Hero"
                ref={imgContainer}
              />
            </div>
          </div>
          <div className="col-span-8 col-start-5 flex flex-col gap-y-12 justify-b sm:gap-y-6 lg:gap-y-24">
            <div className="grid-gap flex items-start justify-between gap-5">
              <div className="w-16 flex-shrink-0 sm:block sm:w-20 md:w-32 xl:w-40 2xl:w-56 3xl:w-60">
                <img
                  src={frame}
                  className="h-full w-full"
                  width={156}
                  height={159}
                  alt="Frame"
                />
              </div>
              <p
                ref={textContainer}
                className="max-w-[33ch] text-start text-fluid-body font-medium leading-snug text-[#8F8D8B]"
              >
                I'm a Web Developer who loves designing websites that are
                beautiful, intuitive, and functional
              </p>
            </div>
            <div className="flex items-end justify-between relative text-xs font-medium uppercase">
              <div className="flex flex-col justify-center items-center">
                <p className="text-sm text-[#7E766C]">Front-end developer</p>
                <p className="text-sm text-[#7E766C]">
                  based in Casablanca, Morocco
                </p>
              </div>
              <div className="relative">
                <div
                  ref={scroll}
                  className="absolute bottom-0 right-0 flex flex-col items-center justify-center space-y-8"
                >
                  <span className="rotate-90 text-sm text-[#7E766C]">scroll </span>
                  <div className="relative h-1 w-10 rotate-90 overflow-hidden">
                    <span className="absolute h-[0.08em] w-10 translate-x-10 bg-accent-300"></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
