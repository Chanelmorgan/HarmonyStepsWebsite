import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './events-feature.css'

const EventsFeature = (props) => {
  return (
    <div
      className={`events-feature-layout300 thq-section-padding ${props.rootClassName} `}
    >
      <div className="events-feature-max-width thq-flex-column thq-section-max-width">
        <div className="events-feature-section-title thq-flex-column">
          <span>
            {props.slogan ?? (
              <Fragment>
                <span className="events-feature-text11 thq-body-small">
                  Slogan
                </span>
              </Fragment>
            )}
          </span>
          <h2>
            {props.sectionTitle ?? (
              <Fragment>
                <h2 className="events-feature-text09 thq-heading-2">
                  Key Features
                </h2>
              </Fragment>
            )}
          </h2>
          <p>
            {props.sectionDescription ?? (
              <Fragment>
                <p className="events-feature-text08 thq-body-large">
                  Discover the key features that set Harmony Steps apart from
                  other performing arts schools.
                </p>
              </Fragment>
            )}
          </p>
        </div>
        <div className="events-feature-content thq-grid-auto-300">
          <div className="events-feature-feature1 thq-flex-column">
            <img
              alt={props.feature1ImageAlt}
              src={props.feature1ImageSrc}
              className="thq-img-ratio-4-3"
            />
            <h3>
              {props.feature1Title ?? (
                <Fragment>
                  <h3 className="events-feature-text13 thq-heading-3">
                    Musical Theatre Classes
                  </h3>
                </Fragment>
              )}
            </h3>
            <span>
              {props.feature1Description ?? (
                <Fragment>
                  <span className="events-feature-text03 thq-body-small">
                    Engage in dynamic musical theatre classes that blend acting,
                    singing, and dancing to enhance your performance skills.
                  </span>
                </Fragment>
              )}
            </span>
          </div>
          <div className="events-feature-feature2 thq-flex-column">
            <img
              alt={props.feature2ImageAlt}
              src={props.feature2ImageSrc}
              className="thq-img-ratio-4-3"
            />
            <h3>
              {props.feature2Title ?? (
                <Fragment>
                  <h3 className="events-feature-text07 thq-heading-3">
                    Pom Cheerleading Program
                  </h3>
                </Fragment>
              )}
            </h3>
            <span>
              {props.feature2Description ?? (
                <Fragment>
                  <span className="events-feature-text12 thq-body-small">
                    Join our pom cheerleading program to learn high-energy
                    routines and develop teamwork and precision in your
                    movements.
                  </span>
                </Fragment>
              )}
            </span>
          </div>
          <div className="events-feature-feature3 thq-flex-column">
            <img
              alt={props.feature3ImageAlt}
              src={props.feature3ImageSrc}
              className="thq-img-ratio-4-3"
            />
            <h3>
              {props.feature3Title ?? (
                <Fragment>
                  <h3 className="events-feature-text06 thq-heading-3">
                    Private Coaching Sessions
                  </h3>
                </Fragment>
              )}
            </h3>
            <span>
              {props.feature3Description ?? (
                <Fragment>
                  <span className="events-feature-text04 thq-body-small">
                    Benefit from personalized private coaching sessions tailored
                    to your specific needs and goals to excel in your
                    performance journey.
                  </span>
                </Fragment>
              )}
            </span>
          </div>
        </div>
        <div className="events-feature-actions thq-flex-row">
          <button className="events-feature-button thq-button-filled">
            <span>
              {props.mainAction ?? (
                <Fragment>
                  <span className="events-feature-text10 thq-body-small">
                    Main action
                  </span>
                </Fragment>
              )}
            </span>
          </button>
          <button className="events-feature-button1 thq-button-outline">
            <span>
              {props.secondaryAction ?? (
                <Fragment>
                  <span className="events-feature-text05 thq-body-small">
                    Secondary action
                  </span>
                </Fragment>
              )}
            </span>
          </button>
        </div>
      </div>
    </div>
  )
}

EventsFeature.defaultProps = {
  feature3ImageAlt: 'Private Coaching Sessions Image',
  feature1Description: undefined,
  feature3Description: undefined,
  secondaryAction: undefined,
  rootClassName: '',
  feature3Title: undefined,
  feature3ImageSrc:
    'https://images.unsplash.com/photo-1648709725889-162aed17cf73?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMzA0NzM3M3w&ixlib=rb-4.0.3&q=80&w=1080',
  feature2Title: undefined,
  sectionDescription: undefined,
  feature2ImageSrc:
    'https://images.unsplash.com/photo-1658303076387-ad119d49e097?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMzA0NzM3M3w&ixlib=rb-4.0.3&q=80&w=1080',
  feature1ImageAlt: 'Musical Theatre Classes Image',
  sectionTitle: undefined,
  feature2ImageAlt: 'Pom Cheerleading Program Image',
  mainAction: undefined,
  slogan: undefined,
  feature2Description: undefined,
  feature1ImageSrc:
    'https://images.unsplash.com/photo-1499364615650-ec38552f4f34?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMzA0NzM3M3w&ixlib=rb-4.0.3&q=80&w=1080',
  feature1Title: undefined,
}

EventsFeature.propTypes = {
  feature3ImageAlt: PropTypes.string,
  feature1Description: PropTypes.element,
  feature3Description: PropTypes.element,
  secondaryAction: PropTypes.element,
  rootClassName: PropTypes.string,
  feature3Title: PropTypes.element,
  feature3ImageSrc: PropTypes.string,
  feature2Title: PropTypes.element,
  sectionDescription: PropTypes.element,
  feature2ImageSrc: PropTypes.string,
  feature1ImageAlt: PropTypes.string,
  sectionTitle: PropTypes.element,
  feature2ImageAlt: PropTypes.string,
  mainAction: PropTypes.element,
  slogan: PropTypes.element,
  feature2Description: PropTypes.element,
  feature1ImageSrc: PropTypes.string,
  feature1Title: PropTypes.element,
}

export default EventsFeature
