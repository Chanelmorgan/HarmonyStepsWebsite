// src/components/event-banner.js
import React from 'react';
import './event-banner.css';  // Optional custom styles

const ClassBanner = ({ rootClassName }) => {
  return (
    <div className={`${rootClassName} event-banner`}>
      <h1 className="event-banner-title">Classes</h1>
      <p className="event-banner-subtitle">Pom Cheerleading Classes: Empowering Confidence Through Dance!</p>
    </div>
  );
};

export default ClassBanner;