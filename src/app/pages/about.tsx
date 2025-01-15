// COMPONENTS
import Box from "@/components/custom/layout/box";
import Image from 'next/image';

// ABOUT
export default function About() {
    return (
        <>
            <h1>ABOUT</h1>
            <Box className="border border-red-300 flex justify-center items-center">
            <Image
                src="/imgs/david_blackwhite.jpg" 
                alt="Image of David Glass"
                width={306}            
                height={160}              
                className="rounded-md object-cover"
                priority // Improves LCP by preloading
            /> 
                <div className="flex flex-col">
                    <h1 className="text-2xl">David Glass</h1> 
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
        </>
    );
}