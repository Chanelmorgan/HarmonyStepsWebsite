// src/components/event-banner.js
import React from 'react';
const ClassBanner = ({ rootClassName }) => {
  return (
    <div className={`${rootClassName} event-banner`}>
      <h1 className="event-banner-title">Classes & Fees</h1>
      <p className="event-banner-subtitle"></p>
    </div>
  );
};

export default ClassBanner;