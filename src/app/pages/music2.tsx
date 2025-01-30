'use client';

import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import { Play, Pause } from 'lucide-react';

const songs = [
  {
    title: 'Test Song 1',
    artist: 'David Glass',
    filePath: '/audio/test-1.m4a',
    imagePath: '/imgs/single_gladiator.png',
  },
  {
    title: 'Test Song 2',
    artist: 'David Glass',
    filePath: '/audio/test-2.m4a',
    imagePath: '/imgs/single_desiree.png',
  },
  {
    title: 'Test Song 3',
    artist: 'David Glass',
    filePath: '/audio/test-3.m4a',
    imagePath: '/imgs/single_changingstates.png',
  },
  {
    title: 'Test Song 1',
    artist: 'David Glass',
    filePath: '/audio/test-1.m4a',
    imagePath: '/imgs/single_gladiator.png',
  },
  {
    title: 'Test Song 2',
    artist: 'David Glass',
    filePath: '/audio/test-2.m4a',
    imagePath: '/imgs/single_desiree.png',
  },
  {
    title: 'Test Song 3',
    artist: 'David Glass',
    filePath: '/audio/test-3.m4a',
    imagePath: '/imgs/single_changingstates.png',
  },
  {
    title: 'Test Song 1',
    artist: 'David Glass',
    filePath: '/audio/test-1.m4a',
    imagePath: '/imgs/single_gladiator.png',
  },
  {
    title: 'Test Song 2',
    artist: 'David Glass',
    filePath: '/audio/test-2.m4a',
    imagePath: '/imgs/single_desiree.png',
  },
  {
    title: 'Test Song 3',
    artist: 'David Glass',
    filePath: '/audio/test-3.m4a',
    imagePath: '/imgs/single_changingstates.png',
  },
  
];

export default function MiniMusicPlayer() {
  const [currentSong, setCurrentSong] = useState<string | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    if (currentSong && audioRef.current) {
      audioRef.current.src = currentSong;
      if (isPlaying) {
        audioRef.current.play();
      }
    }
  }, [currentSong, isPlaying]);

  const handlePlayPause = (filePath: string) => {
    if (currentSong === filePath) {
      if (isPlaying) {
        audioRef.current?.pause();
        setIsPlaying(false);
      } else {
        audioRef.current?.play();
        setIsPlaying(true);
      }
    } else {
      setCurrentSong(filePath);
      setIsPlaying(true);
    }
  };

  return (
    <div   className='py-10 w-full h-[800px]' 
    style={{  
      backgroundImage: `linear-gradient(to bottom, rgba(161, 161, 170, 1) 0%, rgba(161, 161, 170, 0.7) 30%, rgba(228, 228, 231, 0) 80%), url('/imgs/music_bg.png')`,
      backgroundSize: "cover", 
      backgroundRepeat: "no-repeat"
    }}
  >
        <div className="mx-auto flex items-center flex-col w-full max-w-md bg-zinc-800 bg-opacity-45 text-white p-4 ">
            <div className="max-w-[1200px] w-11/12">
                <h2 className="text-xl font-thin mb-4">Music</h2>
                <ul>
                    {songs.map((song) => (
                    <li
                        key={song.filePath}
                        className="flex items-center justify-between py-2 border-b border-gray-700 last:border-none"
                    >
                        <div className="relative w-12 h-12 group">
                        <Image
                            src={song.imagePath}
                            alt={song.title}
                            width={48}
                            height={48}
                            className="rounded-md object-cover"
                        />
                        <button
                            onClick={() => handlePlayPause(song.filePath)}
                            className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 rounded-md opacity-0 group-hover:opacity-100 transition-opacity"
                        >
                            {currentSong === song.filePath && isPlaying ? (
                            <Pause className="w-6 h-6 text-white" />
                            ) : (
                            <Play className="w-6 h-6 text-white" />
                            )}
                        </button>
                        </div>
                        <div className="flex-1 ml-3">
                        <p className="text-sm font-medium">{song.title}</p>
                        <p className="text-xs text-gray-400">{song.artist}</p>
                        </div>
                        <button
                        onClick={() => handlePlayPause(song.filePath)}
                        className="bg-gray-800 p-2 rounded-full hover:bg-gray-700"
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
                <audio ref={audioRef} onEnded={() => setIsPlaying(false)} />
        </div>
      </div>
    </div>
  );
}
