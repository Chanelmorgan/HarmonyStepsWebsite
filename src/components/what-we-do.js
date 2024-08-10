import React from 'react'

import PropTypes from 'prop-types'

import './what-we-do.css'

const WhatWeDo = (props) => {
  return (
    <div className="what-we-do-layout251 thq-section-padding">
      <div className="what-we-do-max-width thq-section-max-width">
        <div className="thq-flex-row what-we-do-section-title">
          <div className="what-we-do-column thq-flex-column">
            <h2 className="what-we-do-text thq-heading-2">
              {props.sectionTitle}
            </h2>
          </div>
        </div>
        <div className="what-we-do-content">
          <div className="what-we-do-row thq-flex-row">
            <div className="what-we-do-feature1 thq-flex-column">
              <img
                alt={props.feature1ImageAlt}
                src={props.feature1ImageSrc}
                className="thq-img-ratio-4-3 what-we-do-feature1-image"
              />
              <div className="what-we-do-content1 thq-flex-column">
                <h3 className="what-we-do-feature1-title thq-heading-3">
                  {props.feature1Title}
                </h3>
              </div>
            </div>
            <div className="what-we-do-feature2 thq-flex-column">
              <img
                alt={props.feature2ImageAlt}
                src={props.feature2ImageSrc}
                className="thq-img-ratio-4-3 what-we-do-feature2-image"
              />
              <div className="what-we-do-content2 thq-flex-column">
                <h3 className="what-we-do-feature2-title thq-heading-3">
                  {props.feature2Title}
                </h3>
              </div>
            </div>
            <div className="what-we-do-feature3 thq-flex-column">
              <img
                alt={props.feature3ImageAlt}
                src={props.feature3ImageSrc}
                className="thq-img-ratio-4-3 what-we-do-feature3-image"
              />
              <div className="what-we-do-content3 thq-flex-column">
                <h3 className="what-we-do-feature3-title thq-heading-3">
                  {props.feature3Title}
                </h3>
              </div>
            </div>
          </div>
        </div>
        <div className="what-we-do-actions">
          <button className="what-we-do-button thq-button-filled">
            <span className="thq-body-small">{props.mainAction}</span>
          </button>
          <button className="what-we-do-button1 thq-button-outline">
            <span className="what-we-do-action2 thq-body-small">
              {props.secondaryAction}
            </span>
          </button>
        </div>
      </div>
    </div>
  )
}

WhatWeDo.defaultProps = {
  feature1Title: 'Pom Cheerleading',
  feature2Title: 'Musical Theatre ',
  feature3Title: 'Private Classes',
  feature1ImageAlt: 'Professional Instructors Image',
  feature3ImageSrc:
    'https://images.unsplash.com/photo-1587455209815-18e240a76c52?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDEyfHxDaGVlcmxlYWRlcnxlbnwwfHx8fDE3MTg4Njk4MjJ8MA&ixlib=rb-4.0.3&h=300',
  feature2ImageAlt: 'Customized Coaching Image',
  feature2ImageSrc:
    'https://images.unsplash.com/photo-1639510836817-3261b19c69eb?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDl8fENoZWVybGVhZGVyfGVufDB8fHx8MTcxODg2OTgyMnww&ixlib=rb-4.0.3&h=300',
  feature1ImageSrc:
    'https://images.unsplash.com/photo-1638752097510-72f6368968b3?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDE1fHxDaGVlcmxlYWRlcnxlbnwwfHx8fDE3MTg4Njk4MjJ8MA&ixlib=rb-4.0.3&w=1400',
  feature3ImageAlt: 'Exciting Performances Image',
  secondaryAction: 'Contact Us for More Information',
  mainAction: 'Join a Class Today!',
  sectionTitle: 'What We Do',
}

WhatWeDo.propTypes = {
  feature1Title: PropTypes.string,
  feature2Title: PropTypes.string,
  feature3Title: PropTypes.string,
  feature1ImageAlt: PropTypes.string,
  feature3ImageSrc: PropTypes.string,
  feature2ImageAlt: PropTypes.string,
  feature2ImageSrc: PropTypes.string,
  feature1ImageSrc: PropTypes.string,
  feature3ImageAlt: PropTypes.string,
  secondaryAction: PropTypes.string,
  mainAction: PropTypes.string,
  sectionTitle: PropTypes.string,
}

export default WhatWeDo
