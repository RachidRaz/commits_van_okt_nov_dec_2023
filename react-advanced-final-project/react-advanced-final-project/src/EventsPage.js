// EventsPage.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import AddEventForm from './AddEventForm';

const EventsPage = () => {
  const [events, setEvents] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterCategory, setFilterCategory] = useState('');

  useEffect(() => {
    // Fetch events from the server
    fetch('http://localhost:3000/events')
      .then((response) => response.json())
      .then((data) => setEvents(data));
  }, []);

  const handleAddEvent = (newEvent) => {
    setEvents([...events, newEvent]);
  };

  const filteredEvents = events
    .filter((event) =>
      event.title.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .filter((event) =>
      filterCategory ? event.categories.includes(filterCategory) : true
    );

  return (
    <div>
      <h2>Events</h2>
      <input
        type="text"
        placeholder="Search events"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <select
        value={filterCategory}
        onChange={(e) => setFilterCategory(e.target.value)}
      >
        <option value="">All Categories</option>
        <option value="music">Music</option>
        <option value="sports">Sports</option>
        {/* Add other categories */}
      </select>
      <ul>
        {filteredEvents.map((event) => (
          <li key={event.id}>
            <Link to={`/events/${event.id}`}>{event.title}</Link>
          </li>
        ))}
      </ul>
      <AddEventForm onAddEvent={handleAddEvent} />
    </div>
  );
};

export default EventsPage;
