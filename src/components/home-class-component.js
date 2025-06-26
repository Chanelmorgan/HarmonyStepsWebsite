import React from 'react'

import PropTypes from 'prop-types'

import './home-class-component.css'

const HomeClassComponent = (props) => {
  return (
    <div
      className={`home-class-component-container thq-section-padding ${props.rootClassName} `}
    >
      <div className="home-class-component-max-width thq-section-max-width">
        <div className="home-class-component-container1">
          <div className="home-class-component-container2 thq-card">
            <img
              alt={props.step1ImageAlt}
              src={props.step1ImageSrc}
              className="home-class-component-image thq-img-ratio-1-1"
            />
            <h2 className="home-class-component-text thq-heading-2">
              {props.step1Title}
            </h2>
            <span className="home-class-component-text1 thq-body-small">
              {props.step1Description}
            </span>
            <label className="home-class-component-text2 thq-heading-3">
              01
            </label>
          </div>
        </div>
        <div className="home-class-component-container3 thq-card">
          <img
            alt={props.step2Alt}
            src={props.step2ImageSrc}
            className="home-class-component-image1 thq-img-ratio-1-1"
          />
          <h2 className="home-class-component-text3 thq-heading-2">
            {props.step2Title}
          </h2>
          <span className="home-class-component-text4 thq-body-small">
            {props.step2Description}
          </span>
          <label className="home-class-component-text5 thq-heading-3">02</label>
        </div>
        <div className="home-class-component-container4">
          <div className="home-class-component-container5 thq-card">
            <img
              alt={props.step4ImageAlt}
              src={props.step4ImageSrc}
              className="home-class-component-image2 thq-img-ratio-1-1"
            />
            <h2 className="home-class-component-text6 thq-heading-2">
              {props.step4Title}
            </h2>
            <span className="home-class-component-text7 thq-body-small">
              {props.step4Description}
            </span>
            <label className="home-class-component-text8 thq-heading-3">
              03
            </label>
          </div>
        </div>
      </div>
    </div>
  )
}

HomeClassComponent.defaultProps = {
  step4Title: 'Private Classes',
  step1Description:
    'Pom cheerleading combines vibrant dance routines with precise pom-pom movements to create high-energy, visually stunning performances.',
  step2Title: 'Musical Theatre',
  step2ImageSrc:
    'https://images.unsplash.com/photo-1608371945786-d47d3cdd31da?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcxODg3MDAwMXw&ixlib=rb-4.0.3&q=80&w=1080',
  step4ImageSrc:
    'https://images.unsplash.com/photo-1522952578391-59f9d9bb1ae2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcxODg3MDAwMnw&ixlib=rb-4.0.3&q=80&w=1080',
  step4Description:
    'Private classes offer personalised coaching tailored to individual needs, helping participants achieve their highest potential.',
  step1ImageAlt: "Image of beginner's class",
  step2Alt: 'Image of intermediate class',
  rootClassName: '',
  step2Description:
    'Musical theatre blends captivating storytelling with dynamic singing, dancing and acting to bring unforgettable performances to life on stage.',
  step1Title: 'Pom Cheerleading',
  step4ImageAlt: 'Image of private coaching sessions',
  step1ImageSrc:
    'https://images.unsplash.com/photo-1579532582940-957ceba4f373?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcxODg3MDAwMnw&ixlib=rb-4.0.3&q=80&w=1080',
}

HomeClassComponent.propTypes = {
  step4Title: PropTypes.string,
  step1Description: PropTypes.string,
  step2Title: PropTypes.string,
  step2ImageSrc: PropTypes.string,
  step4ImageSrc: PropTypes.string,
  step4Description: PropTypes.string,
  step1ImageAlt: PropTypes.string,
  step2Alt: PropTypes.string,
  rootClassName: PropTypes.string,
  step2Description: PropTypes.string,
  step1Title: PropTypes.string,
  step4ImageAlt: PropTypes.string,
  step1ImageSrc: PropTypes.string,
}

export default HomeClassComponent
