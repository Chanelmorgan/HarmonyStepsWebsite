import React from 'react';
import { Helmet } from 'react-helmet';
import Navbar from '../components/navbar2';
import EventBanner from '../components/event-banner'; 
import Footer from '../components/footer'; 
import './event-page.css'; 

const EventPage = () => {
  const upcomingEvents = [
    {
      title: "Supreme Dance Competition",
      date: "January 11, 2025",
      time: "9:00 AM",
      location: "Canterbury, Kent",
      description: " Get ready for the ultimate showdown at the Supreme Dance Competition! Watch top-tier dancers battle it out in a thrilling display of skill, creativity, and passion. This prestigious event features a variety of dance styles, from hip-hop to contemporary, with talented performers vying for the coveted Supreme Dance title. Whether you’re a competitor or a spectator, experience the excitement and energy of this unforgettable day. Proceeds support local charities, making it a celebration of both talent and community spirit.",
      image: "/comp1.png",
      link: "https://supremedance.co.uk/"  
    },
    {
      title: "So You Want To Dance",
      date: "May 31 - June 1, 2025",
      time: "9:00 AM",
      location: "Havant theatre, Portsmouth",
      description: "Get ready to move to the rhythm at So You Want To Dance—an exciting day of dance, music, and celebration. Whether you’re a seasoned dancer or a first-timer, this event promises fun for all. Enjoy live performances from world-class dancers and musicians, join in interactive workshops, and experience the joy of dance in a vibrant, community-filled atmosphere. Proceeds go to charity, so you’ll be dancing for a great cause!",
      image: "/Comp2.png",
      link: "https://soyouwanttodance.uk/"  
    },
    {
      title: "Starpower International",
      date: "March 29-30, 2025",
      time: "8:00 AM",
      location: "Sevenoaks, Kent",
      description: " Prepare for an extraordinary weekend at Starpower International—the premier dance competition where talent takes center stage! Experience the thrill of watching top dancers from around the world showcase their skills in various styles, from ballet to street dance. With inspiring performances, exciting competitions, and the chance to see the future stars of the dance world, this event promises a high-energy, unforgettable experience. Whether you’re a dancer, a fan, or a supporter, join us for a celebration of creativity, passion, and performance.",
      image: "/comp3.png",
      link: "https://international.starpowertalent.com/schedule/"  
    },
    {
      title: "Starpower International",
      date: "May 9-11, 2025",
      time: "8:00 AM",
      location: "London",
      description: "Step into the spotlight at Starpower International in London—a weekend of world-class dance competition and celebration. Witness top dancers from across the globe as they showcase their talent in a variety of styles, from contemporary to hip-hop, in the heart of one of the world’s most iconic cities. This prestigious event promises an exciting mix of fierce competition, artistry, and passion, offering a platform for both emerging and established performers. Whether you’re a dancer, a fan, or a family member, don’t miss this chance to experience the magic of dance on an international stage.",
      image: "/comp3.png",
      link: "https://international.starpowertalent.com/schedule/"  
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