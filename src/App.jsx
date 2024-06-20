import { useEffect } from "react";
import { gsap } from "gsap";
import Nav from "./component/Nav";
import Hero from "./component/Hero";
import About from "./component/About";
import Services from "./component/Services";
import Projects from "./component/Projects";
import Footer from "./component/Footer";

function App() {
  useEffect(() => {
    const loader = () => {
      console.log("Loader function triggered");
      
      const TLLOAD = gsap.timeline({
        defaults: {
          ease: "power2",
        },
      });

      TLLOAD
        .to(".text-container", { height: "auto", duration: 0.7, onComplete: () => console.log("Step 1 complete") })
        .to(".text1", { height: "auto", duration: 0.4, onComplete: () => console.log("Step 2 complete") }, "-=0.1")
        .to(".text2", { height: "auto", duration: 0.4, onComplete: () => console.log("Step 3 complete") }, "-=0.1")
        .to(".text-container", { y: "-250%", duration: 0.8, delay: 0.2, onComplete: () => console.log("Step 4 complete") })
        .to(".preload-container", {
          opacity: 0,
          scale: 1.5,
          y: "-100%",
          borderRadius: "60%",
          duration: 0.4,
          onComplete: () => console.log("Step 5 complete"),
        }, "-=0.3")
        .add(() => {
          console.log("Final step: showing main content");
          document.querySelector(".containerpage").style.opacity = "1";
          document.querySelector(".load-container").style.display = "none";
        });
    };

    window.addEventListener("load", loader);

    return () => {
      window.removeEventListener("load", loader);
    };
  }, []);

  return (
    <div className="bg-secondary-200">
      <div className="absolute bg-black load-container inset-0 flex justify-center items-center z-50 preload-container">
        <div className="anim-bl w-full h-full flex justify-center items-center">
          <div className="text-container w-full h-auto absolute flex flex-col justify-center items-center z-20">
            <h2 className="text-[#E8E4D1] text1 text-[30px] font-bold">Amine Asfar</h2>
            <h2 className="text-[#D6D0B3] text2 text-[36px] font-bold">@ Porto 2024</h2>
          </div>
        </div>
      </div>

      <div className="h-full w-full containerpage" style={{ opacity: 0 }}>
        <Nav />
        <Hero />
        <About />
        <Services />
        <Projects />
        <Footer />
      </div>
    </div>
  );
}

export default App;
