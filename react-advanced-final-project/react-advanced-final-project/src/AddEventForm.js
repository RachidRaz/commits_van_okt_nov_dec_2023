// AddEventForm.js
import React, { useState } from 'react';

const AddEventForm = ({ onAddEvent }) => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    // Add other form fields
  });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Send a request to the server to add the event
    fetch('http://localhost:3000/events', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        onAddEvent(data);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Render form fields */}
      <button type="submit">Add Event</button>
    </form>
  );
};

export default AddEventForm;
