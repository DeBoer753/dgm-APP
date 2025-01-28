"use client"

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
  return (
    <div>
      <Navbar />
      <div className="flex flex-col ">
        <Banner /> 
        <Marquee /> 
        <About />
        <Video />
        <Music /> 
        <Contact />
        <Footer />
      </div>
    </div>
  );
}
