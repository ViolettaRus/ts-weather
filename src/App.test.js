import { render, screen } from '@testing-library/react';
import App from './App';

const mockAudio = {
  play: jest.fn(),
  pause: jest.fn(),
  load: jest.fn(),
  addEventListener: jest.fn(),
  removeEventListener: jest.fn(),
  volume: 0.7,
  currentTime: 0,
  src: '',
  loop: false,
};

global.Audio = jest.fn(() => mockAudio);

describe('App Component', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    
    Object.defineProperty(document.body, 'style', {
      value: {
        backgroundImage: '',
        backgroundSize: '',
        backgroundPosition: '',
        backgroundRepeat: '',
        filter: '',
      },
      writable: true,
    });
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  it('renders weather sounds title', () => {
    render(<App />);
    const titleElement = screen.getByText('Weather sounds');
    expect(titleElement).toBeInTheDocument();
  });

  it('renders all sound cards', () => {
    render(<App />);
    
    const cards = screen.getAllByRole('button');
    expect(cards).toHaveLength(3);
  });

  it('renders volume control', () => {
    render(<App />);
    
    const volumeControl = screen.getByLabelText('Громкость');
    expect(volumeControl).toBeInTheDocument();
    expect(volumeControl).toHaveAttribute('type', 'range');
    expect(volumeControl).toHaveAttribute('min', '0');
    expect(volumeControl).toHaveAttribute('max', '1');
  });

  it('has proper accessibility attributes', () => {
    render(<App />);
    
    const volumeControl = screen.getByLabelText('Громкость');
    expect(volumeControl).toHaveAttribute('aria-valuemin', '0');
    expect(volumeControl).toHaveAttribute('aria-valuemax', '1');
  });
});