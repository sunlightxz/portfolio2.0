import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import expb from '/expb.png';

gsap.registerPlugin(ScrollTrigger);

const Show = () => {
  const containerRef = useRef(null);
  const imageRef = useRef(null);
  const leftTextRef = useRef(null);
  const rightTextRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    const image = imageRef.current;
    const leftText = leftTextRef.current;
    const rightText = rightTextRef.current;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container,
        start: "top top",
        end: "bottom top",
        scrub: 1,
        pin: true,
        markers: true ,
      }
    });

    // Set initial states
    gsap.set(image, {
      width: "20vw",
      height: "30vh"
    });

    tl.to(image, {
      width: "100vw",
      height: "100vh",
      objectFit: "cover",
      duration :2 ,
    })
    .to(leftText, {
      x: "-40vw",
      scale: 1.5,
      duration :2 ,
    }, "<")
    .to(rightText, {
      x: "40vw",
      scale: 1.5,
      duration :2 ,
    }, "<");

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <div 
      ref={containerRef}
      className="relative z-40 h-[100vh] w-full overflow-x-clip bg-black"
    >
      <div className="h-screen w-full items-center justify-center overflow-hidden">
        <div className="flex h-full w-full items-center justify-center overflow-hidden relative flex-nowrap">
          <h1 
            ref={leftTextRef}
            className="flex flex-nowrap text-[8rem] text-white overflow-hidden absolute top-[50%] left-[25%] z-20"
          >
            <span>A</span>
            <span>M</span>
          </h1>
          <div className="relative flex items-center justify-center overflow-hidden z-10">
            <img 
              ref={imageRef}
              src={expb} 
              alt="" 
              className="object-cover"
            />
          </div>
          <h1 
            ref={rightTextRef}
            className="flex flex-nowrap text-[8rem] text-white overflow-hidden absolute top-[50%] right-[25%] z-20"
          >
            <span>N</span>
            <span>E</span>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Show;