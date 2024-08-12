import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import './not-found.css';


const NotFound = (props) => {
  return (
    <div className="not-found-container">
      <Helmet>
        <title>Page Not Found</title>
      </Helmet>
      
     
      
      <div className="not-found-container2">
        <h2 className="not-found-text2">
          WE ARE SORRY, BUT THE PAGE YOU REQUESTED IS COMING SOON
        </h2>
        
        <Link to="/" className="back-home-button">
          Go Back to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;