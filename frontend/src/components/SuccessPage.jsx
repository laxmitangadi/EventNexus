import React from "react";
import { useLocation } from "react-router-dom";
import "../styles/SuccessPage.css";
import NavBar from "./NavBar";
import Footer from "./Footer";

const SuccessPage = () => {
  const location = useLocation();
  const { event, tickets } = location.state || {};

  if (!event || !tickets) {
    return (
      <div className="success-page">
        <h2>⚠️ No ticket data found.</h2>
        <p>Please return to the <a href="/eventspage">Events Page</a>.</p>
      </div>
    );
  }

  return (
    <div>
      <NavBar />
      <div className="success-page">
        <div className="success-header">
          <h1>🎉 Payment Successful!</h1>
          <p>Your tickets for <strong>{event.name}</strong> have been confirmed.</p>
        </div>

        <div className="event-details updated">
  <img src={event.image} alt="Event" className="event-image-full" />
  <div className="event-info-below">
    <h2>{event.name}</h2>
    <p>{event.date}</p>
    <p>{event.venue}</p>
  </div>
</div>


        <div className="tickets-container">
          <h3>Your Tickets</h3>
          <div className="tickets">
            {tickets.map((ticket) => (
              <div className="ticket" key={ticket.id}>
                <img src={event.image} alt="Event" className="ticket-image" />
                <div className="ticket-info">
                  <h4>{event.name}</h4>
                  <p>{event.date}</p>
                  <p>{event.venue}</p>
                  <p><strong>Ticket ID:</strong> {ticket.id}</p>
                </div>
                <div className="qr-code">
                  <img
                    src={`https://api.qrserver.com/v1/create-qr-code/?size=100x100&data=TicketID:${ticket.id}`}
                    alt="QR Code"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        <footer className="success-footer">
          Thank you for booking with <strong>EventNexus</strong>! Enjoy the event.
        </footer>
      </div>
      <Footer />
    </div>
  );
};

export default SuccessPage;
