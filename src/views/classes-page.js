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
import { Link } from 'react-router-dom'; 
import Enroll_btn from '../components/enroll_banner_btn'; 

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

      <img 
        src="classes.jpg" 
        alt="Classes" 
        className="responsive-classes-image" 
      />

        <section className="fees-section">
        <h2 className="fees-heading">Fees</h2> 
        <p className="classes_text"> Group classes are charged on a monthly basis</p>
        <ul className="fees-list"> 
          <li className="classes_text"><strong>Musical Theatre:</strong> £25</li>
          <li className="classes_text"><strong>Cheerleading:</strong> £25 </li>
          <li className="classes_text"><strong>Commercial:</strong> £25 </li>
          <li className="classes_text"><strong>Competition Teams:</strong> £28 </li>
          <li className="classes_text"><strong>Private Classes:</strong> Contact us for pricing</li>
        </ul>
      </section>
   


<Enroll_btn /> 
      



      <Footer rootClassName="footer-root-class-name3" />
    </div>
  );
};

export default ClassesPage;