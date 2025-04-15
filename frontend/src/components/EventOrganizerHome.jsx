import React from 'react';
import '../styles/EventOrganizer.css';
import { Link } from 'react-router-dom';
import NavBar from './NavBar';
import Footer from './Footer';


const events = [
  { name: "Swiftchella", status: "Sponsored", date: "2025-05-20", img: "https://assets-in.bmscdn.com/discovery-catalog/events/et00441036-sklydkbmmj-portrait.jpg" },
  { name: "CodeFest 2025", status: "Pending", date: "2025-06-01", img: "https://assets-in.bmscdn.com/discovery-catalog/events/et00435772-fjprxquvvc-portrait.jpg" },
  { name: "DesignCon", status: "Not Sponsored", date: "2025-06-15", img: "https://assets-in.bmscdn.com/discovery-catalog/events/et00416872-dqzlngzwgw-portrait.jpg" },
];

const EventOrganizerHome = () => {
  return (
    <div>
      <NavBar/>
    <div className="organizer-container">
      <h1>📋 My Events</h1>
      <Link to="/create" className="create-btn">+ Create New Event</Link>
      <div className="event-grid">
        {events.map((event, idx) => (
          <div className="event-card" key={idx}>
            <img src={event.img} alt={event.name} />
            <div className="event-info">
              <h3>{event.name}</h3>
              <p>Date: {event.date}</p>
              <p>Status: <span className={`status ${event.status.toLowerCase()}`}>{event.status}</span></p>
              {event.status === "Not Sponsored" && <button className="sponsor-btn">Request Sponsorship</button>}
            </div>
          </div>
        ))}
      </div>
    </div>
    <Footer/>
    </div>
  );
};

export default EventOrganizerHome;
