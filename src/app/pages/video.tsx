// PLUGINS
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeftSquare, ArrowRightSquare } from "lucide-react";
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
      <div className="flex flex-col items-center w-full h-auto h-[900px] pt-20 pb-20 bg-gradient-to-b from-zinc-600 to-zinc-400">
        <motion.div
          className="flex md:flex-row flex-col justify-between max-w-[1200px] w-11/12 h-500 p-5"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1, transition: { duration: 2.0 } }}
          viewport={{ once: true }}
          aria-labelledby="video-title"
          tabIndex={0}
        >
          <FlexStack className="justify-center text-white w-full overflow-hidden">
            <h1 className="text-2xl pt-5 px-5 font-thin text-opacity-90">
              Video
            </h1>
            <h2 
              className="font-bold text-xl pt-5 px-5"
              id="video-title"
              >Breaking Out</h2>
            <motion.p
              className="py-5 px-5"
              initial={{ x: -100 }}
              whileInView={{ x: 0, transition: { duration: 1 } }}
              viewport={{ once: true }}
            >
              <span className="italic">&apos;Breaking Out&apos;</span> is a visually and emotionally intense short film set to a turbulent piano improvisation, blending raw emotion, nature&apos;s forces, and synchronized imagery in a mesmerizing psychological journey.
              <br />
              <br />
              As of January 17, 2024, &apos;Breaking Out&apos; has been awarded 83 wins in 56 festivals, 7 finalist, 44 Semi-Finalist, and 5 Honorable Mentions!`
            </motion.p>
          </FlexStack>

          <div className="w-full flex flex-col md:h-[500px] h-[435px] justify-center">      {/* first div to fix flickering - This divs height was added to fix flickering and also the other div below with similar comment */}
          <AnimatePresence mode="popLayout">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              aria-live="polite"
              role="img"
              aria-label={
                images[currentIndex].alt ||
                "Slideshow image from Breaking Out music video"
              }
            >
              <Image
                src={images[currentIndex].src}
                alt={images[currentIndex].alt}
                width={300}
                height={160}
                className="rounded-md object-contain py-5 px-5 w-full"
                priority={currentIndex === 0}
                loading="eager"
              />
            </motion.div>
          </AnimatePresence>

            <div className="flex flex-row items-center justify-center text-white h-[100px] pb-3 gap-10">      {/* second div to fix flickering - height was added to fix flickering as well*/}
              <button
                onClick={handlePrev}
                aria-label="left arrow for previous image"
                role="button"
                tabIndex={0}
                onKeyDown={(e) =>
                  (e.key === "Enter" || e.key === " ") && handlePrev()
                }
                className="cursor-pointer hover:text-gray-500"
              >
                <ArrowLeftSquare aria-hidden="true" size={44} />
              </button>

              <button
                onClick={handleNext}
                aria-label="right arrow for next image"
                role="button"
                tabIndex={0}
                onKeyDown={(e) =>
                  (e.key === "Enter" || e.key === " ") && handleNext()
                }
                className="cursor-pointer hover:text-gray-500"
              >
                <ArrowRightSquare aria-hidden="true" size={44} />
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </>
  );
}

// Note: ADA Compliance - aria-hidden, tab index, onKeyDown, aria-label, role, aria-live=polite
