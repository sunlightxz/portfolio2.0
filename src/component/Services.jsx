import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Services = () => {
  const cardsRef = useRef(null);
  const serviceRef = useRef(null);

  useEffect(() => {
    const context = gsap.context(() => {
      if (cardsRef.current) {
        const timeline = gsap.timeline({
          scrollTrigger: {
            trigger: serviceRef.current,
            pin: true,
            pinSpacing: true,
            start: "top top",
            end: "+=1000", // Adjust this value to ensure all cards are visible before projects start
            scrub: 1,
          },
        });

        timeline
          .addLabel("card1")
          .to(".card-1", { yPercent: 0, opacity: 1 })
          .from(".card-2", { yPercent: 175, opacity: 1 })
          .addLabel("card2")
          .to(".card-1 ", { scale: 1, yPercent: -5, opacity: 1 }, "-=0.3")
          .to(".card-2", { yPercent: 0, opacity: 1 })
          .from(".card-3", { yPercent: 75, opacity: 0 })
          .addLabel("card3")
          .to(".card-2", { scale: 1, yPercent: -5, opacity: 1 }, "-=0.3")
          .to(".card-3", { yPercent: 0, opacity: 1 });
      }
    }, cardsRef);

    return () => context.revert();
  }, []);

  return (
    <div id='services'
      className="section-padding-x relative z-40 min-h-screen w-full overflow-x-clip flex flex-col items-start bg-black text-white pr-2 "
      ref={serviceRef}
    >
      <div className="w-full flex flex-col items-center relative bg-black">
        <div className="flex w-full flex-col md:px-[50px] px-[20px]">
          <h1 className="lg:text-[90px] md:text-[80px] sm:text-[65px] xsmall:text-[40px] text-[30px] font-semibold text-[#D1D1C7] col-span-6 ">
            WHAT I DO
          </h1>
        </div>

        <div className="mt-12 w-full md:px-[50px] xsmall:px-[20px] px-0">
          <div
            ref={cardsRef}
            className="cards mt-12 flex flex-col justify-between gap-y-4  "
          >
            <div className="card card-1 bg-black px-2 z-10 flex flex-col items-start justify-start w-full h-full">
              <div className="border-t border-t-[#575755] w-full flex items-center justify-between ">
                <h1 className="py-7 text-left text-[22px] font-bold text-[#BFBFB1] sm:py-6  sm:text-[32] md:py-5 md:text-[30px] lg:text-[42px]  3xl:py-6 ">
                  Expertises
                </h1>
                <img alt="" loading="lazy" width="32" height="32" decoding="async" data-nimg="1" className="h-6 w-6 opacity-30 sm:h-7 sm:w-7 2xl:h-8 2xl:w-8"  src="//images.ctfassets.net/fwy0yv14lkat/3OTKoEZctLHsU75qKdenDH/a241fd9d6e8c8f0622811fe2bed44b87/Shape.svg"/>
              </div>
              <div className="grid-gap relative flex min-h-[20vh] flex-col w-[90%] place-items-start pb-12 lg:grid lg:grid-cols-12">
                <p className=" col-span-3 max-w-[40ch] pt-2 text-base font-medium text-[#BABAB1] lg:col-span-6">
                  Lorem ipsum dolor sit amet consectetur. Morbi nunc
                  pellentesque sed at lorem viverra enim et. Diam ac augue
                  tortor orci gravida ullamcorper.
                </p>
                <div className="col-span-3"></div>
                <div className="col-span-3 flex w-full flex-col gap-y-4  pt-8 lg:pt-0 ">
                  <span className="text-[#BABAB1] text-[22px] border-b pb-2 border-[#BABAB1]">
                    Web Development
                  </span>
                  <span className="text-[#BABAB1] text-[22px] border-b border-[#BABAB1]">
                    Web Design
                  </span>
                  <span className="text-[#BABAB1] text-[22px] border-b border-[#BABAB1]">
                    UI/UX Design
                  </span>
                  <span className="text-[#BABAB1] text-[22px] border-b border-[#BABAB1]">
                    Branding
                  </span>
                </div>
              </div>
            </div>

            <div className="card card-2 bg-black px-2 z-10 flex flex-col items-start justify-start w-full min-h-screen">
              <div className="border-t border-t-[#575755] w-full flex items-center justify-between ">
                <h1 className="py-7 text-left text-[22px] font-bold text-[#BFBFB1] sm:py-6  sm:text-[32] md:py-5 md:text-[30px] lg:text-[42px]  3xl:py-6 ">
                  My Skills
                </h1>
                <img alt="" loading="lazy" width="32" height="32" decoding="async" data-nimg="1" className="h-6 w-6 opacity-30 sm:h-7 sm:w-7 2xl:h-8 2xl:w-8"  src="//images.ctfassets.net/fwy0yv14lkat/5X88SBFFc4hVAjMYmFK4js/7c8ae3f8120db2ff6f7ee315d3096266/Q8.svg"/>              </div>
              <div className="grid-gap relative flex min-h-[20vh] flex-col w-[90%] place-items-start pb-12 lg:grid lg:grid-cols-12">
                <p className=" col-span-3 max-w-[40ch] pt-2 text-base font-medium text-[#BABAB1] lg:col-span-6">
                  Lorem ipsum dolor sit amet consectetur. Morbi nunc
                  pellentesque sed at lorem viverra enim et. Diam ac augue
                  tortor orci gravida ullamcorper.
                </p>
                <div className="col-span-3"></div>
                <div className="col-span-3 flex w-full flex-col gap-y-4  pt-8 lg:pt-0 ">
                  <span className="text-[#BABAB1] text-[22px] border-b pb-2 border-[#BABAB1]">
                    CMS integration
                  </span>
                  <span className="text-[#BABAB1] text-[22px] border-b border-[#BABAB1]">
                    Motion & Animation
                  </span>
                  <span className="text-[#BABAB1] text-[22px] border-b border-[#BABAB1]">
                    3D Developement
                  </span>
                </div>
              </div>
            </div>

            <div className="card card-3 bg-black px-2 z-10 flex flex-col items-start justify-start w-full min-h-screen">
              <div className="border-t border-t-[#575755] w-full flex items-center justify-between">
                <h1 className="py-7 text-left text-[22px] font-bold text-[#BFBFB1] sm:py-6 sm:text-[32] md:py-5 md:text-[30px] lg:text-[42px] 3xl:py-6">
                  My Experience
                </h1>
                <img alt="" loading="lazy" width="32" height="32" decoding="async" data-nimg="1" className="h-6 w-6 opacity-30 sm:h-7 sm:w-7 2xl:h-8 2xl:w-8"  src="//images.ctfassets.net/fwy0yv14lkat/3OTKoEZctLHsU75qKdenDH/a241fd9d6e8c8f0622811fe2bed44b87/Shape.svg"/>
              </div>
              <div className="grid-gap relative flex min-h-[20vh] flex-col w-[90%] place-items-start pb-12 lg:grid lg:grid-cols-12">
                <p className="col-span-3 max-w-[40ch] pt-2 text-base font-medium text-[#BABAB1] lg:col-span-6">
                  Lorem ipsum dolor sit amet consectetur. Morbi nunc
                  pellentesque sed at lorem viverra enim et. Diam ac augue
                  tortor orci gravida ullamcorper.
                </p>
                <div className="col-span-3"></div>
                <div className="col-span-3 flex w-full flex-col gap-y-4 pt-8 lg:pt-0">
                  <span className="text-[#BABAB1] text-[22px] border-b pb-2 border-[#BABAB1]">
                    3 Years in Web Development
                  </span>
                  <span className="text-[#BABAB1] text-[22px] border-b border-[#BABAB1]">
                    2 Years in UI/UX Design
                  </span>
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
