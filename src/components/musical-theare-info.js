import React from 'react'

import PropTypes from 'prop-types'

import './musical-theare-info.css'

const MusicalTheareInfo = (props) => {
  return (
    <div className="musical-theare-info-layout349 thq-section-padding">
      <div className="musical-theare-info-max-width thq-section-max-width">
        <div className="musical-theare-info-image-container">
          <img
            alt={props.feature1ImageAlt}
            src={props.feature1ImageSrc}
            className="thq-img-ratio-16-9"
          />
        </div>
        <div className="musical-theare-info-content">
          <div className="musical-theare-info-section-title">
            <div className="musical-theare-info-content1">
              <h2 className="musical-theare-info-text">
                {props.feature1Title}
              </h2>
              <p className="musical-theare-info-text1">
                {props.feature1Description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

MusicalTheareInfo.defaultProps = {
  feature1Description:
    'Learn musical numbers from popular broadway musicals from theatre professionals.  Join now and put on productions at Eastbourne theatres with  us. ',
  feature1ImageSrc:
    'https://images.unsplash.com/photo-1503095396549-807759245b35?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDF8fE11c2ljYWwlMjBUaGVhdHJlfGVufDB8fHx8MTcyMjk1ODY2Mnww&ixlib=rb-4.0.3&w=1400',
  feature1ImageAlt: 'Image of expert coaches',
  feature1Title: 'Musical Theatre ',
}

MusicalTheareInfo.propTypes = {
  feature1Description: PropTypes.string,
  feature1ImageSrc: PropTypes.string,
  feature1ImageAlt: PropTypes.string,
  feature1Title: PropTypes.string,
}

export default MusicalTheareInfo
