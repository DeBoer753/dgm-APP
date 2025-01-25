"use client"
import Marquee from "react-fast-marquee";
import Image from "next/image";


// MARQUEE
export default function TestMarquee() {

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
        <div className="">
            <Marquee>
                <div className="">
                    {upperMarquee.map((image, index) => {
                    return (
                        <img
                        src={image}
                        key={index}
                        alt={`Image ${index + 1}`}
                        className="image_wrapper"
                        />
                    );
                    })}
            </div>
            </Marquee>
        </div>
    );
}