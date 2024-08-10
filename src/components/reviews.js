import React from 'react'

import PropTypes from 'prop-types'

import './reviews.css'

const Reviews = (props) => {
  return (
    <div className="reviews-container thq-section-padding">
      <div className="reviews-max-width thq-section-max-width">
        <div
          data-thq="slider"
          data-loop="false"
          data-autoplay="false"
          data-navigation="true"
          data-pagination="true"
          className="reviews-slider swiper"
        >
          <div data-thq="slider-wrapper" className="swiper-wrapper">
            <div
              data-thq="slider-slide"
              className="reviews-slider-slide swiper-slide"
            >
              <div className="reviews-content">
                <div className="reviews-container1">
                  <h1 className="reviews-text">{props.heading}</h1>
                </div>
                <p className="reviews-text01 thq-body-large">{props.review1}</p>
                <div className="reviews-avatar">
                  <img
                    alt={props.author1Alt}
                    src={props.author1Src}
                    className="reviews-avatar-image thq-img-ratio-1-1 thq-img-round"
                  />
                  <div className="reviews-avatar-content">
                    <span className="reviews-text02 thq-body-small">
                      {props.author1Name}
                    </span>
                    <span className="reviews-text03 thq-body-small">
                      {props.author1Position}
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div
              data-thq="slider-slide"
              className="reviews-slider-slide1 swiper-slide"
            >
              <div className="reviews-content1">
                <h1 className="reviews-text04">{props.heading1}</h1>
                <p className="reviews-text05 thq-body-large">
                  {props.review11}
                </p>
                <div className="reviews-avatar1">
                  <img
                    alt={props.author2Alt}
                    src={props.author2Src}
                    className="reviews-avatar-image1 thq-img-round"
                  />
                  <div className="reviews-avatar-content1">
                    <span className="reviews-text06 thq-body-small">
                      {props.author2Name}
                    </span>
                    <span className="reviews-text07 thq-body-small">
                      {props.author2Position}
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div
              data-thq="slider-slide"
              className="reviews-slider-slide2 swiper-slide"
            >
              <div className="reviews-content2">
                <div className="reviews-container2">
                  <h1 className="reviews-text08">{props.heading2}</h1>
                </div>
                <p className="reviews-text09 thq-body-large">
                  {props.review12}
                </p>
                <div className="reviews-avatar2">
                  <img
                    alt={props.author3Alt}
                    src={props.author3Src}
                    className="reviews-avatar-image2 thq-img-round"
                  />
                  <div className="reviews-avatar-content2">
                    <span className="reviews-text10 thq-body-small">
                      {props.author3Name}
                    </span>
                    <span className="reviews-text11 thq-body-small">
                      {props.author3Position}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            data-thq="slider-pagination"
            className="reviews-slider-pagination swiper-pagination swiper-pagination-bullets swiper-pagination-horizontal"
          >
            <div
              data-thq="slider-pagination-bullet"
              className="swiper-pagination-bullet swiper-pagination-bullet-active"
            ></div>
            <div
              data-thq="slider-pagination-bullet"
              className="swiper-pagination-bullet"
            ></div>
            <div
              data-thq="slider-pagination-bullet"
              className="swiper-pagination-bullet"
            ></div>
          </div>
          <div
            data-thq="slider-button-prev"
            className="reviews-slider-button-prev swiper-button-prev"
          ></div>
          <div
            data-thq="slider-button-next"
            className="reviews-slider-button-next swiper-button-next"
          ></div>
        </div>
      </div>
    </div>
  )
}

Reviews.defaultProps = {
  author3Alt: 'Image of Emily Davis',
  heading: 'Reviews',
  author1Position: 'Head Cheerleading Coach',
  review1:
    "Harmony Steps Dance has transformed my daughter's cheerleading skills. She has improved so much since joining their classes.",
  author1Src:
    'https://images.unsplash.com/photo-1563823251941-b9989d1e8d97?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcxODc4NDMxMHw&ixlib=rb-4.0.3&q=80&w=1080',
  heading2: 'Reviews',
  heading1: 'Reviews',
  author3Position: 'Cheerleading Team Captain',
  author2Position: 'Parent of a Cheerleader',
  author2Name: 'Michael Smith',
  author1Alt: 'Image of Samantha Johnson',
  review11:
    'The coaching staff at Harmony Steps Dance is top-notch. They pay attention to every detail and help dancers excel.',
  review12:
    'I have been a part of many cheerleading teams, but the experience at Harmony Steps Dance is truly exceptional.',
  author2Src:
    'https://images.unsplash.com/photo-1595565312451-23051ab0666c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcxODc4NDMxMHw&ixlib=rb-4.0.3&q=80&w=1080',
  author3Name: 'Emily Davis',
  author2Alt: 'Image of Michael Smith',
  author1Name: 'Samantha Johnson',
  author3Src:
    'https://images.unsplash.com/photo-1630713813733-7bdf88acf034?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcxODc4NDMxMHw&ixlib=rb-4.0.3&q=80&w=1080',
}

Reviews.propTypes = {
  author3Alt: PropTypes.string,
  heading: PropTypes.string,
  author1Position: PropTypes.string,
  review1: PropTypes.string,
  author1Src: PropTypes.string,
  heading2: PropTypes.string,
  heading1: PropTypes.string,
  author3Position: PropTypes.string,
  author2Position: PropTypes.string,
  author2Name: PropTypes.string,
  author1Alt: PropTypes.string,
  review11: PropTypes.string,
  review12: PropTypes.string,
  author2Src: PropTypes.string,
  author3Name: PropTypes.string,
  author2Alt: PropTypes.string,
  author1Name: PropTypes.string,
  author3Src: PropTypes.string,
}

export default Reviews
