import React, { useState } from 'react';
import '../styles/EventOrganizer.css';
import NavBar from './NavBar';
import Footer from './Footer';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const EventCreate = () => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    date: '',
    time: '',
    location: '',
    category: 'concert',
    price: 0,
    capacity: 100,
    imageUrl: '',
    sponsored: false
  });

  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : 
              (type === 'number' ? parseFloat(value) : value)
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    
    try {
      const response = await axios.post(
        'http://localhost:5000/api/events',
        {
          title: formData.title,
          description: formData.description,
          date: formData.date,
          time: formData.time,
          location: formData.location,
          category: formData.category,
          price: formData.price,
          capacity: formData.capacity,
          imageUrl: formData.imageUrl,
          sponsored: formData.sponsored
        },
        { withCredentials: true }
      );
  
      if (response.data.success) {
        setSuccess(true);
        setTimeout(() => navigate('/eventorganizer'), 1500);
      }
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to create event');
      console.error('Event creation error:', err);
    }
  };

  const categories = [
    'concert', 'conference', 'workshop', 'exhibition', 
    'festival', 'sports', 'theater', 'other'
  ];

  return (
    <div>
      <NavBar />
      <div className="form-container">
        <h1>Create a New Event</h1>
        
        {success && (
          <div className="success-message">
            ✅ Event created successfully! Redirecting...
          </div>
        )}
        
        {error && <div className="error-message">{error}</div>}

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Event Title</label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Description</label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              rows="4"
              required
            />
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>Date</label>
              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label>Time</label>
              <input
                type="time"
                name="time"
                value={formData.time}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="form-group">
            <label>Location</label>
            <input
              type="text"
              name="location"
              value={formData.location}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>Category</label>
              <select
                name="category"
                value={formData.category}
                onChange={handleChange}
                required
              >
                {categories.map(cat => (
                  <option key={cat} value={cat}>
                    {cat.charAt(0).toUpperCase() + cat.slice(1)}
                  </option>
                ))}
              </select>
            </div>

            <div className="form-group">
              <label>Price ($)</label>
              <input
                type="number"
                name="price"
                min="0"
                step="0.01"
                value={formData.price}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>Capacity</label>
              <input
                type="number"
                name="capacity"
                min="1"
                value={formData.capacity}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label>Image URL</label>
              <input
                type="url"
                name="imageUrl"
                value={formData.imageUrl}
                onChange={handleChange}
                placeholder="https://example.com/image.jpg"
              />
            </div>
          </div>

          <div className="form-checkbox">
            <label>
              <input
                type="checkbox"
                name="sponsored"
                checked={formData.sponsored}
                onChange={handleChange}
              />
              Is this event sponsored?
            </label>
          </div>

          <button type="submit" className="submit-btn">
            Create Event
          </button>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default EventCreate;