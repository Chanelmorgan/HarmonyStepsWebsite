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
                     We offer a wide range of dance styles including  cheerleading, commercial, contemporary, lyrical, musical theatre, and our famous competition teams.
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
                      Our classes are designed for dancers of ages 3+. We have classes tailored to each age and skill level.
                    </span>
                  </Fragment>
                }
                answer="Our classes are designed for dancers of ages 3+. We have classes tailored to each age and skill level.\n"
                question="What age groups do you teach?"
              ></Question1>
              <Question1
                text={
                  <Fragment>
                    <span className="home-text50">
                      We welcome dancers of all levels, from beginners to advanced, you don’t need any prior experience to join HSDC. 
                    </span>
                  </Fragment>
                }
                answer=" We welcome dancers of all levels, from beginners to advanced, you don’t need any prior experience to join HSDC. "
                question="Do I need prior dance experience to join?"
              ></Question1>
              <Question1
                text={
                  <Fragment>
                    <span className="home-text51">
                      You can register online through our website or in person at our studio during business hours. Visit our classes page to get started.
                    </span>
                  </Fragment>
                }
                answer="You can register online through our website or in person at our studio during business hours. Visit our classes page to get started.\n"
                question="How do I register for classes?"
              ></Question1>
              <Question1
                text={
                  <Fragment>
                    <span className="home-text52">
                      <span>
                        Our competitive dance season typically runs from September through July, with classes running all year round.
                      </span>
                      <br></br>
                      
                    </span>
                  </Fragment>
                }
                answer="Our competitive dance season typically runs from September through July, with classes running all year round."
                question="When does the new dance season start?"
              ></Question1>

              <Question1
                text={
                  <Fragment>
                    <span className="home-text52">
                      <span>
                        Yes, mid-season enrollment is available depending on class availability. We’ll help you find the right fit and catch up comfortably.
                      </span>
                      <br></br>
                      
                    </span>
                  </Fragment>
                }
                answer="Yes, mid-season enrollment is available depending on class availability. We’ll help you find the right fit and catch up comfortably."
                question="Can I join in the middle of a season?"
              ></Question1>

               <Question1
                text={
                  <Fragment>
                    <span className="home-text52">
                      <span>
                        Class fees vary based on style, duration, and frequency. Please see our classes and fees page for full details.
                      </span>
                      <br></br>
                      
                    </span>
                  </Fragment>
                }
                answer="Class fees vary based on style, duration, and frequency. Please see our classes and fees page for full details."
                question="How much do classes cost?"
              ></Question1>

              <Question1
                text={
                  <Fragment>
                    <span className="home-text52">
                      <span>
                        Yes! First-time students are welcome to take a trial class, for the price of one lesson. Contact us to schedule your trial.
                      </span>
                      <br></br>
                      
                    </span>
                  </Fragment>
                }
                answer="Yes! First-time students are welcome to take a trial class, for the price of one lesson. Contact us to schedule your trial."
                question="Do you offer trial classes?"
              ></Question1>


              <Question1
                text={
                  <Fragment>
                    <span className="home-text52">
                      <span>
                        We do not offer refunds for missed classes, but makeup classes may be available. Cancellations due to unforeseen circumstances are handled on a case-by-case basis.
                      </span>
                      <br></br>
                      
                    </span>
                  </Fragment>
                }
                answer="We do not offer refunds for missed classes, but makeup classes may be available. Cancellations due to unforeseen circumstances are handled on a case-by-case basis."
                question="What is your refund policy?"
              ></Question1> 

              <Question1
                text={
                  <Fragment>
                    <span className="home-text52">
                      <span>
                        Yes! We host annual recitals and seasonal showcases where students can shine on stage and celebrate their hard work. We also aim to take part in regular community and charity showcases. Our past performances include meads magic, Eastbourne carnival, Eastbourne Pride, and many more!
                      </span>
                      <br></br>
                      
                    </span>
                  </Fragment>
                }
                answer="Yes! We host annual recitals and seasonal showcases where students can shine on stage and celebrate their hard work. We also aim to take part in regular community and charity showcases. Our past performances include meads magic, Eastbourne carnival, Eastbourne Pride, and many more!"
                question="Do students perform in recitals or showcases?"
              ></Question1> 

              <Question1
                text={
                  <Fragment>
                    <span className="home-text52">
                      <span>
                        While highly encouraged, recital participation is optional. We respect each dancer’s and family’s decision.
                      </span>
                      <br></br>
                      
                    </span>
                  </Fragment>
                }
                answer="While highly encouraged, recital participation is optional. We respect each dancer’s and family’s decision."
                question="Is performance participation mandatory?"
              ></Question1> 

               <Question1
                text={
                  <Fragment>
                    <span className="home-text52">
                      <span>
                        Proper dance attire is required for each class. Dress codes vary by dance style, but wear something comfortable, that won’t get in the way of your dancing.
                      </span>
                      <br></br>
                      
                    </span>
                  </Fragment>
                }
                answer="Proper dance attire is required for each class. Dress codes vary by dance style, but wear something comfortable, that won’t get in the way of your dancing."
                question="What should my child wear to class?"
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
