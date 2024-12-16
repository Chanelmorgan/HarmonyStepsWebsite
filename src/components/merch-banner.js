// src/components/merch-banner.js
import React from 'react';
import './merch-banner.css';  // Optional custom styles for the banner

const MerchBanner = ({ rootClassName }) => {
  return (
    <div className={`${rootClassName} merch-banner`}>
      <h1 className="merch-banner-title">Harmony Steps Merchandise</h1>
      <p className="merch-banner-subtitle">Shop exclusive merch and show your support for Harmony Steps!</p>
    </div>
  );
};

export default MerchBanner;