import React from 'react';
import { Helmet } from 'react-helmet';
import Navbar from '../components/navbar2';
import EventBanner from '../components/event-banner'; 
import Footer from '../components/footer'; 
import './event-page.css'; 

const EventPage = () => {
  const upcomingEvents = [
   
    {
      title: "So You Want To Dance - Summer Finals",
      date: "July 12, 2025",
      time: "9:00 AM",
      location: "Canterbury, Kent",
      description: "Get ready to move to the rhythm at So You Want To Dance—an exciting day of dance, music, and celebration. Whether you’re a seasoned dancer or a first-timer, this event promises fun for all. Enjoy live performances from world-class dancers and musicians, join in interactive workshops, and experience the joy of dance in a vibrant, community-filled atmosphere. Proceeds go to charity, so you’ll be dancing for a great cause!",
      image: "/Comp2.png",
      link: "https://soyouwanttodance.uk/"  
    },
    {
      title: "Star Dance Alliance International World Dance Championships",
      date: "July 23, 2025",
      time: "8:00 AM",
      location: "Meadowlands NJ, USA",
      description: "Star Dance Alliance is an alliance of the top international dance competitions, committed to bringing you the greatest dance competition experience of your life. ",
      image: "/comp4.png",
      link: "https://www.worlddancechampionship.com"  
    },
  
    // Add more events as needed
  ];

  return (
    <div className="event-page-container">
      <Helmet>
        <title>Upcoming Events - Harmony Steps</title>
        <meta name="description" content="Join us for upcoming events!" />
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
                {/* Add a link to the event details page */}
                <a href={event.link} target="_blank" rel="noopener noreferrer">
                  <button className="buy-tickets-button">More Info</button>
                </a>
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