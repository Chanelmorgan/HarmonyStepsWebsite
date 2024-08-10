import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './question1.css'

const Question1 = (props) => {
  return (
    <div className="question1-container">
      <span className="question1-text">{props.question}</span>
      <span>
        {props.text ?? (
          <Fragment>
            <span className="question1-text2">
              <span>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non
                volutpat turpis. Mauris luctus rutrum mi ut rhoncus.
              </span>
            </span>
          </Fragment>
        )}
      </span>
    </div>
  )
}

Question1.defaultProps = {
  question: 'What types of cars do you sell?',
  text: undefined,
}

Question1.propTypes = {
  question: PropTypes.string,
  text: PropTypes.element,
}

export default Question1
