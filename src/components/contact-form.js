import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import './contact-form.css';

const ContactForm = (props) => {
  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);

    try {
      const response = await fetch('https://formspree.io/f/xblrbara', { // Replace with your Formspree form ID
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        alert('Message sent successfully!');
        event.target.reset(); // Clear the form fields
      } else {
        const result = await response.json();
        alert(result.error ? result.error : 'Failed to submit the form');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('An error occurred. Please try again.');
    }
  };

  return (
    <div className={`contact-form-contact9 thq-section-padding ${props.rootClassName} `}>
      <div className="thq-flex-row thq-section-max-width contact-form-max-width">
        <img
          alt={props.imageAlt}
          src={props.imageSrc}
          className="contact-form-image1 thq-img-ratio-4-3"
        />
        <div className="contact-form-content thq-flex-column">
          <div className="contact-form-section-title thq-card">
            <span>
              {props.content2 ?? (
                <Fragment>
                  <span className="contact-form-text7 thq-body-small">
                    Get in touch with us
                  </span>
                </Fragment>
              )}
            </span>
            <div className="contact-form-content1">
              <h2>
                {props.heading1 ?? (
                  <Fragment>
                    <h2 className="contact-form-text5 thq-heading-2">
                      Contact us
                    </h2>
                  </Fragment>
                )}
              </h2>
            </div>
          </div>
          <form className="thq-card" onSubmit={handleSubmit}>
            <div className="contact-form-input">
              <label htmlFor="contact-form-3-name" className="thq-body-small">
                Name
              </label>
              <input
                type="text"
                id="contact-form-3-name"
                name="name"
                placeholder="Name"
                className="thq-input"
                required
              />
            </div>
            <div className="contact-form-input1">
              <label htmlFor="contact-form-3-email" className="thq-body-small">
                Email
              </label>
              <input
                type="email"
                id="contact-form-3-email"
                name="email"
                required
                placeholder="Email"
                className="thq-input"
              />
            </div>
            <div className="contact-form-container">
              <label htmlFor="contact-form-3-message" className="thq-body-small">
                Message
              </label>
              <textarea
                id="contact-form-3-message"
                name="message"
                rows="3"
                placeholder="Enter your message"
                className="thq-input"
                required
              ></textarea>
            </div>
            <button type="submit" className="contact-form-button thq-button-filled">
              <span>
                {props.action ?? (
                  <Fragment>
                    <span className="contact-form-text6 thq-body-small">
                      Submit
                    </span>
                  </Fragment>
                )}
              </span>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

ContactForm.defaultProps = {
  heading1: undefined,
  action: undefined,
  imageAlt: 'Image1',
  rootClassName: '',
  content2: undefined,
  imageSrc: 'https://images.unsplash.com/photo-1673890686816-d8ee4c181a70?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMzEyMjQ5N3w&ixlib=rb-4.0.3&q=80&w=1080',
};

ContactForm.propTypes = {
  heading1: PropTypes.element,
  action: PropTypes.element,
  imageAlt: PropTypes.string,
  rootClassName: PropTypes.string,
  content2: PropTypes.element,
  imageSrc: PropTypes.string,
};

export default ContactForm;