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
            className="thq-img-ratio-16-9 features17-placeholder-image"
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
                      At Harmony Steps, we believe in the 
                      power of teamwork. Our
                      program fosters collaboration and support among all
                      participants to create stunning performances.
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
  feature1ImageAlt: 'Teamwork Image',
  feature1ImageSrc:
    'https://images.unsplash.com/photo-1673890704085-8eba15da593a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMzE0NjM4Mnw&ixlib=rb-4.0.3&q=80&w=1400',
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
