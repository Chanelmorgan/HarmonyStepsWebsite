import React from 'react'

import PropTypes from 'prop-types'

import './feature-card.css'

const FeatureCard = (props) => {
  return (
    <div className="featuresCard feature-card-feature-card">
      <div className="feature-card-container">
        <h3 className="feature-card-text">{props.heading}</h3>
        <span>{props.subHeading}</span>
      </div>
    </div>
  )
}

FeatureCard.defaultProps = {
  subHeading:
    'We believe in the power of working together. Our programs emphasise the importance of collaboration, unity, and mutual support.\n',
  heading: 'Teamwork and Collaboration',
}

FeatureCard.propTypes = {
  subHeading: PropTypes.string,
  heading: PropTypes.string,
}

export default FeatureCard
