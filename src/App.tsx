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
        <h1 className="title">Weather sounds</h1>

        <SoundCards 
          current={current} 
          isPlaying={isPlaying} 
          onToggle={handleToggle} 
        />

        <VolumeControl 
          volume={volume} 
          onVolumeChange={setVolume} 
        />
      </div>
    </div>
  );
}


