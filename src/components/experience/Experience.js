import React, { Component } from 'react';
import './Experience.css'

class Experience extends Component {
  render() {
    return (
      <div className="experience">
        <div className="experience-title">
          <h2>Experience</h2>
        </div>
        <div className="experience-content">
          <div className="job">
            <div className="job-title">
              <h3>Expedia</h3>
            </div>
            <div className="job-subtitle">
              <h4>Associate Software Development Intern</h4>
            </div>
            <div className="job-description">
              I worked across teams building both web and mobile apps for hotel management and discovering new destinations. Within the 3 months I was there, I made improvements to live sites and apps to benefit Expedia's customers and hotel partners in the areas of UI, accessibility and notifications.
            </div>
          </div>
          <div className="job">
            <div className="job-title">
              <h3>Online Solutions Experts</h3>
            </div>
            <div className="job-subtitle">
              <h4>Intern</h4>
            </div>
            <div className="job-description">
              I assisted with the creation of an e-commerce website for a Brisbane-based mountain bike store, involving work with Magento, Retail Express and debugging PHP.
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Experience;
