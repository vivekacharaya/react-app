import { useState, useEffect, useRef } from 'react';
import { wedding } from '../../data/wedding';
import './Countdown.css';

const Countdown = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });
  const [isExpired, setIsExpired] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const calculateTimeLeft = () => {
      const weddingDate = new Date(wedding.wedding.dateTime);
      const now = new Date();
      const difference = weddingDate - now;

      if (difference <= 0) {
        setIsExpired(true);
        return {
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0
        };
      }

      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60)
      };
    };

    setTimeLeft(calculateTimeLeft());

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatNumber = (num) => {
    return num.toString().padStart(2, '0');
  };

  return (
    <section ref={sectionRef} className="countdown-section" id="countdown">
      <div className="container text-center">
        <div className="countdown-header">
          <h2 className="section-title text-light">Counting Down to Our Special Day</h2>
          <div className="gold-divider-wrap light-theme">
            <div className="gold-line"></div>
            <span className="gold-motif">✿</span>
            <div className="gold-line"></div>
          </div>
          <p className="countdown-sub">{wedding.wedding.date} · {wedding.wedding.city}, {wedding.wedding.state}</p>
        </div>

        {!isExpired ? (
          <div className="countdown-timer-container">
            <div className="timer-unit">
              <div className="timer-box">
                <span className="timer-number">{formatNumber(timeLeft.days)}</span>
              </div>
              <span className="timer-label">Days</span>
            </div>

            <div className="timer-colon">:</div>

            <div className="timer-unit">
              <div className="timer-box">
                <span className="timer-number">{formatNumber(timeLeft.hours)}</span>
              </div>
              <span className="timer-label">Hours</span>
            </div>

            <div className="timer-colon">:</div>

            <div className="timer-unit">
              <div className="timer-box">
                <span className="timer-number">{formatNumber(timeLeft.minutes)}</span>
              </div>
              <span className="timer-label">Minutes</span>
            </div>

            <div className="timer-colon">:</div>

            <div className="timer-unit">
              <div className="timer-box">
                <span className="timer-number">{formatNumber(timeLeft.seconds)}</span>
              </div>
              <span className="timer-label">Seconds</span>
            </div>
          </div>
        ) : (
          <div className="countdown-message">
            <p className="text-display text-3xl text-gold">The Auspicious Muhurtham Has Arrived!</p>
            <p className="mt-2 text-light">Bless the newlywed couple as they begin their sacred journey.</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Countdown;