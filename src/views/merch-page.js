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
          <img src="/Tshirts.png" alt="Merchandise T-Shirt" className="merch-item-image" />
          <h3 className="merch-item-title">Harmony Steps T-Shirt</h3>
          <p className="merch-item-description"></p>
          <p className="merch-item-price">£25.00</p>
          {/* Order Here button using mailto */}
         <a href="https://buy.stripe.com/6oU28jgHf27k9YIe8N77O03" >Order Here</a>
        </div>

        <div className="merch-item">
          <img src="/TeamJackets.png" alt="Merchandise Hoodie" className="merch-item-image" />
          <h3 className="merch-item-title">Harmony Steps Elite Team Jackets</h3>
          <p className="merch-item-description"></p>
          <p className="merch-item-price">£35.00</p>
          {/* Order Here button using mailto */}
          <a href="" >Order Here</a>
        </div>

        <div className="merch-item">
          <img src="/Leggings.png" alt="Merchandise Mug" className="merch-item-image" />
          <h3 className="merch-item-title">Harmony Steps Lycra Leggings</h3>
          <p className="merch-item-description"></p>
          <p className="merch-item-price">£26.50</p>
          {/* Order Here button using mailto */}
          <a href="" >Order Here</a>
        </div>

        <div className="merch-item">
          <img src="/Legging.png" alt="Merchandise Mug" className="merch-item-image" />
          <h3 className="merch-item-title">Harmony Steps Leggings</h3>
          <p className="merch-item-description"></p>
          <p className="merch-item-price">£25.00</p>
          {/* Order Here button using mailto */}
          <a href="" >Order Here</a>
        </div>

        <div className="merch-item">
          <img src="/SportsBra.png" alt="Merchandise Mug" className="merch-item-image" />
          <h3 className="merch-item-title">Harmony Steps Sports Bra</h3>
          <p className="merch-item-description"> </p>
          <p className="merch-item-price">£22.00</p>
          {/* Order Here button using mailto */}
         <a href="" >Order Here</a>
        </div>


        <div className="merch-item">
          <img src="/Shorts.png" alt="Merchandise Mug" className="merch-item-image" />
          <h3 className="merch-item-title">Harmony Steps Shorts</h3>
          <p className="merch-item-description"></p>
          <p className="merch-item-price">£23.00</p>
          {/* Order Here button using mailto */}
          <a href="" >Order Here</a>
        </div>

        <div className="merch-item">
          <img src="/Oodie.png" alt="Merchandise Mug" className="merch-item-image" />
          <h3 className="merch-item-title">Harmony Steps Grey Oodie </h3>
          <p className="merch-item-description"> </p>
          <p className="merch-item-price">£32.00</p>
          {/* Order Here button using mailto */}
        <a href="" >Order Here</a>
        </div>

        <div className="merch-item">
          <img src="/PinkOodie.png" alt="Merchandise Mug" className="merch-item-image" />
          <h3 className="merch-item-title">Harmony Steps Pink Oodie</h3>
          <p className="merch-item-description"></p>
          <p className="merch-item-price">£32.00</p>
          {/* Order Here button using mailto */}
          <a href="" ></a>
        </div>

        <div className="merch-item">
          <img src="/MetalWaterBottle.png" alt="Merchandise Mug" className="merch-item-image" />
          <h3 className="merch-item-title">Harmony Steps Steel Screw Top Water Bottle</h3>
          <p className="merch-item-description"></p>
          <p className="merch-item-price">£16.50</p>
          {/* Order Here button using mailto */}
          <a href="" >Order Here</a>
        </div>

         <div className="merch-item">
          <img src="/StanleyWaterBottle.png" alt="Merchandise Mug" className="merch-item-image" />
          <h3 className="merch-item-title">Harmony Steps Stanley Water Bottle</h3>
          <p className="merch-item-description"></p>
          <p className="merch-item-price">£27.50</p>
          {/* Order Here button using mailto */}
          <a href="" >Order Here</a>
        </div>

         <div className="merch-item">
          <img src="/StanleyWaterBottlecopy.png" alt="Merchandise Mug" className="merch-item-image" />
          <h3 className="merch-item-title">Harmony Steps Stanley Sports Style Water Bottle</h3>
          <p className="merch-item-description"></p>
          <p className="merch-item-price">£27.50</p>
          {/* Order Here button using mailto */}
         <a href="" >Order Here</a>
        </div>

          <div className="merch-item">
          <img src="/Bag.png" alt="Merchandise Mug" className="merch-item-image" />
          <h3 className="merch-item-title">Harmony Steps Draw String Bag</h3>
          <p className="merch-item-description"></p>
          <p className="merch-item-price">£15.00</p>
          {/* Order Here button using mailto */}
          <a href="" >Order Here</a>
        </div>

        <div className="merch-item">
          <img src="/CostumeBag.png" alt="Merchandise Mug" className="merch-item-image" />
          <h3 className="merch-item-title">Harmony Steps Costume Bag</h3>
          <p className="merch-item-description"></p>
          <p className="merch-item-price">£26.50</p>
          {/* Order Here button using mailto */}
          <a href="" >Order Here</a>
        </div>

         <div className="merch-item">
          <img src="/CropTop.png" alt="Merchandise Mug" className="merch-item-image" />
          <h3 className="merch-item-title">Harmony Steps Crop Top</h3>
          <p className="merch-item-description"></p>
          <p className="merch-item-price">£20.00</p>
          {/* Order Here button using mailto */}
          <a href="" >Order Here</a>
        </div>


         <div className="merch-item">
          <img src="/Hoodies.png" alt="Merchandise Mug" className="merch-item-image" />
          <h3 className="merch-item-title">Harmony Steps Hoodie</h3>
          <p className="merch-item-description"></p>
          <p className="merch-item-price">£30.00</p>
          {/* Order Here button using mailto */}
         <a href="" >Order Here</a>
        </div>



      </section>

      <Footer rootClassName="footer-root-class-name4" />
    </div>
  );
};

export default MerchPage;