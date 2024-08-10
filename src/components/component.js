import React, { Fragment } from 'react'

import Navbar2 from './navbar2'
import './component.css'

const AppComponent = (props) => {
  return (
    <div className="app-component-container">
      <Navbar2
        link3={
          <Fragment>
            <span className="app-component-text thq-link thq-body-small">
              Events
            </span>
          </Fragment>
        }
        link4={
          <Fragment>
            <span className="app-component-text1 thq-link thq-body-small">
              About Us
            </span>
          </Fragment>
        }
        link2={
          <Fragment>
            <span className="app-component-text2 thq-link thq-body-small">
              Classes
            </span>
          </Fragment>
        }
        link5={
          <Fragment>
            <span className="app-component-text3 thq-link thq-body-small">
              Contact
            </span>
          </Fragment>
        }
        link1={
          <Fragment>
            <span className="app-component-text4 thq-link thq-body-small">
              Home
            </span>
          </Fragment>
        }
      ></Navbar2>
    </div>
  )
}

export default AppComponent
