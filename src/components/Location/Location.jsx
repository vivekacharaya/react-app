import { wedding } from '../../data/wedding';
import './Location.css';

const Location = () => {
  const openMap = () => {
    const address = encodeURIComponent(wedding.wedding.fullAddress);
    window.open(`https://www.google.com/maps/search/?api=1&query=${address}`, '_blank');
  };

  return (
    <section className="location-section bg-blush" id="location">
      <div className="container">
        <div className="section-header text-center">
          <p className="section-tagline">| स्थान |</p>
          <h2 className="section-title">Wedding Venue</h2>
          <div className="gold-divider-wrap">
            <div className="gold-line"></div>
            <span className="gold-motif">📍</span>
            <div className="gold-line"></div>
          </div>
          <p className="section-subtitle">Join us at this beautiful venue to celebrate our special day.</p>
        </div>

        <div className="location-content">
          <div className="venue-card">
            <div className="venue-header">
              <h3 className="venue-name">{wedding.wedding.venue}</h3>
              <p className="venue-location">{wedding.wedding.city}, {wedding.wedding.state}</p>
            </div>

            <div className="venue-details">
              <div className="venue-detail">
                <span className="detail-icon">📅</span>
                <div className="detail-info">
                  <span className="detail-label">Date</span>
                  <span className="detail-value">{wedding.wedding.date}</span>
                </div>
              </div>

              <div className="venue-detail">
                <span className="detail-icon">🕐</span>
                <div className="detail-info">
                  <span className="detail-label">Time</span>
                  <span className="detail-value">6:30 PM onwards</span>
                </div>
              </div>

              <div className="venue-detail">
                <span className="detail-icon">📍</span>
                <div className="detail-info">
                  <span className="detail-label">Address</span>
                  <span className="detail-value">{wedding.wedding.fullAddress}</span>
                </div>
              </div>
            </div>

            <button className="btn btn-primary map-button" onClick={openMap}>
              <span>Open in Maps</span>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
              </svg>
            </button>
          </div>

          <div className="map-placeholder">
            <div className="map-content">
              <span className="map-icon">🗺️</span>
              <p className="map-text">Interactive Map</p>
              <p className="map-subtext">Click "Open in Maps" to view location</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;