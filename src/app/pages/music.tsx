"use client"

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

    // Albums info data to be mapped:
    const albumInfo = [
        {
            image: "/imgs/album_beginning.jpg",
            alt: "Cover art for 'Beginning the Journey' album",
            title: "Beginning the Journey",
            description: "this is a description Beginning the Journey"
        },
        {
            image: "/imgs/album_beethoven.png",
            alt: "Cover art for 'Beethoven' album",
            title: "Beethoven Liszt, The Pastoral Symphony",
            description: "this is a description of Beethoven"
        }
    ]

    // Singles info data to be mapped:
    const singleInfo = [
        {
            image: "/imgs/single_desiree.png",
            alt: "Cover art for 'Desiree' single",
            title: "Desiree",
            description: "this is a description of desiree"
        },
        {
            image: "/imgs/single_gladiator.png",
            alt: "Cover art for 'Gladiator' single",
            title: "Gladiator",
            description: "this is a description of gladiator"
        },
        {
            image: "/imgs/single_honkytonk.png",
            alt: "Cover art for 'Honky Tonk' single",
            title: "Honky Tonk",
            description: "this is a description of honky tonk"
        },
        {
            image: "/imgs/single_changingstates.png",
            alt: "Cover art for 'Changing States' single",
            title: "Changing States",
            description: "this is a description of changing states"
        }
    ]

    return (
        <div className="flex flex-col items-center bg-emerald-500 w-full h-[800px]">

            <h1 className="text-center text-white text-3xl mt-10 mb-10">MUSIC</h1>
            <Box className="flex items-center justify-center flex-row gap-40 bg-zinc-800 text-white">
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
                                        <FlexStack className="gap-3 bg-zinc-600 pt-3 pb-5">
                                            <h3>{album.title}</h3>
                                            <p className="text-center">{album.description}</p>
                                            <button className="px-3 py-1   text-white font-semibold bg-gradient-to-r from-pink-500 to-red-500 shadow-md hover:opacity-80 transition-opacity">
                                                Apple Music
                                            </button>
                                        </FlexStack>
                                </CarouselItem>                               
                            ))}
                        </CarouselContent>
                        <CarouselPrevious />
                        <CarouselNext/>
                    </Carousel>
                </FlexStack>

                <FlexStack>
                    <h2>Singles</h2>
                    <Carousel className="border border-red-300 w-[400px]">
                        <CarouselContent>
                            {singleInfo.map((single, index) => (
                                <CarouselItem key={index}>
                                    <Image
                                        src={single.image}
                                        alt={single.alt}
                                        width={391}            
                                        height={160}              
                                        className="rounded-md object-cover"
                                        priority // Improves LCP by preloading
                                        /> 
                                        <FlexStack className="bg-zinc-600  pt-3 pb-5">
                                            <h3>{single.title}</h3>
                                            <p className="text-center">{single.description}</p>
                                            <button className="px-3 py-1  text-white font-semibold bg-gradient-to-r from-pink-500 to-red-500 shadow-md hover:opacity-80 transition-opacity">
                                                Apple Music
                                            </button>
                                        </FlexStack>
                                </CarouselItem>                               
                            ))}
                        </CarouselContent>
                        <CarouselPrevious />
                        <CarouselNext/>
                    </Carousel>
                </FlexStack>
            </Box>
        </div>
    );
}
