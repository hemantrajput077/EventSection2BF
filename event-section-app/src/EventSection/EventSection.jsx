import React, { useState, useEffect } from "react";
import "./EventSection.css";

const EventSection = () => {
  const [events, setEvents] = useState([]); // State to hold events fetched from the backend
  const [category, setCategory] = useState("All");

  // Fetch events from the backend when the component mounts
  useEffect(() => {
    fetch("http://localhost:5000/events") // Ensure the backend is running on localhost:5000
      .then((response) => response.json())
      .then((data) => setEvents(data)) // Update state with fetched data
      .catch((error) => console.error("Error fetching events:", error));
  }, []);

  // Filter events by category
  const filteredEvents =
    category === "All"
      ? events
      : events.filter((event) => event.category === category);

  return (
    <div className="event-section">
      <h2>Upcoming Events in Indore</h2>
      <div className="event-filters">
        <button onClick={() => setCategory("All")}>All</button>
        <button onClick={() => setCategory("Food & Drinks")}>Food & Drinks</button>
        <button onClick={() => setCategory("Cultural")}>Cultural</button>
        <button onClick={() => setCategory("Technology")}>Technology</button>
        <button onClick={() => setCategory("Business")}>Business</button>
        <button onClick={() => setCategory("Concerts")}>Concerts</button>
        <button onClick={() => setCategory("Exhibitions")}>Exhibitions</button>
        <button onClick={() => setCategory("Meetups")}>Meetups</button>
        <button onClick={() => setCategory("Parties")}>Parties</button>
        <button onClick={() => setCategory("Sports")}>Sports</button>
        <button onClick={() => setCategory("Health & Wellness")}>Health & Wellness</button>
      </div>
      <div className="event-list">
        {filteredEvents.map((event) => (
          <div className="event-card" key={event.id}>
            <img src={event.image} alt={event.name} className="event-image" />
            <div className="event-details">
              <h3>{event.name}</h3>
              <p className="event-date">{event.date}</p>
              <p className="event-location">{event.location}</p>
              <p className="event-description">{event.description}</p>
              <a href={event.link} target="_blank" rel="noopener noreferrer" className="event-link">
                <button className="event-button">Learn More</button>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventSection;
