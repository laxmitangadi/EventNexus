import React, { useState, useRef, useEffect } from 'react';
import { FaUserCircle, FaCog } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import '../styles/NavBar.css';

const NavBar = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [selectedCity, setSelectedCity] = useState('Bangalore');
  const dropdownRef = useRef();
  const navigate = useNavigate();

  const cities = ['Pune', 'Bangalore', 'Mumbai', 'Delhi', 'Chennai', 'Hyderabad'];

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setShowDropdown(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <nav className="navbar">
      {/* Column 1: Logo */}
      <div className="navbar-column logo">
        <h1>EventNexus</h1>
      </div>

      {/* Column 2: Search & City */}
      <div className="navbar-column center">
        <input type="text" className="search-bar" placeholder="Search events..." />
        <div className="city-dropdown" ref={dropdownRef}>
          <button
            className="city-button"
            onClick={() => setShowDropdown((prev) => !prev)}
          >
            {selectedCity} ▾
          </button>
          {showDropdown && (
            <ul className="dropdown-menu">
              {cities.map((city) => (
                <li key={city} onClick={() => {
                  setSelectedCity(city);
                  setShowDropdown(false);
                }}>
                  {city}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>

      {/* Column 3: Navigation Links */}
      <div className="navbar-column right">
        <a href="#hero">Home</a>
        <a href="#careers">Careers</a>
        <button className="icon-button" onClick={() => navigate('/login')}>
          <FaUserCircle size={20} />
        </button>
        <a href="#settings"><FaCog size={20} /></a>
      </div>
    </nav>
  );
};

export default NavBar;
