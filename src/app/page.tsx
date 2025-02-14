// PLUGINS
"use client";
import { useRef } from "react";

// COMPONENTS
import Navbar from "@/components/ui/navbar";
import Marquee from "@/components/custom/animations/Marquee";
import Footer from "@/components/ui/footer";
import Head from "next/head";
import MusicPlayer from "@/components/ui/music-player";

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
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1"
        />
      </Head>
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
        <div>
          <Marquee />
        </div>
        <div ref={aboutRef}>
          <About />
        </div>
        <div ref={videoRef}>
          <Video />
        </div>
        <div
          style={{
            backgroundImage: `linear-gradient(to bottom, rgba(161, 161, 170, 1) 0%, rgba(161, 161, 170, 0.7) 30%, rgba(228, 228, 231, 0) 80%), url('/imgs/music&contact_bg.jpg')`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div ref={musicRef}>
            <Music />
          </div>
          <div ref={contactRef}>
            <Contact />
          </div>
        </div>
        <Footer />
        {/* MusicPlayer is rendered globally below the footer */}
        <MusicPlayer />
      </div>
    </div>
  );
}
