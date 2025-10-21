import React from 'react';
import { SoundKey } from '../types';
import { SOUND_CONFIG } from '../utils/config';

interface SoundCardProps {
  soundKey: SoundKey;
  isActive: boolean;
  onToggle: (key: SoundKey) => void;
}

export const SoundCard: React.FC<SoundCardProps> = ({ 
  soundKey, 
  isActive, 
  onToggle 
}) => {
  const config = SOUND_CONFIG[soundKey];
  
  return (
    <button
      className={`card ${isActive ? 'active' : ''}`}
      onClick={() => onToggle(soundKey)}
      aria-pressed={isActive}
      style={{
        backgroundImage: `url(${config.card})`
      }}
    >
      <span className="icon-wrap">
        <img src={config.icon} alt="" aria-hidden="true" />
      </span>
    </button>
  );
};
