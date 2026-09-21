import { wedding } from '../../data/wedding';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-brand">
            <h3 className="footer-title">Sanskriti Vivaha</h3>
            <p className="footer-couple">
              {wedding.couple.bride.name} & {wedding.couple.groom.name}
            </p>
            <p className="footer-date">{wedding.wedding.date}</p>
          </div>

          <div className="footer-links">
            <div className="footer-section">
              <h4 className="footer-section-title">Quick Links</h4>
              <ul className="footer-nav">
                <li><a href="#hero">Home</a></li>
                <li><a href="#couple">Couple</a></li>
                <li><a href="#story">Our Story</a></li>
                <li><a href="#celebrations">Celebrations</a></li>
              </ul>
            </div>

            <div className="footer-section">
              <h4 className="footer-section-title">Information</h4>
              <ul className="footer-nav">
                <li><a href="#gallery">Gallery</a></li>
                <li><a href="#wishes">Send Wishes</a></li>
                <li><a href="#location">Venue</a></li>
              </ul>
            </div>
          </div>

          <div className="footer-message">
            <p className="footer-quote">
              "Where two hearts meet, India's heritage celebrates"
            </p>
            <div className="footer-divider">
              <span className="divider-line"></span>
              <span className="divider-motif">❀</span>
              <span className="divider-line"></span>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="footer-copyright">
            © {currentYear} Sanskriti Vivaha. Made with ❤ for {wedding.couple.bride.name} & {wedding.couple.groom.name}
          </p>
          <div className="footer-legal">
            <a href="#privacy">Privacy Policy</a>
            <span className="separator">|</span>
            <a href="#terms">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;