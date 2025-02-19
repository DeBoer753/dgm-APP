// PLUGINS
import { motion } from "framer-motion";

// COMPONENTS
import Image from "next/image";

// ABOUT
export default function About() {
  return (
    <div className="flex justify-center flex-col items-center w-full pt-20 pb-10 bg-gradient-to-b from-zinc-800 to-zinc-600">
      <Image
        src="/imgs/david_closeup.jpg"
        alt="David Glass, a pianist and filmmaker, in a close-up portrait"
        width={220}
        height={160}
        className="block sm:hidden object-cover w-[300px] sm:w-sm pb-10 [mask-image:linear-gradient(to_right,transparent,black_20%,black_80%,transparent)]"
        priority // Improves LCP by preloading
      />
      <motion.div
        className="w-11/12 max-w-[1200px] bg-zinc-800 text-white p-5 gap-5 flex justify-center items-center sm:flex-row flex-col shadow-2xl border border-white-200"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1, transition: { duration: 2.5 } }}
        viewport={{ once: true }}
        aria-labelledby="about-title"
        tabIndex={0}
      >
        <div
          className="w-[1600px] bg-cover h-[400px] [mask-image:linear-gradient(to_right,transparent,black_20%,black_80%,transparent)] hidden sm:block"
          id="about-title"
          style={{
            backgroundImage: "url('/imgs/david_closeup.jpg')",
            backgroundPositionX: "30%",
            backgroundPositionY: "60%",
          }}
          aria-label="Close-up image of David Glass"
        ></div>
        <div className="flex flex-col sm:text-left text-center overflow-hidden">
          <h1 className="text-2xl px-5 font-thin">About</h1>
          <h2 className="font-bold text-xl px-5 pt-5">David Glass</h2>
          <motion.p
            className="text-[16px] sm:px-5 py-5"
            initial={{ y: 100 }}
            whileInView={{ y: 0, transition: { duration: 1 } }}
            viewport={{ once: true }}
          >
            David Glass is a versatile musician and{" "}
            <span className="text-yellow-500 font-bold">award-winning</span>{" "}
            filmmaker. As a solo pianist, he has performed across the{" "}
            <span className="font-bold">USA and Europe</span>, releasing several
            recordings, including Beginning The Journey—a collection of original
            compositions—and Liszt’s piano transcription of Beethoven’s 6th
            Symphony, “The Pastoral.” His music is available on all streaming
            platforms{" "}
            <span className="italic">
              (Apple Music, Spotify, Pandora, Amazon, etc)
            </span>
            .
            <br />
            <br />
            Beyond music, David is an acclaimed filmmaker, with his short film 
            <span className="italic"> &apos;Breaking Out&apos;</span> winning over {" "}
            <span className="text-yellow-500 font-bold">
            80+ awards worldwide
            </span>
            . He holds a degree in Piano Performance from the New England
            Conservatory and has been teaching piano in Piedmont, Oakland, and
            Berkeley for over <span className="font-bold">30 years</span>.
          </motion.p>
        </div>
      </motion.div>
    </div>
  );
}

// Note: ADA Compliance - aria, tab index, and id being used
