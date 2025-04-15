import React from 'react';
import '../styles/EventDetails.css';
import NavBar from './NavBar';
import Footer from './Footer';
import TicketBooking from './TicketBooking';

const eventData = {
  title: "Jazbaa Ft Rekha Bharadwaj",
  description:
    "A soulful evening of Sufi, Bollywood, and Ghazals with National Award-winning singer Rekha Bhardwaj.",
  date: "May 30, 2025",
  time: "7:00 PM",
  venue: "Shilpakala Vedika, Hyderabad",
  image:
    "https://assets-in.bmscdn.com/discovery-catalog/events/et00439612-uxlywqqstj-landscape.jpg",
  pricing: [
    { name: "Balcony", price: "₹1000" },
    { name: "Balcony - Central", price: "₹1500" },
    { name: "Gold", price: "₹2500" },
    { name: "Gold - Central", price: "₹3500" },
    { name: "Diamond", price: "₹4000" },
    { name: "Diamond - Central", price: "₹4500" },
    { name: "Platinum", price: "₹5500" },
    { name: "Platinum - Central", price: "₹6000" }
  ],
};

const EventDetails = () => {
  return (
    <div>
      <NavBar />
      <div className="event-wrapper">
        <div className="event-banner">
          <img src={eventData.image} alt={eventData.title} />
        </div>
        <div className="event-content">
          <h1>{eventData.title}</h1>
          <p className="event-description">{eventData.description}</p>

          {/* 📍 Info + Map side-by-side */}
          <div className="event-info-map">
            <div className="event-info">
              <p><strong>Date:</strong> {eventData.date}</p>
              <p><strong>Time:</strong> {eventData.time}</p>
              <p><strong>Venue:</strong> {eventData.venue}</p>
            </div>

            <div className="map-container">
              <iframe
                title="Event Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3617.8529956909233!2d78.37702392493625!3d17.451111033446935!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb939d2c319eb7%3A0x5be35bbeb59e156f!2sShilpakala%20Vedika!5e1!3m2!1sen!2sin!4v1744189654841!5m2!1sen!2sin"
                width="100%"
                height="150"
                style={{ border: 0, borderRadius: '8px' }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>

          <div className="pricing-section">
            <h3>Ticket Prices</h3>
            <ul>
              {eventData.pricing.map((ticket, idx) => (
                <li key={idx}>
                  <span>{ticket.name}</span>
                  <span>{ticket.price}</span>
                </li>
              ))}
            </ul>
          </div>

          <button className="book-button">Book Tickets</button>
          <TicketBooking ticketOptions={eventData.pricing} />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default EventDetails;
