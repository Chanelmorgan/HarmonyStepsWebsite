import React from 'react'

import PropTypes from 'prop-types'

import './about-us-banner.css'

const AboutUsBanner = (props) => {
  return (
    <div
      className={`about-us-banner-container thq-section-padding ${props.rootClassName} `}
    >
      <div className="about-us-banner-max-width thq-section-max-width">
        <div className="about-us-banner-container1">
          <h2 className="about-us-banner-title thq-heading-2">
            {props.heading1}
          </h2>
          <h3 className="about-us-banner-text thq-heading-3">
            {props.content1}
          </h3>
        </div>
      </div>
    </div>
  )
}

AboutUsBanner.defaultProps = {
  content1: 'Empowering performers through precision, technique, and artistry',
  heading1: 'About Us',
  rootClassName: '',
}

AboutUsBanner.propTypes = {
  content1: PropTypes.string,
  heading1: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default AboutUsBanner
