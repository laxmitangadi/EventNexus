import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/AuthPages.css';
import NavBar from './NavBar';
import Footer from './Footer';
import ParticleBackground from './ParticleBackground';
import axios from 'axios';


const RegisterPage = () => {
  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    roleid: '',
    password: '',
    confirmPassword: '',
  });

  const [msg, setMsg] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    if (form.password !== form.confirmPassword) {
      return alert('Passwords do not match!');
    }

    try {
      const res = await axios.post('http://localhost:5000/api/register', {
        name: form.name,
        phone: form.phone,
        email: form.email,
        roleid: form.roleid,
        password: form.password,
      });

      setMsg(res.data.message);

      if (res.data.success) {
        alert('✅ Registration successful!');
        navigate('/login');
      } else {
        alert('❌ ' + res.data.message);
      }
    } catch (err) {
      console.error(err);
      setMsg('Registration failed. Try again later.');
    }
  };

  return (
    <>
      <NavBar />
      <div className="auth-page">
        <ParticleBackground />
        <div className="auth-content">
          <div className="auth-left">
            <h1>Join the Concert Craze 🎸</h1>
            <p>Be part of the ultimate music community.</p>
          </div>
          <form className="auth-form" onSubmit={handleRegister}>
            <h2>Register</h2>
            <input
              type="text"
              name="name"
              placeholder="Name"
              required
              value={form.name}
              onChange={handleChange}
            />
            <input
              type="tel"
              name="phone"
              placeholder="Phone"
              required
              value={form.phone}
              onChange={handleChange}
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              required
              value={form.email}
              onChange={handleChange}
            />
            <input
              type="number"
              name="roleid"
              placeholder="roleid"
              required
              value={form.roleid}
              onChange={handleChange}
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              required
              value={form.password}
              onChange={handleChange}
            />
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
              required
              value={form.confirmPassword}
              onChange={handleChange}
            />
            <button type="submit">Register</button>
            <p>{msg}</p>
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
