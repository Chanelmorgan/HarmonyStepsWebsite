import React from 'react'

import Head from 'next/head'

const NotFound = (props) => {
  return (
    <div className="not-found-container">
      <Head>
        <title>404 - Not Found</title>
      </Head>
      <h3>OOPS! PAGE NOT FOUND</h3>
      <div className="not-found-container1">
        <h1 className="not-found-text1">404</h1>
      </div>
      <div className="not-found-container2">
        <h2 className="not-found-text2">
          WE ARE SORRY, BUT THE PAGE YOU REQUESTED WAS NOT FOUND
        </h2>
      </div>
    </div>
  )
}

export default NotFound
