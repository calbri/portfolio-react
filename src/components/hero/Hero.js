import React, { Component } from 'react';
import './Hero.css';

class Hero extends Component {
  render() {
    return (
      <div className="hero">
        <div className="hero-title">
          <h1>Callum Bryson</h1>
          <h3>5th Year Software Engineering/Mathematics at UQ</h3>
        </div>
        <div className="hero-subtitle">
          Specialising in front-end web and mobile development with React, Android and Kotlin/Java.
        </div>
      </div>
    );
  }
}

export default Hero;
