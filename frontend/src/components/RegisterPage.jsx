import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/AuthPages.css';
import NavBar from './NavBar';
import Footer from './Footer';
import ParticleBackground from './ParticleBackground';

const RegisterPage = () => {
  return (
    <>
      <NavBar />
      <div className="auth-page">
        <ParticleBackground />
        <div className="auth-content">
          <div className="auth-left">
            <h1>Join the Concert Craze 🎸</h1>
            <p>
              Be part of the ultimate music community. Sign up to get your backstage pass to unforgettable concerts,
              early bird tickets, and exclusive experiences.
            </p>
          </div>
          <form className="auth-form">
            <h2>Register</h2>
            <input type="text" placeholder="Name" required />
            <input type="tel" placeholder="Phone" required />
            <input type="email" placeholder="Email" required />
            <input type="password" placeholder="Password" required />
            <input type="password" placeholder="Confirm Password" required />
            <button type="submit">Register</button>
            <p>
              Already have an account? <Link to="/login">Login here</Link>
            </p>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default RegisterPage;
