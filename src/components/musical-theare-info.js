import React from 'react';
import PropTypes from 'prop-types';
const MusicalTheareInfo = (props) => {
  return (
    <div className="musical-theare-info-layout349 thq-section-padding">
      <div className="musical-theare-info-max-width thq-section-max-width">
        <div className="musical-theare-info-image-container">
          {/* Image source from props, ensure the path starts from '/' */}
          <img
            alt={props.feature1ImageAlt}
            src={props.feature1ImageSrc} // /mt2-1400w.webp or any other valid path from public folder
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
  );
};

MusicalTheareInfo.defaultProps = {
  feature1Description:
    'Learn musical numbers from popular Broadway musicals from theatre professionals. Join now and put on productions at Eastbourne theatres with us.',
  feature1ImageSrc: '/mt2-1400w.webp', // Ensure correct path
  feature1ImageAlt: 'Image of expert coaches',
  feature1Title: 'Musical Theatre',
};

MusicalTheareInfo.propTypes = {
  feature1Description: PropTypes.string,
  feature1ImageSrc: PropTypes.string,
  feature1ImageAlt: PropTypes.string,
  feature1Title: PropTypes.string,
};

export default MusicalTheareInfo;