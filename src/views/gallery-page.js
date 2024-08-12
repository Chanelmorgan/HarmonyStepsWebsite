import React from 'react'

import { Helmet } from 'react-helmet'

import Navbar from '../components/navbar2'
import GalleryBanner from '../components/gallery-banner'
import Gallery1 from '../components/gallery1'
import Gallery2 from '../components/gallery2'
import Footer from '../components/footer'
import './gallery-page.css'

const GalleryPage = (props) => {
  return (
    <div className="gallery-page-container">
      <Helmet>
        <title>GalleryPage - Harmony Steps</title>
        <meta name="description" content="HarmonySteps" />
        <meta property="og:title" content="GalleryPage - Harmony Steps " />
        <meta property="og:description" content="HarmonySteps" />
      </Helmet>
      <Navbar rootClassName="navbar-root-class-name1"></Navbar>
      {/* <GalleryBanner
        action1="Explore Classes"
        rootClassName="gallery-banner-root-class-name"
      ></GalleryBanner> */} 
      
      <Gallery1
        image1Src="/43b0757c-704c-4ded-aa8f-39521eb5e168-1500w.jpg"
        image2Src="/31cb33ed-0712-40b2-a01b-aea3ee7b091c-1500w.jpg"
        image4Src="/2209e84d-a845-4f6b-871d-aec16fbed8fc-1500w.jpg"
      ></Gallery1>
      <Gallery2></Gallery2>
      <Footer
        logo="Harmony Steps Dance"
        rootClassName="footer-root-class-name"
      ></Footer>
    </div>
  )
}

export default GalleryPage
