import React, { Fragment } from 'react'

import { Helmet } from 'react-helmet'

import Navbar from '../components/navbar2'
import ContactBanner from '../components/contact-banner'
import ContactForm from '../components/contact-form'
import Contact3 from '../components/contact3'
import Map from '../components/map'
import Footer from '../components/footer'
import './contact-page.css'

const ContactPage = (props) => {
  return (
    <div className="contact-page-container">
      <Helmet>
        <title>ContactPage - Harmony Steps</title>
        <meta name="description" content="HarmonySteps" />
        <meta property="og:title" content="ContactPage - Harmony Steps " />
        <meta property="og:description" content="HarmonySteps" />
      </Helmet>
      <Navbar rootClassName="navbar-root-class-name2"></Navbar>
      <ContactBanner
        action1="Explore Classes"
        content1="Empowering performers through precision, technique, and artistry"
        rootClassName="contact-banner-root-class-name"
      ></ContactBanner>
      <ContactForm
        action={
          <Fragment>
            <span className="contact-page-text thq-body-small">Submit</span>
          </Fragment>
        }
        content2={
          <Fragment>
            <span className="contact-page-text01 thq-body-small">
              Get in touch with us
            </span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <h2 className="contact-page-text02 thq-heading-2">Contact us</h2>
          </Fragment>
        }
        imageSrc="/31cb33ed-0712-40b2-a01b-aea3ee7b091c-700w.jpg"
        rootClassName="contact-form-root-class-name"
      ></ContactForm>
      <Contact3
        email1={
          <Fragment>
            <a
              href="mailto:harmonystepsdance@gmail.com?subject="
              className="contact-page-link thq-body-small"
            >
              harmonystepsdance@gmail.com
            </a>
          </Fragment>
        }
        phone1={
          <Fragment>
            <a
              href="tel:+447596257102"
              className="contact-page-link1 thq-body-small"
            >
              +44  7596 257 102
            </a>
          </Fragment>
        }
        address1={
          <Fragment>
            <span className="contact-page-text03 thq-body-small">
              <span>@</span>
              <a
                href="https://www.facebook.com/p/Harmony-Steps-Dance-61559516900496/"
                target="_blank"
                rel="noreferrer noopener"
                className="contact-page-link2"
              >
                harmonystepsdance
              </a>
            </span>
          </Fragment>
        }
        content2={
          <Fragment>
            <span className="contact-page-text05 thq-body-small">
              Get in touch with us today!
            </span>
          </Fragment>
        }
        content3={
          <Fragment>
            <p className="contact-page-text06 thq-body-large">
              Contact us for more information.
            </p>
          </Fragment>
        }
        content4={
          <Fragment>
            <p className="contact-page-text07 thq-body-large">
              Join our community and stay connected with fellow dancers!
            </p>
          </Fragment>
        }
        content5={
          <Fragment>
            <p className="contact-page-text08 thq-body-large">
              Follow us on social media
            </p>
          </Fragment>
        }
        heading1={
          <Fragment>
            <h2 className="contact-page-text09 thq-heading-2">Contact Us</h2>
          </Fragment>
        }
        rootClassName="contact3-root-class-name"
      ></Contact3>
      <Map
        content1={
          <Fragment>
            <p className="contact-page-text10 thq-body-large">
              <span>
                Feel free to reach out to us for any inquiries or to register
                for classes.
              </span>
              <span>
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
            </p>
          </Fragment>
        }
        heading1={
          <Fragment>
            <h2 className="contact-page-text13 thq-heading-2">Find Us</h2>
          </Fragment>
        }
        rootClassName="map-root-class-name"
      ></Map>
      <Footer rootClassName="footer-root-class-name1"></Footer>
    </div>
  )
}

export default ContactPage
