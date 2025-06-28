import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'
import Features17 from '../components/features17'
import Navbar from '../components/navbar2'
import FeatureCard from '../components/feature-card'
import FeatureCard2 from '../components/feature-card2'
import FeatureCard3 from '../components/feature-card3'
import FeatureCard4 from '../components/feature-card4'
import Question1 from '../components/question1'
import Footer from '../components/footer'
import GoogleReviews from '../components/google-review'; 
import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Harmony Steps</title>
      </Helmet>
      
      <Navbar
        text3="About"
        rootClassName="navbar-root-class-name4"
      ></Navbar>
     
      <div className="home-hero">
        <div className="heroContainer home-hero1">
          <div className="home-container1">
            <h1 className="home-hero-heading heading1">
              Welcome To Harmony Steps
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </h1>
            <span className="home-hero-sub-heading bodyLarge">
              <span>
                <span>
                  <span className="subline">Empowering Performances with Style and Precision</span>
                  <span>
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                </span>
                <span>
                  <span>
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span>
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                </span>
              </span>
              <span>
                <span>
                  <span>
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span>
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                </span>
                <span>
                  <span>
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span>
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                </span>
              </span>
            </span>
            <div className="home-btn-group">
              <Link
                to="/classes-page"
                className="home-hero-button1 buttonFilled"
              >
                <span>
                  <span>Explore Our Classes</span>
                  <br></br>
                </span>
              </Link>
              <Link to="/contact-page" className="home-hero-button2 buttonFlat">
                Learn More →
              </Link>
            </div>
          </div>
        </div>
      </div>
      <h1 className="about-page-text thq-heading-2">Meet The Teachers </h1>
      <Features17
        feature1Title={
          <Fragment>
            <h2 className="about-page-text thq-heading-2">Studio Owner</h2>
          </Fragment>
        }
        rootClassName="features17-root-class-name"
        feature1Description={
          <Fragment>
            <p className="about-page-text1 thq-body-large">
           Bianca began dancing at the age of 4, and started working professionally at the age of 14. Bianca has been cast and taken part in two musical theatre national tours, and has worked on many television shows.
She started teaching dance , musical theatre and gymnastics at the age of 16, and opened HSDC in May 2024, following her dream of owning her own dance school. Since then, HSDC have had incredible success with our competition teams, becoming regional champions and qualifying for the World Dance Championships in NYC.
            </p>
          </Fragment>
        }
      ></Features17>

     
      <div className="home-faq">
        <div className="faqContainer">
          <div className="home-faq1">
            <div className="home-container4">
              <span className="overline">
                <span>FAQ</span>
                <br></br>
              </span>
              <h2 className="home-text42 heading2">Common questions</h2>
              <span className="home-text43 bodyLarge">
                <span>
                  Here are some of the most common questions that we get. Any
                  more questions please feel free to get 
                </span>
                <br></br>
                <span>
                  in contact with us via email, phone or social media.
                </span>
                <br></br>
              </span>
            </div>
            <div className="home-container5">
              <Question1
                text={
                  <Fragment>
                    <span className="home-text48">
                      We offer cheerleading, musical theatre, and private
                      one-on-one coaching tailored to individual needs and skill
                      levels. 
                    </span>
                  </Fragment>
                }
                answer="We offer a wide range of dance styles including  cheerleading, commercial, contemporary, lyrical, musical theatre, and our famous competition teams."
                question="What styles of dance do you offer?"
              ></Question1>
              <Question1
                text={
                  <Fragment>
                    <span className="home-text49">
                      Our classes are designed for a wide range of ages,
                      starting from young children to teens, with specific
                      programs tailored to these.
                    </span>
                  </Fragment>
                }
                answer="Our classes are designed for a wide range of ages, starting from young children to teens, with specific programs tailored to these.\n"
                question="Do you offer beginner classes?"
              ></Question1>
              <Question1
                text={
                  <Fragment>
                    <span className="home-text50">
                      You can easily register online through our website or by
                      contacting us via phone, email or social media. 
                    </span>
                  </Fragment>
                }
                answer="You can easily register online through our website or by contacting us via phone, email or social media. "
                question="How do I register for classes ?"
              ></Question1>
              <Question1
                text={
                  <Fragment>
                    <span className="home-text51">
                      Our musical theatre classes cover acting, singing, and
                      dancing, focusing on performance skills, stage presence,
                      and character development.
                    </span>
                  </Fragment>
                }
                answer="You can easily register online through our website or by contacting us via phone, email or social media. \n"
                question="What are the musical theatre classes ?"
              ></Question1>
              <Question1
                text={
                  <Fragment>
                    <span className="home-text52">
                      <span>
                        Pom cheerleading combines dance and cheerleading
                        techniques, using pom-poms to enhance visual effect of routines.
                      </span>
                      <br></br>
                      
                    </span>
                  </Fragment>
                }
                answer="Yes, we offer trial classes for new students to experience our classes before committing to a full session."
                question="What is pom cheerleading ?"
              ></Question1>
            </div>
          </div>
        </div>
      </div>
      <GoogleReviews />
      <div>
        </div>
      <div className="home-footer">
        <Footer
          logo="Harmony Steps "
          text="© 2025 Harmony Steps, developed by Chanel Morgan."
        ></Footer>
      </div>
    </div>
  )
}

export default Home
