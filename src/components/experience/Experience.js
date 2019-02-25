import React, { Component } from 'react';
import './Experience.css'
import ExperienceCard from './ExperienceCard';

let expData = require('./Experience.json').data;

class Experience extends Component {
  render() {
    return (
      <div className="experience">
        <div className="experience-title">
          <h2>Experience</h2>
        </div>
        <div className="experience-content">
          {expData.map((job) => {
            return <ExperienceCard
              key={job.name}
              job={job}
            />
          })}
        </div>
      </div>
    );
  }
}

export default Experience;