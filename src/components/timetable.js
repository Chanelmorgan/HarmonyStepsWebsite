import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'

import PropTypes from 'prop-types'

import './timetable.css'

const Timetable = (props) => {
  return (
    <div
      className={`timetable-container thq-section-padding ${props.rootClassName} `}
    >
      <div className="timetable-max-width thq-section-max-width">
        <div className="timetable-container01">
          <h2 className="timetable-text classHeading">{props.title1}</h2>
          <span className="timetable-text01">
            {props.content1}
          </span>
        </div>
        <div className="timetable-timeline-container">
          <div className="timetable-step1">
            <div className="timetable-container02">
              <div className="timetable-container03"></div>
              <div className="timetable-progress0"></div>
            </div>
            <div className="timetable-container04">
              <h3 className="timetable-text02 thq-heading-3">{props.date1}</h3>
              <h3 className="timetable-text03 thq-heading-3">
                {props.card1Heading}
              </h3>
              <span>
                {props.text ?? (
                  <Fragment>
                    <span className="timetable-text11 thq-body-small">
                      <span>BN23 6TH</span>
                      
                      <span>KC Conqueror hall, Harold Drive, Eastbourne</span>
                      
                    </span>
                  </Fragment>
                )}
              </span>
              <div className="timetable-container05">
                <Link
                  to="/contact-page"
                  className="timetable-navlink thq-button-filled"
                >
                  {props.card1Action1}
                </Link>
              </div>
            </div>
          </div>
          <div className="timetable-step2">
            <div className="timetable-container06">
              <div className="timetable-container07"></div>
              <div className="timetable-progress01"></div>
            </div>
            <div className="timetable-container08">
              <h3 className="timetable-text05 thq-heading-3">{props.date2}</h3>
              <h3 className="timetable-text06 thq-heading-3">
                {props.card2Heading}
              </h3>
              <span>
                {props.text1 ?? (
                  <Fragment>
                    <span className="timetable-text16 thq-body-small">
                      <span>KC Conqueror hall, Harold Drive, Eastbourne</span>
                      <br></br>
                      <span>BN23 6TH</span>
                      <br></br>
                    </span>
                  </Fragment>
                )}
              </span>
              <div className="timetable-container09">
                <Link
                  to="/contact-page"
                  className="timetable-navlink"
                >
                  {props.card2Action1}
                </Link>
              </div>
            </div>
          </div>
          <div className="timetable-step3">
            <div className="timetable-container10">
              <div className="timetable-container11"></div>
              <div className="timetable-progress02"></div>
            </div>
            <div className="timetable-container12">
              <h3 className="timetable-text08 thq-heading-3">{props.date3}</h3>
              <h3 className="timetable-text09 thq-heading-3">
                {props.card3Heading}
              </h3>
              <span className="timetable-text10 thq-body-small">
                {props.card3Content}
              </span>
              <div className="timetable-container13">
                <Link
                  to="/contact-page"
                  className="timetable-navlink"
                >
                  {props.card3Action1}
                </Link>
              </div>
            </div>
          </div>
          <div className="timetable-step4">
            <div className="timetable-container14">
              <div className="timetable-container15"></div>
              <div className="timetable-progress03"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

Timetable.defaultProps = {
  card3Content: 'Multiple locations',
  date1: 'Pom Cheerleading',
  content1:
    'Our classes are conveniently scheduled, with flexible days and times for private sessions to accommodate busy lifestyles, ensuring everyone can find a perfect fit for their children’s training and development.',
  card3Heading: 'Available Upon Request',
  title1: 'Class Times',
  text: undefined,
  card1Heading: 'Sundays - 2:30-3:30pm',
  card2Action1: 'Register Now',
  rootClassName: '',
  date3: 'Private Classes',
  card3Action1: 'Register Now',
  card1Action1: 'Register Now',
  text1: undefined,
  card2Heading: 'Sundays - 3:30-5:30pm',
  date2: 'Musical Theatre ',
}

Timetable.propTypes = {
  card3Content: PropTypes.string,
  date1: PropTypes.string,
  content1: PropTypes.string,
  card3Heading: PropTypes.string,
  title1: PropTypes.string,
  text: PropTypes.element,
  card1Heading: PropTypes.string,
  card2Action1: PropTypes.string,
  rootClassName: PropTypes.string,
  date3: PropTypes.string,
  card3Action1: PropTypes.string,
  card1Action1: PropTypes.string,
  text1: PropTypes.element,
  card2Heading: PropTypes.string,
  date2: PropTypes.string,
}

export default Timetable
