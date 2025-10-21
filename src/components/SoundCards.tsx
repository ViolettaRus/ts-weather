import React from 'react';
import { SoundKey } from '../types';
import { SoundCard } from './SoundCard';
import '../styles/components/SoundCards.css';

interface SoundCardsProps {
  current: SoundKey | null;
  isPlaying: boolean;
  onToggle: (key: SoundKey) => void;
}

export const SoundCards: React.FC<SoundCardsProps> = ({ 
  current, 
  isPlaying, 
  onToggle 
}) => {
  const soundKeys: SoundKey[] = ['summer', 'rain', 'winter'];

  return (
    <section className="cards" aria-label="Weather sound selection">
      {soundKeys.map((key) => {
        const active = current === key && isPlaying;
        return (
          <SoundCard
            key={key}
            soundKey={key}
            isActive={active}
            onToggle={onToggle}
          />
        );
      })}
    </section>
  );
};
