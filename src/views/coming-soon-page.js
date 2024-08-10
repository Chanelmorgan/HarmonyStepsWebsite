import React, { Fragment } from 'react'

import { Helmet } from 'react-helmet'

import Navbar from '../components/navbar2'
import ComingSoon from '../components/coming-soon'
import './coming-soon-page.css'

const ComingSoonPage = (props) => {
  return (
    <div className="coming-soon-page-container">
      <Helmet>
        <title>Harmony Steps</title>
      </Helmet>
      <Navbar rootClassName="navbar-root-class-name6"></Navbar>
      <ComingSoon
        bannerTitle={
          <Fragment>
            <h2 className="coming-soon-page-text thq-heading-2">
              COMING SOON......
            </h2>
          </Fragment>
        }
        rootClassName="coming-soon-root-class-name"
      ></ComingSoon>
    </div>
  )
}

export default ComingSoonPage
