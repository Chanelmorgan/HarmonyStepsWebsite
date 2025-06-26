import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './feature-card4.css'

const FeatureCard4 = (props) => {
  return (
    <div
      className={`featuresCard feature-card4-feature-card ${props.rootClassName} `}
    >
      <div className="feature-card4-container">
        <h3 className="feature-card4-text">{props.heading}</h3>
        <span>
          {props.text ?? (
            <Fragment>
              <span className="feature-card4-text2">
                <br></br>
                <br></br>
                <span>or skill level.</span>
                <span>
                  We celebrate diversity and strive to create an inclusive
                  envionment. Everyone is welcome, regardless of background 
                </span>
              </span>
            </Fragment>
          )}
        </span>
      </div>
    </div>
  )
}

FeatureCard4.defaultProps = {
  text: undefined,
  rootClassName: '',
  heading: 'Inclusivity and Diversity ',
}

FeatureCard4.propTypes = {
  text: PropTypes.element,
  rootClassName: PropTypes.string,
  heading: PropTypes.string,
}

export default FeatureCard4
