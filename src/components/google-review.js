// src/components/GoogleReviews.js
import React from 'react';
import './google-reviews.css'; // Add your styles here

const GoogleReviews = () => {
  return (
    <div className="google-reviews-container">
      <h2 className="google-reviews-heading">Reviews</h2>
      <div className="google-reviews-content">
        {/* Example of embedding a Google Reviews widget */}
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m2!1m1!1s0x0:0x0!2m2!1d0!2d0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0:0x0!2zMjYwwrA0NTOzIuNyJ9!5e0!3m2!1sen!2sus!4v1632915948657!5m2!1sen!2sus"
          width="100%"
          height="450"
          frameBorder="0"
          style={{ border: 0 }}
          allowFullScreen=""
          aria-hidden="false"
          tabIndex="0"
        ></iframe>
      </div>
    </div>
  );
};

export default GoogleReviews;