// PLUGINS
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

// COMPONENTS
import Image from "next/image";
import FlexStack from "@/components/custom/layout/flex-stack";

// VIDEO
export default function Video() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    {
      src: "/imgs/breakingout_banner.png",
      alt: "Image of David Glass's award winning 'film Breaking Out'",
    },
    {
      src: "/imgs/david_trophy.png",
      alt: "Image of David Glass holding a trophy award by his piano wearing black t-shirt and blue jeans",
    },
    {
      src: "/imgs/david_piano2.png",
      alt: "Image of David Glass sitting at a piano looking away from camera",
    },
  ];

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <>
      <div className="flex flex-col items-center w-full pt-20 pb-20 bg-gradient-to-b from-zinc-600 to-zinc-400">
        <motion.div
          className="flex md:flex-row flex-col justify-between max-w-[1200px] w-11/12 h-500 p-5"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1, transition: { duration: 2.0 } }}
          viewport={{ once: true }}
        >
          <FlexStack className="justify-center text-white w-full overflow-hidden">
            <h1 className="text-2xl pt-5 px-5 font-thin text-opacity-90">
              Video
            </h1>
            <h2 className="font-bold text-xl pt-5 px-5">Breaking Out</h2>
            <motion.p
              className="py-5 px-5"
              initial={{ x: -100 }}
              whileInView={{ x: 0, transition: { duration: 1 } }}
              viewport={{ once: true }}
            >
              “Breaking Out” is a short music video produced by David Glass. The
              film is centered around a dramatic piano improvisation David
              recorded several years ago. The short film is a psychological
              rollercoaster containing a variety of footage that express a wide
              range of intense emotions and strong forces of nature, and yet
              there is a beauty to the chaos. As in a ballet, the music is in
              synchronicity with the dramatic scenes.
            </motion.p>
          </FlexStack>

          <div className="w-full flex flex-col justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4 }}
                aria-live="polite" // Announce image changes
                role="img" // Ensure screen readers recognize this as an image
                aria-label={
                  images[currentIndex].alt ||
                  "Slideshow image from Breaking Out music video"
                }
              >
                <Image
                  src={images[currentIndex].src}
                  alt={
                    images[currentIndex].alt ||
                    "Slideshow image from Breaking Out music video"
                  }
                  width={300}
                  height={160}
                  className="rounded-md object-contain py-5 px-5 w-full"
                  priority
                />
              </motion.div>
            </AnimatePresence>

            <div className="flex flex-row items-center justify-center text-white pb-3 gap-10">
              <button
                onClick={handlePrev}
                aria-label="left arrow for previous image"
                role="button"
                tabIndex={0}
                onKeyDown={(e) =>
                  (e.key === "Enter" || e.key === " ") && handlePrev()
                }
                className="h-8 w-8 cursor-pointer hover:text-gray-500"
              >
                <ChevronLeft aria-hidden="true" />
              </button>

              <button
                onClick={handleNext}
                aria-label="right arrow for next image"
                role="button"
                tabIndex={0}
                onKeyDown={(e) =>
                  (e.key === "Enter" || e.key === " ") && handleNext()
                }
                className="h-8 w-8 pl-1 cursor-pointer hover:text-gray-500"
              >
                <ChevronRight aria-hidden="true" />
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </>
  );
}

// Note: ADA Compliance - aria-hidden, tab index, onKeyDown, aria-label, role, aria-live=polite
