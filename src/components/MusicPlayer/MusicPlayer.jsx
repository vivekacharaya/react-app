import { useState, useEffect, useRef } from 'react';
import './MusicPlayer.css';

const MusicPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    // Create audio instance
    const audio = new Audio('/assets/audio/wedding-theme.mp3');
    audio.loop = true;
    audio.volume = 0.5;

    audio.addEventListener('error', () => {
      // Fallback to wav if mp3 fails
      if (audio.src.endsWith('.mp3')) {
        audio.src = '/assets/audio/wedding-theme.wav';
        audio.load();
      }
    });

    audioRef.current = audio;

    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);

  const toggleMusic = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play()
        .then(() => {
          setIsPlaying(true);
        })
        .catch((err) => {
          console.log('Audio playback error:', err);
        });
    }
  };

  return (
    <div className="react-floating-controls">
      <button 
        id="react-music-toggle"
        className={`react-floating-btn ${isPlaying ? 'is-playing' : ''}`}
        onClick={toggleMusic}
        aria-label="Toggle Traditional Indian Wedding Music"
        title={isPlaying ? "Pause Wedding Music" : "Play Traditional Indian Wedding Music"}
      >
        {!isPlaying ? (
          <svg className="music-icon-muted" viewBox="0 0 24 24" fill="currentColor" width="22" height="22">
            <path d="M16.5 12c1.38 0 2.49-1.12 2.49-2.5s-1.11-2.5-2.49-2.5c-1.38 0-2.5 1.12-2.5 2.5s1.12 2.5 2.5 2.5zM9 9c1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3 1.34 3 3 3zm7.5 3c-1.83 0-5.5.92-5.5 2.75V19h11v-4.25c0-1.83-3.67-2.75-5.5-2.75zM9 13c-2.33 0-7 1.17-7 3.5V19h7v-4.25c0-.85.33-1.71.94-2.5-.94-.37-2.04-.75-2.94-.75z"/>
          </svg>
        ) : (
          <svg className="music-icon-playing" viewBox="0 0 24 24" fill="currentColor" width="22" height="22">
            <path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z"/>
          </svg>
        )}
        {isPlaying && (
          <span className="react-music-waves" aria-hidden="true">
            <span></span><span></span><span></span>
          </span>
        )}
      </button>
    </div>
  );
};

export default MusicPlayer;
