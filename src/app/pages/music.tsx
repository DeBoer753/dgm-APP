"use client";

// PLUGINS
import { Play, Pause, ArrowLeftSquare, ArrowRightSquare } from "lucide-react";
import { useMusic } from "../../lib/music-context";
import { useState } from "react";
import Image from "next/image";

// MUSIC
export default function Music() {
  const musicPlatforms = [
    {
      href: "https://music.apple.com/us/artist/david-glass/128439316",
      src: "/imgs/applemusic_logo.png",
      alt: "Apple Music Logo",
      ariaLabel: "Listen on Apple Music",
    },
    {
      href: "https://open.spotify.com/artist/0S8TYWxvKiKq8obUxwbFIA",
      src: "/imgs/spotify_logo.png",
      alt: "Spotify Logo",
      ariaLabel: "Listen on Spotify",
    },
  ];

  // Destructure additional properties from the context.
  const {
    currentSong,
    isPlaying,
    handlePlayPause,
    album,
    singles,
    setSelectedCollection,
    // selectedCollection
  } = useMusic();

  // Option 1: Use local state to control view if needed.
  // (Alternatively, you can use selectedCollection from context directly.)
  const [view, setView] = useState<"album" | "singles">("album");

  // Determine which data set and header title to use based on view state.
  const currentList = view === "album" ? album : singles;
  const headerTitle =
    view === "album" ? "Beginning the Journey (Album)" : "Singles";

  // Handler to switch to Album view.
  const switchToAlbum = () => {
    setView("album");
    setSelectedCollection("album"); // Update context as well.
  };

  // Handler to switch to Singles view.
  const switchToSingles = () => {
    setView("singles");
    setSelectedCollection("singles"); // Update context as well.
  };

  return (
    <>
      <div className="py-5 pb-20">
        <div className="mx-auto flex items-center flex-col w-full max-w-2xl bg-zinc-800 bg-opacity-45 text-white p-4">
          <div className="max-w-[1200px] w-11/12">
            <h1 className="text-2xl font-thin mb-4">Music</h1>
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-thin mb-4" id="collection-title">
                {headerTitle}
              </h2>
              <div className="flex ml-2 mb-3">
                <button
                  onClick={switchToAlbum}
                  className="p-1 hover:text-gray-300"
                  aria-label="Switch to Album view"
                >
                  <ArrowLeftSquare size={33} />
                </button>
                <button
                  onClick={switchToSingles}
                  className="p-1 hover:text-gray-300"
                  aria-label="Switch to Singles view"
                >
                  <ArrowRightSquare size={33}/>
                </button>
              </div>
            </div>
            <ul aria-labelledby="collection-title">
              {currentList.map((song) => (
                <li
                  key={song.filePath}
                  className="flex items-center justify-between py-2 px-3 border-b border-gray-700 last:border-none hover:bg-zinc-700 transition-colors duration-200"
                >
                  <div className="relative w-12 h-12 group">
                    <Image
                      src={song.imagePath}
                      alt={`Album cover for ${song.title}`}
                      width={48}
                      height={48}
                      className="rounded-md object-cover"
                    />
                  </div>
                  <div className="flex-1 ml-3">
                    <p className="text-sm font-medium">{song.title}</p>
                    <p className="text-xs text-gray-400">
                      {song.artist} • {song.duration}
                    </p>
                  </div>
                  {musicPlatforms.map((platform, index) => (
                    <a
                      key={index}
                      href={platform.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-2"
                      aria-label={platform.ariaLabel}
                    >
                      <button className="rounded-md mr-3">
                        <Image
                          src={platform.src}
                          alt={platform.alt}
                          width={30}
                          height={30}
                          className="rounded-md object-cover"
                        />
                      </button>
                    </a>
                  ))}
                  <button
                    onClick={() => handlePlayPause(song.filePath)}
                    className="bg-gray-800 p-2 rounded-full hover:bg-gray-700"
                    aria-label={
                      currentSong === song.filePath && isPlaying
                        ? `Pause ${song.title}`
                        : `Play ${song.title}`
                    }
                  >
                    {currentSong === song.filePath && isPlaying ? (
                      <Pause className="w-4 h-4 text-white" />
                    ) : (
                      <Play className="w-4 h-4 text-white" />
                    )}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
