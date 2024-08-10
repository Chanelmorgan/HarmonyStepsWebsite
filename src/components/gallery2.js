import React from 'react'

import PropTypes from 'prop-types'

import './gallery2.css'

const Gallery2 = (props) => {
  return (
    <div className="gallery2-gallery3 thq-section-padding">
      <div className="gallery2-max-width">
        <div className="gallery2-section-title"></div>
        <div className="gallery2-container">
          <div className="gallery2-content">
            <div className="gallery2-container1">
              <img
                alt={props.image1Alt}
                src={props.image1Src}
                className="gallery2-image1 thq-img-ratio-1-1"
              />
            </div>
            <div className="gallery2-container2">
              <img
                alt={props.image4Alt}
                src={props.image4Src}
                className="gallery2-image4 thq-img-ratio-1-1"
              />
            </div>
            <div className="gallery2-container3">
              <img
                alt={props.image6Alt}
                src={props.image6Src}
                className="gallery2-image6 thq-img-ratio-1-1"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

Gallery2.defaultProps = {
  image1Alt: 'Cheerleading Dance Competition',
  image4Src: '/bbf0d3f2-1743-49ed-8b29-8b6bc8b8635a-1500w.jpg',
  image1Src: '/a769b26a-7a03-40bf-b1ee-fb85ca82c717-1500w.jpg',
  image4Alt: 'Cheerleading Choreography Workshop',
  image6Alt: 'Cheerleading Dance Recital',
  image6Src: '/0a498656-76ad-4e6b-862f-d5533d04a9f3-1500w.jpg',
}

Gallery2.propTypes = {
  image1Alt: PropTypes.string,
  image4Src: PropTypes.string,
  image1Src: PropTypes.string,
  image4Alt: PropTypes.string,
  image6Alt: PropTypes.string,
  image6Src: PropTypes.string,
}

export default Gallery2
