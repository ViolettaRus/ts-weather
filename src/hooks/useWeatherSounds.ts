import { useEffect, useMemo, useRef, useState } from 'react';
import { SoundKey } from '../types';

export const useWeatherSounds = () => {
  const [current, setCurrent] = useState<SoundKey | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0.7);

  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    if (!current) {
      document.body.style.backgroundImage = '';
      return;
    }
    document.body.style.backgroundImage = `url(/assets/${current}-bg.jpg)`;
    document.body.style.backgroundSize = 'cover';
    document.body.style.backgroundPosition = 'center';
    document.body.style.backgroundRepeat = 'no-repeat';
    document.body.style.filter = 'none';
  }, [current]);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.volume = volume;
  }, [volume]);

  const ensureAudio = useMemo(() => {
    return () => {
      if (!audioRef.current) {
        audioRef.current = new Audio();
        audioRef.current.loop = true;
        audioRef.current.volume = volume;
      }
      return audioRef.current;
    };
  }, [volume]);

  const handleToggle = (key: SoundKey) => {
    const audio = ensureAudio();

    if (current !== key) {
      setCurrent(key);
      audio.src = `/assets/sounds/${key}.mp3`;
      audio.currentTime = 0;
      audio.play();
      setIsPlaying(true);
      return;
    }

    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
    } else {
      audio.play();
      setIsPlaying(true);
    }
  };

  useEffect(() => {
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.src = '';
      }
    };
  }, []);

  return {
    current,
    isPlaying,
    volume,
    setVolume,
    handleToggle
  };
};
