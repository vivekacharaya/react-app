import { useState, useEffect } from 'react';
import './Wishes.css';

const Wishes = () => {
  const [wishes, setWishes] = useState([]);
  const [formData, setFormData] = useState({
    name: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    // Load wishes from localStorage
    const savedWishes = localStorage.getItem('weddingWishes');
    if (savedWishes) {
      setWishes(JSON.parse(savedWishes));
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!formData.name.trim() || !formData.message.trim()) {
      return;
    }

    const newWish = {
      id: Date.now(),
      name: formData.name,
      message: formData.message,
      date: new Date().toLocaleDateString()
    };

    const updatedWishes = [newWish, ...wishes];
    setWishes(updatedWishes);
    localStorage.setItem('weddingWishes', JSON.stringify(updatedWishes));
    
    setFormData({ name: '', message: '' });
    setSubmitted(true);
    
    setTimeout(() => setSubmitted(false), 3000);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section className="wishes-section" id="wishes">
      <div className="container">
        <div className="section-header text-center">
          <p className="section-tagline">| शुभकामनाएं |</p>
          <h2 className="section-title">Send Your Wishes</h2>
          <div className="gold-divider-wrap">
            <div className="gold-line"></div>
            <span className="gold-motif">❤</span>
            <div className="gold-line"></div>
          </div>
          <p className="section-subtitle">Share your blessings and good wishes for our journey ahead.</p>
        </div>

        <div className="wishes-container">
          <div className="wish-form-container">
            <h3 className="form-title">Send Your Blessings</h3>
            
            {submitted && (
              <div className="success-message">
                Thank you for your beautiful wishes! ✨
              </div>
            )}

            <form className="wish-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Your Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Your Wishes</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Write your heartfelt message..."
                  rows="4"
                  required
                ></textarea>
              </div>

              <button type="submit" className="btn btn-primary">
                Send Wishes
                <span className="sparkle">✨</span>
              </button>
            </form>
          </div>

          <div className="wishes-display">
            <h3 className="wishes-display-title">Recent Wishes</h3>
            
            {wishes.length === 0 ? (
              <div className="no-wishes">
                <p>No wishes yet. Be the first to send your blessings!</p>
              </div>
            ) : (
              <div className="wishes-list">
                {wishes.slice(0, 6).map((wish) => (
                  <div key={wish.id} className="wish-card">
                    <div className="wish-header">
                      <span className="wish-author">{wish.name}</span>
                      <span className="wish-date">{wish.date}</span>
                    </div>
                    <p className="wish-message">{wish.message}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Wishes;