// PLUGINS
import { motion } from "framer-motion"

// COMPONENTS
import Image from 'next/image';

// ABOUT
export default function About() {
    return (
        <div className="flex flex-col items-center w-full pt-10 pb-10 bg-gradient-to-b from-zinc-800 to-zinc-600">
            <motion.div  className="w-11/12 max-w-[1200px] bg-zinc-800 text-white p-5 gap-5 flex justify-center items-center sm:flex-row flex-col shadow-2xl border border-white-200" initial={{ opacity: 0 }} whileInView={{ opacity: 1, transition: { duration: 2.5 } }}>
                <div className="w-[1600px] bg-cover h-[400px] [mask-image:linear-gradient(to_right,transparent,black_20%,black_80%,transparent)]  hidden sm:block"  style={{ backgroundImage: "url('/imgs/david_closeup.jpg')", backgroundPositionX: "50%"}}></div>
            <Image
                src="/imgs/david_closeup.jpg" 
                alt="Image of David Glass"
                width={320}            
                height={160}              
                className="block sm:hidden object-cover [mask-image:linear-gradient(to_right,transparent,black_20%,black_80%,transparent)] w-md sm:w-sm"
                priority // Improves LCP by preloading
            /> 
                <div className="flex flex-col sm:text-left text-center">
                    <h1 className="text-2xl px-5">About</h1> 
                    <h2 className="font-bold text-xl px-5 pt-5">David Glass</h2> 
                    <p className="px-5 py-5">Versatile in many forms of music making, David Glass has
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
            </motion.div>
        </div>
    );
}