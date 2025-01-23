"use client"

// PLUGINS
import { motion } from "framer-motion"
import React from "react";

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
      <div>

      </div>
    )
  }

      // TAILWIND AND JS

      // <div className="overflow-hidden flex">
      //     <div className="flex gap-10 animate-marquee">
      //       {[...laurelsRowOne, ...laurelsRowOne].map((src, index) => (
      //         <Image
      //           key={index}
      //           src={src}
      //           alt={`Laurel ${index + 1}`}
      //           width={100} // Set the width for each image
      //           height={100} // Set the height for each image
      //           className="object-contain"
      //         />
      //       ))}
      //     </div>
      // </div>

    




      // FRAMER MOTION MARQUEE

  //     <div className="container mx-auto overflow-hidden">
  //       <div className="flex marquee-gradient pt-5 pb-3">
  //         <motion.div initial={{ x: 0 }} animate={{x:"-100%"}} transition={{duration: 30, repeat: Infinity, ease: "linear"}} className="flex flex-shrink-0">
  //           {laurelsRowOne.map((image, index) => {
  //             return (
  //               <Image
  //                 src={image}
  //                 key={index}
  //                 alt={`Image ${index + 1}`}
  //                 width={56}
  //                 height={40}
  //                 className="w-56 h-40 pr-20"
  //               />
  //             );
  //           })}
  //         </motion.div>

  //         <motion.div initial={{ x: 0 }} animate={{x:"-100%"}} transition={{duration: 30, repeat: Infinity, ease: "linear"}} className="flex flex-shrink-0">
  //           {laurelsRowOne.map((image, index) => {
  //             return (
  //               <Image
  //                 src={image}
  //                 key={index}
  //                 alt={`Image ${index + 1}`}
  //                 width={56}
  //                 height={40}
  //                 className="w-56 h-40 pr-20"
  //               />
  //             );
  //           })}
  //         </motion.div>
  //       </div>

  //       <div className="flex marquee-gradient pb-5">
  //         <motion.div initial={{ x: "-100%" }} animate={{x: 0}}  transition={{duration: 30, repeat: Infinity, ease: "linear"}} className="flex flex-shrink-0">
  //           {laurelsRowTwo.map((image, index) => {
  //             return (
  //               <Image
  //                 src={image}
  //                 key={index}
  //                 alt={`Image ${index + 1}`}
  //                 width={56}
  //                 height={40}
  //                 className="w-56 h-40 pr-20"
  //               />
  //             );
  //           })}
  //         </motion.div>

  //         <motion.div initial={{ x: "-100%" }} animate={{x: 0}} transition={{duration: 30, repeat: Infinity, ease: "linear"}} className="flex flex-shrink-0">
  //           {laurelsRowTwo.map((image, index) => {
  //             return (
  //               <Image
  //                 src={image}
  //                 key={index}
  //                 alt={`Image ${index + 1}`}
  //                 width={56}
  //                 height={40}
  //                 className="w-56 h-40 pr-20"
  //               />
  //             );
  //           })}
  //         </motion.div>
  //       </div>
  //   </div>
  //   );
  // }
  



  // OR TYPESCRIPT AND TAILWIND
  
  // const InfiniteMarquee: React.FC = () => {
  //   return (
  //     <div className="relative overflow-hidden bg-white py-4">
  //       {/* Infinite scroll container */}
  //       <div className="flex animate-marquee whitespace-nowrap">
  //         {/* Render images twice for seamless scrolling */}
  //         {[...laurelsRowTwo, ...laurelsRowTwo].map((src, index) => (
  //           <div key={index} className="mx-4">
  //             <Image
  //               src={src}
  //               alt={`Laurel ${index}`}
  //               width={150} // Adjust width
  //               height={100} // Adjust height
  //               className="object-contain"
  //             />
  //           </div>
  //         ))}
  //       </div>
  //     </div>
  //   );
  // };
  
  // export default InfiniteMarquee;
  
  
  
