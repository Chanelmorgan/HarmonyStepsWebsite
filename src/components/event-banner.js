// src/components/event-banner.js
import React from 'react';
const EventBanner = ({ rootClassName }) => {
  return (
    <div className={`${rootClassName} event-banner`}>
      <h1 className="event-banner-title">Upcoming Events</h1>
      <p className="event-banner-subtitle">Join us for incredible performances!</p>
    </div>
  );
};

export default EventBanner;