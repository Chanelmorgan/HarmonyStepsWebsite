import React from 'react'

import PropTypes from 'prop-types'

import './gallery3.css'

const Gallery3 = (props) => {
  return (
    <div className="gallery3-gallery3 thq-section-padding">
      <div className="gallery3-max-width thq-section-max-width">
        <div className="gallery3-section-title">
          <h2 className="gallery3-text thq-heading-2">{props.heading1}</h2>
          <span className="gallery3-text1 thq-body-large">
            {props.content1}
          </span>
        </div>
        <div className="gallery3-container thq-grid-4">
          <div className="gallery3-container1">
            <img
              alt={props.image1Alt}
              src={props.image1Src}
              className="gallery3-image1 thq-img-ratio-16-9"
            />
          </div>
          <div className="gallery3-container2">
            <img
              alt={props.image2Alt}
              src={props.image2Src}
              className="gallery3-image2 thq-img-ratio-16-9"
            />
          </div>
          <div className="gallery3-container3">
            <img
              alt={props.image3Alt}
              src={props.image3Src}
              className="gallery3-image3 thq-img-ratio-16-9"
            />
          </div>
          <div className="gallery3-container4">
            <img
              alt={props.image4Alt}
              src={props.image4Src}
              className="gallery3-image4 thq-img-ratio-16-9"
            />
          </div>
          <div className="gallery3-container5">
            <img
              alt={props.image5Alt}
              src={props.image5Src}
              className="gallery3-image5 thq-img-ratio-16-9"
            />
          </div>
          <div className="gallery3-container6">
            <img
              alt={props.image6Alt}
              src={props.image6Src}
              className="gallery3-image6 thq-img-ratio-16-9"
            />
          </div>
          <div className="gallery3-container7">
            <img
              alt={props.image7Alt}
              src={props.image7Src}
              className="gallery3-image7 thq-img-ratio-16-9"
            />
          </div>
          <div className="gallery3-container8">
            <img
              alt={props.image8Alt}
              src={props.image8Src}
              className="gallery3-image8 thq-img-ratio-16-9"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

Gallery3.defaultProps = {
  content1:
    'Experience the energy and excitement of our cheerleading dance classes where precision meets passion.',
  image5Src:
    'https://images.unsplash.com/photo-1481622079620-d781a5a0c11c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcxODc4NTM0Mnw&ixlib=rb-4.0.3&q=80&w=1080',
  heading1: 'Cheerleading Dance Class',
  image4Alt: 'Precision and Technique Training',
  image1Src:
    'https://images.unsplash.com/photo-1551124190-343f48f285fa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcxODc4NTM0Mnw&ixlib=rb-4.0.3&q=80&w=1080',
  image3Src:
    'https://images.unsplash.com/photo-1660145137136-d99a821a49d4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcxODc4NTM0Mnw&ixlib=rb-4.0.3&q=80&w=1080',
  image7Alt: 'Personalized Coaching Sessions',
  image8Alt: 'Harmony Steps Dance Events',
  image7Src:
    'https://images.unsplash.com/photo-1589666564459-93cdd3ab856a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcxODc4NTM0Mnw&ixlib=rb-4.0.3&q=80&w=1080',
  image4Src:
    'https://images.unsplash.com/photo-1571215682742-561893604b40?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcxODc4NTM0M3w&ixlib=rb-4.0.3&q=80&w=1080',
  image8Src:
    'https://images.unsplash.com/photo-1601023341476-eff5494dd241?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcxODc4NTM0M3w&ixlib=rb-4.0.3&q=80&w=1080',
  image2Alt: 'Performance Showcase',
  image6Src:
    'https://images.unsplash.com/photo-1650858319730-dc018f050aa3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcxODc4NTM0M3w&ixlib=rb-4.0.3&q=80&w=1080',
  image2Src:
    'https://images.unsplash.com/photo-1443916568596-df5a58c445e9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcxODc4NTM0M3w&ixlib=rb-4.0.3&q=80&w=1080',
  image6Alt: 'Empowering Performers',
  image5Alt: 'Artistry in Motion',
  image1Alt: 'Cheerleading Dance Class',
  image3Alt: 'Dance Competition Winners',
}

Gallery3.propTypes = {
  content1: PropTypes.string,
  image5Src: PropTypes.string,
  heading1: PropTypes.string,
  image4Alt: PropTypes.string,
  image1Src: PropTypes.string,
  image3Src: PropTypes.string,
  image7Alt: PropTypes.string,
  image8Alt: PropTypes.string,
  image7Src: PropTypes.string,
  image4Src: PropTypes.string,
  image8Src: PropTypes.string,
  image2Alt: PropTypes.string,
  image6Src: PropTypes.string,
  image2Src: PropTypes.string,
  image6Alt: PropTypes.string,
  image5Alt: PropTypes.string,
  image1Alt: PropTypes.string,
  image3Alt: PropTypes.string,
}

export default Gallery3
