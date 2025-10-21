import { WeatherSoundsConfig } from '../types';

export const SOUND_CONFIG: WeatherSoundsConfig = {
  summer: {
    sound: '/assets/sounds/summer.mp3',
    background: '/assets/summer-bg.jpg',
    card: '/assets/summer-bg.jpg',
    icon: '/assets/icons/sun.svg'
  },
  rain: {
    sound: '/assets/sounds/rain.mp3',
    background: '/assets/rainy-bg.jpg',
    card: '/assets/rainy-bg.jpg',
    icon: '/assets/icons/cloud-rain.svg'
  },
  winter: {
    sound: '/assets/sounds/winter.mp3',
    background: '/assets/winter-bg.jpg',
    card: '/assets/winter-bg.jpg',
    icon: '/assets/icons/cloud-snow.svg'
  }
};
