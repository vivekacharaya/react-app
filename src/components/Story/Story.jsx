import { useEffect, useRef } from 'react';
import { story } from '../../data/story';
import './Story.css';

const Story = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const timelineItems = sectionRef.current.querySelectorAll('.timeline-item');
            timelineItems.forEach((item, index) => {
              setTimeout(() => {
                item.style.opacity = '1';
                item.style.transform = 'translateY(0)';
              }, index * 200);
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
    <section ref={sectionRef} className="story-section bg-blush" id="story">
      <div className="container">
        <div className="section-header text-center">
          <p className="section-tagline">| हमारी प्रेम कहानी |</p>
          <h2 className="section-title">Our Love Story</h2>
          <div className="gold-divider-wrap">
            <div className="gold-line"></div>
            <span className="gold-motif">❤</span>
            <div className="gold-line"></div>
          </div>
          <p className="section-subtitle">Every chapter of our journey has brought us closer to this sacred forever.</p>
        </div>

        <div className="story-timeline-wrapper">
          <div className="timeline-gold-spine"></div>

          {story.map((item, index) => (
            <div 
              key={item.id} 
              className={`timeline-item timeline-${item.position}`}
            >
              <div className="timeline-node">
                <span className="node-flower">{index % 2 === 0 ? '✿' : '❀'}</span>
              </div>
              <div className="story-card">
                <div className="story-image-wrap">
                  <div className="story-placeholder">
                    <span>{item.title}</span>
                  </div>
                </div>
                <div className="story-content">
                  <span className="story-date-badge">{item.date}</span>
                  <h3 className="story-title">{item.title}</h3>
                  <p className="story-text">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Story;