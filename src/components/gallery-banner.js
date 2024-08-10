import React from 'react'

import PropTypes from 'prop-types'

import './gallery-banner.css'

const GalleryBanner = (props) => {
  return (
    <div
      className={`gallery-banner-container thq-section-padding ${props.rootClassName} `}
    >
      <div className="gallery-banner-max-width thq-section-max-width">
        <div className="gallery-banner-container1">
          <h2 className="gallery-banner-title thq-heading-2">
            {props.heading1}
          </h2>
          <h3 className="gallery-banner-text thq-heading-3">
            {props.content1}
          </h3>
        </div>
      </div>
    </div>
  )
}

GalleryBanner.defaultProps = {
  heading1: 'Gallery',
  content1: "Unleash your child's inner star!",
  rootClassName: '',
}

GalleryBanner.propTypes = {
  heading1: PropTypes.string,
  content1: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default GalleryBanner
