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
    return (
        <div className="border border-red-300">
            <h1 className="text-center">MUSIC</h1>
            <Box className="flex flex-row">
                <FlexStack>
                    <h2>Albums</h2>
                    <Carousel className="border border-red-300 w-[400px]">
                        <CarouselContent>
                            <CarouselItem>
                                <Image
                                    src="/imgs/album_beginning.jpg" 
                                    alt="Image of beginning of journey album"
                                    width={400}            
                                    height={160}              
                                    className="rounded-md object-cover"
                                    priority // Improves LCP by preloading
                                /> 
                            </CarouselItem>
                            <CarouselItem>
                                <Image
                                    src="/imgs/album_beethoven.png" 
                                    alt="Image of beethoven liszt the pastoral symphony album"
                                    width={400}            
                                    height={160}              
                                    className="rounded-md object-cover"
                                    priority // Improves LCP by preloading
                                /> 
                            </CarouselItem>
                        </CarouselContent>
                        <CarouselPrevious />
                        <CarouselNext />
                    </Carousel>
                    <div>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut, nulla? Sapiente at, quam alias nostrum repudiandae ipsa officia ex fugit dolorum recusandae ab, quaerat magnam eveniet delectus esse? Vel, perferendis?</p>
                    </div>
                </FlexStack>
                <FlexStack>
                    <h2>Singles</h2>
                    <Carousel className="border border-red-300 w-[400px]">
                        <CarouselContent>
                            <CarouselItem>
                            <Image
                                    src="/imgs/single_desiree.png" 
                                    alt="Image of beethoven liszt the pastoral symphony album"
                                    width={400}            
                                    height={160}              
                                    className="rounded-md object-cover"
                                    priority // Improves LCP by preloading
                                /> 
                            </CarouselItem>
                            <CarouselItem>
                            <Image
                                    src="/imgs/single_gladiator.png" 
                                    alt="Image of beethoven liszt the pastoral symphony album"
                                    width={400}            
                                    height={160}              
                                    className="rounded-md object-cover"
                                    priority // Improves LCP by preloading
                                /> 
                            </CarouselItem>
                            <CarouselItem>
                            <Image
                                    src="/imgs/single_honkytonk.png" 
                                    alt="Image of beethoven liszt the pastoral symphony album"
                                    width={400}            
                                    height={160}              
                                    className="rounded-md object-cover"
                                    priority // Improves LCP by preloading
                                /> 
                            </CarouselItem>
                            <CarouselItem>
                            <Image
                                    src="/imgs/single_changingstates.png" 
                                    alt="Image of beethoven liszt the pastoral symphony album"
                                    width={400}            
                                    height={160}              
                                    className="rounded-md object-cover"
                                    priority // Improves LCP by preloading
                                /> 
                            </CarouselItem>         
                            
                        </CarouselContent>
                        <CarouselPrevious />
                        <CarouselNext />
                    </Carousel>
                    <div>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut, nulla? Sapiente at, quam alias nostrum repudiandae ipsa officia ex fugit dolorum recusandae ab, quaerat magnam eveniet delectus esse? Vel, perferendis?</p>
                    </div>
                </FlexStack>
            </Box>

        </div>
    );
}