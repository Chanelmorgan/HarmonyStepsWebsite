import React from 'react';
import { Helmet } from 'react-helmet';

import Navbar from '../components/navbar2';  // Same Navbar as in About and Event Pages
import MerchBanner from '../components/merch-banner'; // Custom component for Merch Banner
import Features17 from '../components/features17'; // Reuse Features17 to display merchandise
import Reviews from '../components/reviews'; // Reuse Reviews section
import Footer from '../components/footer'; // Reuse Footer section
import './merch-page.css';  // Add custom styles for the merchandise page

const MerchPage = () => {

  // Email settings
  const emailRecipient = "harmonystepsdance@gmail.com"; // Replace with your actual email address
  const emailSubject = "Order Request - Harmony Steps Merchandise";

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
          <img src="/t-shirt.JPG" alt="Merchandise T-Shirt" className="merch-item-image" />
          <h3 className="merch-item-title">Harmony Steps T-Shirt</h3>
          <p className="merch-item-description">Comfortable and stylish t-shirt featuring the Harmony Steps logo.</p>
          <p className="merch-item-price">£25.00</p>
          {/* Order Here button using mailto */}
          <a href={`mailto:${emailRecipient}?subject=${encodeURIComponent(emailSubject)}&body=I would like to order the Harmony Steps T-Shirt.`} className="add-to-cart-button">Order Here</a>
        </div>
        
        <div className="merch-item">
          <img src="/hood.JPG" alt="Merchandise Hoodie" className="merch-item-image" />
          <h3 className="merch-item-title">Harmony Steps Hoodie</h3>
          <p className="merch-item-description">Stay warm and stylish with this cozy hoodie featuring the Harmony Steps design.</p>
          <p className="merch-item-price">£35.00</p>
          {/* Order Here button using mailto */}
          <a href={`mailto:${emailRecipient}?subject=${encodeURIComponent(emailSubject)}&body=I would like to order the Harmony Steps Hoodie.`} className="add-to-cart-button">Order Here</a>
        </div>

        <div className="merch-item">
          <img src="/zip.JPG" alt="Merchandise Hoodie" className="merch-item-image" />
          <h3 className="merch-item-title">Harmony Steps Zip-up Team Hoodie</h3>
          <p className="merch-item-description">Stay warm and stylish with this cozy zip-up hoodie featuring the Harmony Steps design.</p>
          <p className="merch-item-price">£35.00</p>
          {/* Order Here button using mailto */}
          <a href={`mailto:${emailRecipient}?subject=${encodeURIComponent(emailSubject)}&body=I would like to order the Harmony Steps Zip-up Team Hoodie.`} className="add-to-cart-button">Order Here</a>
        </div>

        <div className="merch-item">
          <img src="/test-2.png" alt="Merchandise Mug" className="merch-item-image" />
          <h3 className="merch-item-title">Harmony Steps Leggings</h3>
          <p className="merch-item-description">Perfect for dance practice, workouts, or casual wear!</p>
          <p className="merch-item-price">£20.00</p>
          {/* Order Here button using mailto */}
          <a href={`mailto:${emailRecipient}?subject=${encodeURIComponent(emailSubject)}&body=I would like to order the Harmony Steps Leggings.`} className="add-to-cart-button">Order Here</a>
        </div>

        <div className="merch-item">
          <img src="/mum-hood.JPG" alt="Merchandise Mug" className="merch-item-image" />
          <h3 className="merch-item-title">Harmony Steps Dance Mum/Dad Hoodie</h3>
          <p className="merch-item-description">This hoodie is perfect for all Dance Mums and Dads!</p>
          <p className="merch-item-price">£35.00</p>
          {/* Order Here button using mailto */}
          <a href={`mailto:${emailRecipient}?subject=${encodeURIComponent(emailSubject)}&body=I would like to order the Harmony Steps Dance Mum/Dad Hoodie.`} className="add-to-cart-button">Order Here</a>
        </div>

        <div className="merch-item">
          <img src="/stickers.JPG" alt="Merchandise Mug" className="merch-item-image" />
          <h3 className="merch-item-title">Harmony Steps Sticker Pack</h3>
          <p className="merch-item-description">Show off your Harmony Steps spirit with this fun sticker pack! </p>
          <p className="merch-item-price">£5.00</p>
          {/* Order Here button using mailto */}
          <a href={`mailto:${emailRecipient}?subject=${encodeURIComponent(emailSubject)}&body=I would like to order the Harmony Steps Sticker Pack.`} className="add-to-cart-button">Order Here</a>
        </div>

      </section>

      <Footer rootClassName="footer-root-class-name4" />
    </div>
  );
};

export default MerchPage;