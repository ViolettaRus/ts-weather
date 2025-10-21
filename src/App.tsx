import { useEffect, useMemo, useRef, useState } from 'react';
import './App.css';

type SoundKey = 'summer' | 'rain' | 'winter';

const SOUND_SOURCES: Record<SoundKey, string> = {
  summer: '/assets/sounds/summer.mp3',
  rain: '/assets/sounds/rain.mp3',
  winter: '/assets/sounds/winter.mp3'
};

const BG_IMAGES: Record<SoundKey, string> = {
  summer: '/assets/summer-bg.jpg',
  rain: '/assets/rainy-bg.jpg',
  winter: '/assets/winter-bg.jpg'
};

const CARD_IMAGES: Record<SoundKey, string> = {
  summer: '/assets/summer-bg.jpg',
  rain: '/assets/rainy-bg.jpg',
  winter: '/assets/winter-bg.jpg'
};

const ICONS: Record<SoundKey, string> = {
  summer: '/assets/icons/sun.svg',
  rain: '/assets/icons/cloud-rain.svg',
  winter: '/assets/icons/cloud-snow.svg'
};

export default function App() {
  const [current, setCurrent] = useState<SoundKey | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0.7);

  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    if (!current) {
      document.body.style.backgroundImage = '';
      return;
    }
    document.body.style.backgroundImage = `url(${BG_IMAGES[current]})`;
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
      audio.src = SOUND_SOURCES[key];
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

  return (
    <div className="frame">
      <div className="app">
        <h1 className="title">Weather sounds</h1>

        <div className="cards">
          {(['summer', 'rain', 'winter'] as SoundKey[]).map((key) => {
            const active = current === key && isPlaying;
            return (
              <button
                key={key}
                className={`card ${active ? 'active' : ''}`}
                onClick={() => handleToggle(key)}
                aria-pressed={active}
                style={{
                  backgroundImage: `url(${CARD_IMAGES[key]})`
                }}
              >
                <span className="icon-wrap">
                  <img src={ICONS[key]} alt="" aria-hidden="true" />
                </span>
              </button>
            );
          })}
        </div>

        <div className="volume volume-centered">
          <input
            id="volume"
            type="range"
            min={0}
            max={1}
            step={0.01}
            value={volume}
            onChange={(e) => setVolume(Number(e.target.value))}
            aria-label="Громкость"
            aria-valuemin={0}
            aria-valuemax={1}
            aria-valuenow={volume}
          />
        </div>
      </div>
    </div>
  );
}


