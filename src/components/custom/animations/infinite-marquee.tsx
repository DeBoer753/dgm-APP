"use client"

// PLUGINS
import { motion } from "framer-motion"

// COMPONENTS
import Image from "next/image";
import Box from "../layout/box";
import { div } from "motion/react-client";

// INFINITE MARQUEE
export default function InfiniteMarquee() {  
    // 1 to 10 laurels: 
    const laurelsRowOne = [
        "/imgs/laurels1to10/1.png",
        "/imgs/laurels1to10/2.png",
        "/imgs/laurels1to10/3.png",
        "/imgs/laurels1to10/4.png",
        "/imgs/laurels1to10/5.png",
        "/imgs/laurels1to10/6.png",
        "/imgs/laurels1to10/7.png",
        "/imgs/laurels1to10/8.png",
        "/imgs/laurels1to10/9.png",
        "/imgs/laurels1to10/10.png"
    ]
    // 11 to 20 laurels: 
    const laurelsRowTwo = [
        "/imgs/laurels11to20/11.png",
        "/imgs/laurels11to20/12.png",
        "/imgs/laurels11to20/13.png",
        "/imgs/laurels11to20/14.png",
        "/imgs/laurels11to20/15.png",
        "/imgs/laurels11to20/16.png",
        "/imgs/laurels11to20/17.png",
        "/imgs/laurels11to20/18.png",
        "/imgs/laurels11to20/19.png",
        "/imgs/laurels11to20/20.png"
    ]

    return (
      <div className="bg-emerald-700 py-8 overflow-hidden">
      {/* First Row */}
      <Box>
        <div className="flex animate-marquee">
          {laurelsRowOne.concat(laurelsRowOne).map((src, index) => (
            <Image
              key={index}
              src={src}
              alt={`Laurel ${index + 1}`}
              width={100} // Set the width for each image
              height={100} // Set the height for each image
              className="object-contain"
            />
          ))}
        </div>
      </Box>

      {/* Second Row */}

    </div>


















      // FRAMER MOTION MARQUEE

      // <div className="container mx-auto overflow-hidden">
      //   <div className="flex marquee-gradient pt-5 pb-3">
      //     <motion.div initial={{ x: 0 }} animate={{x:"-100%"}} transition={{duration: 30, repeat: Infinity, ease: "linear"}} className="flex flex-shrink-0">
      //       {laurelsRowOne.map((image, index) => {
      //         return (
      //           <Image
      //             src={image}
      //             key={index}
      //             alt={`Image ${index + 1}`}
      //             width={56}
      //             height={40}
      //             className="w-56 h-40 pr-20"
      //           />
      //         );
      //       })}
      //     </motion.div>

      //     <motion.div initial={{ x: 0 }} animate={{x:"-100%"}} transition={{duration: 30, repeat: Infinity, ease: "linear"}} className="flex flex-shrink-0">
      //       {laurelsRowOne.map((image, index) => {
      //         return (
      //           <Image
      //             src={image}
      //             key={index}
      //             alt={`Image ${index + 1}`}
      //             width={56}
      //             height={40}
      //             className="w-56 h-40 pr-20"
      //           />
      //         );
      //       })}
      //     </motion.div>
      //   </div>

      //   <div className="flex marquee-gradient pb-5">
      //     <motion.div initial={{ x: "-100%" }} animate={{x: 0}}  transition={{duration: 30, repeat: Infinity, ease: "linear"}} className="flex flex-shrink-0">
      //       {laurelsRowTwo.map((image, index) => {
      //         return (
      //           <Image
      //             src={image}
      //             key={index}
      //             alt={`Image ${index + 1}`}
      //             width={56}
      //             height={40}
      //             className="w-56 h-40 pr-20"
      //           />
      //         );
      //       })}
      //     </motion.div>

      //     <motion.div initial={{ x: "-100%" }} animate={{x: 0}} transition={{duration: 30, repeat: Infinity, ease: "linear"}} className="flex flex-shrink-0">
      //       {laurelsRowTwo.map((image, index) => {
      //         return (
      //           <Image
      //             src={image}
      //             key={index}
      //             alt={`Image ${index + 1}`}
      //             width={56}
      //             height={40}
      //             className="w-56 h-40 pr-20"
      //           />
      //         );
      //       })}
      //     </motion.div>
      //   </div>
      // </div>
    );
  }
  