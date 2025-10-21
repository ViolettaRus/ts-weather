import React from 'react';

interface VolumeControlProps {
  volume: number;
  onVolumeChange: (volume: number) => void;
}

export const VolumeControl: React.FC<VolumeControlProps> = ({ 
  volume, 
  onVolumeChange 
}) => {
  return (
    <div className="volume volume-centered">
      <input
        id="volume"
        type="range"
        min={0}
        max={1}
        step={0.01}
        value={volume}
        onChange={(e) => onVolumeChange(Number(e.target.value))}
        aria-label="Громкость"
        aria-valuemin={0}
        aria-valuemax={1}
        aria-valuenow={volume}
      />
    </div>
  );
};
