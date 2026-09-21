import { useState, useEffect, useRef } from 'react';
import IntroAnimation from './components/IntroAnimation/IntroAnimation';
import Navbar from './components/Navbar/Navbar';
import HomePage from './components/HomePage/HomePage';
import AboutPage from './components/AboutPage/AboutPage';
import GalleryPage from './components/GalleryPage/GalleryPage';
import MusicPlayer from './components/MusicPlayer/MusicPlayer';
import './styles/global.css';

function App() {
  const [showIntro, setShowIntro] = useState(true);
  const [currentPage, setCurrentPage] = useState('home'); // 'home' | 'about' | 'gallery'
  const canvasRef = useRef(null);

  useEffect(() => {
    // Check if user has already seen the intro in this session
    const hasSeenIntro = sessionStorage.getItem('hasSeenIntro_sanskriti');
    if (hasSeenIntro === 'true') {
      setShowIntro(false);
    }
  }, []);

  // Ambient Floating Rose Petals Canvas
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    // Particle system
    const petalCount = 28;
    const petals = [];
    const colors = ['rgba(224, 138, 148, 0.45)', 'rgba(199, 154, 59, 0.35)', 'rgba(182, 107, 112, 0.4)'];

    for (let i = 0; i < petalCount; i++) {
      petals.push({
        x: Math.random() * width,
        y: Math.random() * height,
        r: Math.random() * 5 + 3,
        d: Math.random() * petalCount,
        color: colors[Math.floor(Math.random() * colors.length)],
        tilt: Math.floor(Math.random() * 10) - 10,
        tiltAngleIncremental: Math.random() * 0.07 + 0.03,
        tiltAngle: 0
      });
    }

    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      for (let i = 0; i < petalCount; i++) {
        const p = petals[i];
        ctx.beginPath();
        ctx.lineWidth = p.r / 2;
        ctx.strokeStyle = p.color;
        ctx.fillStyle = p.color;
        ctx.moveTo(p.x + p.tilt + p.r / 4, p.y);
        ctx.lineTo(p.x + p.tilt, p.y + p.tilt + p.r / 4);
        ctx.stroke();

        // Update positions
        p.tiltAngle += p.tiltAngleIncremental;
        p.y += (Math.cos(p.d) + 1 + p.r / 4) * 0.6;
        p.x += Math.sin(p.d) * 0.5;
        p.tilt = Math.sin(p.tiltAngle - i / 3) * 12;

        // Reset if offscreen
        if (p.y > height) {
          p.x = Math.random() * width;
          p.y = -20;
        }
      }

      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  const handleIntroComplete = () => {
    sessionStorage.setItem('hasSeenIntro_sanskriti', 'true');
    setShowIntro(false);
  };

  const handleSkipIntro = () => {
    sessionStorage.setItem('hasSeenIntro_sanskriti', 'true');
    setShowIntro(false);
  };

  const handleReplayIntro = () => {
    setShowIntro(true);
  };

  const handleNavigate = (pageId) => {
    setCurrentPage(pageId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="wedding-body">
      {/* Floating Petals Canvas */}
      <canvas 
        ref={canvasRef} 
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          pointerEvents: 'none',
          zIndex: 99
        }} 
      />

      {/* Signature Intro Animation */}
      {showIntro && (
        <IntroAnimation 
          onComplete={handleIntroComplete}
          onSkip={handleSkipIntro}
        />
      )}

      {/* Main 3-Page Application */}
      <Navbar 
        currentPage={currentPage}
        setCurrentPage={handleNavigate}
        onReplayIntro={handleReplayIntro}
      />

      <main className="invitation-main-content">
        {currentPage === 'home' && (
          <HomePage onNavigate={handleNavigate} />
        )}

        {currentPage === 'about' && (
          <AboutPage onNavigate={handleNavigate} />
        )}

        {currentPage === 'gallery' && (
          <GalleryPage />
        )}
      </main>

      {/* Traditional Indian Wedding Music Player */}
      <MusicPlayer />
    </div>
  );
}

export default App;