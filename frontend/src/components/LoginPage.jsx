/* eslint-disable eqeqeq */
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
  
      console.log('Full API response:', res.data); // Debug the full response
  
      setMsg(res.data.message);
  
      if (res.data.success && res.data.user) {
        alert('✅ Login successful!');
        console.log('User data from backend:', res.data.user); // Debug user object
        
        localStorage.setItem('sessionId', res.data.sessionId);
        localStorage.setItem('user', JSON.stringify(res.data.user));
        localStorage.setItem('userid', res.data.user._id); // ✅ STORE USER ID HERE

  
        let roleId = res.data.user.roleid;
        console.log('RoleID from response:', roleId, typeof roleId); // Debug roleid
  
        if (!roleId) {
          console.warn('RoleID is missing, defaulting to 1 (regular user)');
          // eslint-disable-next-line no-const-assign
          roleId = 1; // Set default
        }
  
        let path = '/profile';
        if (roleId == 2) path = '/eventspage';
        else if (roleId == 3) path = '/eventorganizer';
        else if (roleId == 4) path = '/sponsordashboard';
  
        navigate(path);
      } else {
        alert('❌ ' + res.data.message);
      }
    } catch (err) {
      console.error('Login error:', err.response?.data || err.message);
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
            {/* on submit goes to handleLogin */}
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
