import React from 'react';
import "../styles/LandingPage.css";
import ThemeToggle from './ThemeToggle';

const LandingPage = () => {
  return (
    <div className="landing-page">
      <ThemeToggle />

      <header className="hero">
        <div className="hero-content">
          <h1>Welcome to <span>EventNexus</span></h1>
          <p>Discover, Sponsor & Attend Events Like Never Before</p>
          <div className="cta-buttons">
            <a href="/events" className="btn primary">Explore Events</a>
            <a href="/register" className="btn outline">Get Started</a>
          </div>
        </div>
      </header>

      <section className="features">
        <div className="feature-card">
          <h3>🎟️ Smart Ticketing</h3>
          <p>Book seats and access events with QR passes.</p>
        </div>
        <div className="feature-card">
          <h3>🤝 Sponsorship Hub</h3>
          <p>Connect with the perfect sponsors for your event.</p>
        </div>
        <div className="feature-card">
          <h3>📊 Real-Time Analytics</h3>
          <p>Track bookings, revenue, and user engagement.</p>
        </div>
      </section>

      <footer>
        <p>© 2025 EventNexus | Built for creators, sponsors, and fans 🎤</p>
      </footer>
    </div>
  );
};

export default LandingPage;