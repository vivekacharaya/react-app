import { useState, useEffect } from 'react';
import './IntroAnimation.css';

const IntroAnimation = ({ onComplete, onSkip }) => {
  // Sequence stages: 1: hearts, 2: merge, 3: couple entry, 4: flowers, 5: garland, 6: families, 7: welcome, 8: invitation open, 9: done
  const [stage, setStage] = useState(1);
  const [fadingOut, setFadingOut] = useState(false);

  useEffect(() => {
    // Stage timings for cinematic progression
    const t1 = setTimeout(() => setStage(2), 1200); // hearts move together & merge
    const t2 = setTimeout(() => setStage(3), 2600); // bride & groom enter
    const t3 = setTimeout(() => setStage(4), 4000); // flowers appear
    const t4 = setTimeout(() => setStage(5), 5200); // garland exchange
    const t5 = setTimeout(() => setStage(6), 6800); // families appear behind
    const t6 = setTimeout(() => setStage(7), 8400); // welcome message
    const t7 = setTimeout(() => setStage(8), 10400); // invitation unfolds
    const t8 = setTimeout(() => {
      setFadingOut(true);
      setTimeout(() => onComplete(), 700);
    }, 12500); // complete

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(t4);
      clearTimeout(t5);
      clearTimeout(t6);
      clearTimeout(t7);
      clearTimeout(t8);
    };
  }, [onComplete]);

  const handleSkip = () => {
    setFadingOut(true);
    setTimeout(() => onSkip(), 300);
  };

  return (
    <div className={`intro-overlay ${fadingOut ? 'fade-out' : ''}`}>
      {/* Background with floating golden sparkles and mandalas */}
      <div className="intro-backdrop">
        <div className="mandala-bg-left"></div>
        <div className="mandala-bg-right"></div>
        <div className="intro-glow-circle"></div>
      </div>

      <div className="intro-stage-container">
        
        {/* Sacred Mantra Header */}
        <div className="intro-mantra-badge">
          <span className="mantra-sanskrit">| ॐ श्री गणेशाय नमः |</span>
        </div>

        <h1 className="intro-brand-title">Sanskriti Vivaha</h1>
        <p className="intro-brand-tagline">Where Two Hearts Meet, India's Heritage Celebrates</p>

        {/* Central Cinematic Stage */}
        <div className="cinematic-canvas">
          
          {/* STAGE 1 & 2: TWO HEARTS & MERGE */}
          <div className={`stage-element hearts-stage ${stage >= 1 && stage < 3 ? 'active' : ''} ${stage === 2 ? 'merged' : ''}`}>
            <div className="heart-left-wrapper">
              <svg className="heart-svg" viewBox="0 0 24 24">
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
              </svg>
              <span className="heart-name">Ananya</span>
            </div>

            <div className="heart-right-wrapper">
              <svg className="heart-svg" viewBox="0 0 24 24">
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
              </svg>
              <span className="heart-name">Aarav</span>
            </div>

            {stage >= 2 && (
              <div className="united-golden-heart">
                <svg className="heart-gold-svg" viewBox="0 0 24 24">
                  <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                </svg>
                <div className="united-burst"></div>
              </div>
            )}
          </div>

          {/* STAGE 3, 4, 5, 6: COUPLE, FLOWERS, GARLANDS & FAMILIES */}
          {stage >= 3 && (
            <div className="couple-ceremony-stage">
              
              {/* STAGE 6: FAMILIES IN BACKGROUND */}
              <div className={`families-bg-layer ${stage >= 6 ? 'visible' : ''}`}>
                <div className="family-sharma-bg">
                  <span className="family-tag">The Sharma Family</span>
                  <div className="family-silhouette-row">
                    <span className="avatar-icon">👨‍👩‍👦</span>
                    <span className="family-blessing">Blessings & Joy</span>
                  </div>
                </div>

                <div className="family-verma-bg">
                  <span className="family-tag">The Verma Family</span>
                  <div className="family-silhouette-row">
                    <span className="avatar-icon">👨‍👩‍👧</span>
                    <span className="family-blessing">Love & Prosperity</span>
                  </div>
                </div>
              </div>

              {/* BRIDE FROM LEFT */}
              <div className={`couple-person bride-entry ${stage >= 3 ? 'entered' : ''}`}>
                <div className="avatar-ring bride-ring">
                  <img src="/assets/images/couple/bride.jpg" alt="Bride Ananya" className="person-intro-img" />
                  <div className="ring-sparkle"></div>
                </div>
                <div className="person-intro-details">
                  <span className="role-tag">The Graceful Bride</span>
                  <h3 className="person-intro-name">Ananya Sharma</h3>
                </div>
                {/* Garland for bride */}
                <div className={`varmala garland-left ${stage >= 5 ? 'exchanged' : ''}`}>
                  <span className="garland-icon">🌸🌼🌸🌼🌸</span>
                </div>
              </div>

              {/* CENTRAL MANDAP MOTIF & FLOWER BLOOM (STAGE 4) */}
              <div className={`mandap-center-motif ${stage >= 4 ? 'bloom' : ''}`}>
                <div className="center-mandala"></div>
                <div className="flower-petal-burst">
                  <span className="petal p1">🌸</span>
                  <span className="petal p2">🌹</span>
                  <span className="petal p3">🌼</span>
                  <span className="petal p4">🌸</span>
                  <span className="petal p5">🌹</span>
                  <span className="petal p6">🌼</span>
                </div>
                <div className="vivaha-mandap-icon">💒</div>
              </div>

              {/* GROOM FROM RIGHT */}
              <div className={`couple-person groom-entry ${stage >= 3 ? 'entered' : ''}`}>
                <div className="avatar-ring groom-ring">
                  <img src="/assets/images/couple/groom.jpg" alt="Groom Aarav" className="person-intro-img" />
                  <div className="ring-sparkle"></div>
                </div>
                <div className="person-intro-details">
                  <span className="role-tag">The Noble Groom</span>
                  <h3 className="person-intro-name">Aarav Verma</h3>
                </div>
                {/* Garland for groom */}
                <div className={`varmala garland-right ${stage >= 5 ? 'exchanged' : ''}`}>
                  <span className="garland-icon">🌸🌼🌸🌼🌸</span>
                </div>
              </div>
            </div>
          )}

          {/* STAGE 7: WELCOME MESSAGE */}
          <div className={`welcome-banner-stage ${stage >= 7 ? 'active' : ''}`}>
            <p className="welcome-families-text">“Together with our families, we welcome you”</p>
            <p className="welcome-date-badge">To Celebrate Our Royal Wedding • 31 October 2026</p>
          </div>

          {/* STAGE 8: INVITATION OPENS */}
          {stage >= 8 && (
            <div className="invitation-opening-envelope">
              <div className="envelope-card-outer">
                <div className="envelope-seal">
                  <span>❀</span>
                </div>
                <div className="envelope-text">
                  <h3>Opening Your Personal Invitation</h3>
                  <p>Step inside Sanskriti Vivaha</p>
                  <div className="loading-gold-bar"></div>
                </div>
              </div>
            </div>
          )}

        </div>

        {/* Progress indicator dots */}
        <div className="intro-step-indicators">
          {[1, 2, 3, 4, 5, 6, 7, 8].map((s) => (
            <span key={s} className={`step-dot ${stage >= s ? 'active' : ''}`}></span>
          ))}
        </div>

      </div>

      {/* Skip Button */}
      <button className="intro-skip-btn" onClick={handleSkip} aria-label="Skip Intro Animation">
        <span>Skip Intro</span>
        <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
          <path d="M5 4l10 8-10 8V4zm11 0h3v16h-3V4z"/>
        </svg>
      </button>
    </div>
  );
};

export default IntroAnimation;