import React, { Fragment } from 'react'

import { Helmet } from 'react-helmet'

import Navbar from '../components/navbar2'
import EventsBanner from '../components/events-banner'
import EventsFeature from '../components/events-feature'
import Gallery3 from '../components/gallery3'
import Footer from '../components/footer'
import './event-page.css'

const EventPage = (props) => {
  return (
    <div className="event-page-container">
      <Helmet>
        <title>EventPage - Harmony Steps</title>
        <meta name="description" content="HarmonySteps" />
        <meta property="og:title" content="EventPage - Harmony Steps " />
        <meta property="og:description" content="HarmonySteps" />
      </Helmet>
      <Navbar rootClassName="navbar-root-class-name5"></Navbar>
      <EventsBanner rootClassName="events-banner-root-class-name"></EventsBanner>
      <EventsFeature
        slogan={
          <Fragment>
            <span className="event-page-text thq-body-small">Slogan</span>
          </Fragment>
        }
        mainAction={
          <Fragment>
            <span className="event-page-text01 thq-body-small">
              Main action
            </span>
          </Fragment>
        }
        sectionTitle={
          <Fragment>
            <h2 className="event-page-text02 thq-heading-2">Key Features</h2>
          </Fragment>
        }
        feature1Title={
          <Fragment>
            <h3 className="event-page-text03 thq-heading-3">
              Musical Theatre Classes
            </h3>
          </Fragment>
        }
        feature2Title={
          <Fragment>
            <h3 className="event-page-text04 thq-heading-3">
              Pom Cheerleading Program
            </h3>
          </Fragment>
        }
        feature3Title={
          <Fragment>
            <h3 className="event-page-text05 thq-heading-3">
              Private Coaching Sessions
            </h3>
          </Fragment>
        }
        rootClassName="events-feature-root-class-name"
        secondaryAction={
          <Fragment>
            <span className="event-page-text06 thq-body-small">
              Secondary action
            </span>
          </Fragment>
        }
        sectionDescription={
          <Fragment>
            <p className="event-page-text07 thq-body-large">
              Discover the key features that set Harmony Steps apart from other
              performing arts schools.
            </p>
          </Fragment>
        }
        feature1Description={
          <Fragment>
            <span className="event-page-text08 thq-body-small">
              Engage in dynamic musical theatre classes that blend acting,
              singing, and dancing to enhance your performance skills.
            </span>
          </Fragment>
        }
        feature2Description={
          <Fragment>
            <span className="event-page-text09 thq-body-small">
              Join our pom cheerleading program to learn high-energy routines
              and develop teamwork and precision in your movements.
            </span>
          </Fragment>
        }
        feature3Description={
          <Fragment>
            <span className="event-page-text10 thq-body-small">
              Benefit from personalized private coaching sessions tailored to
              your specific needs and goals to excel in your performance
              journey.
            </span>
          </Fragment>
        }
      ></EventsFeature>
      <Gallery3></Gallery3>
      <Footer rootClassName="footer-root-class-name2"></Footer>
    </div>
  )
}

export default EventPage
