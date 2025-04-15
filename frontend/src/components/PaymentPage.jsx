import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/PaymentPage.css';
import NavBar from './NavBar';
import Footer from './Footer';

const PaymentPage = ({ amount = 10500, bookingFee = 247.80 }) => {
  const [selectedMethod, setSelectedMethod] = useState('');
  const [cardDetails, setCardDetails] = useState({ name: '', number: '', expiry: '', cvv: '' });
  const [upiId, setUpiId] = useState('');
  const [selectedState, setSelectedState] = useState('');
  const [showFeeInfo, setShowFeeInfo] = useState(false);

  const navigate = useNavigate();

  const handleCardChange = (e) => {
    setCardDetails({ ...cardDetails, [e.target.name]: e.target.value });
  };

  const handlePayment = () => {
    if (!selectedMethod) return alert('Please select a payment method.');
    if (selectedMethod === 'card' && Object.values(cardDetails).some(v => v === ''))
      return alert('Please fill in all card details.');
    if (selectedMethod === 'upi' && !upiId)
      return alert('Please enter a valid UPI ID.');

    const event = {
      name: "Jazbaa Ft Rekha Bharadwaj",
      date: "May 18, 2025 - 7:00 PM",
      venue: "Shilpakala Vedika, Hyderabad",
      image: "https://assets-in.bmscdn.com/discovery-catalog/events/et00439612-uxlywqqstj-landscape.jpg"
    };

    const tickets = [
      { id: "TKT-101" },
      { id: "TKT-102" },
      { id: "TKT-103" }
    ];

    navigate('/successpage', { state: { event, tickets } });
  };

  return (
    <>
      <NavBar />
      <div className="payment-container">
        <h2 className="checkout-title">Checkout</h2>

        <div className="summary-card">
          <div className="event-header">
            <div>
              <h3 className="event-title">Jazbaa Ft Rekha Bharadwaj</h3>
              <p className="ticket-count">3 Tickets</p>
            </div>
            <span className="event-amount">₹{amount.toFixed(2)}</span>
          </div>

          <hr />

          <div className="event-details">
            <p><strong>Date:</strong> May 18, 2025</p>
            <p><strong>Time:</strong> 7:00 PM</p>
            <p><strong>Venue:</strong> Shilpakala Vedika, Hyderabad</p>
            <p><strong>Category:</strong> Gold - Central: 3 ticket(s)</p>
          </div>

          <div className="pricing-info">
            <div className="pricing-row">
              <span>Sub-total</span>
              <span>₹{amount.toFixed(2)}</span>
            </div>
            <div className="pricing-row toggleable" onClick={() => setShowFeeInfo(!showFeeInfo)}>
              <span>Booking Fee {showFeeInfo ? '▲' : '▼'}</span>
              <span>₹{bookingFee.toFixed(2)}</span>
            </div>
            {showFeeInfo && (
              <p className="booking-info">This includes internet handling charges & taxes.</p>
            )}
            <div className="pricing-row total-row">
              <strong>Total Amount</strong>
              <strong>₹{(amount + bookingFee).toFixed(2)}</strong>
            </div>
          </div>

          <div className="state-select">
            <label>Select State</label>
            <select value={selectedState} onChange={(e) => setSelectedState(e.target.value)}>
              <option value="">Select State</option>
              <option value="Telangana">Telangana</option>
            </select>
          </div>

          <p className="disclaimer">
            <input type="checkbox" /> By proceeding, I express my consent to complete this transaction.
          </p>
        </div>

        <div className="payment-methods">
          <h3>Choose Payment Method</h3>
          <label><input type="radio" name="payment" value="card" onChange={() => setSelectedMethod('card')} /> Card</label>
          <label><input type="radio" name="payment" value="upi" onChange={() => setSelectedMethod('upi')} /> UPI</label>
          <label><input type="radio" name="payment" value="wallet" onChange={() => setSelectedMethod('wallet')} /> Wallet</label>
        </div>

        {selectedMethod === 'card' && (
          <div className="card-inputs">
            <input type="text" name="name" placeholder="Name on Card" value={cardDetails.name} onChange={handleCardChange} />
            <input type="text" name="number" placeholder="Card Number" value={cardDetails.number} onChange={handleCardChange} />
            <div className="row">
              <input type="text" name="expiry" placeholder="MM/YY" value={cardDetails.expiry} onChange={handleCardChange} />
              <input type="password" name="cvv" placeholder="CVV" value={cardDetails.cvv} onChange={handleCardChange} />
            </div>
          </div>
        )}

        {selectedMethod === 'upi' && (
          <div className="upi-inputs">
            <input
              type="text"
              placeholder="Enter your UPI ID (e.g., username@bank)"
              value={upiId}
              onChange={(e) => setUpiId(e.target.value)}
            />
            <div className="qr-block">
              <img src={`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=upi://pay?pa=yourupi@bank&pn=EventNexus&am=${amount + bookingFee}`} alt="QR Code" />
              <p>Scan this QR code to pay via UPI</p>
            </div>
          </div>
        )}

        <button className="pay-button" onClick={handlePayment}>
          Book Tickets
        </button>
      </div>
      <Footer />
    </>
  );
};

export default PaymentPage;
