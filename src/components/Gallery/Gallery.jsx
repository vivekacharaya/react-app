import { useState } from 'react';
import './Gallery.css';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  // Placeholder gallery images - in real app, these would be actual images
  const galleryImages = [
    { id: 1, title: 'Couple Portrait', category: 'couple' },
    { id: 2, title: 'Engagement Ceremony', category: 'ceremony' },
    { id: 3, title: 'Family Gathering', category: 'family' },
    { id: 4, title: 'Traditional Rituals', category: 'ceremony' },
    { id: 5, title: 'Bride Portrait', category: 'couple' },
    { id: 6, title: 'Groom Portrait', category: 'couple' },
    { id: 7, title: 'Wedding Venue', category: 'venue' },
    { id: 8, title: 'Decorations', category: 'venue' },
  ];

  const openLightbox = (image) => {
    setSelectedImage(image);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  return (
    <section className="gallery-section bg-blush" id="gallery">
      <div className="container">
        <div className="section-header text-center">
          <p className="section-tagline">| तस्वीरें |</p>
          <h2 className="section-title">Our Gallery</h2>
          <div className="gold-divider-wrap">
            <div className="gold-line"></div>
            <span className="gold-motif">✿</span>
            <div className="gold-line"></div>
          </div>
          <p className="section-subtitle">Moments of love, laughter, and celebration captured forever.</p>
        </div>

        <div className="gallery-grid">
          {galleryImages.map((image) => (
            <div 
              key={image.id} 
              className="gallery-item"
              onClick={() => openLightbox(image)}
            >
              <div className="gallery-placeholder">
                <span>{image.title}</span>
              </div>
              <div className="gallery-overlay">
                <h3 className="gallery-item-title">{image.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedImage && (
        <div className="lightbox" onClick={closeLightbox}>
          <div className="lightbox-content">
            <div className="lightbox-placeholder">
              <span>{selectedImage.title}</span>
            </div>
            <h3 className="lightbox-title">{selectedImage.title}</h3>
            <button className="lightbox-close" onClick={closeLightbox}>×</button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;