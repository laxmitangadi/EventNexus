import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import '../styles/AuthPages.css';
import NavBar from './NavBar';
import Footer from './Footer';
import ParticleBackground from './ParticleBackground';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [msg, setMsg] = useState('');
  const navigate = useNavigate(); // Initialize navigate hook

  const handleLogin = async (e) => {
    e.preventDefault();
  
    try {
      const res = await axios.post('http://localhost:5000/api/login', {
        email,
        password
      });
  
      setMsg(res.data.message);
  
      if (res.data.success) {
        alert('✅ Login successful!');
        console.log('Login successful:', res.data); // Log the response to check if it's correct

        // Store session or user info in localStorage (optional)
        localStorage.setItem('sessionId', res.data.sessionId); // Assuming sessionId is returned from the server

        // Redirect to EventsPage on success
        navigate('/EventsPage');
      } else {
        alert('❌ ' + res.data.message);
      }
    } catch (err) {
      console.error(err);
      setMsg('Login failed. Please try again.');
    }
  };

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
          <form className="auth-form" onSubmit={handleLogin}>
            <h2>Login</h2>
            <input
              type="email"
              placeholder="Email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button type="submit">Login</button>
            <p>{msg}</p>
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
