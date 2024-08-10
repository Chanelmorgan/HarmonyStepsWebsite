import React, { Fragment } from 'react'

import { Helmet } from 'react-helmet'

import Navbar from '../components/navbar2'
import AboutUsBanner from '../components/about-us-banner'
import Features17 from '../components/features17'
import Reviews from '../components/reviews'
import Footer from '../components/footer'
import './about-page.css'

const AboutPage = (props) => {
  return (
    <div className="about-page-container">
      <Helmet>
        <title>AboutPage - Harmony Steps</title>
        <meta name="description" content="HarmonySteps" />
        <meta property="og:title" content="AboutPage - Harmony Steps " />
        <meta property="og:description" content="HarmonySteps" />
      </Helmet>
      <Navbar
        text3="About"
        rootClassName="navbar-root-class-name4"
      ></Navbar>
      <AboutUsBanner rootClassName="about-us-banner-root-class-name"></AboutUsBanner>
      <Features17
        feature1Title={
          <Fragment>
            <h2 className="about-page-text thq-heading-2">Meet The Coach</h2>
          </Fragment>
        }
        rootClassName="features17-root-class-name"
        feature1Description={
          <Fragment>
            <p className="about-page-text1 thq-body-large">
              At Harmony Steps, we believe in the power of teamwork. Our program
              fosters collaboration and support among all participants to create
              stunning performances.
            </p>
          </Fragment>
        }
      ></Features17>
      <Reviews></Reviews>
      <Footer rootClassName="footer-root-class-name4"></Footer>
    </div>
  )
}

export default AboutPage
