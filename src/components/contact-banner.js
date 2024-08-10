import React from 'react'

import PropTypes from 'prop-types'

import './contact-banner.css'

const ContactBanner = (props) => {
  return (
    <div
      className={`contact-banner-container thq-section-padding ${props.rootClassName} `}
    >
      <div className="contact-banner-max-width thq-section-max-width">
        <div className="contact-banner-container1">
          <h2 className="contact-banner-title thq-heading-2">
            {props.heading1}
          </h2>
          <h3 className="contact-banner-text thq-heading-3">
            {props.content1}
          </h3>
        </div>
      </div>
    </div>
  )
}

ContactBanner.defaultProps = {
  heading1: 'Contact Us',
  content1: 'Empowering performers through precision, technique, and artistry',
  rootClassName: '',
}

ContactBanner.propTypes = {
  heading1: PropTypes.string,
  content1: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default ContactBanner
