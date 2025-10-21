import React from 'react';
import { SoundKey } from '../types';
import { SOUND_CONFIG } from '../utils/config';
import '../styles/components/SoundCard.css';

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
    <article className="sound-card-wrapper">
      <button
        className={`card ${isActive ? 'active' : ''}`}
        onClick={() => onToggle(soundKey)}
        aria-pressed={isActive}
        aria-label={`Play ${soundKey} weather sounds`}
        style={{
          backgroundImage: `url(${config.card})`
        }}
      >
        <span className="icon-wrap">
          <img 
            src={config.icon} 
            alt={`${soundKey} weather icon`}
            role="presentation"
          />
        </span>
      </button>
    </article>
  );
};
