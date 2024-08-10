import React from 'react'
import ReactDOM from 'react-dom'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom'

import './style.css'
import EventPage from './views/event-page'
import ClassesPage from './views/classes-page'
import ContactPage from './views/contact-page'
import Home from './views/home'
import ComingSoonPage from './views/coming-soon-page'
import AboutPage from './views/about-page'
import GalleryPage from './views/gallery-page'
import NotFound from './views/not-found'

const App = () => {
  return (
    <Router>
      <Switch>
        <Route component={EventPage} exact path="/event-page" />
        <Route component={ClassesPage} exact path="/classes-page" />
        <Route component={ContactPage} exact path="/contact-page" />
        <Route component={Home} exact path="/" />
        <Route component={ComingSoonPage} exact path="/coming-soon-page" />
        <Route component={AboutPage} exact path="/about-page" />
        <Route component={GalleryPage} exact path="/gallery-page" />
        <Route component={NotFound} path="**" />
        <Redirect to="**" />
      </Switch>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
