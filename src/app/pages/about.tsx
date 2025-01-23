// COMPONENTS
import Box from "@/components/custom/layout/box";
import Image from 'next/image';

// ABOUT
export default function About() {
    return (
        <div className="flex flex-col items-center w-full pb-20  bg-gradient-to-b from-zinc-900 to-zinc-600">
            <h1 className="text-center text-white text-3xl mt-10 mb-10">ABOUT</h1>
            <Box className="bg-zinc-800 text-white p-5 gap-5 flex justify-center items-center sm:flex-row flex-col shadow-2xl  border-t border-t-white-200 border-l border-r"  >
                  <div className="absolute inset-0 border-t border-emerald-500 border-opacity-100 border-l-transparent border-r-transparent [mask-image:linear-gradient(to-b,rgba(0,0,0,1),rgba(0,0,0,0))] pointer-events-none"></div>
            <div className="w-[1500px] bg-cover h-[400px] [mask-image:linear-gradient(to_right,transparent,black_20%,black_80%,transparent)]  hidden sm:block"  style={{ backgroundImage: "url('/imgs/david_blackwhite.jpg')", backgroundPositionX: "40%" }}></div>
            <Image
                src="/imgs/david_blackwhite.jpg" 
                alt="Image of David Glass"
                width={500}            
                height={160}              
                className="block sm:hidden object-cover [mask-image:linear-gradient(to_right,transparent,black_20%,black_80%,transparent)] w-md sm:w-sm"
                priority // Improves LCP by preloading
            /> 
                <div className="flex flex-col sm:text-left text-center">
                    <h1 className="text-2xl ">David Glass</h1> 
                    <p className="">Versatile in many forms of music making, David Glass has
                        performed regularly as a solo pianist. David has performed
                        throughout the USA and Europe.
                        David has released several recordings and singles throughout his
                        career, most significant being “Beginning The Journey” featuring
                        all of his own original piano compositions and improvisations and
                        the Liszt’s piano transcription of Beethoven’s 6th Symphony, “The
                        Pastoral”. All of David’s music can be heard on all streaming
                        platforms (Apple Music, Spotify, Pandora, Amazon, etc.)
                        David is also an award winning filmmaker whose work has been
                        screened at film festivals around the world. Currently David has
                        won over 50 awards for his latest music film “Breaking Out”, a
                        short film which is centered around a tumultuous piano
                        improvisation David Glass recorded several years ago.
                        He received his undergraduate degree in Piano Performance from
                        the New England Conservatory of Music in Boston, CA.For the
                        past 30 years, David has been teaching piano privately in the
                        cities of Piedmont, Oakland and Berkeley.
                    </p> 
                </div>
            </Box>
        </div>
    );
}