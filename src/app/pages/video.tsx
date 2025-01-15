// COMPONENTS
import Image from "next/image";
import Box from "@/components/custom/layout/box";
import FlexCol from "@/components/custom/layout/flex-stack";

// VIDEO
export default function Video() {
    return (
        <div className="border border-red-300 flex flex-col items-center">
            <h1>VIDEO</h1>
            <h1 className="text-2xl">Breaking Out</h1> 
            <Image
                src="/imgs/breakingout_banner.png" 
                alt="Image of David Glass"
                width={306}            
                height={160}              
                className="rounded-md object-cover"
                priority // Improves LCP by preloading
            /> 
            <Box className="border border-red-300 flex justify-center items-center">
                <FlexCol>
                    <p className="">“Breaking Out” is a short music video produced by David Glass. 
                        The film is centered around a dramatic piano improvisation David recorded several
                        years ago. The short film is a psychological rollercoaster containing a
                        variety of footage that express a wide range of intense emotions and strong
                        forces of nature, and yet there is a beauty to the chaos. As in a ballet, the
                        music is in synchronicity with the dramatic scenes.
                    </p> 
                </FlexCol>
            </Box>
        </div>
    );
}