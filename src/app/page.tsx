// PLUGINS
"use client"
import { useRef } from "react";

// COMPONENTS
import Navbar from "@/components/ui/navbar"; 
import Marquee from "@/components/custom/animations/Marquee"
import Footer from "@/components/ui/footer"
// import InfiniteMarquee from "@/components/custom/animations/infinite-marquee";
// import TestMarquee from "@/components/custom/animations/test-marquee"

// PAGES
import Banner from "./pages/banner";
import About from "./pages/about";
import Video from "./pages/video";
import Music from "./pages/music";
import Contact from "./pages/contact";

// HOME (Page or App)
export default function Home() {

  // Create refs for each section for click to scroll                        
  const homeRef = useRef<HTMLDivElement>(null!);
  const aboutRef = useRef<HTMLDivElement>(null!);
  const videoRef = useRef<HTMLDivElement>(null!);
  const musicRef = useRef<HTMLDivElement>(null!);
  const contactRef = useRef<HTMLDivElement>(null!);

  
  
  return (
    <div>
      <Navbar 
        homeRef={homeRef}
        aboutRef={aboutRef}
        videoRef={videoRef}
        musicRef={musicRef}
        contactRef={contactRef}
      />
      <div className="flex flex-col ">
        <div ref={homeRef}>
          <Banner /> 
        </div>
        <div >
          <Marquee /> 
        </div>
        <div ref={aboutRef}>
          <About />
        </div>
        <div ref={videoRef}>
          <Video />
        </div>
        {/* <div ref={musicRef}>
          <Music /> 
        </div> */}
        <div ref={contactRef}>
          <Contact />
        </div>
        <Footer />
      </div>
    </div>
  );
}
