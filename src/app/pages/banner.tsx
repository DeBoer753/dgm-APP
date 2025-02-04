"use client"

// COMPONENTS
import FadingBackground from '@/components/custom/animations/FadingBackground'

// BANNER
export default function Banner() {
    return (
      <div 
          className="relative w-full h-[400px] sm:h-[530px] bg-scroll xl:bg-fixed bg-cover bg-center" 
          style={{backgroundImage: "url('/imgs/david_blackwhite.png')"}} 
          role='img'
          aria-label="Black and white portrait of David Glass" 
          tabIndex={0}
      >
        <FadingBackground />
      </div>
    );
}

// Note: ADA Compliance - aria, tab index, and role being used