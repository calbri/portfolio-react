import React, { Component } from 'react';
import './Experience.css'
import ExperienceCard from './ExperienceCard';
import Terminal from '../terminal/Terminal';

let expData = require('./Experience.json').data;

class Experience extends Component {
  render() {
    return (
      <div className="experience">
        <Terminal input="load_experience.sh" />
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