import React, { memo } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const MarqueeItemComponent = ({ images, from, to }) => {
  return (
    <div className="flex MyGradient overflow-hidden">
      <motion.div
        initial={{ x: from }}
        animate={{ x: to }}
        transition={{ duration: 130, repeat: Infinity, ease: "linear" }}
        className="flex flex-shrink-0"
      >
        {images.map((image, index) => (
          <Image
            className="h-20 w-auto pr-10 object-contain"
            src={image}
            key={index}
            alt={`marquee-image-${index}`}
            width={100} // Adjust size based on actual needs
            height={100} // Adjust size based on actual needs
            priority // Ensures these images load first
          />
        ))}
      </motion.div>

      <motion.div
        initial={{ x: from }}
        animate={{ x: to }}
        transition={{ duration: 130, repeat: Infinity, ease: "linear" }}
        className="flex flex-shrink-0"
      >
        {images.map((image, index) => (
          <Image
            className="h-20 w-auto pr-10 object-contain"
            src={image}
            key={index}
            alt={`marquee-image-${index}`}
            width={100} // Adjust size based on actual needs
            height={100} // Adjust size based on actual needs
            priority // Ensures these images load first
          />
        ))}
      </motion.div>
    </div>
  );
};

// Wrap with memo for performance optimization
const MarqueeItem = memo(MarqueeItemComponent);

MarqueeItem.displayName = "MarqueeItem";

export default MarqueeItem;
