// src/components/GoogleReviews.js
import React from 'react';
import './google-review.css'; // Add your styles here

const GoogleReviews = () => {
  // Replace with your actual Google review link
  const googleReviewLink = 'https://g.page/r/CTb5kuR2KWThEAE/review';

  return (
    <div className="google-reviews-container">
      <h2 className="google-reviews-heading">Leave Us a Google Review!</h2>
      <div className="google-reviews-content">
        <p className="google-reviews-text">
          We value your feedback! Click the link below to leave us a review on Google.
        </p>
        <a
          href={googleReviewLink}
          target="_blank"
          rel="noopener noreferrer"
          className="google-reviews-link"
        >
          Leave a Review
        </a>
      </div>
    </div>
  );
};

export default GoogleReviews;