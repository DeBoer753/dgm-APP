"use client"

import FadingBackground from '@/components/custom/animations/FadingBackground'

// BANNER
export default function Banner() {
    return (
      <div className="relative w-full h-[570px] bg-scroll xl:bg-fixed bg-cover bg-center" style={{backgroundImage: "url('/imgs/david_blackwhite.png')"}}>
        <FadingBackground />
      </div>
    );
}