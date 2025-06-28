import React from 'react';
import { Helmet } from 'react-helmet';
import Navbar from '../components/navbar2';
import PomInfo from '../components/pom-info';
import MusicalTheareInfo from '../components/musical-theare-info';
import PrivateClassInfo from '../components/private-class-info';
import Timetable from '../components/timetable';
import Footer from '../components/footer';
import ClassBanner from '../components/NEW-classes-banner';
import './classes-page.css';

const ClassesPage = (props) => {
  return (
    <div className="classes-page-container">
      <Helmet>
        <title>ClassesPage - Harmony Steps</title>
        <meta name="description" content="HarmonySteps" />
        <meta property="og:title" content="ClassesPage - Harmony Steps" />
        <meta property="og:description" content="HarmonySteps" />
      </Helmet>

      <Navbar rootClassName="navbar-root-class-name3" />
      <ClassBanner rootClassName="event-banner-root-class-name" />

      <img  src="classes.png"/> 
    
      <Link to="/contact-page" className="timetable-navlink thq-button-filled">
  Enroll Now
</Link>




   

      <Timetable
        text={
          <span className="classes-page-text thq-body-small">
            Tutts Barn Ln, Eastbourne <br />BN22 8XP
          </span>
        }
        text1={
          <span className="classes-page-text05 thq-body-small">
            Tutts Barn Ln, Eastbourne <br />BN22 8XP
          </span>
        }
        content1="Our classes are conveniently scheduled, with flexible days and times for private sessions to accommodate busy lifestyles."
        rootClassName="timetable-root-class-name"
      />

      <Footer rootClassName="footer-root-class-name3" />
    </div>
  );
};

export default ClassesPage;