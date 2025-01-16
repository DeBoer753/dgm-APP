"use client"

// REACT
import { useState } from "react";

// COMPONENTS
import Image from "next/image";
import Box from "@/components/custom/layout/box";
import FlexStack from "@/components/custom/layout/flex-stack";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui/carousel"

// MUSIC
export default function Music() {
    // Tracks active carousel item:
    const [activeSlide, setActiveSlide] = useState(0)

    // Album info data to be mapped:
    const albumInfo = [
        {
            image: "/imgs/album_beginning.jpg",
            alt: "Cover art for 'Beginning of Journey' album",
            description: "this is a description of Journey"
        },
        {
            image: "/imgs/album_beethoven.png",
            alt: "Cover art for 'Beethoven' album",
            description: "this is a description of Beethoven"
        }
    ]

    // Handle navigation clicks:
    const handleNext = () => {
        setActiveSlide((prev) => (prev + 1) % albumInfo.length);
    };
    
    const handlePrevious = () => {
        setActiveSlide((prev) => (prev - 1 + albumInfo.length) % albumInfo.length);
    };


    return (
        <div className="border border-red-300">

            <h1 className="text-center">MUSIC</h1>
            <Box className="flex flex-row">
                
                <FlexStack>
                    <h2>Albums</h2>
                    <Carousel className="border border-red-300 w-[400px]">
                        <CarouselContent>
                            {albumInfo.map((album, index) => (
                                <CarouselItem key={index}>
                                    <Image
                                        src={album.image}
                                        alt={album.alt}
                                        width={400}            
                                        height={160}              
                                        className="rounded-md object-cover"
                                        priority // Improves LCP by preloading
                                        /> 
                                        <div>
                                            <p>{album.description}</p>
                                        </div>
                                </CarouselItem>                               
                            ))}
                        </CarouselContent>

                        {/* Navigation Buttons */}  
                        <CarouselPrevious />
                        <CarouselNext/>
                    </Carousel>

                    {/* Dynamic Album Description */}
                </FlexStack>
            </Box>

        </div>
    );
}



































    
//     return (
//         <div className="border border-red-300">
//             <h1 className="text-center">MUSIC</h1>
//             <Box className="flex flex-row">
//                 <FlexStack>
//                     <h2>Albums</h2>
//                     <Carousel className="border border-red-300 w-[400px]">
//                         <CarouselContent>
//                             <CarouselItem>
//                                 <Image
//                                     src="/imgs/album_beginning.jpg" 
//                                     alt="Image of beginning of journey album"
//                                     width={400}            
//                                     height={160}              
//                                     className="rounded-md object-cover"
//                                     priority // Improves LCP by preloading
//                                 /> 
//                             </CarouselItem>
//                             <CarouselItem>
//                                 <Image
//                                     src="/imgs/album_beethoven.png" 
//                                     alt="Image of beethoven liszt the pastoral symphony album"
//                                     width={400}            
//                                     height={160}              
//                                     className="rounded-md object-cover"
//                                     priority // Improves LCP by preloading
//                                 /> 
//                             </CarouselItem>
//                         </CarouselContent>
//                         <CarouselPrevious />
//                         <CarouselNext />
//                     </Carousel>
//                     <div>
//                         <p>album one div box with content</p>
//                     </div>
//                     <div>
//                         <p>album two div box with content</p>
//                     </div>
//                 </FlexStack>
//                 <FlexStack>
//                     <h2>Singles</h2>
//                     <Carousel className="border border-red-300 w-[400px]">
//                         <CarouselContent>
//                             <CarouselItem>
//                             <Image
//                                     src="/imgs/single_desiree.png" 
//                                     alt="Image of beethoven liszt the pastoral symphony album"
//                                     width={400}            
//                                     height={160}              
//                                     className="rounded-md object-cover"
//                                     priority // Improves LCP by preloading
//                                 /> 
//                             </CarouselItem>
//                             <CarouselItem>
//                             <Image
//                                     src="/imgs/single_gladiator.png" 
//                                     alt="Image of beethoven liszt the pastoral symphony album"
//                                     width={400}            
//                                     height={160}              
//                                     className="rounded-md object-cover"
//                                     priority // Improves LCP by preloading
//                                 /> 
//                             </CarouselItem>
//                             <CarouselItem>
//                             <Image
//                                     src="/imgs/single_honkytonk.png" 
//                                     alt="Image of beethoven liszt the pastoral symphony album"
//                                     width={400}            
//                                     height={160}              
//                                     className="rounded-md object-cover"
//                                     priority // Improves LCP by preloading
//                                 /> 
//                             </CarouselItem>
//                             <CarouselItem>
//                             <Image
//                                     src="/imgs/single_changingstates.png" 
//                                     alt="Image of beethoven liszt the pastoral symphony album"
//                                     width={400}            
//                                     height={160}              
//                                     className="rounded-md object-cover"
//                                     priority // Improves LCP by preloading
//                                 /> 
//                             </CarouselItem>         
                            
//                         </CarouselContent>
//                         <CarouselPrevious />
//                         <CarouselNext />
//                     </Carousel>
//                     <div>
//                         <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut, nulla? Sapiente at, quam alias nostrum repudiandae ipsa officia ex fugit dolorum recusandae ab, quaerat magnam eveniet delectus esse? Vel, perferendis?</p>
//                     </div>
//                 </FlexStack>
//             </Box>

//         </div>
//     );
// }