import React from 'react'

import PropTypes from 'prop-types'

const FeatureCard2 = (props) => {
  return (
    <div
      className={`featuresCard feature-card2-feature-card ${props.rootClassName} `}
    >
      <div className="feature-card2-container">
        <h3 className="feature-card2-text">{props.heading}</h3>
        <span>{props.subHeading}</span>
      </div>
    </div>
  )
}

FeatureCard2.defaultProps = {
  subHeading:
    'Passion drives us. We encourage our participates to bring energy and enthusiasm to every practice and performance. \n',
  heading: 'Passion and Enthusiasm',
  rootClassName: '',
}

FeatureCard2.propTypes = {
  subHeading: PropTypes.string,
  heading: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default FeatureCard2
