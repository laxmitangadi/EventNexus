import React, { useState } from 'react';
import '../styles/EventsPage.css';
import NavBar from './NavBar';
import Footer from './Footer';

const events = [
  { name: "Swiftchella", type: "Music", img: "https://assets-in.bmscdn.com/discovery-catalog/events/et00441036-sklydkbmmj-portrait.jpg" },
  { name: "Alan Walker India Tour", type: "Music", img: "https://assets-in.bmscdn.com/discovery-catalog/events/et00435238-pmwcrcjeqz-portrait.jpg" },
  { name: "Travis Scott: Circus Maximus", type: "Music", img: "https://assets-in.bmscdn.com/discovery-catalog/events/et00439285-wkznlgurpy-portrait.jpg" },
  { name: "The Cricket Show", type: "Comedy", img: "https://assets-in.bmscdn.com/discovery-catalog/events/et00440478-axmlsmjxfg-portrait.jpg" },
  { name: "Pottery Workshop", type: "Workshop", img: "https://assets-in.bmscdn.com/discovery-catalog/events/et00416872-dqzlngzwgw-portrait.jpg" },
  { name: "Horrible Singer", type: "Comedy", img: "https://assets-in.bmscdn.com/discovery-catalog/events/et00427262-jwqznpxecq-portrait.jpg" },
  { name: "Verknipt India", type: "Music", img: "https://assets-in.bmscdn.com/discovery-catalog/events/et00434735-macbbzcenf-portrait.jpg" },
];

const filters = ["All", "Music", "Comedy", "Workshop"];

const EventsPage = () => {
  const [selectedFilter, setSelectedFilter] = useState("All");

  const filteredEvents = selectedFilter === "All"
    ? events
    : events.filter(event => event.type === selectedFilter);

  return (
    <div>
      <NavBar/>
    <div className="events-container">
      
      <h1 className="page-title">🎉 Events in Hyderabad</h1>

      <div className="filters">
        {filters.map(filter => (
          <button
            key={filter}
            className={`filter-btn ${selectedFilter === filter ? 'active' : ''}`}
            onClick={() => setSelectedFilter(filter)}
          >
            {filter}
          </button>
        ))}
      </div>

      <div className="events-grid">
        {filteredEvents.map((event, index) => (
          <div className="event-card" key={index}>
            <img src={event.img} alt={event.name} />
            <div className="event-details">
              <h2>{event.name}</h2>
              <p>{event.type} Event</p>
            </div>
          </div>
        ))}
      </div>
      
    </div>
    <Footer/>
    </div>
  );
};

export default EventsPage;
