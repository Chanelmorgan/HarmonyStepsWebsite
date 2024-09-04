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
      {/* <AboutUsBanner rootClassName="about-us-banner-root-class-name"></AboutUsBanner> */}
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
            Hi there! I’m Coach Jamie, and I’m excited to be here with you. At 22, I’ve had the chance to dive into my passions for cheerleading, dancing, and musical theater. My journey began with cheerleading, where I learned the importance of teamwork and high-energy routines. This passion naturally led me to dancing, where I could express myself through movement and rhythm.

Musical theater also holds a special place in my heart. Performing on stage has taught me so much about blending vocal skills with dramatic flair. I’m thrilled to bring all these experiences into coaching, and I’m here to help you explore your own talents and reach new heights.
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
