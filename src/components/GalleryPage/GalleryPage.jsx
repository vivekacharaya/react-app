import { useState, useEffect } from 'react';
import { galleryCategories, galleryItems } from '../../data/galleryData';
import { weddingData } from '../../data/weddingData';
import './GalleryPage.css';

const GalleryPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [activePhotoIndex, setActivePhotoIndex] = useState(null);

  // Filter items based on active tab
  const filteredItems = selectedCategory === 'all'
    ? galleryItems
    : galleryItems.filter(item => item.category === selectedCategory);

  // Keyboard navigation for Lightbox
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (activePhotoIndex === null) return;
      if (e.key === 'Escape') {
        setActivePhotoIndex(null);
      } else if (e.key === 'ArrowRight') {
        setActivePhotoIndex((prev) => (prev + 1) % filteredItems.length);
      } else if (e.key === 'ArrowLeft') {
        setActivePhotoIndex((prev) => (prev - 1 + filteredItems.length) % filteredItems.length);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activePhotoIndex, filteredItems.length]);

  const openLightbox = (index) => {
    setActivePhotoIndex(index);
  };

  const closeLightbox = () => {
    setActivePhotoIndex(null);
  };

  const nextPhoto = (e) => {
    e.stopPropagation();
    setActivePhotoIndex((prev) => (prev + 1) % filteredItems.length);
  };

  const prevPhoto = (e) => {
    e.stopPropagation();
    setActivePhotoIndex((prev) => (prev - 1 + filteredItems.length) % filteredItems.length);
  };

  return (
    <div className="gallery-page-container">
      
      {/* 1. GALLERY HEADER BANNER */}
      <section className="gallery-hero-banner">
        <div className="gallery-banner-inner text-center">
          <div className="gallery-mantra-pill">
            <span>| ॐ श्री गणेशाय नमः |</span>
          </div>
          <span className="gallery-eyebrow">Visual Heritage & Celebrations</span>
          <h1 className="gallery-main-title">Wedding Photo Gallery</h1>
          <p className="gallery-tagline">
            A visual symphony of love, rituals, laughter, and sacred traditions of Ananya & Aarav's wedding.
          </p>
          <div className="gold-divider">
            <span className="divider-lotus">❀</span>
          </div>
        </div>
      </section>

      {/* 2. CATEGORY FILTER TABS */}
      <section className="gallery-filter-section">
        <div className="filter-tabs-container">
          {galleryCategories.map((cat) => (
            <button
              key={cat.id}
              className={`filter-tab-btn ${selectedCategory === cat.id ? 'active' : ''}`}
              onClick={() => setSelectedCategory(cat.id)}
            >
              <span>{cat.label}</span>
              {selectedCategory === cat.id && <span className="tab-gold-indicator"></span>}
            </button>
          ))}
        </div>
      </section>

      {/* 3. ASYMMETRIC MASONRY GRID */}
      <section className="gallery-grid-section">
        <div className="gallery-masonry-container">
          {filteredItems.map((item, index) => {
            // Apply asymmetric pattern: index 0, 4, 7 as large featured items
            const isLarge = item.size === 'large' || index % 4 === 0;

            return (
              <div
                key={item.id}
                className={`gallery-item-card ${isLarge ? 'card-large' : 'card-normal'}`}
                onClick={() => openLightbox(index)}
              >
                <div className="gallery-img-wrapper">
                  <img src={item.src} alt={item.title} className="gallery-img" loading="lazy" />
                  <div className="gallery-card-frame"></div>
                </div>

                <div className="gallery-card-overlay">
                  <div className="overlay-top">
                    <span className="gallery-cat-badge">{item.categoryName}</span>
                  </div>
                  <div className="overlay-bottom">
                    <h3 className="gallery-card-title">{item.title}</h3>
                    <p className="gallery-card-desc">{item.description}</p>
                    <span className="view-photo-cta">Click to View ⤢</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 4. LIGHTBOX MODAL */}
      {activePhotoIndex !== null && filteredItems[activePhotoIndex] && (
        <div className="lightbox-backdrop" onClick={closeLightbox}>
          <div className="lightbox-content-box" onClick={(e) => e.stopPropagation()}>
            
            {/* Close Button */}
            <button className="lightbox-close-btn" onClick={closeLightbox} aria-label="Close lightbox">
              ✕
            </button>

            {/* Navigation Arrows */}
            <button className="lightbox-nav-btn prev-btn" onClick={prevPhoto} aria-label="Previous photo">
              ‹
            </button>
            <button className="lightbox-nav-btn next-btn" onClick={nextPhoto} aria-label="Next photo">
              ›
            </button>

            {/* Main Lightbox Image */}
            <div className="lightbox-media-wrapper">
              <img
                src={filteredItems[activePhotoIndex].src}
                alt={filteredItems[activePhotoIndex].title}
                className="lightbox-main-img"
              />
            </div>

            {/* Lightbox Caption & Details */}
            <div className="lightbox-details-bar">
              <div className="lightbox-info">
                <span className="lightbox-cat-pill">
                  {filteredItems[activePhotoIndex].categoryName}
                </span>
                <h3 className="lightbox-title">
                  {filteredItems[activePhotoIndex].title}
                </h3>
                <p className="lightbox-desc">
                  {filteredItems[activePhotoIndex].description}
                </p>
              </div>

              <div className="lightbox-counter">
                <span>{activePhotoIndex + 1} / {filteredItems.length}</span>
              </div>
            </div>

          </div>
        </div>
      )}

      {/* 5. FOOTER */}
      <footer className="royal-wedding-footer">
        <div className="footer-content text-center">
          <span className="footer-lotus">❀</span>
          <h3 className="footer-title">Sanskriti Vivaha</h3>
          <p className="footer-mantra">| ॐ श्री गणेशाय नमः |</p>
          <div className="footer-credits">
            <span>Ananya Sharma & Aarav Verma • {weddingData.wedding.date}</span>
          </div>
        </div>
      </footer>

    </div>
  );
};

export default GalleryPage;
