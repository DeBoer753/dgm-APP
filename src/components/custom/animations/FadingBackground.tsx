import React, { useEffect, useState } from "react";

const FadingBackground = () => {
  const [opacity, setOpacity] = useState(0.3); // Initial opacity

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY || window.pageYOffset;

      // Adjust opacity dynamically (clamp values between 0 and 1)
      const newOpacity = Math.min(0, Math.max(0, scrollY / 500));
      setOpacity(newOpacity);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className="absolute inset-0 flex items-center justify-center transition-opacity duration-500"
      style={{
        backgroundColor: `rgba(0, 0, 0, ${opacity})`,
      }}
    >
      {/* <h1 className="text-white">Content Goes Here</h1> */}
    </div>
  );
};

export default FadingBackground;
