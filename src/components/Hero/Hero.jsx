import { useEffect, useRef } from 'react';
import { wedding } from '../../data/wedding';
import './Hero.css';

const Hero = () => {
  const sectionRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    if (!contentRef.current) return;

    const elements = contentRef.current.querySelectorAll('.animate-element');
    
    elements.forEach((el, index) => {
      setTimeout(() => {
        el.style.opacity = '1';
        el.style.transform = 'translateY(0)';
      }, index * 150);
    });
  }, []);

  return (
    <section ref={sectionRef} className="hero" id="hero">
      <div className="hero-bg-texture"></div>
      <div className="container hero-container">
        <div className="hero-card-frame">
          <div className="corner-ornament corner-top-left">❀</div>
          <div className="corner-ornament corner-top-right">❀</div>
          <div className="corner-ornament corner-bottom-left">❀</div>
          <div className="corner-ornament corner-bottom-right">❀</div>

          <div ref={contentRef} className="hero-content text-center">
            <div className="hero-mantra-badge animate-element">
              <span className="mantra-line">{wedding.mantra}</span>
            </div>
            
            <div className="gold-divider-wrap animate-element">
              <div className="gold-line"></div>
              <span className="gold-motif">✿</span>
              <div className="gold-line"></div>
            </div>

            <p className="hero-subtitle animate-element">Together with their families</p>

            <h1 className="hero-names animate-element">
              <span className="name-script">{wedding.couple.bride.name}</span>
              <span className="hero-ampersand">&</span>
              <span className="name-script">{wedding.couple.groom.name}</span>
            </h1>

            <p className="hero-invite-text animate-element">
              cordially invite you to celebrate the joyous occasion of their wedding
            </p>

            <div className="hero-couple-visual animate-element">
              <div className="hero-image-arch">
                <div className="hero-placeholder-image">
                  <span className="placeholder-text">Couple Photo</span>
                </div>
                <div className="arch-gold-overlay"></div>
              </div>
            </div>

            <div className="hero-details-card animate-element">
              <div className="detail-row date-row">
                <span className="detail-icon">📅</span>
                <span className="detail-val">{wedding.wedding.date}</span>
              </div>
              <div className="detail-row venue-row">
                <span className="detail-icon">📍</span>
                <span className="detail-val">{wedding.wedding.venue}, {wedding.wedding.city}</span>
              </div>
            </div>

            <div className="hero-actions animate-element">
              <a href="#couple" className="btn btn-primary btn-lg">
                <span>View Full Invitation</span>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"/>
                </svg>
              </a>
              <a href="#celebrations" className="btn btn-secondary btn-lg">
                <span>Ceremony Schedule</span>
              </a>
            </div>

            <div className="gold-divider-wrap bottom-divider animate-element">
              <div className="gold-line"></div>
              <span className="gold-motif">❀</span>
              <div className="gold-line"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;