// music-player.tsx (Updated to use the context directly)
"use client";

// PLUGINS
import React from "react";
import Image from "next/image";
import { Play, Pause, SkipBack, SkipForward } from "lucide-react";
import { useMusic } from "../../lib/music-context";

// MUSIC PLAYER
export default function MusicPlayer() {
  const {
    currentSong,
    isPlaying,
    progress,
    fade,
    handlePlayPause,
    handleSkipBackward,
    handleSkipForward,
    currentSongDetails,
  } = useMusic();

  return (
    <div className="sticky bottom-0 w-full bg-zinc-800 text-white p-4 flex items-center justify-between">
      {/* Left Controls: Skip Buttons, Play/Pause, and Extended Progress Meter */}
      <div className="flex items-center space-x-4 flex-1">
        <button
          onClick={handleSkipBackward}
          className="bg-gray-700 p-2 rounded-full hover:bg-gray-600"
        >
          <SkipBack className="w-4 h-4" />
        </button>
        <button
          onClick={() => {
            if (currentSong) {
              handlePlayPause(currentSong);
            }
          }}
          className="bg-gray-700 p-2 rounded-full hover:bg-gray-600"
        >
          {currentSong && isPlaying ? (
            <Pause className="w-4 h-4" />
          ) : (
            <Play className="w-4 h-4" />
          )}
        </button>
        <button
          onClick={handleSkipForward}
          className="bg-gray-700 p-2 rounded-full hover:bg-gray-600"
        >
          <SkipForward className="w-4 h-4" />
        </button>
        {/* Extended Progress Bar */}
        <div className="flex-1 ml-4 h-2 bg-zinc-600 rounded-full overflow-hidden">
          <div
            className="h-full bg-amber-500"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
      {/* Song Details with Fade Transition */}
      <div
        className={`ml-4 flex items-center space-x-2 transition-opacity duration-300 ${
          fade ? "opacity-100" : "opacity-0"
        }`}
      >
        {currentSongDetails ? (
          <>
            <div className="relative w-10 h-10 rounded-md overflow-hidden">
              <Image
                src={currentSongDetails.imagePath}
                alt={currentSongDetails.title}
                fill 
                style={{ objectFit: 'cover' }} 
              />
            </div>
            <div>
              <p className="font-medium">{currentSongDetails.title}</p>
              <p className="text-sm text-gray-400">
                {currentSongDetails.duration}
              </p>
            </div>
          </>
        ) : (
          <p className="text-sm">No song playing</p>
        )}
      </div>
    </div>
  );
}
