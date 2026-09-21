import { useEffect, useRef } from 'react';
import { wedding } from '../../data/wedding';
import './Couple.css';

const Couple = () => {
  const sectionRef = useRef(null);
  const brideCardRef = useRef(null);
  const groomCardRef = useRef(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (brideCardRef.current) {
              brideCardRef.current.style.opacity = '1';
              brideCardRef.current.style.transform = 'translateX(0)';
            }
            if (groomCardRef.current) {
              groomCardRef.current.style.opacity = '1';
              groomCardRef.current.style.transform = 'translateX(0)';
            }
          }
        });
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="couple-section bg-blush" id="couple">
      <div className="container">
        <div className="section-header text-center">
          <p className="section-tagline">| शुभ विवाह |</p>
          <h2 className="section-title">Two Stories. One Beginning.</h2>
          <div className="gold-divider-wrap">
            <div className="gold-line"></div>
            <span className="gold-motif">❤</span>
            <div className="gold-line"></div>
          </div>
          <p className="section-subtitle">A celebration of two souls coming together, blessed by family, tradition, and love.</p>
        </div>

        <div className="couple-showcase-grid">
          <div ref={brideCardRef} className="couple-profile-card bride-card">
            <div className="profile-arch-frame">
              <div className="profile-img-wrap">
                <div className="profile-placeholder">
                  <span>Bride Photo</span>
                </div>
              </div>
            </div>
            <div className="profile-info text-center">
              <span className="role-badge">The Bride · {wedding.couple.bride.hindiRole}</span>
              <h3 className="profile-name name-script">{wedding.couple.bride.name}</h3>
              <p className="profile-parents">Beloved daughter of <strong>{wedding.couple.bride.parents}</strong></p>
              <p className="profile-quote">"{wedding.couple.bride.quote}"</p>
            </div>
          </div>

          <div className="couple-center-divider">
            <div className="glowing-heart-node">
              <svg viewBox="0 0 24 24" fill="#C79A3B" className="pulse-heart">
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
              </svg>
              <div className="gold-vertical-thread"></div>
            </div>
          </div>

          <div ref={groomCardRef} className="couple-profile-card groom-card">
            <div className="profile-arch-frame">
              <div className="profile-img-wrap">
                <div className="profile-placeholder">
                  <span>Groom Photo</span>
                </div>
              </div>
            </div>
            <div className="profile-info text-center">
              <span className="role-badge">The Groom · {wedding.couple.groom.hindiRole}</span>
              <h3 className="profile-name name-script">{wedding.couple.groom.name}</h3>
              <p className="profile-parents">Beloved son of <strong>{wedding.couple.groom.parents}</strong></p>
              <p className="profile-quote">"{wedding.couple.groom.quote}"</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Couple;