import React from 'react'

import PropTypes from 'prop-types'

import './pom-info.css'

const PomInfo = (props) => {
  return (
    <div
      className={`pom-info-layout349 thq-section-padding ${props.rootClassName} `}
    >
      <div className="pom-info-max-width thq-section-max-width">
        <div className="pom-info-content">
          <div className="pom-info-section-title">
            <div className="pom-info-content1">
              <h2 className="pom-info-text thq-heading-2">
                {props.feature1Title}
              </h2>
              <p className="pom-info-text1 thq-body-large">
                {props.feature1Description}
              </p>
            </div>
          </div>
        </div>
        <div className="pom-info-image-container">
          <img
            alt={props.feature1ImageAlt}
            src={props.feature1ImageSrc}
            className="thq-img-ratio-16-9"
          />
        </div>
      </div>
    </div>
  )
}

PomInfo.defaultProps = {
  feature1ImageAlt: 'Athleticism',
  feature1ImageSrc:
    'https://images.unsplash.com/photo-1587455209815-18e240a76c52?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDk3fHxDaGVlcmxlYWRlcnxlbnwwfHx8fDE3MjI5NTg0OTV8MA&ixlib=rb-4.0.3&w=1400',
  feature1Description:
    'Our classes focus on building strength, flexibility, tumbling, and stunting to help dancers perform at their best.',
  feature1Title: 'Pom Cheerleading',
  rootClassName: '',
}

PomInfo.propTypes = {
  feature1ImageAlt: PropTypes.string,
  feature1ImageSrc: PropTypes.string,
  feature1Description: PropTypes.string,
  feature1Title: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default PomInfo
