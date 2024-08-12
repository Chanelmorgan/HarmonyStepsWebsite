import React from 'react'

import PropTypes from 'prop-types'

import './private-class-info.css'

const PrivateClassInfo = (props) => {
  return (
    <div className="private-class-info-layout349 thq-section-padding">
      <div className="private-class-info-max-width thq-section-max-width">
        <div className="private-class-info-content">
          <div className="private-class-info-section-title">
            <div className="private-class-info-content1">
              <h2 className="private-class-info-text">
                {props.feature1Title}
              </h2>
              <p className="private-class-info-text1 thq-body-large">
                {props.feature1Description}
              </p>
            </div>
          </div>
        </div>
        <div className="private-class-info-image-container">
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

PrivateClassInfo.defaultProps = {
  feature1Description:
    'Our experienced coaches provide personalised training to help dancers reach their full potential.',
  feature1ImageSrc:
    'https://images.unsplash.com/photo-1609838862173-7c3c5a121791?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDR8fGNoZWVybGVhZGluZ3xlbnwwfHx8fDE3MTg3ODMxNzZ8MA&ixlib=rb-4.0.3&w=1400',
  feature1ImageAlt: 'Professional Coaches Image',
  feature1Title: 'Private Classes',
}

PrivateClassInfo.propTypes = {
  feature1Description: PropTypes.string,
  feature1ImageSrc: PropTypes.string,
  feature1ImageAlt: PropTypes.string,
  feature1Title: PropTypes.string,
}

export default PrivateClassInfo
