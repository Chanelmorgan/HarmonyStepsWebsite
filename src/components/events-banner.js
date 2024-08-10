import React from 'react'

import PropTypes from 'prop-types'

import './events-banner.css'

const EventsBanner = (props) => {
  return (
    <div
      className={`events-banner-container thq-section-padding ${props.rootClassName} `}
    >
      <div className="events-banner-max-width thq-section-max-width">
        <div className="events-banner-container1">
          <h2 className="events-banner-title thq-heading-2">
            {props.heading1}
          </h2>
          <h3 className="events-banner-text thq-heading-3">{props.content1}</h3>
        </div>
      </div>
    </div>
  )
}

EventsBanner.defaultProps = {
  content1: 'Empowering performers through precision, technique, and artistry',
  heading1: 'Events',
  rootClassName: '',
}

EventsBanner.propTypes = {
  content1: PropTypes.string,
  heading1: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default EventsBanner
