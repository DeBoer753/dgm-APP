// COMPONENTS
import Image from "next/image";
import Box from "@/components/custom/layout/box";
import FlexStack from "@/components/custom/layout/flex-stack";

// VIDEO
export default function Video() {
    return (
        <div className="flex flex-col items-center bg-emerald-600 w-full pb-20">
            <h1 className="text-center text-white text-3xl mt-10 mb-10">VIDEO</h1>
            <FlexStack className="bg-zinc-800 text-white p-5 gap-5 flex justify-center items-center">
                <h1 className="text-2xl">Breaking Out</h1> 
                <Image
                    src="/imgs/breakingout_banner.png" 
                    alt="Image of David Glass"
                    width={600}            
                    height={160}              
                    className="rounded-md object-cover"
                    priority // Improves LCP by preloading
                /> 
                <Box className="flex justify-center items-center">
                    <FlexStack>
                        <p className="text-center pl-10 pr-10">“Breaking Out” is a short music video produced by David Glass. 
                            The film is centered around a dramatic piano improvisation David recorded several
                            years ago. The short film is a psychological rollercoaster containing a
                            variety of footage that express a wide range of intense emotions and strong
                            forces of nature, and yet there is a beauty to the chaos. As in a ballet, the
                            music is in synchronicity with the dramatic scenes.
                        </p> 
                    </FlexStack>
                </Box>
            </FlexStack>
        </div>
    );
}