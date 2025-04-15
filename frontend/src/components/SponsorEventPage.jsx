import React, { useState } from 'react';
import '../styles/Sponsor.css';
import NavBar from './NavBar';
import Footer from './Footer';

const SponsorEventPage = () => {
  const [details, setDetails] = useState({ name: '', amount: '', message: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDetails({ ...details, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Sponsorship Submitted:", details);
    alert(`✅ Thank you for sponsoring ${details.name} with ₹${details.amount}!`);
  };

  return (
    <div>
      <NavBar/>
    <div className="sponsor-form-container">
      <h1>Sponsor an Event</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Event Name"
          required
          onChange={handleChange}
        />
        <input
          type="number"
          name="amount"
          placeholder="Sponsorship Amount"
          required
          onChange={handleChange}
        />
        <textarea
          name="message"
          placeholder="Message (optional)"
          rows="4"
          onChange={handleChange}
        ></textarea>
        <button type="submit" className="submit-btn">Confirm Sponsorship</button>
      </form>
    </div>
    <Footer/>
    </div>
  );
};

export default SponsorEventPage;
