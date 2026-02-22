import React from 'react';
import Head from 'next/head';

import Navbar from '../components/navbar2';  // Same Navbar as in About and Event Pages
import MerchBanner from '../components/merch-banner'; // Custom component for Merch Banner
import Features17 from '../components/features17'; // Reuse Features17 to display merchandise
import Reviews from '../components/reviews'; // Reuse Reviews section
import Footer from '../components/footer'; // Reuse Footer section
const MerchPage = () => {

  // Email settings
  const emailRecipient = "harmonystepsdance@gmail.com"; // Replace with your actual email address
  const emailSubject = "Order Request - Harmony Steps Merchandise";

  return (
    <div className="merch-page-container">
      <Head>
        <title>Merchandise - Harmony Steps</title>
        <meta name="description" content="Shop Harmony Steps Merchandise" />
        <meta property="og:title" content="Merchandise - Harmony Steps" />
        <meta property="og:description" content="Shop exclusive merchandise from Harmony Steps!" />
      </Head>

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
         <a className="add-to-cart-button" href="https://buy.stripe.com/6oU28jgHf27k9YIe8N77O03" >Order Here</a>
        </div>

        <div className="merch-item">
          <img src="/TeamJackets.png" alt="Merchandise Hoodie" className="merch-item-image" />
          <h3 className="merch-item-title">Harmony Steps Elite Team Jackets</h3>
          <p className="merch-item-description"></p>
          <p className="merch-item-price">£35.00</p>
          {/* Order Here button using mailto */}
          <a className="add-to-cart-button" href="https://buy.stripe.com/00w7sD4Yx6nA2wg0hX77O0d">Order Here</a>
        </div>

        <div className="merch-item">
          <img src="/Leggings.png" alt="Merchandise Mug" className="merch-item-image" />
          <h3 className="merch-item-title">Harmony Steps Lycra Leggings</h3>
          <p className="merch-item-description"></p>
          <p className="merch-item-price">£26.50</p>
          {/* Order Here button using mailto */}
          <a className="add-to-cart-button" href="https://buy.stripe.com/eVqbIT76F13g1scaWB77O05" >Order Here</a>
        </div>

        <div className="merch-item">
          <img src="/Legging.png" alt="Merchandise Mug" className="merch-item-image" />
          <h3 className="merch-item-title">Harmony Steps Leggings</h3>
          <p className="merch-item-description"></p>
          <p className="merch-item-price">£25.00</p>
          {/* Order Here button using mailto */}
          <a className="add-to-cart-button"  href="https://buy.stripe.com/5kQfZ93UteU6eeYc0F77O08" >Order Here</a>
        </div>

        <div className="merch-item">
          <img src="/SportsBra.png" alt="Merchandise Mug" className="merch-item-image" />
          <h3 className="merch-item-title">Harmony Steps Sports Bra</h3>
          <p className="merch-item-description"> </p>
          <p className="merch-item-price">£22.00</p>
          {/* Order Here button using mailto */}
         <a className="add-to-cart-button" href="https://buy.stripe.com/fZu28j62BeU6b2M6Gl77O0b" >Order Here</a>
        </div>


        <div className="merch-item">
          <img src="/Shorts.png" alt="Merchandise Mug" className="merch-item-image" />
          <h3 className="merch-item-title">Harmony Steps Shorts</h3>
          <p className="merch-item-description"></p>
          <p className="merch-item-price">£23.00</p>
          {/* Order Here button using mailto */}
          <a className="add-to-cart-button" href="https://buy.stripe.com/7sY5kv76F9zMeeYc0F77O0a" >Order Here</a>
        </div>

        <div className="merch-item">
          <img src="/Oodie.png" alt="Merchandise Mug" className="merch-item-image" />
          <h3 className="merch-item-title">Harmony Steps Grey Oodie </h3>
          <p className="merch-item-description"> </p>
          <p className="merch-item-price">£32.00</p>
          {/* Order Here button using mailto */}
        <a className="add-to-cart-button" href="https://buy.stripe.com/6oU5kv3Ut7rE8UE2q577O0c" >Order Here</a>
        </div>

        <div className="merch-item">
          <img src="/PinkOodie.png" alt="Merchandise Mug" className="merch-item-image" />
          <h3 className="merch-item-title">Harmony Steps Pink Oodie</h3>
          <p className="merch-item-description"></p>
          <p className="merch-item-price">£32.00</p>
          {/* Order Here button using mailto */}
          <a className="add-to-cart-button" href="https://buy.stripe.com/6oU5kv3Ut7rE8UE2q577O0c" ></a>
        </div>

        <div className="merch-item">
          <img src="/MetalWaterBottle.png" alt="Merchandise Mug" className="merch-item-image" />
          <h3 className="merch-item-title">Harmony Steps Steel Screw Top Water Bottle</h3>
          <p className="merch-item-description"></p>
          <p className="merch-item-price">£16.50</p>
          {/* Order Here button using mailto */}
          <a className="add-to-cart-button" href="https://buy.stripe.com/cNi8wH3Ut4fs4Eo5Ch77O01" >Order Here</a>
        </div>

         <div className="merch-item">
          <img src="/StanleyWaterBottle.png" alt="Merchandise Mug" className="merch-item-image" />
          <h3 className="merch-item-title">Harmony Steps Stanley Water Bottle</h3>
          <p className="merch-item-description"></p>
          <p className="merch-item-price">£27.50</p>
          {/* Order Here button using mailto */}
          <a className="add-to-cart-button" href="https://buy.stripe.com/14A5kv1Ml3bo1sce8N77O07" >Order Here</a>
        </div>

         <div className="merch-item">
          <img src="/StanleyWaterBottlecopy.png" alt="Merchandise Mug" className="merch-item-image" />
          <h3 className="merch-item-title">Harmony Steps Stanley Sports Style Water Bottle</h3>
          <p className="merch-item-description"></p>
          <p className="merch-item-price">£27.50</p>
          {/* Order Here button using mailto */}
         <a className="add-to-cart-button" href="https://buy.stripe.com/7sY9AL8aJ9zMfj2aWB77O06" >Order Here</a>
        </div>

          <div className="merch-item">
          <img src="/Bag.png" alt="Merchandise Mug" className="merch-item-image" />
          <h3 className="merch-item-title">Harmony Steps Draw String Bag</h3>
          <p className="merch-item-description"></p>
          <p className="merch-item-price">£15.00</p>
          {/* Order Here button using mailto */}
          <a className="add-to-cart-button" href="https://buy.stripe.com/3cIcMX3Ut27kfj27Kp77O04" >Order Here</a>
        </div>

        <div className="merch-item">
          <img src="/CostumeBag.png" alt="Merchandise Mug" className="merch-item-image" />
          <h3 className="merch-item-title">Harmony Steps Costume Bag</h3>
          <p className="merch-item-description"></p>
          <p className="merch-item-price">£26.50</p>
          {/* Order Here button using mailto */}
          <a className="add-to-cart-button" href="https://buy.stripe.com/6oUcMXbmV3bogn6aWB77O0e" >Order Here</a>
        </div>

         <div className="merch-item">
          <img src="/CropTop.png" alt="Merchandise Mug" className="merch-item-image" />
          <h3 className="merch-item-title">Harmony Steps Crop Top</h3>
          <p className="merch-item-description"></p>
          <p className="merch-item-price">£20.00</p>
          {/* Order Here button using mailto */}
          <a className="add-to-cart-button" href="https://buy.stripe.com/8x26oz62B3boeeYggV77O09" >Order Here</a>
        </div>


         <div className="merch-item">
          <img src="/Hoodies.png" alt="Merchandise Mug" className="merch-item-image" />
          <h3 className="merch-item-title">Harmony Steps Hoodie</h3>
          <p className="merch-item-description"></p>
          <p className="merch-item-price">£30.00</p>
          {/* Order Here button using mailto */}
         <a className="add-to-cart-button" href="https://buy.stripe.com/14AbIT62B5jwb2M7Kp77O02" >Order Here</a>
        </div>



      </section>

      <Footer rootClassName="footer-root-class-name4" />
    </div>
  );
};

export default MerchPage;