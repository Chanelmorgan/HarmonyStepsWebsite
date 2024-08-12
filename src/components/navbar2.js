import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'; 
import './navbar2.css';

const Navbar2 = (props) => {
  return (
    <header className="navbar2-container">
      <header data-thq="thq-navbar" className="navbar2-navbar-interactive">
        <Link to="/" className="navbar2-link1"> 
        HARMONY STEPS 
                {/* <img
          alt={props.logoAlt}
          src={props.logoSrc}
          className="navbar2-image1"
        /> */}
        </Link>
        <div data-thq="thq-navbar-nav" className="navbar2-desktop-menu">
          <nav className="navbar2-links">
           
            <Link to={props.link2Url} className="navbar2-link2">
              {props.link2 ?? (
                <Fragment>
                  <span className="navbar2-text2 thq-link thq-body-small">
                    Classes
                  </span>
                </Fragment>
              )}
            </Link>
            <Link to={props.link3Url} className="navbar2-link3">
              {props.link3 ?? (
                <Fragment>
                  <span className="navbar2-text thq-link thq-body-small">
                    Events
                  </span>
                </Fragment>
              )}
            </Link>
            <Link to={props.link4Url} className="navbar2-link4">
              {props.link4 ?? (
                <Fragment>
                  <span className="navbar2-text1 thq-link thq-body-small">
                    Gallery
                  </span>
                </Fragment>
              )}
            </Link>
            <Link to={props.link5Url} className="navbar2-link5">
              {props.link5 ?? (
                <Fragment>
                  <span className="navbar2-text3 thq-link thq-body-small">
                    Contact
                  </span>
                </Fragment>
              )}
            </Link>
          </nav>
        </div>
        <div data-thq="thq-burger-menu" className="navbar2-burger-menu">
          <svg viewBox="0 0 1024 1024" className="navbar2-icon">
            <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
          </svg>
        </div>
        <div data-thq="thq-mobile-menu" className="navbar2-mobile-menu">
          <div className="navbar2-nav">
            <div className="navbar2-top">
              <img
                alt={props.logoAlt}
                src={props.logoSrc}
                className="navbar2-logo"
              />
              <div data-thq="thq-close-menu" className="navbar2-close-menu">
                <svg viewBox="0 0 1024 1024" className="navbar2-icon02">
                  <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                </svg>
              </div>
            </div>
            <nav className="navbar2-links1">
              <Link to={props.link1Url}>
                {props.link1 ?? (
                  <Fragment>
                    <span className="navbar2-text4 thq-link thq-body-small">
                      About
                    </span>
                  </Fragment>
                )}
              </Link>
              <Link to={props.link2Url}>
                {props.link2 ?? (
                  <Fragment>
                    <span className="navbar2-text2 thq-link thq-body-small">
                      Classes
                    </span>
                  </Fragment>
                )}
              </Link>
              <Link to={props.link3Url}>
                {props.link3 ?? (
                  <Fragment>
                    <span className="navbar2-text thq-link thq-body-small">
                      Events
                    </span>
                  </Fragment>
                )}
              </Link>
              <Link to={props.link4Url}>
                {props.link4 ?? (
                  <Fragment>
                    <span className="navbar2-text1 thq-link thq-body-small">
                      Gallery 
                    </span>
                  </Fragment>
                )}
              </Link>
              <Link to={props.link5Url}>
                {props.link5 ?? (
                  <Fragment>
                    <span className="navbar2-text3 thq-link thq-body-small">
                      Contact
                    </span>
                  </Fragment>
                )}
              </Link>
            </nav>
          </div>
          <div className="navbar2-icon-group">
            <svg
                  viewBox="0 0 877.7142857142857 1024"
                  className="thq-icon-x-small"
                >
                  <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
               </svg>
               <svg
                 viewBox="0 0 602.2582857142856 1024"
                 className="thq-icon-x-small"
               >
                 <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
               </svg>
             </div>
           </div>
         </header>
       </header>
     );
   }

   Navbar2.defaultProps = {
    logoAlt: 'Harmony Steps logo',
    link1: undefined,
    link2: undefined,
    link3: undefined,
    link4: undefined,
    link5: undefined,
    logoSrc: '/capture-1500h.jpg',
  
    // URLs updated to match the routes in App.js
    link1Url: '/about-page', // About
    link2Url: '/classes-page', // Classes
    link3Url: '/coming-soon-page', // Events (coming soon)
    link5Url: '/contact-page', // Contact
    link4Url: '/gallery-page', // Gallery 
  };

   Navbar2.propTypes = {
     logoAlt: PropTypes.string,
     link3: PropTypes.element,
     link5Url: PropTypes.string,
     link4: PropTypes.element,
     link2Url: PropTypes.string,
     link2: PropTypes.element,
     link1Url: PropTypes.string,
     link5: PropTypes.element,
     link3Url: PropTypes.string,
     logoSrc: PropTypes.string,
     link1: PropTypes.element,
     link4Url: PropTypes.string,
   };

   export default Navbar2;