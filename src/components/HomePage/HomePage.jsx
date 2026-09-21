import { useState, useEffect } from 'react';
import { weddingData } from '../../data/weddingData';
import { storyOverview } from '../../data/storyData';
import { galleryItems } from '../../data/galleryData';
import VarmalaCeremony from '../VarmalaCeremony/VarmalaCeremony';
import './HomePage.css';

const HomePage = ({ onNavigate }) => {
  const { couple, wedding, mantra, shloka, shlokaTranslation } = weddingData;

  // Countdown timer state
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  const [showerPetals, setShowerPetals] = useState(false);

  useEffect(() => {
    const target = new Date(wedding.dateTime).getTime();

    const updateCountdown = () => {
      const now = new Date().getTime();
      const difference = target - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000)
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);
    return () => clearInterval(interval);
  }, [wedding.dateTime]);

  const previewGallery = galleryItems.slice(0, 6);

  const triggerPetalShower = () => {
    setShowerPetals(true);
    setTimeout(() => setShowerPetals(false), 4000);
  };

  const handleSaveTheDate = () => {
    const eventDetails = `BEGIN:VCALENDAR
VERSION:2.0
BEGIN:VEVENT
SUMMARY:Wedding of Ananya & Aarav (Sanskriti Vivaha)
DESCRIPTION:Celebrate the sacred union of Ananya Sharma and Aarav Verma.
LOCATION:${wedding.fullAddress}
DTSTART:20261031T130000Z
DTEND:20261031T183000Z
STATUS:CONFIRMED
END:VEVENT
END:VCALENDAR`;

    const blob = new Blob([eventDetails], { type: 'text/calendar;charset=utf-8' });
    const link = document.createElement('a');
    link.href = window.URL.createObjectURL(blob);
    link.setAttribute('download', 'Ananya-Aarav-Wedding.ics');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="home-page-container">
      
      {/* Floating Petal Shower Effect on Click */}
      {showerPetals && (
        <div className="global-petal-shower" aria-hidden="true">
          {[...Array(30)].map((_, i) => (
            <span 
              key={i} 
              className="shower-petal"
              style={{
                left: `${(i * 3.3) + Math.random() * 2}%`,
                animationDelay: `${Math.random() * 0.6}s`,
                animationDuration: `${2.5 + Math.random() * 1.5}s`
              }}
            >
              {['🌸', '🌹', '🌼', '✨', '🌺'][i % 5]}
            </span>
          ))}
        </div>
      )}

      {/* 1. HERO / ROYAL WEDDING INVITATION SECTION */}
      <section className="royal-hero-section">
        <div className="hero-ornate-background">
          <div className="bg-arch-left"></div>
          <div className="bg-arch-right"></div>
        </div>

        <div className="hero-content-inner">
          
          <div className="hero-mantra-pill">
            <span>{mantra}</span>
          </div>

          <p className="hero-invitation-pretitle">The Auspicious Wedding Invitation of</p>
          <h1 className="hero-couple-headline">
            <span className="bride-name">{couple.bride.name.split(' ')[0]}</span>
            <span className="ampersand">&</span>
            <span className="groom-name">{couple.groom.name.split(' ')[0]}</span>
          </h1>

          <div className="hero-shloka-box">
            <p className="sanskrit-shloka-text">“{shloka}”</p>
            <p className="shloka-translation-text">{shlokaTranslation}</p>
          </div>

          {/* Central Royal Image Showcase */}
          <div className="hero-portrait-frame-container">
            <div className="ornate-gold-frame">
              <img 
                src="/assets/images/couple/hero-couple.jpg" 
                alt="Ananya and Aarav Royal Wedding Couple" 
                className="hero-royal-image"
              />
              <div className="frame-gold-border"></div>
              <div className="frame-corner top-left"></div>
              <div className="frame-corner top-right"></div>
              <div className="frame-corner bottom-left"></div>
              <div className="frame-corner bottom-right"></div>
            </div>
            <div className="hero-image-caption">
              <span>Under the Sacred Mandap • Together in Eternal Love</span>
            </div>
          </div>

          {/* Wedding Date & Muhurat Card */}
          <div className="wedding-date-card">
            <div className="date-icon">🗓️</div>
            <div className="date-details">
              <h2 className="wedding-date-text">{wedding.date}</h2>
              <p className="wedding-muhurat-text">{wedding.muhurat}</p>
              <p className="wedding-venue-text">📍 {wedding.venue}, {wedding.city}</p>
            </div>
            <div className="hero-button-group">
              <button className="save-date-btn" onClick={handleSaveTheDate}>
                <span>✨ Save The Date (.ics)</span>
              </button>
              <button className="shower-petals-action-btn" onClick={triggerPetalShower}>
                <span>🌸 Shower Petals</span>
              </button>
            </div>
          </div>

          {/* Live Countdown Timer */}
          <div className="countdown-ribbon">
            <div className="countdown-label">Counting Down To The Auspicious Muhurtham</div>
            <div className="countdown-grid">
              <div className="timer-box">
                <span className="timer-num">{String(timeLeft.days).padStart(2, '0')}</span>
                <span className="timer-unit">Days</span>
              </div>
              <div className="timer-separator">:</div>
              <div className="timer-box">
                <span className="timer-num">{String(timeLeft.hours).padStart(2, '0')}</span>
                <span className="timer-unit">Hours</span>
              </div>
              <div className="timer-separator">:</div>
              <div className="timer-box">
                <span className="timer-num">{String(timeLeft.minutes).padStart(2, '0')}</span>
                <span className="timer-unit">Mins</span>
              </div>
              <div className="timer-separator">:</div>
              <div className="timer-box">
                <span className="timer-num">{String(timeLeft.seconds).padStart(2, '0')}</span>
                <span className="timer-unit">Secs</span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 2. GRAND ANIMATED FLOWER MALA (VARMALA) CEREMONY STAGE */}
      <VarmalaCeremony />

      {/* 3. COUPLE INTRODUCTION SECTION */}
      <section className="couple-intro-section">
        <div className="section-header text-center">
          <span className="section-subtitle">A Match Blessed by Destiny</span>
          <h2 className="section-title">The Bride & Groom</h2>
          <div className="gold-divider">
            <span className="divider-lotus">❀</span>
          </div>
          <p className="section-header-desc">
            Two souls, guided by shared values, timeless traditions, and joyous laughter.
          </p>
        </div>

        <div className="couple-cards-grid">
          
          {/* Bride Card */}
          <div className="couple-card bride-card">
            <div className="couple-card-image-wrapper">
              <img 
                src={couple.bride.image} 
                alt={couple.bride.name} 
                className="couple-card-img"
              />
              <div className="role-ribbon">
                <span>{couple.bride.hindiRole} • {couple.bride.role}</span>
              </div>
            </div>

            <div className="couple-card-body">
              <h3 className="couple-person-name">{couple.bride.name}</h3>
              <p className="couple-parents-line">Daughter of {couple.bride.parents}</p>
              
              <div className="couple-tags">
                {couple.bride.attributes.map((attr, idx) => (
                  <span key={idx} className="person-pill">{attr}</span>
                ))}
              </div>

              <blockquote className="couple-quote">
                “{couple.bride.quote}”
              </blockquote>
            </div>
          </div>

          {/* Groom Card */}
          <div className="couple-card groom-card">
            <div className="couple-card-image-wrapper">
              <img 
                src={couple.groom.image} 
                alt={couple.groom.name} 
                className="couple-card-img"
              />
              <div className="role-ribbon groom-ribbon">
                <span>{couple.groom.hindiRole} • {couple.groom.role}</span>
              </div>
            </div>

            <div className="couple-card-body">
              <h3 className="couple-person-name">{couple.groom.name}</h3>
              <p className="couple-parents-line">Son of {couple.groom.parents}</p>

              <div className="couple-tags">
                {couple.groom.attributes.map((attr, idx) => (
                  <span key={idx} className="person-pill">{attr}</span>
                ))}
              </div>

              <blockquote className="couple-quote">
                “{couple.groom.quote}”
              </blockquote>
            </div>
          </div>

        </div>

        <div className="couple-cta-row text-center">
          <button 
            className="royal-action-btn"
            onClick={() => onNavigate('about')}
          >
            <span>Learn More About Our Families & Story →</span>
          </button>
        </div>
      </section>

      {/* 4. SHORT WEDDING STORY PREVIEW SECTION */}
      <section className="story-preview-section">
        <div className="story-preview-container">
          <div className="story-preview-text-col">
            <span className="section-subtitle">Our Beautiful Journey</span>
            <h2 className="section-title">How Destiny Wove Us Together</h2>
            <p className="story-lead-paragraph">
              {storyOverview.shortSummary}
            </p>
            <div className="story-highlight-quote">
              “{storyOverview.howWeMet.quote}”
            </div>
            
            <button 
              className="royal-action-btn"
              onClick={() => onNavigate('about')}
            >
              <span>Explore Complete Wedding Story & Itinerary →</span>
            </button>
          </div>

          <div className="story-preview-image-col">
            <div className="story-image-card">
              <img 
                src="/assets/images/story/first-meet.jpg" 
                alt="How Ananya and Aarav Met" 
                className="story-preview-img"
              />
              <div className="story-badge">
                <span>Chapter 1: The Coffee Serendipity</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. GALLERY PREVIEW SECTION */}
      <section className="gallery-preview-section">
        <div className="section-header text-center">
          <span className="section-subtitle">Cherished Memories</span>
          <h2 className="section-title">Moments of Love & Radiance</h2>
          <div className="gold-divider">
            <span className="divider-lotus">❀</span>
          </div>
        </div>

        <div className="gallery-preview-grid">
          {previewGallery.map((item) => (
            <div 
              key={item.id} 
              className="gallery-preview-card"
              onClick={() => onNavigate('gallery')}
            >
              <img src={item.src} alt={item.title} className="preview-img" />
              <div className="preview-overlay">
                <span className="preview-cat-tag">{item.categoryName}</span>
                <h4 className="preview-title">{item.title}</h4>
                <p className="preview-caption">{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="gallery-cta-row text-center">
          <button 
            className="royal-action-btn gold-btn"
            onClick={() => onNavigate('gallery')}
          >
            <span>View Complete Wedding Gallery ({galleryItems.length} Photos) →</span>
          </button>
        </div>
      </section>

      {/* 6. FOOTER */}
      <footer className="royal-wedding-footer">
        <div className="footer-content">
          <span className="footer-lotus">❀</span>
          <h3 className="footer-title">Sanskriti Vivaha</h3>
          <p className="footer-mantra">| शुभ विवाह • सदा सौभाग्यवती भव |</p>
          <p className="footer-blessings">
            "Your presence and warm blessings are our greatest wedding gift."
          </p>
          <div className="footer-credits">
            <span>Celebration of Ananya Sharma & Aarav Verma • 31 October 2026</span>
          </div>
        </div>
      </footer>

    </div>
  );
};

export default HomePage;
