import React, { Component } from 'react';
import './Skills.css'

const images = require.context('../../../public/images', true);

class SkillCard extends Component {
  render() {
    const { name, image } = this.props.skill; 
    const { myClick } = this.props; 
    return (
      <div className="skill" onClick={myClick}>
        <div className="skill-title">
          <h3>{ name }</h3>
        </div>
        <div className="skill-image">
          <img src={images(`./${image}`)} alt="react"/>
        </div>
      </div>
    );
  }
}

export default SkillCard;
