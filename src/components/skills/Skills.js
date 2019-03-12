import React, { Component } from 'react';
import './Skills.css';
import SkillCard from './SkillCard'
import Terminal from '../terminal/Terminal';

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
        <Terminal input="load_skills.sh" />
        {selected ? <Terminal input={selected.package} /> : <br />}
        <div className="skills-title">
          <h2>Skills</h2>
        </div>
        <div className={"skills-container"}>
          <div className="skills-content">
            {!selected ?
              skillsData.map((skill) => {
                return <SkillCard
                  key={skill.name}
                  skill={skill}
                  myClick={() => {
                    this.setState({
                      selected: skill
                    })
                  }}
                />
              })
              : <SkillCard
                key={selected.name}
                skill={selected}
              />}
          </div>
        </div>
      </div>
    );
  }
}

export default Skills;
