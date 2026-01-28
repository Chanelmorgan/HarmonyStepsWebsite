import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import './features17.css'

const Features17 = (props) => {
  return (
    <div className={`features17-layout349 thq-section-padding ${props.rootClassName}`}>
      {/* ===== FEATURE 1 ===== */}
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
                <h2 className="features17-text2 thq-heading-2">Meet The Coach</h2>
              )}
            </h2>
            <div className="features17-content1">
              <p>
                {props.feature1Description ?? (
                  <p className="features17-text3">
                    Hi there! I’m Coach Jamie, and I’m excited to be here with you...
                  </p>
                )}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ===== FEATURE 2 ===== */}
      <div className="features17-max-width thq-section-max-width">
        <div className="features17-content">
          <div className="features17-section-title">
            <h2>
              {props.feature2Title ?? (
                <h2 className="about-page-text thq-heading-2">Dance Teacher – Olivia</h2>
              )}
            </h2>
            <div className="features17-content1">
              <p>
                {props.feature2Description ?? (
                  <p className="about-page-text1 thq-body-large">
                    Olivia has been dancing since she was 5 and is currently studying...
                  </p>
                )}
              </p>
            </div>
          </div>
        </div>
        <div className="features17-image-container">
          <img
            alt={props.feature2ImageAlt}
            src={props.feature2ImageSrc}
            className="features17-placeholder-image"
          />
        </div>
      </div>

      {/* ===== FEATURE 3 (NEW) ===== */}
      <div className="features17-max-width thq-section-max-width">
        <div className="features17-image-container">
          <img
            alt={props.feature3ImageAlt}
            src={props.feature3ImageSrc}
            className="features17-placeholder-image"
          />
        </div>
        <div className="features17-content">
          <div className="features17-section-title">
            <h2>
              {props.feature3Title ?? (
                <h2 className="features17-text2 thq-heading-2">Amber – Assistant Coach</h2>
              )}
            </h2>
            <div className="features17-content1">
              <p>
                {props.feature3Description ?? (
                  <p className="features17-text3">
                    Amber brings energy, creativity, and a strong background in performance to the team.
                  </p>
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
  feature1ImageSrc: 'about-me.jpeg',
  feature1Description: undefined,

  feature2Title: undefined,
  feature2ImageAlt: 'Coach Image',
  feature2ImageSrc: 'coach-alex.jpeg',
  feature2Description: undefined,

  feature3Title: undefined,
  feature3ImageAlt: 'Amber',
  feature3ImageSrc: 'amber.jpg',
  feature3Description: undefined,
}

Features17.propTypes = {
  rootClassName: PropTypes.string,

  feature1Title: PropTypes.element,
  feature1ImageAlt: PropTypes.string,
  feature1ImageSrc: PropTypes.string,
  feature1Description: PropTypes.element,

  feature2Title: PropTypes.element,
  feature2ImageAlt: PropTypes.string,
  feature2ImageSrc: PropTypes.string,
  feature2Description: PropTypes.element,

  feature3Title: PropTypes.element,
  feature3ImageAlt: PropTypes.string,
  feature3ImageSrc: PropTypes.string,
  feature3Description: PropTypes.element,
}

export default Features17