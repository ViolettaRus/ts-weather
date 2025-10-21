# Weather Sounds App

<div align="center">
  <img src="https://img.shields.io/badge/React-19.2.0-blue?style=for-the-badge&logo=react" alt="React Version" />
  <img src="https://img.shields.io/badge/TypeScript-5.9.3-blue?style=for-the-badge&logo=typescript" alt="TypeScript Version" />
  <img src="https://img.shields.io/badge/License-MIT-green?style=for-the-badge" alt="License" />
</div>

<div align="center">
  <h3>🎵 Immersive Weather Sound Experience</h3>
  <p>A modern React application that provides ambient weather sounds with beautiful visual backgrounds and intuitive controls.</p>
</div>

---

## 📋 Table of Contents

- [About The Project](#about-the-project)
- [Built With](#built-with)
- [Getting Started](#getting-started)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Features](#features)
- [Screenshots](#screenshots)
- [Roadmap](#roadmap)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)
- [Acknowledgments](#acknowledgments)

## 🎯 About The Project

Weather Sounds App is an immersive web application that allows users to experience different weather environments through high-quality ambient sounds. The app features three distinct weather scenarios: summer, rain, and winter, each with unique soundscapes and visual backgrounds.

### Key Features:
- 🎵 **High-Quality Audio**: Immersive weather soundscapes
- 🎨 **Dynamic Backgrounds**: Beautiful visual environments
- 🔊 **Volume Control**: Precise audio level adjustment
- 📱 **Responsive Design**: Works on all devices
- ♿ **Accessibility**: Full ARIA support and keyboard navigation
- 🎭 **Modern UI**: Glassmorphism effects and smooth animations

## 🛠️ Built With

- **[React 19.2.0](https://reactjs.org/)** - Frontend framework
- **[TypeScript 5.9.3](https://www.typescriptlang.org/)** - Type safety
- **[CSS3](https://developer.mozilla.org/en-US/docs/Web/CSS)** - Styling with custom properties
- **[Create React App](https://create-react-app.dev/)** - Development environment
- **[Web Vitals](https://web.dev/vitals/)** - Performance monitoring

## 🚀 Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn package manager

### Installation

1. Clone the repository
   ```bash
   git clone https://github.com/your-username/weather-sounds-app.git
   ```

2. Navigate to the project directory
   ```bash
   cd weather-sounds-app
   ```

3. Install dependencies
   ```bash
   npm install
   # or
   yarn install
   ```

4. Start the development server
   ```bash
   npm start
   # or
   yarn start
   ```

5. Open [http://localhost:3000](http://localhost:3000) to view it in the browser

## 📖 Usage

### Basic Usage

1. **Select a Weather Sound**: Click on any of the three weather cards (Summer, Rain, Winter)
2. **Control Playback**: Click the same card again to pause/resume
3. **Adjust Volume**: Use the volume slider at the bottom to control audio level
4. **Switch Sounds**: Click a different card to switch to another weather sound

### Keyboard Navigation

- **Tab**: Navigate between interactive elements
- **Enter/Space**: Activate buttons and controls
- **Arrow Keys**: Navigate volume slider

## 📁 Project Structure

```
src/
├── components/           # React components
│   ├── SoundCard.tsx    # Individual sound card
│   ├── SoundCards.tsx   # Sound cards container
│   └── VolumeControl.tsx # Volume control component
├── hooks/               # Custom React hooks
│   └── useWeatherSounds.ts # Audio management hook
├── styles/              # Modular CSS architecture
│   ├── theme/           # Design system
│   │   ├── variables.css # CSS custom properties
│   │   └── reset.css    # CSS reset
│   ├── layout/          # Layout styles
│   │   └── App.css      # Main layout
│   └── components/      # Component styles
│       ├── Title.css
│       ├── SoundCard.css
│       ├── SoundCards.css
│       └── VolumeControl.css
├── types/               # TypeScript definitions
│   └── index.ts        # Type definitions
├── utils/               # Utility functions
│   └── config.ts       # App configuration
└── assets/             # Static assets
    ├── icons/          # SVG icons
    ├── sounds/         # Audio files
    └── images/         # Background images
```

## ✨ Features

### 🎵 Audio Features
- **Loop Playback**: Seamless audio looping
- **Volume Control**: Precise 0-100% volume adjustment
- **Audio Management**: Automatic audio cleanup and memory management
- **Cross-browser Support**: Works on all modern browsers

### 🎨 Visual Features
- **Dynamic Backgrounds**: Weather-specific background images
- **Glassmorphism Effects**: Modern translucent UI elements
- **Smooth Animations**: CSS transitions and transforms
- **Responsive Design**: Mobile-first approach

### ♿ Accessibility Features
- **ARIA Labels**: Full screen reader support
- **Keyboard Navigation**: Complete keyboard accessibility
- **Semantic HTML**: Proper HTML5 semantic structure
- **Focus Management**: Clear focus indicators

### 🏗️ Architecture Features
- **Component Separation**: Modular React architecture
- **TypeScript**: Full type safety
- **Custom Hooks**: Reusable audio logic
- **CSS Modules**: Organized styling system

## 📸 Screenshots

<div align="center">
  <img src="public/assets/summer-bg.jpg" alt="Summer Weather" width="300" />
  <img src="public/assets/rainy-bg.jpg" alt="Rain Weather" width="300" />
  <img src="public/assets/winter-bg.jpg" alt="Winter Weather" width="300" />
</div>

## 🗺️ Roadmap

- [ ] **Audio Visualization**: Real-time audio waveform display
- [ ] **Sound Mixing**: Combine multiple weather sounds
- [ ] **Timer Function**: Auto-stop after specified duration
- [ ] **Playlist Feature**: Create custom sound sequences
- [ ] **PWA Support**: Progressive Web App capabilities
- [ ] **Dark/Light Theme**: Theme switching option
- [ ] **Sound Library**: Additional weather sounds
- [ ] **User Preferences**: Save volume and sound preferences

## 🤝 Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

### Development Guidelines

- Follow the existing code style and conventions
- Write meaningful commit messages using Conventional Commits
- Add TypeScript types for all new features
- Update documentation for new features
- Test your changes thoroughly

## 📄 License

Distributed under the MIT License. See `LICENSE` for more information.

## 📞 Contact

**Your Name** - [@yourusername](https://twitter.com/yourusername) - email@example.com

Project Link: [https://github.com/your-username/weather-sounds-app](https://github.com/your-username/weather-sounds-app)

## 🙏 Acknowledgments

- [React](https://reactjs.org/) - The web framework used
- [TypeScript](https://www.typescriptlang.org/) - For type safety
- [Create React App](https://create-react-app.dev/) - Development environment
- [Best README Template](https://github.com/othneildrew/Best-README-Template) - README structure inspiration
- [Unsplash](https://unsplash.com/) - Beautiful background images
- [Freesound](https://freesound.org/) - High-quality audio samples

---

<div align="center">
  <p>Made with ❤️ and React</p>
  <p>⭐ Star this repository if you found it helpful!</p>
</div>