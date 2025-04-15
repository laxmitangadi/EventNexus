import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/AuthPages.css';
import NavBar from './NavBar';
import Footer from './Footer';
import ParticleBackground from './ParticleBackground';

const LoginPage = () => {
  return (
    <>
      <NavBar />
      <div className="auth-page">
        <ParticleBackground />
        <div className="auth-content">
          <div className="auth-left">
            <h1>Welcome to the Concert World 🎶</h1>
            <p>
              Discover electrifying events, grab your front-row seat, and feel the vibe.
              Let the beat guide your journey.
            </p>
          </div>
          <form className="auth-form">
            <h2>Login</h2>
            <input type="text" placeholder="Username" required />
            <input type="password" placeholder="Password" required />
            <button type="submit">Login</button>
            <p>
              Don't have an account? <Link to="/register">Register here</Link>
            </p>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default LoginPage;
