import React, { Fragment } from 'react'

import { Helmet } from 'react-helmet'

import Navbar from '../components/navbar2'
import ClassesBanner from '../components/classes-banner'
import PomInfo from '../components/pom-info'
import MusicalTheareInfo from '../components/musical-theare-info'
import PrivateClassInfo from '../components/private-class-info'
import Timetable from '../components/timetable'
import Footer from '../components/footer'
import './classes-page.css'

const ClassesPage = (props) => {
  return (
    <div className="classes-page-container">
      <Helmet>
        <title>ClassesPage - Harmony Steps</title>
        <meta name="description" content="HarmonySteps" />
        <meta property="og:title" content="ClassesPage - Harmony Steps " />
        <meta property="og:description" content="HarmonySteps" />
      </Helmet>
      <Navbar rootClassName="navbar-root-class-name3"></Navbar>
      {/* <ClassesBanner rootClassName="classes-banner-root-class-name"></ClassesBanner> */}
      <PomInfo
        rootClassName="pom-info-root-class-name"
        feature1ImageSrc="/cheerleading-1400w.webp"
      ></PomInfo>
      <MusicalTheareInfo
        feature1ImageSrc="/mt2-1400w.webp"
        feature1Description="Our musical theatre classes combine acting, singing and dancing to tell stories through music and performance. "
      ></MusicalTheareInfo>
      <PrivateClassInfo
        feature1Title="Private Classes"
        feature1ImageSrc="/studio2-1400w.webp"
      ></PrivateClassInfo>
      <Timetable
        text={
          <Fragment>
            <span className="classes-page-text thq-body-small">
              <span>KC Conqueror hall, Harold Drive, Eastbourne</span>
              <br></br>
              <br></br>
              <span>BN23 6TH</span>
            </span>
          </Fragment>
        }
        text1={
          <Fragment>
            <span className="classes-page-text05 thq-body-small">
              <span>KC Conqueror hall, Harold Drive, Eastbourne</span>
              <br></br>
              <span>BN23 6TH</span>
              <br></br>
            </span>
          </Fragment>
        }
        content1="Our classes are conveniently scheduled, with flexible days and times for private sessions to accommodate busy lifestyles, ensuring everyone can find a perfect fit for their children’s training and development."
        rootClassName="timetable-root-class-name"
      ></Timetable>
      <Footer rootClassName="footer-root-class-name3"></Footer>
    </div>
  )
}

export default ClassesPage
