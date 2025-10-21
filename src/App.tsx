import React from 'react';
import { useWeatherSounds } from './hooks/useWeatherSounds';
import { SoundCards } from './components/SoundCards';
import { VolumeControl } from './components/VolumeControl';
import './styles/index.css';

export default function App() {
  const { current, isPlaying, volume, setVolume, handleToggle } = useWeatherSounds();

  return (
    <div className="frame">
      <div className="app">
        <header>
          <h1 className="title">Weather sounds</h1>
        </header>

        <main>
          <SoundCards 
            current={current} 
            isPlaying={isPlaying} 
            onToggle={handleToggle} 
          />
        </main>

        <footer>
          <VolumeControl 
            volume={volume} 
            onVolumeChange={setVolume} 
          />
        </footer>
      </div>
    </div>
  );
}


