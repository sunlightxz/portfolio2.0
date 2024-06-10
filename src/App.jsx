import { useEffect } from "react";
import { gsap } from "gsap";
import Nav from "./component/Nav";
import Hero from "./component/Hero";
import About from "./component/About";
import Services from "./component/Services";
import Portfolio from "./component/Portfolio";
import Footer from "./component/Footer";

function App() {
  useEffect(() => {
    const loader = () => {
      const TLLOAD = gsap.timeline({
        default: {
          ease: "power2"
        }
      });

      TLLOAD 
        .to('.text-container', { height: "auto", duration: 0.8 })
        .to('.text1', { height: "auto", duration: 0.2 }, '-=0.1')
        .to('.text2', { height: "auto", duration: 0.2 }, '-=0.1')
        .to('.text-container', { y: "-150%", duration: 0.7, delay: 0.3 })
        .add(() => {
          document.querySelector('.containerpage').style.opacity = "1";
          document.querySelector('.load-container').style.display = "none";
        });
    };

    window.addEventListener('load', loader);

    return () => {
      window.removeEventListener('load', loader);
    };
  }, []);

  return (
    <div className="bg-secondary-100 ">
      {/* Preload animation container */}
      <div className="absolute bg-black load-container inset-0 flex justify-center items-center z-10 preload-container">
        <div className="anim-bl w-full h-full flex justify-center items-center">
          <div className="text-container w-full h-0 absolute flex flex-col justify-center items-center  z-20 overflow-hidden">
            <h2 className="text-[#DEDED6] text1 text-[30px] font-bold ">Amine Asfar</h2>
            <h2 className="text-[#DEDED6] text2 text-[26px] font-bold ">Porto@2024</h2>
          </div>
        </div>
      </div>

      {/* Page content */}
      <div className="h-full w-full containerpage" style={{opacity: 0}}>
        <Nav />
        <Hero />
        <About />
        <Services />
        <Portfolio />
        <Footer />
      </div>
    </div>
  );
}

export default App;
