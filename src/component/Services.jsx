import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Services = () => {
  const cardsRef = useRef(null);

  useEffect(() => {
    const context = gsap.context(() => {
      if (cardsRef.current) {
        const timeln = gsap.timeline({
          scrollTrigger: {
            trigger: cardsRef.current,
            pin: true,
            start: "top 15%",
            end: "+=1000 ",
            scrub: 1,
            markers:true ,
          },
        });

        timeln.addLabel('card1')
        .to('.card-1', { yPercent: 0, opacity: 1 })
        .from('.card-2', { yPercent: 175, opacity: 1 })
          .addLabel('card2')
          .to('.card-1', { scale: 1, yPercent: -2, opacity: 0.8 }, '-=0.7')
          .to('.card-2', { yPercent: 0, opacity: 1 })
          .from('.card-3', { yPercent: 75, opacity: 0 })
          .addLabel('card3')
          .to('.card-2', { scale: 1, yPercent: -5, opacity: 0.9 }, '-=0.3')
          .to('.card-3', { yPercent: 0, opacity: 1 });
      }
    }, cardsRef);

    return () => context.revert();
  }, []);

  return (
    <div className="section-padding-x relative z-20 min-h-screen w-full overflow-x-clip flex flex-col items-start bg-black text-white pr-2 ">
      <div className="flex w-full flex-col px-[50px]">
        <h1 className="text-[90px] font-semibold text-[#D1D1C7] col-span-6 ">
          WHAT I DO
        </h1>
      </div>

      <div className="mt-12 w-full px-[50px]">
        <div ref={cardsRef} className="cards mt-12 flex flex-col justify-between gap-y-4  ">
          <div className="card card-1 bg-black px-2 z-10 flex flex-col items-start justify-start w-full h-full">
            <div className="border-t border-t-[#575755] w-full flex items-start justify-between ">
            <h1 className='py-7 text-left text-[22px] font-bold text-[#BFBFB1] sm:py-6  sm:text-[32] md:py-5 md:text-[30px] lg:text-[42px]  3xl:py-6 '>Expertises</h1>
             <span>.</span>
            </div>
            <div className="grid-gap relative flex min-h-[20vh] flex-col w-[90%] place-items-start pb-12 lg:grid lg:grid-cols-12">
              <p className=' col-span-3 max-w-[40ch] pt-2 text-base font-medium text-[#BABAB1] lg:col-span-6'>Lorem ipsum dolor sit amet consectetur. 
Morbi nunc pellentesque sed at lorem 
viverra enim et. Diam ac augue tortor 
orci gravida ullamcorper.</p>
<div className="col-span-3"></div>
            <div className="col-span-3 flex w-full flex-col gap-y-4  pt-8 lg:pt-0 ">
              <span className='text-[#BABAB1] text-[22px] border-b pb-2 border-[#BABAB1]'>Web Development</span>
              <span className='text-[#BABAB1] text-[22px] border-b border-[#BABAB1]'>Web Design</span>
              <span className='text-[#BABAB1] text-[22px] border-b border-[#BABAB1]'>UI/UX Design</span>
              <span className='text-[#BABAB1] text-[22px] border-b border-[#BABAB1]'>Branding</span>

            </div>
            </div>
          </div>
      
          <div className="card card-2 bg-black px-2 z-10 flex flex-col items-start justify-start w-full h-full">
            <div className="border-t border-t-[#575755] w-full flex items-start justify-between ">
            <h1 className='py-7 text-left text-[22px] font-bold text-[#BFBFB1] sm:py-6  sm:text-[32] md:py-5 md:text-[30px] lg:text-[42px]  3xl:py-6 '>My Skills</h1>
             <span>.</span>
            </div>
            <div className="grid-gap relative flex min-h-[20vh] flex-col w-[90%] place-items-start pb-12 lg:grid lg:grid-cols-12">
              <p className=' col-span-3 max-w-[40ch] pt-2 text-base font-medium text-[#BABAB1] lg:col-span-6'>Lorem ipsum dolor sit amet consectetur. 
Morbi nunc pellentesque sed at lorem 
viverra enim et. Diam ac augue tortor 
orci gravida ullamcorper.</p>
<div className="col-span-3"></div>
            <div className="col-span-3 flex w-full flex-col gap-y-4  pt-8 lg:pt-0 ">
              <span className='text-[#BABAB1] text-[22px] border-b pb-2 border-[#BABAB1]'>ReactJs</span>
              <span className='text-[#BABAB1] text-[22px] border-b border-[#BABAB1]'>TailwindCSS </span>
              <span className='text-[#BABAB1] text-[22px] border-b border-[#BABAB1]'>Figma</span>
              <span className='text-[#BABAB1] text-[22px] border-b border-[#BABAB1]'>Next.Js</span>

            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
