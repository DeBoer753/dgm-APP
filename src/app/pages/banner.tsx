import React, { useEffect, useRef } from "react";

export default function Banner() {
  const bannerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!bannerRef.current) return;

      const scrollY = window.scrollY || window.pageYOffset;
      const opacity = Math.max(0, 1 - scrollY / 400);

      bannerRef.current.style.setProperty("--image-opacity", opacity.toString());
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative w-full h-[400px] sm:h-[530px] bg-black">
      <div
        ref={bannerRef}
        className="absolute inset-0 bg-cover bg-center transition-opacity duration-75"
        style={{
          backgroundImage: "url('/imgs/david_blackwhite.png')",
          opacity: "var(--image-opacity, 1)",
        }}
        role="img"
        aria-label="Black and white portrait of David Glass"
        tabIndex={0}
      />
    </div>
  );
}