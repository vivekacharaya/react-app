import { useState, useEffect } from 'react';
import './VarmalaCeremony.css';

const VarmalaCeremony = () => {
  // ceremonyStage: 'idle' | 'ananya_garland' | 'aarav_garland' | 'united'
  const [ceremonyStage, setCeremonyStage] = useState('idle');
  const [isAutoPlaying, setIsAutoPlaying] = useState(false);
  const [petalsBurst, setPetalsBurst] = useState(false);
  const [diyasLit, setDiyasLit] = useState(true);
  const [blessingCount, setBlessingCount] = useState(108);
  const [hasUserBlessed, setHasUserBlessed] = useState(false);

  // Auto-play the sacred garland exchange after 4 seconds if idle
  useEffect(() => {
    const timer = setTimeout(() => {
      triggerVarmalaExchange();
    }, 3500);

    return () => clearTimeout(timer);
  }, []);

  const triggerVarmalaExchange = () => {
    if (ceremonyStage !== 'idle' && ceremonyStage !== 'united') return;

    setCeremonyStage('ananya_garland');
    setIsAutoPlaying(true);

    // Step 1: Ananya places garland on Aarav (0s -> 1.6s)
    setTimeout(() => {
      setCeremonyStage('aarav_garland');
    }, 1800);

    // Step 2: Aarav places garland on Ananya (1.8s -> 3.6s)
    setTimeout(() => {
      setCeremonyStage('united');
      setPetalsBurst(true);
      setIsAutoPlaying(false);

      // Stop high burst after 5s
      setTimeout(() => setPetalsBurst(false), 5000);
    }, 3600);
  };

  const resetCeremony = () => {
    setCeremonyStage('idle');
    setPetalsBurst(false);
  };

  const handleFlowerShower = () => {
    setPetalsBurst(true);
    setBlessingCount(prev => prev + 1);
    setTimeout(() => setPetalsBurst(false), 3000);
  };

  const handleBlessCouple = () => {
    if (!hasUserBlessed) {
      setBlessingCount(prev => prev + 1);
      setHasUserBlessed(true);
      setPetalsBurst(true);
      setTimeout(() => setPetalsBurst(false), 3500);
    }
  };

  return (
    <section className="varmala-ceremony-section" id="varmala-ceremony">
      {/* Decorative Traditional Indian Mandap Background */}
      <div className="varmala-bg-ornaments">
        <div className="mandap-arch-pillar left-pillar"></div>
        <div className="mandap-arch-pillar right-pillar"></div>
        <div className="mandap-top-toran">
          <div className="hanging-marigold-row">
            {[...Array(16)].map((_, i) => (
              <div key={i} className="marigold-string" style={{ animationDelay: `${(i % 5) * 0.2}s` }}>
                <span className="flower-drop f1">🌼</span>
                <span className="flower-drop f2">🌸</span>
                <span className="flower-drop f3">🌹</span>
                <span className="flower-drop bell">🔔</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="varmala-container">
        
        {/* Header Badge */}
        <div className="varmala-header text-center">
          <div className="shubh-vivaha-badge">
            <span>| शुभ वरमाला महोत्सव |</span>
          </div>
          <h2 className="varmala-title">The Sacred Jaimala Exchange</h2>
          <p className="varmala-subtitle">
            A timeless tradition where two souls exchange fragrant floral garlands (Varmala), accepting each other in love, respect, and devotion.
          </p>
          <div className="gold-mandala-divider">
            <span className="mandala-icon">❀</span>
          </div>
        </div>

        {/* Sacred Mandap Interactive Stage */}
        <div className="varmala-stage-card">
          
          {/* Floating Petal Rain during celebration */}
          {petalsBurst && (
            <div className="ceremony-petal-rain" aria-hidden="true">
              {[...Array(24)].map((_, i) => (
                <span 
                  key={i} 
                  className={`burst-petal petal-type-${(i % 4) + 1}`}
                  style={{
                    left: `${(i * 4.2) + Math.random() * 2}%`,
                    animationDelay: `${Math.random() * 0.8}s`,
                    animationDuration: `${2.2 + Math.random() * 1.5}s`
                  }}
                >
                  {['🌸', '🌹', '🌼', '🌺', '✨'][i % 5]}
                </span>
              ))}
            </div>
          )}

          {/* Glowing Diyas at Mandap Base */}
          <div className="mandap-diyas-row">
            <div className={`traditional-diya diya-left ${diyasLit ? 'flame-lit' : ''}`}>
              <div className="diya-body">🪔</div>
              <div className="diya-aura"></div>
            </div>
            <div className="sacred-havan-kund">
              <div className="agni-flame">🔥</div>
              <span className="kund-label">पवित्र अग्नि साक्ष्य</span>
            </div>
            <div className={`traditional-diya diya-right ${diyasLit ? 'flame-lit' : ''}`}>
              <div className="diya-body">🪔</div>
              <div className="diya-aura"></div>
            </div>
          </div>

          {/* The Couple Visual Mandap Arena */}
          <div className="couple-varmala-arena">
            
            {/* BRIDE SIDE (ANANYA) */}
            <div className={`couple-character bride-character ${ceremonyStage === 'ananya_garland' ? 'garland-action' : ''}`}>
              <div className="character-portrait-arch">
                <div className="bridal-halo"></div>
                <img 
                  src="/assets/images/couple/bride.jpg" 
                  alt="Bride Ananya Sharma" 
                  className="varmala-portrait-img" 
                />
                
                {/* Bride's Active Garland (Placed on her in Stage 'aarav_garland' or 'united') */}
                <div className={`garland-worn bride-worn-garland ${ceremonyStage === 'aarav_garland' || ceremonyStage === 'united' ? 'garland-placed' : ''}`}>
                  <div className="royal-garland-svg">
                    <span className="g-flower g1">🌹</span>
                    <span className="g-flower g2">🌼</span>
                    <span className="g-flower g3">🌸</span>
                    <span className="g-flower g4">🌹</span>
                    <span className="g-flower g5">🌼</span>
                    <span className="g-flower g6">🌸</span>
                    <span className="g-flower g7">🌹</span>
                  </div>
                </div>

                <div className="character-title-pill">
                  <span className="name">Ananya Sharma</span>
                  <span className="role">The Bride • वधू</span>
                </div>
              </div>

              {/* Floating Flower Garland Arc from Bride -> Groom */}
              {ceremonyStage === 'ananya_garland' && (
                <div className="flying-varmala arc-to-right">
                  <div className="varmala-trail-sparkles">✨</div>
                  <div className="garland-floral-chain">
                    <span>🌹🌼🌸🌹🌼🌸🌹</span>
                  </div>
                  <span className="varmala-caption">Ananya offers the Varmala...</span>
                </div>
              )}
            </div>

            {/* CENTRAL SACRED BOND / GATHBANDHAN */}
            <div className="central-sacred-node">
              <div className={`sacred-knot-gathbandhan ${ceremonyStage === 'united' ? 'knot-tied' : ''}`}>
                <div className="gathbandhan-silk">
                  <span className="knot-symbol">🎀</span>
                  <span className="knot-text">गठबंधन</span>
                </div>
                <div className="golden-union-heart">
                  <svg viewBox="0 0 24 24" className="pulse-heart-svg">
                    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                  </svg>
                </div>
              </div>
              <div className="auspicious-thread-line"></div>
            </div>

            {/* GROOM SIDE (AARAV) */}
            <div className={`couple-character groom-character ${ceremonyStage === 'aarav_garland' ? 'garland-action' : ''}`}>
              <div className="character-portrait-arch">
                <div className="groom-halo"></div>
                <img 
                  src="/assets/images/couple/groom.jpg" 
                  alt="Groom Aarav Verma" 
                  className="varmala-portrait-img" 
                />

                {/* Groom's Active Garland (Placed on him in Stage 'ananya_garland' or 'united') */}
                <div className={`garland-worn groom-worn-garland ${ceremonyStage === 'ananya_garland' || ceremonyStage === 'aarav_garland' || ceremonyStage === 'united' ? 'garland-placed' : ''}`}>
                  <div className="royal-garland-svg">
                    <span className="g-flower g1">🌹</span>
                    <span className="g-flower g2">🌼</span>
                    <span className="g-flower g3">🌸</span>
                    <span className="g-flower g4">🌹</span>
                    <span className="g-flower g5">🌼</span>
                    <span className="g-flower g6">🌸</span>
                    <span className="g-flower g7">🌹</span>
                  </div>
                </div>

                <div className="character-title-pill groom-pill">
                  <span className="name">Aarav Verma</span>
                  <span className="role">The Groom • वर</span>
                </div>
              </div>

              {/* Floating Flower Garland Arc from Groom -> Bride */}
              {ceremonyStage === 'aarav_garland' && (
                <div className="flying-varmala arc-to-left">
                  <div className="varmala-trail-sparkles">✨</div>
                  <div className="garland-floral-chain">
                    <span>🌹🌼🌸🌹🌼🌸🌹</span>
                  </div>
                  <span className="varmala-caption">Aarav reciprocates with devotion...</span>
                </div>
              )}
            </div>

          </div>

          {/* Emotional Vedic Blessing Toast when united */}
          <div className={`ceremony-toast-banner ${ceremonyStage === 'united' ? 'toast-visible' : ''}`}>
            <div className="toast-mantra-highlight">
              <span className="swastik">卐</span>
              <p className="mantra-line">"यदेतद्धृदयं तव तदस्तु हृदयं मम | यदिदं हृदयं मम तदस्तु हृदयं तव ||"</p>
              <span className="swastik">卐</span>
            </div>
            <p className="toast-translation">
              "My heart is now your heart, and your heart is mine forever. Blessed in the fragrance of eternal love."
            </p>
            <div className="toast-family-cheer">
              <span>🌺 Two Families United • Endless Blessings Flowing 🌺</span>
            </div>
          </div>

          {/* Interactive Ceremony Control Center */}
          <div className="varmala-interactive-controls">
            
            <button 
              className={`ceremony-btn primary-varmala-btn ${isAutoPlaying ? 'animating' : ''}`}
              onClick={ceremonyStage === 'united' ? resetCeremony : triggerVarmalaExchange}
            >
              <span className="btn-icon">🌸</span>
              <span className="btn-label">
                {ceremonyStage === 'united' ? 'Replay Varmala Ceremony' : 'Exchange Flower Varmala (वरमाला पहनाएं)'}
              </span>
              <span className="btn-sparkle">✨</span>
            </button>

            <button 
              className="ceremony-btn flower-shower-btn"
              onClick={handleFlowerShower}
              title="Shower fragrant rose & marigold petals"
            >
              <span className="btn-icon">🌹</span>
              <span className="btn-label">Shower Flower Petals (पुष्प वर्षा)</span>
            </button>

            <button 
              className={`ceremony-btn diya-bless-btn ${hasUserBlessed ? 'blessed' : ''}`}
              onClick={handleBlessCouple}
              title="Send your heartfelt divine blessings"
            >
              <span className="btn-icon">🪔</span>
              <span className="btn-label">
                {hasUserBlessed ? '✓ You Blessed the Couple!' : 'Send Blessing (आशीर्वाद दें)'}
              </span>
              <span className="bless-counter-badge">{blessingCount}</span>
            </button>

          </div>

        </div>

      </div>
    </section>
  );
};

export default VarmalaCeremony;
