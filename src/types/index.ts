export type SoundKey = 'summer' | 'rain' | 'winter';

export interface SoundConfig {
  sound: string;
  background: string;
  card: string;
  icon: string;
}

export interface WeatherSoundsConfig {
  [key: string]: SoundConfig;
}
