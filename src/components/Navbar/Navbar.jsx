import { useState, useEffect } from 'react';
import './Navbar.css';

const Navbar = ({ currentPage, setCurrentPage, onReplayIntro }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: 'HOME' },
    { id: 'about', label: 'ABOUT' },
    { id: 'gallery', label: 'GALLERY' }
  ];

  const handleNavClick = (pageId) => {
    setCurrentPage(pageId);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className={`royal-navbar-wrapper ${scrolled ? 'is-scrolled' : ''}`}>
      <div className="royal-nav-container">
        
        {/* Brand Logo */}
        <button 
          className="royal-brand" 
          onClick={() => handleNavClick('home')}
          aria-label="Go to Home page"
        >
          <span className="brand-lotus">❀</span>
          <div className="brand-text-group">
            <span className="brand-main">Sanskriti Vivaha</span>
            <span className="brand-sub">Ananya & Aarav</span>
          </div>
        </button>

        {/* Desktop Navigation Links (Strictly 3: HOME | ABOUT | GALLERY) */}
        <nav className="royal-nav-menu">
          <ul className="nav-items-list">
            {navItems.map((item) => (
              <li key={item.id} className="nav-item">
                <button
                  className={`nav-btn ${currentPage === item.id ? 'active' : ''}`}
                  onClick={() => handleNavClick(item.id)}
                  aria-current={currentPage === item.id ? 'page' : undefined}
                >
                  <span className="nav-label">{item.label}</span>
                  {currentPage === item.id && <span className="active-dot">◆</span>}
                </button>
              </li>
            ))}
          </ul>
        </nav>

        {/* Header Actions: Replay Animation */}
        <div className="nav-actions">
          {onReplayIntro && (
            <button 
              className="replay-intro-btn" 
              onClick={onReplayIntro}
              title="Replay Wedding Ceremony Intro Animation"
              aria-label="Replay intro animation"
            >
              <span className="replay-icon">✨</span>
              <span className="replay-text">Intro Animation</span>
            </button>
          )}

          {/* Mobile Hamburger Toggle */}
          <button 
            className={`hamburger-btn ${mobileMenuOpen ? 'is-open' : ''}`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
          >
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </button>
        </div>

      </div>

      {/* Mobile Drawer */}
      <div className={`mobile-nav-drawer ${mobileMenuOpen ? 'drawer-open' : ''}`}>
        <div className="mobile-nav-content">
          <p className="mobile-drawer-mantra">| ॐ श्री गणेशाय नमः |</p>
          <ul className="mobile-links-list">
            {navItems.map((item) => (
              <li key={item.id}>
                <button
                  className={`mobile-nav-btn ${currentPage === item.id ? 'mobile-active' : ''}`}
                  onClick={() => handleNavClick(item.id)}
                >
                  <span>{item.label}</span>
                  {currentPage === item.id && <span className="mobile-gold-bullet">✦</span>}
                </button>
              </li>
            ))}
          </ul>

          {onReplayIntro && (
            <button 
              className="mobile-replay-btn"
              onClick={() => {
                setMobileMenuOpen(false);
                onReplayIntro();
              }}
            >
              ✨ Watch Intro Ceremony
            </button>
          )}
        </div>
      </div>
    </header>
  );
};

export default Navbar;