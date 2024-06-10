import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import Lenis from "@studio-freight/lenis";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Nav = () => {
    const navBar = useRef(null);
  

    return (
        <header ref ={navBar}>
         nav
        </header>
    );
}

export default Nav;
