// COMPONENTS
import Navbar from "@/components/ui/navbar"; 

// PAGES
import Banner from "./pages/banner";
import About from "./pages/about";
import Video from "./pages/video";

// HOME (Page or App)
export default function Home() {
  return (
    <div className="flex flex-col items-center">
      <h1>NAVBAR</h1>
      <Navbar />
      <Banner /> 
      <About />
      <Video />
    </div>
  );
}
