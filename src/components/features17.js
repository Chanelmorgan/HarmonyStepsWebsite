import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './features17.css'

const Features17 = (props) => {
  return (
    <div
      className={`features17-layout349 thq-section-padding ${props.rootClassName} `}
    >
      <div className="features17-max-width thq-section-max-width">
        <div className="features17-image-container">
          <img
            alt={props.feature1ImageAlt}
            src={props.feature1ImageSrc}
            className="features17-placeholder-image"
          />
        </div>
        <div className="features17-content">
          <div className="features17-section-title">
            <h2>
              {props.feature1Title ?? (
                <Fragment>
                  <h2 className="features17-text2 thq-heading-2">
                    Meet The Coach
                  </h2>
                </Fragment>
              )}
            </h2>
            <div className="features17-content1">
              <p>
                {props.feature1Description ?? (
                  <Fragment>
                    <p className="features17-text3">
                    Hi there! I’m Coach Jamie, and I’m excited to be here with you. At 22,
                     I’ve had the chance to dive into my passions for cheerleading, dancing, and musical theater. My journey began with cheerleading,
                     where I learned the importance of teamwork and high-energy routines. 
                     This passion naturally led me to dancing, where I could express myself through movement and rhythm.

Musical theater also holds a special place in my heart. Performing on stage has taught me so much about blending vocal skills with dramatic flair. I’m thrilled to bring all these experiences into coaching, and I’m here to help you explore your own talents and reach new heights.
                    </p>
                  </Fragment>
                )}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

Features17.defaultProps = {
  rootClassName: '',
  feature1Title: undefined,
  feature1ImageAlt: 'ME Image',
  feature1ImageSrc:
    'about-me.jpeg',
  feature1Description: undefined,
}

Features17.propTypes = {
  rootClassName: PropTypes.string,
  feature1Title: PropTypes.element,
  feature1ImageAlt: PropTypes.string,
  feature1ImageSrc: PropTypes.string,
  feature1Description: PropTypes.element,
}

export default Features17
