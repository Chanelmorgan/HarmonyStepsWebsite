import React from 'react'
import { Link } from 'react-router-dom'

import PropTypes from 'prop-types'

import './footer.css'

const Footer = (props) => {
  return (
    <footer className={`footer-footer footerContainer ${props.rootClassName} `}>
      <div className="footer-container">
        <Link to="/" className="footer-logo logo">
          {props.logo}
        </Link>
        <nav className="footer-nav">
          <Link to="/classes-page" className="footer-nav12 bodySmall">
            {props.nav12}
          </Link>
          
          <Link to="/coming-soon-page" className="footer-nav32 bodySmall">
            {props.nav32}
          </Link>
          <Link to="/gallery-page" className="footer-nav42 bodySmall">
            {props.nav42}
          </Link>
          <Link to="/contact-page" className="footer-nav52 bodySmall">
            {props.nav52}
          </Link>
        </nav>
      </div>
      <div className="footer-separator"></div>
      <div className="footer-container1">
        <span className="bodySmall footer-text">{props.text}</span>
        <div className="footer-icon-group">
          <Link to="https://www.instagram.com/harmonystepsdance/" className="footer-navlink">
            <svg
              viewBox="0 0 877.7142857142857 1024"
              className="footer-icon socialIcons"
            >
              <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
            </svg>
          </Link>
          <a
            href="https://www.facebook.com/p/Harmony-Steps-Dance-61559516900496/"
            target="_blank"
            rel="noreferrer noopener"
            className="footer-link"
          >
            <svg
              viewBox="0 0 602.2582857142856 1024"
              className="footer-icon2 socialIcons"
            >
              <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
            </svg>
          </a>
        </div>
      </div>
    </footer>
  )
}

Footer.defaultProps = {
  nav22: 'About ',
  text1: 'Classes',
  nav42: 'Gallery',
  nav12: 'Classes',
  nav52: 'Contact',
  nav32: 'Events',
  text: '© 2024 Harmony Steps,  developed by Chanel Morgan.',
  logo: 'Harmony Steps ',
  rootClassName: '',
}

Footer.propTypes = {
  nav22: PropTypes.string,
  text1: PropTypes.string,
  nav42: PropTypes.string,
  nav12: PropTypes.string,
  nav52: PropTypes.string,
  nav32: PropTypes.string,
  text: PropTypes.string,
  logo: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default Footer
