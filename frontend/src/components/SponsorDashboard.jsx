import React from 'react';
import '../styles/EventsPage.css'; // Reuse styling like SponsorEventList
import NavBar from './NavBar';
import Footer from './Footer';
import { Link } from 'react-router-dom';

const sponsoredEvents = [
  {
    name: "Swiftchella",
    amount: 50000,
    date: "May 20, 2025",
    status: "Approved",
    img: "https://assets-in.bmscdn.com/discovery-catalog/events/et00441036-sklydkbmmj-portrait.jpg",
  },
  {
    name: "DesignCon",
    amount: 25000,
    date: "Jun 15, 2025",
    status: "Pending",
    img: "https://assets-in.bmscdn.com/discovery-catalog/events/et00416872-dqzlngzwgw-portrait.jpg",
  },
];

const SponsorDashboard = () => {
  return (
    <div>
      <NavBar />
      <div className="events-container">
        <h1 className="page-title">🎯 My Sponsorships</h1>

        <div className="events-grid">
          {sponsoredEvents.map((event, index) => (
            <div className="event-card" key={index}>
              <img src={event.img} alt={event.name} />
              <div className="event-details">
                <h2>{event.name}</h2>
                <p>Amount: ₹{event.amount}</p>
                <p>Date: {event.date}</p>
                <p>Status: <span className={`status ${event.status.toLowerCase()}`}>{event.status}</span></p>
              </div>
            </div>
          ))}
        </div>

        <div className="sponsor-cta">
          <Link to="/sponsoreventslist" className="sponsor-now-btn">+ Sponsor New Event</Link>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default SponsorDashboard;
