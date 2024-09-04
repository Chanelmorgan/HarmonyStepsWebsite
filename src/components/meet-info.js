import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './meet-info.css'

const MeetInfo = (props) => {
  return (
    <div
      className={`meet-info-container thq-section-padding ${props.rootClassName} `}
    >
      <div className="meet-info-max-width thq-section-max-width">
        <div className="meet-info-container1 thq-flex-row">
          <img
            alt={props.image1Alt}
            src={props.image1Src}
            className="meet-info-placeholder-image thq-img-ratio-16-9"
          />
          <div className="meet-info-container2">
            <span className="meet-info-text thq-heading-2">
              {props.content1}
            </span>
            <div className="meet-info-container3">
              <span>
                {props.text1 ?? (
                  <Fragment>
                    <span className="meet-info-text02">
                      <span className="meet-info-text03">
                        xdhjdfsfdfhdshsdfhjfsdhjfsdhjkjhkdsfjhkdsfjhd
                      </span>
                      <br className="meet-info-text04"></br>
                      <span className="meet-info-text05">shfjds</span>
                      <br className="meet-info-text06"></br>
                      <span className="meet-info-text07">
                        asdkjfhhjaksedfhjadshjkf
                      </span>
                      <br className="meet-info-text08"></br>
                      <span className="meet-info-text09">
                        sadfjkhasdjhkfjhkdskjhfjhkdsfhk
                      </span>
                      <br className="meet-info-text10"></br>
                      <br className="meet-info-text11"></br>
                      <br className="meet-info-text12"></br>
                      <br className="meet-info-text13"></br>
                      <span className="meet-info-text14">dfsafas</span>
                      <br className="meet-info-text15"></br>
                      <span className="meet-info-text16">s</span>
                      <br className="meet-info-text17"></br>
                      <span className="meet-info-text18">adfasdf</span>
                      <br className="meet-info-text19"></br>
                      <br className="meet-info-text20"></br>
                      <br className="meet-info-text21"></br>
                      <span className="meet-info-text22">sadf</span>
                      <br className="meet-info-text23"></br>
                      <span className="meet-info-text24">asdf</span>
                      <br className="meet-info-text25"></br>
                      <span className="meet-info-text26">asd</span>
                      <br className="meet-info-text27"></br>
                      <span className="meet-info-text28">f</span>
                      <br className="meet-info-text29"></br>
                      <span className="meet-info-text30">sad</span>
                      <br className="meet-info-text31"></br>
                      <span className="meet-info-text32">fas</span>
                      <br className="meet-info-text33"></br>
                      <span className="meet-info-text34">d</span>
                      <br></br>
                    </span>
                  </Fragment>
                )}
              </span>
            </div>
          </div>
          <div className="meet-info-container4">
            <div className="meet-info-container5"></div>
          </div>
        </div>
      </div>
    </div>
  )
}

MeetInfo.defaultProps = {
  text1: undefined,
  image1Src:
    'about-me.jpeg',
  rootClassName: '',
  content1: 'Meet the Coach ',
  image1Alt: 'Image1Alt',
}

MeetInfo.propTypes = {
  text1: PropTypes.element,
  image1Src: PropTypes.string,
  rootClassName: PropTypes.string,
  content1: PropTypes.string,
  image1Alt: PropTypes.string,
}

export default MeetInfo
