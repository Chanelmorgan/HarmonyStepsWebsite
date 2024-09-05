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
      <Features17
        feature1Title={
          <Fragment>
            <h2 className="about-page-text thq-heading-2">Meet The Coach</h2>
          </Fragment>
        }
        rootClassName="features17-root-class-name"
        feature1Description={
          <Fragment>
            <p className="about-page-text1 thq-body-large">
            Hi there! I’m Bianca Matthews, and I’m excited to be here with you. At 22, I’ve had the chance to dive into my passions for cheerleading, dancing, and musical theater. My journey began with cheerleading, where I learned the importance of teamwork and high-energy routines. This passion naturally led me to, where I could express myself through movement and rhythm.

Musical theater also holds a special place in my heart. Performing on stage has taught me so much about blending vocal skills with dramatic flair. I’m thrilled to bring all these experiences into coaching, and I’m here to help you explore your own talents and reach new heights.
            </p>
          </Fragment>
        }
      ></Features17>
      <div className="home-features">
        <div className="featuresContainer">
          <div className="home-features1">
            <div className="home-container2">
              <span className="overline">
                <span>Values</span>
                <br></br>
              </span>
              <h2 className="home-features-heading heading2">Our Key Values</h2>
              <span className="home-features-sub-heading bodyLarge">
                <span>
                  <span>
                    <span>
                      Discover what sets us apart in the world of cheerleading
                      dance
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
            </div>
            <div className="home-container3">
              <FeatureCard
                heading="Professional Choreography"
                subHeading="Customized routines by experienced choreographers"
              ></FeatureCard>
              <FeatureCard2 rootClassName="feature-card2-root-class-name"></FeatureCard2>
              <FeatureCard3 rootClassName="feature-card3-root-class-name"></FeatureCard3>
              <FeatureCard4
                text={
                  <Fragment>
                    <span className="home-text34">
                      <span>
                        We celebrate diversity and strive to create an inclusive
                        environment. Everyone is welcome, regardless of
                        background or skill level. 
                      </span>
                      <br></br>
                      <br></br>
                    </span>
                  </Fragment>
                }
                rootClassName="feature-card4-root-class-name"
              ></FeatureCard4>
            </div>
          </div>
        </div>
      </div>
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
                answer="We offer cheerleading, musical theatre, and private one-on-one coaching tailored to individual needs and skill levels. "
                question="Do you offer beginner classes?"
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
                      adn character development.
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
      <div className="home-footer">
        <Footer
          logo="Harmony Steps "
          text="© 2024 Harmony Steps, developed by Chanel Morgan."
        ></Footer>
      </div>
    </div>
  )
}

export default Home
