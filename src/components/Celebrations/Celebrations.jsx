import { useEffect, useRef } from 'react';
import { events } from '../../data/events';
import './Celebrations.css';

const Celebrations = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const eventCards = sectionRef.current.querySelectorAll('.event-card');
            eventCards.forEach((card, index) => {
              setTimeout(() => {
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
              }, index * 150);
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="celebrations-section" id="celebrations">
      <div className="container">
        <div className="section-header text-center">
          <p className="section-tagline">| विवाह समारोह |</p>
          <h2 className="section-title">The Wedding Celebrations Begin!</h2>
          <div className="gold-divider-wrap">
            <div className="gold-line"></div>
            <span className="gold-motif">✿</span>
            <div className="gold-line"></div>
          </div>
          <p className="section-subtitle">Join us for these beautiful ceremonies as we celebrate our union.</p>
        </div>

        <div className="events-grid">
          {events.map((event) => (
            <div key={event.id} className="event-card">
              <div className="event-icon">{event.icon}</div>
              <div className="event-content">
                <h3 className="event-name">{event.name}</h3>
                <p className="event-hindi-name">{event.hindiName}</p>
                <div className="event-details">
                  <div className="event-detail">
                    <span className="detail-label">📅</span>
                    <span className="detail-value">{event.date}</span>
                  </div>
                  <div className="event-detail">
                    <span className="detail-label">🕐</span>
                    <span className="detail-value">{event.time}</span>
                  </div>
                  <div className="event-detail">
                    <span className="detail-label">📍</span>
                    <span className="detail-value">{event.location}</span>
                  </div>
                </div>
                <p className="event-description">{event.description}</p>
              </div>
              <div className="card-gold-trim"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Celebrations;