import React from 'react'

import PropTypes from 'prop-types'

import './gallery1.css'

const Gallery1 = (props) => {
  return (
    <div className="gallery1-gallery3 thq-section-padding">
      <div className="gallery1-max-width">
        <div className="gallery1-section-title"></div>
        <div className="gallery1-container">
          <div className="gallery1-content">
            <div className="gallery1-container1">
              <img
                alt={props.image1Alt}
                src={props.image1Src}
                className="gallery1-image1 thq-img-ratio-1-1"
              />
              <img
                alt={props.image2Alt}
                src={props.image2Src}
                className="gallery1-image2 thq-img-ratio-1-1"
              />
            </div>
            <div className="gallery1-container2">
              <img
                alt={props.image3Alt}
                src={props.image3Src}
                className="gallery1-image3 thq-img-ratio-4-3"
              />
              <img
                alt={props.image4Alt}
                src={props.image4Src}
                className="gallery1-image4 thq-img-ratio-1-1"
              />
            </div>
            <div className="gallery1-container3">
              <img
                alt={props.image6Alt}
                src={props.image6Src}
                className="gallery1-image6 thq-img-ratio-1-1"
              />
              <img
                alt={props.image7Alt}
                src={props.image7Src}
                className="gallery1-image7 thq-img-ratio-1-1"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

Gallery1.defaultProps = {
  image1Src: '/43b0757c-704c-4ded-aa8f-39521eb5e168-1500w.jpg',
  image2Src: '/31cb33ed-0712-40b2-a01b-aea3ee7b091c-1500w.jpg',
  image4Alt: 'Cheerleading jumps and leaps',
  image7Src: '/62cbcb29-c9d9-4f2c-8ceb-a783e5c0eec1-1500w.jpg',
  image2Alt: 'Cheerleading stunts',
  image3Src: '/94c0da94-ddfd-4541-a536-297dd9c35c25-1500w.jpg',
  image7Alt: 'Cheerleading spirit and energy',
  image1Alt: 'Cheerleading dance performance',
  image6Alt: 'Cheerleading team formations',
  image4Src: '/34f243ad-df9d-4bf1-a485-f33a5e09273b-1500w.jpg',
  image3Alt: 'Cheerleading group routine',
  image6Src: '/468a92ef-3fe8-4bd0-90fa-60332fd5cca4-1500w.jpg',
}

Gallery1.propTypes = {
  image1Src: PropTypes.string,
  image2Src: PropTypes.string,
  image4Alt: PropTypes.string,
  image7Src: PropTypes.string,
  image2Alt: PropTypes.string,
  image3Src: PropTypes.string,
  image7Alt: PropTypes.string,
  image1Alt: PropTypes.string,
  image6Alt: PropTypes.string,
  image4Src: PropTypes.string,
  image3Alt: PropTypes.string,
  image6Src: PropTypes.string,
}

export default Gallery1
