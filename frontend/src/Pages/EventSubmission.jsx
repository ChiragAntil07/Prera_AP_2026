
import React, { useState } from 'react';
import '../styles/pages/EventSubmission.css';

export default function EventSubmission() {

  const [formData, setFormData] = useState({
    eventName: '',
    organizerName: '',
    email: '',
    phone: '',
    category: '',
    description: '',
    date: '',
    venue: '',
    city: '',
    audience: '',
    registrationLink: ''
  });

  const [poster, setPoster] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  
const handleSubmit = async (e) => {
  e.preventDefault();

  if (!poster) {
    alert("Please upload an event poster.");
    return;
  }

  try {
    const data = new FormData();

    Object.entries(formData).forEach(([key, value]) => {
      data.append(key, value);
    });

    data.append("poster", poster);

    const response = await fetch(
      "http://localhost:5001/api/events",
      {
        method: "POST",
        body: data
      }
    );

    const responseText = await response.text();

    let result;
    try {
      result = JSON.parse(responseText);
    } catch {
      throw new Error(
        "Backend returned an HTML response. Check eventRoutes.js and server.js."
      );
    }

    if (!response.ok) {
      throw new Error(result.message || "Event submission failed");
    }

    alert("Event submitted successfully!");

    setFormData({
      eventName: "",
      organizerName: "",
      email: "",
      phone: "",
      category: "",
      description: "",
      date: "",
      venue: "",
      city: "",
      audience: "",
      registrationLink: ""
    });

    setPoster(null);
    e.target.reset();

  } catch (error) {
    console.error("Submission error:", error);
    alert(error.message);
  }
};


  return (
    <div className="submission-page">

      <div className="submission-header">
        <p className="submission-tag">FOR EVENT ORGANIZERS</p>

        <h1>
          LIST YOUR <span>EVENT</span>
        </h1>

        <p>
          Bring your event to the spotlight.
          Submit your details and let PRERA help
          you reach the right audience.
        </p>
      </div>

      <form className="submission-form" onSubmit={handleSubmit}>

        <h2>Event Information</h2>

        <div className="submission-grid">

          <div className="submission-field">
            <label>Event Name *</label>
            <input
              name="eventName"
              value={formData.eventName}
              onChange={handleChange}
              placeholder="Enter event name"
              required
            />
          </div>

          <div className="submission-field">
            <label>Organizer / Organization Name *</label>
            <input
              name="organizerName"
              value={formData.organizerName}
              onChange={handleChange}
              placeholder="Enter organization name"
              required
            />
          </div>

          <div className="submission-field">
            <label>Email Address *</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter email address"
              required
            />
          </div>

          <div className="submission-field">
            <label>Phone Number *</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Enter phone number"
              required
            />
          </div>

          <div className="submission-field">
            <label>Event Category *</label>
            <select
              name="category"
              value={formData.category}
              onChange={handleChange}
              required
            >
              <option value="">Select category</option>
              <option value="Tech">Tech</option>
              <option value="Cultural">Cultural</option>
              <option value="Sports">Esports / Sports</option>
              <option value="Design">Design</option>
              <option value="Other">Other</option>
            </select>
          </div>

          <div className="submission-field">
            <label>Event Date *</label>
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              required
            />
          </div>

          <div className="submission-field">
            <label>Venue *</label>
            <input
              name="venue"
              value={formData.venue}
              onChange={handleChange}
              placeholder="Enter venue"
              required
            />
          </div>

          <div className="submission-field">
            <label>City *</label>
            <input
              name="city"
              value={formData.city}
              onChange={handleChange}
              placeholder="Enter city"
              required
            />
          </div>

          <div className="submission-field">
            <label>Expected Audience</label>
            <input
              type="number"
              min="1"
              name="audience"
              value={formData.audience}
              onChange={handleChange}
              placeholder="Expected attendees"
            />
          </div>

          <div className="submission-field">
            <label>Registration Link</label>
            <input
              type="url"
              name="registrationLink"
              value={formData.registrationLink}
              onChange={handleChange}
              placeholder="https://..."
            />
          </div>

        </div>

        <div className="submission-field full-width">
          <label>Event Description *</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="Tell us about your event..."
            rows="5"
            required
          />
        </div>

        <div className="submission-field full-width">
          <label>Upload Event Poster *</label>
          <input
            type="file"
            accept="image/png,image/jpeg,image/webp"
            onChange={(e) => setPoster(e.target.files[0])}
            required
          />
          <small>PNG, JPG or WEBP format</small>
        </div>

        <button type="submit" className="submission-button">
          SUBMIT EVENT →
        </button>

      </form>
    </div>
  );
}
