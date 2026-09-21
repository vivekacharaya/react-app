import { useState } from 'react';
import { weddingData } from '../../data/weddingData';
import { storyOverview, journeyMilestones } from '../../data/storyData';
import { events } from '../../data/events';
import './AboutPage.css';

const AboutPage = ({ onNavigate }) => {
  const { couple, families, mantra, wedding } = weddingData;

  // Digital Guestbook Wishes State
  const [wishesList, setWishesList] = useState([
    {
      id: 1,
      name: "Ramesh & Sunita Verma",
      relation: "Family Elder",
      message: "May your lives together be filled with boundless joy, divine prosperity, and eternal harmony! Sadashiv blessings always.",
      time: "Just now",
      hearts: 14
    },
    {
      id: 2,
      name: "Kavya & Arjun Sharma",
      relation: "Cousins",
      message: "Can't wait to dance at Sangeet night! Wishing Ananya di & Aarav jiju a lifetime of laughter, travel, and warm chai dates!",
      time: "2 hours ago",
      hearts: 28
    },
    {
      id: 3,
      name: "Prof. S. N. Shastri",
      relation: "Family Guru",
      message: "सदा सौभाग्यवती भव। May the sacred Agni illuminate your journey with virtue, wisdom, and enduring love.",
      time: "Yesterday",
      hearts: 35
    }
  ]);

  const [wishName, setWishName] = useState('');
  const [wishRelation, setWishRelation] = useState('');
  const [wishMessage, setWishMessage] = useState('');
  const [submittedWish, setSubmittedWish] = useState(false);

  const handleWishSubmit = (e) => {
    e.preventDefault();
    if (!wishName.trim() || !wishMessage.trim()) return;

    const newWish = {
      id: Date.now(),
      name: wishName.trim(),
      relation: wishRelation.trim() || "Well-wisher",
      message: wishMessage.trim(),
      time: "Just now",
      hearts: 1
    };

    setWishesList([newWish, ...wishesList]);
    setWishName('');
    setWishRelation('');
    setWishMessage('');
    setSubmittedWish(true);
    setTimeout(() => setSubmittedWish(false), 4000);
  };

  const handleLikeWish = (id) => {
    setWishesList(wishesList.map(w => w.id === id ? { ...w, hearts: w.hearts + 1 } : w));
  };

  // The 7 Sacred Vows (Saat Phere) Data
  const saatPhere = [
    {
      phere: "1st Phera",
      sanskrit: "इष एकपदी भव",
      title: "Nourishment & Health",
      desc: "A prayer for mutual nourishment, wholesome health, and shared prosperity in every season of life."
    },
    {
      phere: "2nd Phera",
      sanskrit: "ऊर्जे द्विपदी भव",
      title: "Strength & Protection",
      desc: "A vow to stand together in physical, mental, and spiritual strength, shielding our home through life's trials."
    },
    {
      phere: "3rd Phera",
      sanskrit: "रायस्पोषाय त्रिपदी भव",
      title: "Wealth & Righteousness",
      desc: "A promise to earn and share wealth through honesty, devotion, generosity, and mutual respect."
    },
    {
      phere: "4th Phera",
      sanskrit: "मायोभव्याय चतुष्पदी भव",
      title: "Love, Harmony & Joy",
      desc: "A pledge to nurture lifelong happiness, mutual trust, emotional harmony, and respect for our elders."
    },
    {
      phere: "5th Phera",
      sanskrit: "प्रजाभ्यः पञ्चपदी भव",
      title: "Family, Values & Compassion",
      desc: "A vow to raise our future generations with cultural virtue, kindness, wisdom, and noble character."
    },
    {
      phere: "6th Phera",
      sanskrit: "ऋतुभ्यः षट्पदी भव",
      title: "Togetherness in All Seasons",
      desc: "A promise of unwavering companionship and loyalty through joyous summers and challenging winters."
    },
    {
      phere: "7th Phera",
      sanskrit: "सखे सप्तपदी भव",
      title: "Eternal Friendship & Soul Union",
      desc: "A sacred bond of lifelong friendship, spiritual partnership, and eternal union as one united soul."
    }
  ];

  // 6 Cultural Pillars
  const culturalPillars = [
    {
      icon: "🌸",
      title: "पुष्प | Florals",
      subtitle: "Fragrance of Purity",
      desc: "Fragrant mogra, rose water, and fresh marigold garlands adorning the mandap and welcoming divine blessings."
    },
    {
      icon: "🥻",
      title: "वस्त्र | Royal Silks",
      subtitle: "Heritage Craftsmanship",
      desc: "Handcrafted Banarasi brocades, Kanjeevaram weaves, and intricate antique zardozi needlework."
    },
    {
      icon: "🏛️",
      title: "वास्तुकला | Sacred Architecture",
      subtitle: "Palatial Arches",
      desc: "Haveli jali carvings, grand palace columns, and symmetrical floral geometry inspired by Indian royal heritage."
    },
    {
      icon: "🪈",
      title: "संगीत | Melodies",
      subtitle: "Shehnai & Sitar Ragas",
      desc: "Soulful classical ragas, joyful dholak beats, acoustic sitar rhythms, and festive Sangeet melodies."
    },
    {
      icon: "🔥",
      title: "संस्कार | Sacred Rituals",
      subtitle: "Agni & Vedic Mantras",
      desc: "Holy Agni witness, Varmala exchange, Saat Phere circumambulations, and heartfelt elders' Ashirwad."
    },
    {
      icon: "👨‍👩‍👧‍👦",
      title: "परिवार | Two Families",
      subtitle: "Pillars of Love",
      desc: "Uniting two loving families with hospitality, shared nostalgia, delicious feasts, and warm embrace."
    }
  ];

  return (
    <div className="about-page-container">
      
      {/* 1. ABOUT US HERO BANNER */}
      <section className="about-hero-banner">
        <div className="about-banner-inner text-center">
          <div className="about-mantra-pill">
            <span>{mantra}</span>
          </div>
          <span className="about-eyebrow">A Union Blessed By Heritage & Family</span>
          <h1 className="about-main-title">About Our Sacred Vivaha</h1>
          <p className="about-tagline">
            Two souls, two loving families, one eternal bond celebrating love, tradition, and togetherness.
          </p>
          <div className="gold-divider">
            <span className="divider-lotus">❀</span>
          </div>
        </div>
      </section>

      {/* 2. MEET THE BRIDE & GROOM */}
      <section className="about-section couple-profile-section bride-profile">
        <div className="about-section-container">
          
          <div className="section-header text-center">
            <span className="section-subtitle">Sacred Souls</span>
            <h2 className="section-title">The Bride & Groom</h2>
            <div className="gold-divider">
              <span className="divider-lotus">❀</span>
            </div>
          </div>

          <div className="profile-grid">
            <div className="profile-image-col">
              <div className="profile-photo-frame">
                <img src={couple.bride.image} alt={couple.bride.name} className="profile-photo" />
                <div className="profile-badge">
                  <span>{couple.bride.hindiRole} • The Bride</span>
                </div>
              </div>
            </div>

            <div className="profile-info-col">
              <span className="section-subtitle">The Bride</span>
              <h2 className="profile-name">{couple.bride.name}</h2>
              <p className="profile-parents">Beloved Daughter of <strong>{couple.bride.parents}</strong></p>
              <p className="profile-grandparents">Granddaughter of {couple.bride.grandparents}</p>
              
              <p className="profile-bio-text">
                {couple.bride.bio}
              </p>

              <div className="profile-attributes-list">
                {couple.bride.attributes.map((attr, i) => (
                  <span key={i} className="attr-badge">✨ {attr}</span>
                ))}
              </div>

              <blockquote className="profile-quote">
                “{couple.bride.quote}”
              </blockquote>
            </div>
          </div>

          <div className="profile-grid reverse-on-desktop mt-5">
            <div className="profile-info-col">
              <span className="section-subtitle">The Groom</span>
              <h2 className="profile-name">{couple.groom.name}</h2>
              <p className="profile-parents">Beloved Son of <strong>{couple.groom.parents}</strong></p>
              <p className="profile-grandparents">Grandson of {couple.groom.grandparents}</p>

              <p className="profile-bio-text">
                {couple.groom.bio}
              </p>

              <div className="profile-attributes-list">
                {couple.groom.attributes.map((attr, i) => (
                  <span key={i} className="attr-badge gold-badge">✨ {attr}</span>
                ))}
              </div>

              <blockquote className="profile-quote groom-quote-border">
                “{couple.groom.quote}”
              </blockquote>
            </div>

            <div className="profile-image-col">
              <div className="profile-photo-frame">
                <img src={couple.groom.image} alt={couple.groom.name} className="profile-photo" />
                <div className="profile-badge groom-badge">
                  <span>{couple.groom.hindiRole} • The Groom</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 3. OUR STORY & HOW WE MET */}
      <section className="about-section our-story-section">
        <div className="about-section-container">
          <div className="section-header text-center">
            <span className="section-subtitle">A Sacred Chapter</span>
            <h2 className="section-title">Our Love Story</h2>
            <div className="gold-divider">
              <span className="divider-lotus">❀</span>
            </div>
          </div>

          <div className="how-we-met-grid">
            <div className="how-we-met-image-wrapper">
              <div className="gold-accent-frame">
                <img 
                  src={storyOverview.howWeMet.image} 
                  alt="How Ananya and Aarav Met" 
                  className="how-we-met-img"
                />
                <div className="frame-overlay-badge">
                  <span>Bengaluru • July 2021</span>
                </div>
              </div>
            </div>

            <div className="how-we-met-content">
              <span className="section-subtitle">Serendipity</span>
              <h2 className="section-title">{storyOverview.howWeMet.heading}</h2>
              <p className="how-we-met-text">
                {storyOverview.howWeMet.story}
              </p>
              <div className="how-we-met-quote-card">
                <p>“{storyOverview.howWeMet.quote}”</p>
              </div>
            </div>
          </div>

          {/* Chronological Milestones Timeline */}
          <div className="journey-timeline-wrapper mt-5">
            <h3 className="timeline-section-heading text-center">Milestones of Our Sacred Journey</h3>
            {journeyMilestones.map((milestone, index) => (
              <div 
                key={milestone.id} 
                className={`timeline-milestone-item ${index % 2 === 0 ? 'left-aligned' : 'right-aligned'}`}
              >
                <div className="milestone-dot">
                  <span className="dot-inner">✦</span>
                </div>

                <div className="milestone-card">
                  <div className="milestone-image-box">
                    <img src={milestone.image} alt={milestone.title} className="milestone-img" />
                    <span className="milestone-tag">{milestone.tag}</span>
                  </div>
                  <div className="milestone-card-body">
                    <span className="milestone-date">{milestone.date}</span>
                    <h4 className="milestone-title">{milestone.title}</h4>
                    <p className="milestone-desc">{milestone.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 4. OUR FAMILIES & PARENTS BLESSINGS */}
      <section className="about-section our-families-section">
        <div className="about-section-container">
          <div className="section-header text-center">
            <span className="section-subtitle">Pillars of Love & Tradition</span>
            <h2 className="section-title">Our Families</h2>
            <div className="gold-divider">
              <span className="divider-lotus">❀</span>
            </div>
            <p className="section-header-desc">
              "A marriage is not just the union of two individuals, but the coming together of two loving families."
            </p>
          </div>

          <div className="families-showcase-grid">
            
            {/* Sharma Family */}
            <div className="family-luxury-card">
              <div className="family-card-header">
                <span className="family-icon">🌸</span>
                <h3 className="family-card-title">{families.brideFamily.title}</h3>
                <span className="family-hometown">📍 {families.brideFamily.hometown}</span>
              </div>
              
              <div className="family-portraits-row">
                <div className="parent-mini-portrait">
                  <img src="/assets/images/family/rajesh_sharma.jpg" alt="Rajesh Sharma" className="parent-img" />
                  <span className="parent-name">Rajesh Sharma</span>
                  <span className="parent-role">Father of Bride</span>
                </div>
                <div className="parent-mini-portrait">
                  <img src="/assets/images/family/priya_sharma.jpg" alt="Priya Sharma" className="parent-img" />
                  <span className="parent-name">Priya Sharma</span>
                  <span className="parent-role">Mother of Bride</span>
                </div>
              </div>

              <div className="family-card-body">
                <p className="family-message">“{families.brideFamily.message}”</p>
                <div className="family-members-pill">
                  <span><strong>Family:</strong> {families.brideFamily.members}</span>
                </div>
              </div>
            </div>

            {/* Verma Family */}
            <div className="family-luxury-card">
              <div className="family-card-header gold-header">
                <span className="family-icon">🌼</span>
                <h3 className="family-card-title">{families.groomFamily.title}</h3>
                <span className="family-hometown">📍 {families.groomFamily.hometown}</span>
              </div>

              <div className="family-portraits-row">
                <div className="parent-mini-portrait">
                  <img src="/assets/images/family/vijay_verma.jpg" alt="Vijay Verma" className="parent-img" />
                  <span className="parent-name">Vijay Verma</span>
                  <span className="parent-role">Father of Groom</span>
                </div>
                <div className="parent-mini-portrait">
                  <img src="/assets/images/family/sunita_verma.jpg" alt="Sunita Verma" className="parent-img" />
                  <span className="parent-name">Sunita Verma</span>
                  <span className="parent-role">Mother of Groom</span>
                </div>
              </div>

              <div className="family-card-body">
                <p className="family-message">“{families.groomFamily.message}”</p>
                <div className="family-members-pill">
                  <span><strong>Family:</strong> {families.groomFamily.members}</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 5. INDIAN HERITAGE & 6 CULTURAL PILLARS */}
      <section className="about-section cultural-heritage-section">
        <div className="about-section-container">
          <div className="section-header text-center">
            <span className="section-subtitle">भारतीय कला एवं संस्कृति</span>
            <h2 className="section-title">A Celebration Rooted in Heritage</h2>
            <div className="gold-divider">
              <span className="divider-lotus">❀</span>
            </div>
            <p className="section-header-desc">
              Drawing inspiration from India's timeless tapestry of flowers, silks, royal haveli arches, acoustic ragas, and Vedic rituals.
            </p>
          </div>

          <div className="cultural-pillars-grid">
            {culturalPillars.map((pillar, idx) => (
              <div key={idx} className="cultural-pillar-card">
                <div className="pillar-icon-badge">{pillar.icon}</div>
                <h3 className="pillar-title">{pillar.title}</h3>
                <span className="pillar-subtitle">{pillar.subtitle}</span>
                <p className="pillar-desc">{pillar.desc}</p>
                <div className="pillar-gold-trim"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. SACRED SAAT PHERE (THE 7 HOLY VOWS) */}
      <section className="about-section saat-phere-section">
        <div className="about-section-container">
          <div className="section-header text-center">
            <span className="section-subtitle">सप्तपदी • The Seven Sacred Vows</span>
            <h2 className="section-title">The Seven Sacred Circumambulations</h2>
            <div className="gold-divider">
              <span className="divider-lotus">❀</span>
            </div>
            <p className="section-header-desc">
              With each step around the holy Agni flame, Ananya and Aarav seal their sacred commitment to each other and their families.
            </p>
          </div>

          <div className="saat-phere-grid">
            {saatPhere.map((phera, idx) => (
              <div key={idx} className="phera-card">
                <div className="phera-header">
                  <span className="phera-num-badge">{phera.phere}</span>
                  <span className="phera-sanskrit">{phera.sanskrit}</span>
                </div>
                <h4 className="phera-title">{phera.title}</h4>
                <p className="phera-desc">{phera.desc}</p>
                <div className="phera-flower-accent">🌸</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. WEDDING CELEBRATIONS & CEREMONIES ITINERARY */}
      <section className="about-section celebrations-itinerary-section">
        <div className="about-section-container">
          <div className="section-header text-center">
            <span className="section-subtitle">विवाह उत्सव • Three Days of Joy</span>
            <h2 className="section-title">Ceremonies & Celebrations Itinerary</h2>
            <div className="gold-divider">
              <span className="divider-lotus">❀</span>
            </div>
            <p className="section-header-desc">
              Join us across three unforgettable days of music, dance, rituals, and feast.
            </p>
          </div>

          <div className="events-itinerary-grid">
            {events.map((evt) => (
              <div key={evt.id} className={`itinerary-card ${evt.id === 'wedding' ? 'highlighted-wedding-card' : ''}`}>
                <div className="itinerary-banner">
                  <img src={evt.image} alt={evt.name} className="itinerary-banner-img" />
                  <div className="itinerary-tag">{evt.hindiName}</div>
                </div>
                
                <div className="itinerary-body">
                  <div className="itinerary-icon">{evt.icon}</div>
                  <h3 className="itinerary-event-title">{evt.name}</h3>
                  
                  <div className="itinerary-meta">
                    <div className="meta-row">
                      <span className="meta-icon">📅</span>
                      <span className="meta-text">{evt.date} • {evt.time}</span>
                    </div>
                    <div className="meta-row">
                      <span className="meta-icon">📍</span>
                      <span className="meta-text">{evt.location}</span>
                    </div>
                    <div className="meta-row dress-code-row">
                      <span className="meta-icon">👗</span>
                      <span className="meta-text">Dress Code: <strong>{evt.dressCode || 'Traditional Festive'}</strong></span>
                    </div>
                  </div>

                  <p className="itinerary-desc">{evt.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. DIGITAL GUESTBOOK / SEND YOUR BLESSINGS */}
      <section className="about-section digital-wishes-section">
        <div className="about-section-container">
          <div className="section-header text-center">
            <span className="section-subtitle">आपका स्नेह एवं आशीर्वाद</span>
            <h2 className="section-title">Send Your Blessings & Wishes</h2>
            <div className="gold-divider">
              <span className="divider-lotus">❀</span>
            </div>
            <p className="section-header-desc">
              Leave your heartfelt words for Ananya & Aarav to treasure forever in their digital wedding keepsake.
            </p>
          </div>

          <div className="wishes-dual-container">
            
            {/* Form Column */}
            <div className="wishes-form-card">
              <div className="form-head">
                <span className="lotus-icon">🪷</span>
                <h3>Bless the Newlyweds</h3>
                <p>Share your prayers, memories, or wedding wishes:</p>
              </div>

              {submittedWish && (
                <div className="wish-success-alert">
                  <span>✨ Thank you! Your beautiful blessing has been recorded.</span>
                </div>
              )}

              <form onSubmit={handleWishSubmit} className="wishes-form">
                <div className="form-field">
                  <label htmlFor="wish-author">Your Name / Family Name</label>
                  <input 
                    type="text" 
                    id="wish-author" 
                    placeholder="e.g. Ramesh & Sunita Verma" 
                    value={wishName} 
                    onChange={(e) => setWishName(e.target.value)} 
                    required 
                  />
                </div>

                <div className="form-field">
                  <label htmlFor="wish-rel">Relation (Optional)</label>
                  <input 
                    type="text" 
                    id="wish-rel" 
                    placeholder="e.g. Bride's College Friend / Uncle" 
                    value={wishRelation} 
                    onChange={(e) => setWishRelation(e.target.value)} 
                  />
                </div>

                <div className="form-field">
                  <label htmlFor="wish-msg">Your Message / Blessing</label>
                  <textarea 
                    id="wish-msg" 
                    rows="4" 
                    placeholder="Wishing you a lifetime of laughter, harmony, and endless happiness..." 
                    value={wishMessage} 
                    onChange={(e) => setWishMessage(e.target.value)} 
                    required 
                  ></textarea>
                </div>

                <button type="submit" className="royal-action-btn w-full">
                  <span>Send Divine Blessing ✨</span>
                </button>
              </form>
            </div>

            {/* Wishes Feed Column */}
            <div className="wishes-feed-card">
              <h3 className="feed-title">Blessings From Loved Ones</h3>
              <div className="wishes-scroll-feed">
                {wishesList.map((wish) => (
                  <div key={wish.id} className="wish-bubble">
                    <div className="wish-bubble-head">
                      <div>
                        <h4 className="wish-author-name">{wish.name}</h4>
                        <span className="wish-author-rel">{wish.relation}</span>
                      </div>
                      <span className="wish-time">{wish.time}</span>
                    </div>
                    <p className="wish-bubble-text">“{wish.message}”</p>
                    <div className="wish-bubble-actions">
                      <button 
                        className="wish-like-btn" 
                        onClick={() => handleLikeWish(wish.id)}
                        title="Bless this wish"
                      >
                        <span>❤️ {wish.hearts}</span>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 9. VENUE & DIRECTIONS */}
      <section className="about-section venue-section">
        <div className="about-section-container">
          <div className="section-header text-center">
            <span className="section-subtitle">स्थान विवरण • Venue & Directions</span>
            <h2 className="section-title">The Wedding Venue</h2>
            <div className="gold-divider">
              <span className="divider-lotus">❀</span>
            </div>
          </div>

          <div className="venue-grid-layout">
            <div className="venue-image-card">
              <img src="/assets/images/venue/venue_hall.jpg" alt="Grand Regal Palace Hall Complex" className="venue-photo" />
              <div className="venue-badge">
                <span>📍 Koramangala, Bengaluru</span>
              </div>
            </div>

            <div className="venue-info-card">
              <h3 className="venue-name">{wedding.venue}</h3>
              <p className="venue-full-address">{wedding.fullAddress}</p>
              
              <div className="venue-features-list">
                <div className="feat-item">
                  <span className="feat-icon">🚗</span>
                  <span>Complimentary Valet Parking Available for all Guests</span>
                </div>
                <div className="feat-item">
                  <span className="feat-icon">🏨</span>
                  <span>Accommodation & concierge assistance for outstation family</span>
                </div>
                <div className="feat-item">
                  <span className="feat-icon">🍽️</span>
                  <span>Royal Sattvik & Multi-Cuisine Traditional Banquet</span>
                </div>
              </div>

              <div className="venue-contact-box">
                <p>📞 <strong>Helpline:</strong> +91 98765 43210 / +91 91234 56789</p>
                <p>✉️ <strong>Email:</strong> info@sanskritivivaha.com</p>
              </div>

              <a 
                href={`https://maps.google.com/?q=${encodeURIComponent(wedding.fullAddress)}`} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="royal-action-btn w-full text-center"
              >
                <span>📍 Open Venue in Google Maps</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA TO GALLERY */}
      <div className="about-bottom-cta text-center">
        <div className="about-section-container">
          <h3 className="cta-title">Explore Our Wedding Memories</h3>
          <p className="cta-sub">View candid photos, pre-wedding memories, and royal ritual highlights.</p>
          <button className="royal-action-btn gold-btn" onClick={() => onNavigate('gallery')}>
            <span>View Complete Wedding Gallery →</span>
          </button>
        </div>
      </div>

    </div>
  );
};

export default AboutPage;
