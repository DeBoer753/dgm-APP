
"use client"
// COMPONENTS
import Navbar from "@/components/ui/navbar"; 
import InfiniteMarquee from "@/components/custom/animations/infinite-marquee";
import Marquee from "@/components/custom/animations/Marquee"


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
        {/* <InfiniteMarquee /> */}
        {/* <Marquee />  */}
        <About />
        <Video />
        <Music />
        <Contact />
      </div>
    </div>
  );
}
