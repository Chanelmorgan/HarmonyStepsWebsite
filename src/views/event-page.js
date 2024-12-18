
import React from 'react';
import { Helmet } from 'react-helmet';
import Navbar from '../components/navbar2';
import EventBanner from '../components/event-banner'; // Your event banner component
import Footer from '../components/footer'; // Reuse Footer section
import './event-page.css'; // Event page CSS styles

const EventPage = () => {
  const upcomingEvents = [
    {
      title: "Supreme Dance Competition",
      date: "January 11, 2025",
      time: "7:00 PM",
      location: "The Grand Ballroom, London",
      description: "Join us for the annual Harmony Steps Charity Event where we celebrate togetherness, community, and fundraising for a great cause. Enjoy live music, guest speakers, and an unforgettable evening of giving.",
      image: "/placeholder.jpg"
    },
    {
      title: "So You Want To Dance",
      date: "June 10, 2025",
      time: "8:00 PM",
      location: "Brighton",
      description: "A spectacular summer evening filled with music, fun, and community spirit. Join us for a charity concert with renowned artists and special performances.",
      image: "/placeholder.jpg"
    },
    {
      title: "Starpower International",
      date: "March 29-30, 2025",
      time: "6:30 PM",
      location: "The Ritz, London",
      description: "Join us for an elegant autumn evening featuring a gourmet dinner, entertainment, and fundraising for various causes.",
      image: "/placeholder.jpg"
    }, 
    {
      title: "Starpower International",
      date: "May 9-11, 2025",
      time: "6:30 PM",
      location: "London",
      description: "Join us for an elegant autumn evening featuring a gourmet dinner, entertainment, and fundraising for various causes.",
      image: "/placeholder.jpg"
    },
    // Add more events as needed...
  ];

  return (
    <div className="event-page-container">
      <Helmet>
        <title>Upcoming Events - Harmony Steps</title>
        <meta name="description" content="Join us for upcoming events hosted by Harmony Steps!" />
      </Helmet>

      <Navbar text3="Upcoming Events" rootClassName="navbar-root-class-name4" />
      
      {/* Event Banner */}
      <EventBanner rootClassName="event-banner-root-class-name" />

      {/* Event Details Section */}
      <section className="events-section">
        <div className="events-container">
          {upcomingEvents.map((event, index) => (
            <div key={index} className="event-item">
              <div className="event-image-container">
                <img src={event.image} alt={event.title} className="event-image" />
              </div>
              <div className="event-info">
                <h3 className="event-title">{event.title}</h3>
                <p className="event-date-time">
                  <span className="event-date">{event.date}</span>
                  <span className="event-time">{event.time}</span>
                </p>
                <p className="event-location">{event.location}</p>
                <p className="event-description">{event.description}</p>
                <button className="buy-tickets-button">Buy Tickets</button>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer rootClassName="footer-root-class-name4" />
    </div>
  );
};

export default EventPage;