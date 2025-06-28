// src/components/GoogleReviews.js
import React from 'react';
import './google-review.css';

const enroll_btn = () => {
  return (
    <div className="google-reviews-container">
      <h2 className="google-reviews-heading">CONTACT US TO REGISTER NOW!</h2>
      <a
        href="https://harmonystepsdance.co.uk/contact-page"
        target="_blank"
        rel="noopener noreferrer"
        className="google-reviews-link"
      >
        Enroll Now
      </a>
    </div>
  );
};

export default enroll_btn;