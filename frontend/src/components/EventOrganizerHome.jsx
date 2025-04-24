import React, { useState, useEffect } from 'react';
import '../styles/EventOrganizer.css';
import { Link } from 'react-router-dom';
import NavBar from './NavBar';
import Footer from './Footer';
import axios from 'axios';

const EventOrganizerHome = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/events/organizer', {
          withCredentials: true
        });
        
        if (response.data.success) {
          setEvents(response.data.events);
        }
      } catch (err) {
        setError(err.response?.data?.message || 'Failed to fetch events');
        console.error('Error fetching events:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchEvents();
  }, []);

  const getStatusBadge = (isSponsored) => {
    return isSponsored ? 'Sponsored' : 'Not Sponsored';
  };

  if (loading) return <div className="loading">Loading events...</div>;
  if (error) return <div className="error">Error: {error}</div>;

  return (
    <div>
      <NavBar />
      <div className="organizer-container">
        <h1>📋 My Events</h1>
        <Link to="/eventcreate" className="create-btn">
          + Create New Event
        </Link>
        
        <div className="event-grid">
          {events.length > 0 ? (
            events.map((event) => (
              <div className="event-card" key={event._id}>
                <img 
                  src={event.imageUrl || 'https://via.placeholder.com/300x200?text=Event+Image'} 
                  alt={event.title} 
                />
                <div className="event-info">
                  <h3>{event.title}</h3>
                  <p>Date: {new Date(event.date).toLocaleDateString()}</p>
                  <p>Time: {event.time}</p>
                  <p>Location: {event.location}</p>
                  <p>Price: ${event.price}</p>
                  <p>Capacity: {event.capacity} attendees</p>
                  <p>
                    Status: <span className={`status ${getStatusBadge(event.sponsored).toLowerCase().replace(' ', '-')}`}>
                      {getStatusBadge(event.sponsored)}
                    </span>
                  </p>
                  {!event.sponsored && (
                    <button className="sponsor-btn">Request Sponsorship</button>
                  )}
                </div>
              </div>
            ))
          ) : (
            <div className="no-events">
              <p>You haven't created any events yet.</p>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default EventOrganizerHome;