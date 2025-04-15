import React, { useState } from 'react';
import '../styles/TicketBooking.css';


const TicketBooking = ({ eventName = "Jazbaa Ft Rekha Bharadwaj", ticketOptions }) => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [ticketCount, setTicketCount] = useState(1);
  const [booked, setBooked] = useState(false);

  const handleBookNow = () => {
    if (selectedOption) {
      setBooked(true);
      setTimeout(() => alert(`🎟️ ${ticketCount} ticket(s) booked for ${eventName} - ${selectedOption.name}`), 100);
    }
  };

  return (

    <div className="booking-container">
      <h2>Book Your Tickets</h2>
      <div className="options">
        {ticketOptions.map((option, index) => (
          <div
            key={index}
            className={`ticket-option ${selectedOption?.name === option.name ? 'selected' : ''}`}
            onClick={() => setSelectedOption(option)}
          >
            <div>{option.name}</div>
            <div>{option.price}</div>
          </div>
        ))}
      </div>

      {selectedOption && (
        <>
          <div className="ticket-count">
            <label>Tickets: </label>
            <input
              type="number"
              min="1"
              value={ticketCount}
              onChange={(e) => setTicketCount(Number(e.target.value))}
            />
          </div>
          <button className="book-btn" onClick={handleBookNow}>Book Now</button>
        </>
      )}

      {booked && (
        <div className="confirmation">
          ✅ Booking confirmed for <strong>{ticketCount}</strong> ticket(s) – {selectedOption.name}
        </div>
      )}
    </div>

  );
};

export default TicketBooking;
