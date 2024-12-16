// src/components/event-banner.js
import React from 'react';
import './event-banner.css';  // Optional custom styles

const EventBanner = ({ rootClassName }) => {
  return (
    <div className={`${rootClassName} event-banner`}>
      <h1 className="event-banner-title">Annual Dance Showcase</h1>
      <p className="event-banner-subtitle">Join us for a night of incredible performances!</p>
    </div>
  );
};

export default EventBanner;