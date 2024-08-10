import React from 'react'

import PropTypes from 'prop-types'

import './feature-card3.css'

const FeatureCard3 = (props) => {
  return (
    <div
      className={`featuresCard feature-card3-feature-card ${props.rootClassName} `}
    >
      <div className="feature-card3-container">
        <h3 className="feature-card3-text">{props.heading}</h3>
        <span>{props.subHeading}</span>
      </div>
    </div>
  )
}

FeatureCard3.defaultProps = {
  subHeading:
    'Passion drives us. We encourage our participates to bring energy and enthusiasm to every practice and performance. \n',
  heading: 'Creativity and Innovation',
  rootClassName: '',
}

FeatureCard3.propTypes = {
  subHeading: PropTypes.string,
  heading: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default FeatureCard3
