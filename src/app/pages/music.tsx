'use client';

// PLUGINS
import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import { Play, Pause } from 'lucide-react';

const beginningTheJourneyAlbum = [
  {
    title: 'Leaf on a Stream',
    artist: 'David Glass',
    duration: '4:23',
    filePath: '/audio/beginningthejourney/01_LeafOnAStream.mp3',
    imagePath: '/imgs/album_beginning.jpg',
  },
  {
    title: 'Only With You',
    artist: 'David Glass',
    duration: '4:33',
    filePath: '/audio/beginningthejourney/02_OnlyWithYou.mp3',
    imagePath: '/imgs/album_beginning.jpg',
  },
  {
    title: 'New Beginnings',
    artist: 'David Glass',
    duration: '7:06',
    filePath: '/audio/beginningthejourney/03_NewBeginnings.mp3',
    imagePath: '/imgs/album_beginning.jpg',
  },
  {
    title: 'Blind Beach',
    artist: 'David Glass',
    duration: '4:47',
    filePath: '/audio/beginningthejourney/04_BlindBeach.mp3',
    imagePath: '/imgs/album_beginning.jpg',
  },
  {
    title: 'Echoing Hearts',
    artist: 'David Glass',
    duration: '4:08',
    filePath: '/audio/beginningthejourney/05_EchoingHearts.mp3',
    imagePath: '/imgs/album_beginning.jpg',
  },
  {
    title: 'Red Horizon',
    artist: 'David Glass',
    duration: '8:24',
    filePath: '/audio/beginningthejourney/06_RedHorizon.mp3',
    imagePath: '/imgs/album_beginning.jpg',
  },
  {
    title: 'November Sky',
    artist: 'David Glass',
    duration: '3:59',
    filePath: '/audio/beginningthejourney/07_NovemberSky.mp3',
    imagePath: '/imgs/album_beginning.jpg',
  },
  {
    title: 'To Love Another',
    artist: 'David Glass',
    duration: '4:10',
    filePath: '/audio/beginningthejourney/08_ToLoveAnother.mp3',
    imagePath: '/imgs/album_beginning.jpg',
  },
  {
    title: 'Cry of the Sea',
    artist: 'David Glass',
    duration: '4:09',
    filePath: '/audio/beginningthejourney/09_CryOfTheSea.mp3',
    imagePath: '/imgs/album_beginning.jpg',
  },
  {
    title: 'Sun River',
    artist: 'David Glass',
    duration: '4:52',
    filePath: '/audio/beginningthejourney/10_SunRiver.mp3',
    imagePath: '/imgs/album_beginning.jpg',
  },
  {
    title: 'Starlight Before Dawn',
    artist: 'David Glass',
    duration: '7:03',
    filePath: '/audio/beginningthejourney/11_StarlightBeforeDawn.mp3',
    imagePath: '/imgs/album_beginning.jpg',
  },
  
];

// MUSIC
export default function Music() {
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
    <div className='py-5 pb-20'>
        <div className="mx-auto flex items-center flex-col w-full max-w-2xl bg-zinc-800 bg-opacity-45 text-white p-4 ">
            <div className="max-w-[1200px] w-11/12">
                <h1 className="text-2xl font-thin mb-4">Music</h1>
                <h1 className="text-lg font-thin mb-4">Beginning the Journey (Album)</h1>
                <ul>
                    {beginningTheJourneyAlbum.map((song) => (
                    <li
                        key={song.filePath}
                        className="flex items-center justify-between py-2 px-3 border-b border-gray-700 last:border-none hover:bg-zinc-700 transition-colors duration-200"
                    >
                        <div className="relative w-12 h-12 group">
                        <Image
                            src={song.imagePath}
                            alt={song.title}
                            width={48}
                            height={48}
                            className="rounded-md object-cover"
                        />
                        {/* <button
                            onClick={() => handlePlayPause(song.filePath)}
                            className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 rounded-md opacity-0 group-hover:opacity-100 transition-opacity"
                        >
                            {currentSong === song.filePath && isPlaying ? (
                            <Pause className="w-6 h-6 text-white" />
                            ) : (
                            <Play className="w-6 h-6 text-white" />
                            )}
                        </button> */}
                        </div>
                        <div className="flex-1 ml-3">
                        <p className="text-sm font-medium">{song.title}</p>
                        <p className="text-xs text-gray-400">{song.artist} • {song.duration}</p>
                        </div>
                        <button className="rounded-md mr-3">
                        <Image
                            src="/imgs/applemusic_logo.png"
                            alt="Apple music Logo"
                            width={30}
                            height={30}
                            className="rounded-md object-cover "
                        />
                        </button>
                        <button className="rounded-md mr-3">
                        <Image
                            src="/imgs/spotify_logo.png"
                            alt="Apple music Logo"
                            width={30}
                            height={30}
                            className="rounded-md object-cover "
                        />
                        </button>
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
