import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './map.css'

const Map = (props) => {
  return (
    <div
      className={`map-contact20 thq-section-padding ${props.rootClassName} `}
    >
      <div className="map-max-width thq-section-max-width">
        <div className="map-section-title">
          <div className="map-content">
            <h2>
              {props.heading1 ?? (
                <Fragment>
                  <h2 className="map-text2 thq-heading-2">Find Us</h2>
                </Fragment>
              )}
            </h2>
            <p>
              {props.content1 ?? (
                <Fragment>
                  <p className="map-text3 thq-body-large">
                    <span>
                      Feel free to reach out to us for any inquiries or to
                      register for classes.
                    </span>
                    <span>
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                  </p>
                </Fragment>
              )}
            </p>
          </div>
        </div>
        <iframe
          src={props.location1GoogleMap}
          title="Map"
          className="map-iframe thq-img-ratio-16-9"
        ></iframe>
      </div>
    </div>
  )
}

Map.defaultProps = {
  heading1: undefined,
  location1GoogleMap:
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d80724.5230954989!2d0.20591667562898577!3d50.78222177529354!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47df70ac77af480d%3A0xf767a9a392d8f605!2sEastbourne!5e0!3m2!1sen!2suk!4v1722960371809!5m2!1sen!2suk',
  rootClassName: '',
  content1: undefined,
}

Map.propTypes = {
  heading1: PropTypes.element,
  location1GoogleMap: PropTypes.string,
  rootClassName: PropTypes.string,
  content1: PropTypes.element,
}

export default Map
