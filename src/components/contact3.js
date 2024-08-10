import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './contact3.css'

const Contact3 = (props) => {
  return (
    <div
      className={`contact3-contact20 thq-section-padding ${props.rootClassName} `}
    >
      <div className="contact3-max-width thq-section-max-width">
        <div className="contact3-section-title">
          <span>
            {props.content2 ?? (
              <Fragment>
                <span className="contact3-text11 thq-body-small">
                  Get in touch with us today!
                </span>
              </Fragment>
            )}
          </span>
          <div className="contact3-content">
            <h2>
              {props.heading1 ?? (
                <Fragment>
                  <h2 className="contact3-text12 thq-heading-2">Contact Us</h2>
                </Fragment>
              )}
            </h2>
          </div>
        </div>
        <div className="contact3-row">
          <div className="contact3-content1">
            <svg
              viewBox="0 0 1024 1024"
              className="thq-icon-medium contact3-icon"
            >
              <path d="M854 342v-86l-342 214-342-214v86l342 212zM854 170q34 0 59 26t25 60v512q0 34-25 60t-59 26h-684q-34 0-59-26t-25-60v-512q0-34 25-60t59-26h684z"></path>
            </svg>
            <div className="contact3-contact-info">
              <div className="contact3-content2">
                <h3 className="contact3-text02 thq-heading-3">Email</h3>
                <p>
                  {props.content3 ?? (
                    <Fragment>
                      <p className="contact3-text10 thq-body-large">
                        Contact us for more information.
                      </p>
                    </Fragment>
                  )}
                </p>
              </div>
              <span>
                {props.email1 ?? (
                  <Fragment>
                    <a
                      href="mailto:harmonystepsdance@gmail.com?subject="
                      className="contact3-link2 thq-body-small"
                    >
                      harmonystepsdance@gmail.com
                    </a>
                  </Fragment>
                )}
              </span>
            </div>
          </div>
          <div className="contact3-content3">
            <svg
              viewBox="0 0 1024 1024"
              className="thq-icon-medium contact3-icon2"
            >
              <path d="M282 460q96 186 282 282l94-94q20-20 44-10 72 24 152 24 18 0 30 12t12 30v150q0 18-12 30t-30 12q-300 0-513-213t-213-513q0-18 12-30t30-12h150q18 0 30 12t12 30q0 80 24 152 8 26-10 44z"></path>
            </svg>
            <div className="contact3-contact-info1">
              <div className="contact3-content4">
                <h3 className="contact3-text04 thq-heading-3">Phone</h3>
                <p>
                  {props.content4 ?? (
                    <Fragment>
                      <p className="contact3-text14 thq-body-large">
                        Join our community and stay connected with fellow
                        dancers!
                      </p>
                    </Fragment>
                  )}
                </p>
              </div>
              <span>
                {props.phone1 ?? (
                  <Fragment>
                    <a
                      href="tel:+447596257102"
                      className="contact3-link1 thq-body-small"
                    >
                      +44  7596 257 102
                    </a>
                  </Fragment>
                )}
              </span>
            </div>
          </div>
          <div className="contact3-content5">
            <svg
              viewBox="0 0 602.2582857142856 1024"
              className="contact3-icon4 thq-icon-x-small"
            >
              <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
            </svg>
            <div className="contact3-contact-info2">
              <div className="contact3-content6">
                <h3 className="contact3-text06 thq-heading-3">Social Media</h3>
                <p>
                  {props.content5 ?? (
                    <Fragment>
                      <p className="contact3-text13 thq-body-large">
                        Follow us on social media
                      </p>
                    </Fragment>
                  )}
                </p>
              </div>
              <span>
                {props.address1 ?? (
                  <Fragment>
                    <span className="contact3-text08 thq-body-small">
                      <span>@</span>
                      <a
                        href="https://www.facebook.com/p/Harmony-Steps-Dance-61559516900496/"
                        target="_blank"
                        rel="noreferrer noopener"
                        className="contact3-link"
                      >
                        harmonystepsdance
                      </a>
                    </span>
                  </Fragment>
                )}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

Contact3.defaultProps = {
  address1: undefined,
  content3: undefined,
  phone1: undefined,
  content2: undefined,
  heading1: undefined,
  content5: undefined,
  rootClassName: '',
  email1: undefined,
  content4: undefined,
}

Contact3.propTypes = {
  address1: PropTypes.element,
  content3: PropTypes.element,
  phone1: PropTypes.element,
  content2: PropTypes.element,
  heading1: PropTypes.element,
  content5: PropTypes.element,
  rootClassName: PropTypes.string,
  email1: PropTypes.element,
  content4: PropTypes.element,
}

export default Contact3
