import React from "react";
import MarqueeItem from "./MarqueeItem";

const Marquee = () => {
  const upperMarquee = [
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
  ];

  const lowerMarquee = [
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
  ];

  return (
    <div className="container mx-auto">
      <MarqueeItem images={upperMarquee} from={0} to={"-100%"} />
      <MarqueeItem images={lowerMarquee} from={"-100%"} to={0} />
    </div>
  );
};

export default Marquee;