// src/pages/MerchPage.js
import React, { Fragment } from 'react';
import { Helmet } from 'react-helmet';

import Navbar from '../components/navbar2';  // Same Navbar as in About and Event Pages
import MerchBanner from '../components/merch-banner'; // Custom component for Merch Banner
import Features17 from '../components/features17'; // Reuse Features17 to display merchandise
import Reviews from '../components/reviews'; // Reuse Reviews section
import Footer from '../components/footer'; // Reuse Footer section
import './merch-page.css';  // Add custom styles for the merchandise page

const MerchPage = () => {
    
  return (
    <div className="merch-page-container">
      <Helmet>
        <title>Merchandise - Harmony Steps</title>
        <meta name="description" content="Shop Harmony Steps Merchandise" />
        <meta property="og:title" content="Merchandise - Harmony Steps" />
        <meta property="og:description" content="Shop exclusive merchandise from Harmony Steps!" />
      </Helmet>

      <Navbar text3="Merchandise" rootClassName="navbar-root-class-name4" />

      {/* Merch Banner */}
      <MerchBanner rootClassName="merch-banner-root-class-name" />

      {/* Displaying Merch items in a grid or list */}
      <section className="merch-items">
        {/* Example of a Merchandise Item */}
        <div className="merch-item">
          <img src="/placeholder.jpg" alt="Merchandise T-Shirt" className="merch-item-image" />
          <h3 className="merch-item-title">Harmony Steps T-Shirt</h3>
          <p className="merch-item-description">Comfortable and stylish t-shirt featuring the Harmony Steps logo.</p>
          <p className="merch-item-price">£25.00</p>
          <button className="add-to-cart-button">Order Here</button>
        </div>
        <div className="merch-item">
          <img src="/placeholder.jpg" alt="Merchandise T-Shirt" className="merch-item-image" />
          <h3 className="merch-item-title">Harmony Steps Hoodie</h3>
          <p className="merch-item-description">Stay warm and stylish with this cozy hoodie featuring the Harmony Steps design.</p>
          <p className="merch-item-price">£35.00</p>
          <button className="add-to-cart-button">Order Here</button>
        </div>

        <div className="merch-item">
          <img src="/placeholder.jpg" alt="Merchandise Hoodie" className="merch-item-image" />
          <h3 className="merch-item-title">Harmony Steps Zip-up Team Hoodie</h3>
          <p className="merch-item-description">Stay warm and stylish with this cozy hoodie featuring the Harmony Steps design.</p>
          <p className="merch-item-price">£35.00</p>
          <button className="add-to-cart-button">Order Here</button>
        </div>

        <div className="merch-item">
          <img src="/placeholder.jpg" alt="Merchandise Mug" className="merch-item-image" />
          <h3 className="merch-item-title">Harmony Steps Leggings</h3>
          <p className="merch-item-description">Perfect for your morning coffee or tea, featuring the Harmony Steps logo.</p>
          <p className="merch-item-price">£20.00</p>
          <button className="add-to-cart-button">Order Here</button>
        </div>
        <div className="merch-item">
          <img src="/placeholder.jpg" alt="Merchandise Mug" className="merch-item-image" />
          <h3 className="merch-item-title">Harmony Steps Dance Mum/Dad Hoodie</h3>
          <p className="merch-item-description">Perfect for your morning coffee or tea, featuring the Harmony Steps logo.</p>
          <p className="merch-item-price">£35.00</p>
          <button className="add-to-cart-button">Add to Cart</button>
        </div>
        <div className="merch-item">
          <img src="/placeholder.jpg" alt="Merchandise Mug" className="merch-item-image" />
          <h3 className="merch-item-title">Harmony Steps Sticker Pack</h3>
          <p className="merch-item-description">Perfect for your morning coffee or tea, featuring the Harmony Steps logo.</p>
          <p className="merch-item-price">£5.00</p>
          <button className="add-to-cart-button">Order Here</button>
        </div>

      </section>


      <Footer rootClassName="footer-root-class-name4" />
    </div>
  );
};

export default MerchPage;