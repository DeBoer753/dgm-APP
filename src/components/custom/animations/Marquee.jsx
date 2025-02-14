import React from "react";
import MarqueeItem from "./MarqueeItem";
import { div } from "motion/react-client";

const Marquee = () => {

  const upperMarquee = [
    "/imgs/laurels1to20/1.png",
    "/imgs/laurels1to20/2.png",
    "/imgs/laurels1to20/3.png",
    "/imgs/laurels1to20/4.png",
    "/imgs/laurels1to20/5.png",
    "/imgs/laurels1to20/6.png",
    "/imgs/laurels1to20/7.png",
    "/imgs/laurels1to20/8.png",
    "/imgs/laurels1to20/9.png",
    "/imgs/laurels1to20/10.png",
    "/imgs/laurels1to20/11.png",
    "/imgs/laurels1to20/12.png",
    "/imgs/laurels1to20/13.png",
    "/imgs/laurels1to20/14.png",
    "/imgs/laurels1to20/15.png",
    "/imgs/laurels1to20/16.png",
    "/imgs/laurels1to20/17.png",
    "/imgs/laurels1to20/18.png",
    "/imgs/laurels1to20/19.png",
    "/imgs/laurels1to20/20.png"
  ];

  const lowerMarquee = [
    "/imgs/laurels21to38/21.png",
    "/imgs/laurels21to38/22.png",
    "/imgs/laurels21to38/23.png",
    "/imgs/laurels21to38/24.png",
    "/imgs/laurels21to38/25.png",
    "/imgs/laurels21to38/26.png",
    "/imgs/laurels21to38/27.png",
    "/imgs/laurels21to38/28.png",
    "/imgs/laurels21to38/29.png",
    "/imgs/laurels21to38/30.png",
    "/imgs/laurels21to38/31.png",
    "/imgs/laurels21to38/32.png",
    "/imgs/laurels21to38/33.png",
    "/imgs/laurels21to38/34.png",
    "/imgs/laurels21to38/35.png",
    "/imgs/laurels21to38/36.png",
    "/imgs/laurels21to38/37.png",
    "/imgs/laurels21to38/38.png",
    // "/imgs/laurels21to38/9.png",
    // "/imgs/laurels21to38/10.png",
  ];

  return (
    <div className="bg-zinc-800">
      <div className="container mx-auto pt-5 space-y-5">
        <MarqueeItem images={upperMarquee} from={0} to={"-100%"} />
        <MarqueeItem images={lowerMarquee} from={"-100%"} to={0} />
      </div>
    </div>
  );
};

export default Marquee;