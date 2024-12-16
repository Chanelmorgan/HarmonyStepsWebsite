// src/pages/EventPage.js
import React, { Fragment } from 'react';
import { Helmet } from 'react-helmet';

import Navbar from '../components/navbar2';  // Same Navbar as in About Page
import EventBanner from '../components/event-banner'; // Create a component for the event banner
import Features17 from '../components/features17'; // Reuse Features17 for event details
import Reviews from '../components/reviews'; // Reuse Reviews section
import Footer from '../components/footer'; // Reuse Footer section
import './event-page.css';  // Add custom styles for event page

const EventPage = () => {
  return (
    <div className="event-page-container">
      <Helmet>
        <title>Event Page - Harmony Steps</title>
        <meta name="description" content="Harmony Steps Event Page" />
        <meta property="og:title" content="Event Page - Harmony Steps" />
        <meta property="og:description" content="Join our exciting dance events!" />
      </Helmet>

      <Navbar text3="Event" rootClassName="navbar-root-class-name4" />

      {/* Event Banner (You can create a custom banner component for event) */}
      <EventBanner rootClassName="event-banner-root-class-name" />

      {/* Event Details using Features17 component */}
      <Features17
        feature1Title={
          <Fragment>
            <h2 className="event-page-text thq-heading-2">Annual Dance Showcase</h2>
          </Fragment>
        }
        rootClassName="features17-root-class-name"
        feature1Description={
          <Fragment>
            <p className="event-page-text1 thq-body-large">
              Join us for an unforgettable night of dance performances showcasing the talents of our students. The event features a variety of dance styles, including ballet, jazz, contemporary, and hip hop.
            </p>
            <p className="event-page-text1 thq-body-large">
              Date: January 25, 2025 <br />
              Time: 7:00 PM <br />
              Location: Harmony Steps Dance Studio, London
            </p>
          </Fragment>
        }
      />

      {/* Optional: Reviews Section */}
      <Reviews />

      <Footer rootClassName="footer-root-class-name4" />
    </div>
  );
};

export default EventPage;