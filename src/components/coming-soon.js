import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './coming-soon.css'

const ComingSoon = (props) => {
  return (
    <div className={`coming-soon-container ${props.rootClassName} `}>
      <div className="coming-soon-header">
        <h2>
          {props.bannerTitle ?? (
            <Fragment>
              <h2 className="coming-soon-text thq-heading-2">
                COMING SOON......
              </h2>
            </Fragment>
          )}
        </h2>
      </div>
      <button
        type="button"
        aria-label="Close"
        className="coming-soon-close-button"
      >
        <svg viewBox="0 0 804.5714285714286 1024" className="coming-soon-icon">
          <path d="M741.714 755.429c0 14.286-5.714 28.571-16 38.857l-77.714 77.714c-10.286 10.286-24.571 16-38.857 16s-28.571-5.714-38.857-16l-168-168-168 168c-10.286 10.286-24.571 16-38.857 16s-28.571-5.714-38.857-16l-77.714-77.714c-10.286-10.286-16-24.571-16-38.857s5.714-28.571 16-38.857l168-168-168-168c-10.286-10.286-16-24.571-16-38.857s5.714-28.571 16-38.857l77.714-77.714c10.286-10.286 24.571-16 38.857-16s28.571 5.714 38.857 16l168 168 168-168c10.286-10.286 24.571-16 38.857-16s28.571 5.714 38.857 16l77.714 77.714c10.286 10.286 16 24.571 16 38.857s-5.714 28.571-16 38.857l-168 168 168 168c10.286 10.286 16 24.571 16 38.857z"></path>
        </svg>
      </button>
    </div>
  )
}

ComingSoon.defaultProps = {
  rootClassName: '',
  bannerTitle: undefined,
}

ComingSoon.propTypes = {
  rootClassName: PropTypes.string,
  bannerTitle: PropTypes.element,
}

export default ComingSoon
