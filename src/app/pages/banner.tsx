"use client"

import FadingBackground from '@/components/custom/animations/FadingBackground'

// BANNER
export default function Banner() {
    return (
      <div className="relative w-full h-[570px] bg-fixed bg-cover" style={{ backgroundImage: "url('/imgs/david_blackwhite.png')", backgroundPositionY: "-70px", backgroundPositionX: "-110px"}}>
        <FadingBackground />
      </div>
    );
}