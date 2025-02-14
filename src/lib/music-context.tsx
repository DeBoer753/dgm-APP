'use client';

import React, { createContext, useContext, useState, useRef, useEffect, ReactNode } from 'react';

// Your album data
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

const singles = [
  {
    title: 'Breaking Out',
    artist: 'David Glass',
    duration: '5:30',
    filePath: '/audio/singles/BreakingOut.mp3',
    imagePath: '/imgs/breakingout_banner.png',
  },
  {
    title: 'Desirée',
    artist: 'David Glass',
    duration: '9:31',
    filePath: '/audio/singles/Desiree.mp3',
    imagePath: '/imgs/single_desiree.png',
  },
  {
    title: 'Changing States',
    artist: 'David Glass',
    duration: '5:13',
    filePath: '/audio/singles/ChangingStates.mp3',
    imagePath: '/imgs/single_changingstates.png',
  },
  {
    title: 'Gladiator',
    artist: 'David Glass',
    duration: '4:14',
    filePath: '/audio/singles/Gladiator.mp3',
    imagePath: '/imgs/single_gladiator.png',
  },
  {
    title: 'Missing You',
    artist: 'David Glass',
    duration: '8:40',
    filePath: '/audio/singles/MissingYou.mp3',
    imagePath: '/imgs/single_gladiator.png',
  },
  {
    title: 'Honky Tonk',
    artist: 'David Glass',
    duration: '3:05',
    filePath: '/audio/singles/HonkyTonk.mp3',
    imagePath: '/imgs/single_honkytonk.png',
  },
];

// Define a union type for collection names
type CollectionType = 'album' | 'singles';

// Update the context value type to include the two arrays and the selected collection
interface MusicContextType {
  currentSong: string;
  isPlaying: boolean;
  progress: number;
  fade: boolean;
  currentSongDetails?: { title: string; duration: string; imagePath: string };
  handlePlayPause: (filePath: string) => void;
  handleSkipBackward: () => void;
  handleSkipForward: () => void;
  // Added properties:
  album: typeof beginningTheJourneyAlbum;
  singles: typeof singles;
  selectedCollection: CollectionType;
  setSelectedCollection: (collection: CollectionType) => void;
}

const MusicContext = createContext<MusicContextType | undefined>(undefined);

interface MusicProviderProps {
  children: ReactNode;
}

export function MusicProvider({ children }: MusicProviderProps) {
  // Choose a default collection ("album" or "singles")
  const [selectedCollection, setSelectedCollection] = useState<CollectionType>('album');

  // Use the selected collection for navigation and default song
  const currentCollection = selectedCollection === 'album' ? beginningTheJourneyAlbum : singles;

  // Set default to the first song in the current collection
  const [currentSong, setCurrentSong] = useState<string>(currentCollection[0].filePath);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [fade, setFade] = useState(true);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // Update audio source if either currentSong or the collection changes.
  useEffect(() => {
    // When the selected collection changes, update currentSong to the first song of that collection.
    if (!currentCollection.find(song => song.filePath === currentSong)) {
      setCurrentSong(currentCollection[0].filePath);
      setIsPlaying(false);
    }
  }, [selectedCollection, currentCollection, currentSong]);

  useEffect(() => {
    if (currentSong && audioRef.current) {
      audioRef.current.src = currentSong;
      setProgress(0);
      if (isPlaying) {
        audioRef.current.play();
      }
    }
  }, [currentSong, isPlaying]);

  // Update progress as the audio plays
  const handleTimeUpdate = () => {
    if (audioRef.current && audioRef.current.duration) {
      const percentage = (audioRef.current.currentTime / audioRef.current.duration) * 100;
      setProgress(percentage);
    }
  };

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

  const fadeAndSkip = (newSong: string) => {
    setFade(false);
    setTimeout(() => {
      setCurrentSong(newSong);
      setIsPlaying(true);
      setFade(true);
    }, 300);
  };

  // Update skip functions to use the current collection
  const handleSkipBackward = () => {
    const index = currentCollection.findIndex(song => song.filePath === currentSong);
    if (index > 0) {
      fadeAndSkip(currentCollection[index - 1].filePath);
    }
  };

  const handleSkipForward = () => {
    const index = currentCollection.findIndex(song => song.filePath === currentSong);
    if (index !== -1 && index < currentCollection.length - 1) {
      fadeAndSkip(currentCollection[index + 1].filePath);
    }
  };

  const currentSongDetails = currentCollection.find(song => song.filePath === currentSong);

  return (
    <MusicContext.Provider
      value={{
        currentSong,
        isPlaying,
        progress,
        fade,
        currentSongDetails,
        handlePlayPause,
        handleSkipBackward,
        handleSkipForward,
        album: beginningTheJourneyAlbum,
        singles: singles,
        selectedCollection,
        setSelectedCollection,
      }}
    >
      {children}
      {/* Shared audio element */}
      <audio ref={audioRef} onTimeUpdate={handleTimeUpdate} onEnded={() => setIsPlaying(false)} />
    </MusicContext.Provider>
  );
}

// Custom hook for easy access
export function useMusic() {
  const context = useContext(MusicContext);
  if (!context) {
    throw new Error('useMusic must be used within a MusicProvider');
  }
  return context;
}
