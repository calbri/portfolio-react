import React, { Component } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import './Skills.css';
import SkillCard from './SkillCard'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

let skillsData = require('./Skills.json').data;

class Skills extends Component {
  constructor() {
    super()

    this.state = {
      selected: null
    }
  }

  render() {
    const { selected } = this.state;

    return (
      <div className="skills">
        <div className="skills-title">
          <h2>Skills</h2>
        </div>
        <div className={"skills-container"}>
          <div className="skills-content">
            {skillsData.map((skill) => {
              return <SkillCard
                key={skill.name}
                skill={skill}
                myClick={() => {
                  this.setState({
                    selected: skill
                  })
                }}
              />
            })}
          </div>

          <ReactCSSTransitionGroup
            transitionName="example"
            transitionEnterTimeout={500}
            transitionLeaveTimeout={300}>
            {selected && <div key="1" className="skill-information">
              <button onClick={() => {this.setState({
                selected: null
              })}}>
                <FontAwesomeIcon icon={faArrowRight} color="#2F3C5E" />
              </button>
              <div className="skill-information-text">
                {this.state.selected.description}
              </div>

            </div>}
          </ReactCSSTransitionGroup>

        </div>
      </div>
    );
  }
}

export default Skills;
