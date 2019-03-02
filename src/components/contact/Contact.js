import React, { Component } from 'react';
import './Contact.css'
import githubLogo from '../../res/gh.png'
import linkedInLogo from '../../res/li.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import Terminal from '../terminal/Terminal';

class Contact extends Component {
  render() {
    return (
      <div className="contact">
        <Terminal input ="load_contact.sh" />
        <div className="contact-title">
          <h2>Contact Me</h2>
        </div>
        <div className="contact-content">
          <div className="link">
            <div className="link-title">
              <h3>LinkedIn</h3>
            </div>
            <div className="link-logo">
              <img src={linkedInLogo} alt="To Github"/>
            </div>
          </div>
          <div className="link">
            <div className="link-title">
              <h3>Github</h3>
            </div>
            <div className="link-logo">
              <img src={githubLogo} alt="To Github"/>
            </div>
          </div>
          <div className="link">
            <div className="link-title">
              <h3>Email</h3>
            </div>
            <div className="link-logo">
              <FontAwesomeIcon icon={faEnvelope} color="#fff" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
