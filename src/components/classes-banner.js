import React from 'react'

import PropTypes from 'prop-types'

import './classes-banner.css'

const ClassesBanner = (props) => {
  return (
    <div
      className={`classes-banner-container thq-section-padding ${props.rootClassName} `}
    >
      <div className="classes-banner-max-width thq-section-max-width">
        <div className="classes-banner-container1">
          <h2 className="classes-banner-title thq-heading-2">
            {props.heading1}
          </h2>
          <h3 className="classes-banner-text thq-heading-3">
            {props.content1}
          </h3>
        </div>
      </div>
    </div>
  )
}

ClassesBanner.defaultProps = {
  rootClassName: '',
  heading1: 'Classes',
  content1: 'Empowering performers through precision, technique, and artistry',
}

ClassesBanner.propTypes = {
  rootClassName: PropTypes.string,
  heading1: PropTypes.string,
  content1: PropTypes.string,
}

export default ClassesBanner
