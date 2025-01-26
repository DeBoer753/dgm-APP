"use client"

import FadingBackground from '@/components/custom/animations/FadingBackground'

// BANNER
export default function Banner() {
    return (
      <div className="relative w-full h-[570px] bg-fixed bg-center bg-cover" style={{ backgroundImage: "url('/imgs/david_blackwhite.png')", backgroundPositionY: "-70px", backgroundPositionX: "-110px"}}>
        <FadingBackground />
        <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
            {/* <h1 className="text-white text-6xl [font-family:'Dancing_Script',cursive] font-bold">David Glass</h1> */}
        </div>
      </div>
    );
}