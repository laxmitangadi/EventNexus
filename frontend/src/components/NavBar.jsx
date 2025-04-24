import React, { useState, useRef, useEffect } from 'react';
import { FaUserCircle, FaCog, FaSignOutAlt } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import '../styles/NavBar.css';

const NavBar = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [selectedCity, setSelectedCity] = useState('Bangalore');
  const [showSettingsDropdown, setShowSettingsDropdown] = useState(false);
  const dropdownRef = useRef();
  const settingsRef = useRef();
  const navigate = useNavigate();

  const cities = ['Pune', 'Bangalore', 'Mumbai', 'Delhi', 'Chennai', 'Hyderabad'];

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setShowDropdown(false);
      }
      if (settingsRef.current && !settingsRef.current.contains(e.target)) {
        setShowSettingsDropdown(false);
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
        <button className="icon-button" onClick={() => navigate('/profile')}>
          <FaUserCircle size={20} />
        </button>

        {/* Settings Icon with Dropdown */}
        <div className="settings-dropdown-container" ref={settingsRef}>
          <button className="icon-button" onClick={() => setShowSettingsDropdown((prev) => !prev)}>
            <FaCog size={20} />
          </button>
          {showSettingsDropdown && (
            <ul className="settings-dropdown-menu">
              <li onClick={() => navigate('/profile')}>
                <FaUserCircle size={14} style={{ marginRight: '8px' }} />
                Profile
              </li>
              <li onClick={() => {
                // Clear user session if needed
                localStorage.clear();  // Assuming token-based auth
                navigate('/login'); // redirect to login page
              }}>
                <FaSignOutAlt size={14} style={{ marginRight: '8px' }} />
                Logout
              </li>
            </ul>
          )}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
