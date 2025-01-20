import { motion } from "framer-motion";

// COMPONENTS
import Image from "next/image";
import Box from "../layout/box";

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
      <div className="flex items-center flex-col bg-emerald-700 justify-center overflow-hidden max-w-[1200px] mx-auto">
        <Box>
        <div className="relative overflow-hidden max-w-[1200px] mx-auto">
        <div className="flex animate-marquee whitespace-nowrap gap-7">
          {laurelsRowOne.concat(laurelsRowOne).map((src, index) => (
            <Image
              key={index}
              src={src}
              alt={`Laurel ${index + 1}`}
              width={100} // Adjust to fit logos
              height={100} // Adjust to fit logos
              className="object-contain"
            />
          ))}
        </div>
      </div>
    </Box>

    {/* Second Marquee */}
    <Box>
      <div className="relative overflow-hidden max-w-[1200px] mx-auto">
        <div className="flex animate-marquee-reverse whitespace-nowrap gap-7">
          {laurelsRowTwo.concat(laurelsRowTwo).map((src, index) => (
            <Image
              key={index}
              src={src}
              alt={`Laurel ${index + 11}`}
              width={100} // Adjust to fit logos
              height={100} // Adjust to fit logos
              className="object-contain"
            />
          ))}
        </div>
      </div>
        </Box>
      </div>
    );
  }
  