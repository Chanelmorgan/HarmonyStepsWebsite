import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
const NotFound = (props) => {
  return (
    <div className="not-found-container">
      <Head>
        <title>Page Not Found</title>
      </Head>
      
     
      
      <div className="not-found-container2">
        <h2 className="not-found-text2">
          WE ARE SORRY, BUT THE PAGE YOU REQUESTED IS COMING SOON
        </h2>
        
        <Link href="/" className="back-home-button">
          Go Back to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;