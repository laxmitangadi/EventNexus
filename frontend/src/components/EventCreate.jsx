import React, { useState } from 'react';
import '../styles/EventOrganizer.css';
import NavBar from './NavBar';
import Footer from './Footer';

const EventCreate = () => {
  const [formData, setFormData] = useState({
    name: '',
    date: '',
    location: '',
    description: '',
    imageUrl: '',
    sponsored: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({ ...formData, [name]: type === "checkbox" ? checked : value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Event Created:", formData);
    alert("✅ Event Created Successfully!");
  };

  return (
    <div>
      <NavBar/>
    <div className="form-container">
      <h1>Create a New Event</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Event Name" required onChange={handleChange} />
        <input type="date" name="date" required onChange={handleChange} />
        <input type="text" name="location" placeholder="Location" required onChange={handleChange} />
        <input type="text" name="imageUrl" placeholder="Image URL" onChange={handleChange} />
        <textarea name="description" placeholder="Event Description" rows="4" onChange={handleChange}></textarea>
        <label>
          <input type="checkbox" name="sponsored" onChange={handleChange} />
          Is Sponsored?
        </label>
        <button type="submit" className="submit-btn">Create Event</button>
      </form>
    </div>
    <Footer/>
    </div>
  );
};

export default EventCreate;
