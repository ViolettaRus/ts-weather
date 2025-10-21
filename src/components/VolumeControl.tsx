import React from 'react';
import '../styles/components/VolumeControl.css';

interface VolumeControlProps {
  volume: number;
  onVolumeChange: (volume: number) => void;
}

export const VolumeControl: React.FC<VolumeControlProps> = ({ 
  volume, 
  onVolumeChange 
}) => {
  return (
    <div className="volume volume-centered" role="region" aria-label="Volume control">
      <label htmlFor="volume" className="volume-label">
        Volume Control
      </label>
      <input
        id="volume"
        type="range"
        min={0}
        max={1}
        step={0.01}
        value={volume}
        onChange={(e) => onVolumeChange(Number(e.target.value))}
        aria-label="Adjust volume level"
        aria-valuemin={0}
        aria-valuemax={1}
        aria-valuenow={volume}
        aria-valuetext={`${Math.round(volume * 100)}% volume`}
      />
    </div>
  );
};
