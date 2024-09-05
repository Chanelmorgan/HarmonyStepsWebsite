// src/components/GoogleReviews.js
import React from 'react';
import './google-review.css';

const GoogleReviews = () => {
  return (
    <div className="google-reviews-container">
      <h2 className="google-reviews-heading">LEAVE US A GOOGLE REVIEW!</h2>
      <a
        href="https://g.page/r/CTb5kuR2KWThEAE/review"
        target="_blank"
        rel="noopener noreferrer"
        className="google-reviews-link"
      >
        Leave a Review
      </a>
    </div>
  );
};

export default GoogleReviews;