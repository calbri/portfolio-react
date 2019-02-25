import React, { Component } from 'react';
import './Experience'

const images = require.context('../../../public/images', true);

class ExperienceCard extends Component {
  render() {
    const { title, subtitle, image } = this.props.job;
    return (
      <div className="job">
        <div className="job-image">
          <img src={images(`./${image}`)} alt={title} />
        </div>
        <div className="job-text">
          <div className="job-title">
            <h3>{title}</h3>
          </div>
          <div className="job-subtitle">
            <h4>{subtitle}</h4>
          </div>
        </div>
      </div>
    );
  }
}

export default ExperienceCard;
