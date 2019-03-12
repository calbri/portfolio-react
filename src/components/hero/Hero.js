import React, { Component } from 'react';
import anime from 'animejs';

import './Hero.css';

class Hero extends Component {
  createNumberGrid() {
    let grid = []

    //todo: make grid dynamic
    for (let i = 0; i < 20; i++) {
      let row = []
      for (let j = 0; j < 60; j++) {
        row.push(<div className="grid-element">{Math.floor(Math.random() * 2) ? 0 : 1}</div>)
      }
      grid.push(<div className="grid-row">{row}</div>)

    }

    return grid
  }

  componentDidMount() {
    this.animation()
  }

  animation() {
    var timelineParameters = anime.timeline({
      loop: false,
    });

    timelineParameters.add({
      targets: '.hero-canvas .grid-element',
      easing: 'easeInOutQuad',
      color: [
        { value: `rgb(${anime.random(100, 255)}, ${anime.random(100, 255)}, ${anime.random(100, 255)})`, duration: 300},
        { value: `rgb(${anime.random(100, 255)}, ${anime.random(100, 255)}, ${anime.random(100, 255)})`, duration: 500 },
        { value: `rgb(${anime.random(100, 255)}, ${anime.random(100, 255)}, ${anime.random(100, 255)})`, duration: 1000 },
      ],
      delay: anime.stagger(anime.random(60, 100), {
        grid: [60, 20],
        from: anime.random(0, 60*20),
      }),
    })

    timelineParameters.complete = () => { this.animation() }
  }

  render() {
    return (
      <div className="hero">
        <div className="hero-canvas">
          {this.createNumberGrid()}
        </div>
        <div className="hero-text"></div>
        <div className="hero-title">
          <h1>Callum Bryson</h1>
          <h3>5th Year Software Engineering/Mathematics at UQ</h3>
        </div>
        <div className="divider"></div>
        <div className="hero-subtitle">
          Specialising in front-end web and mobile development with React, Android and Kotlin/Java.
        </div>
      </div>
    );
  }
}

export default Hero;
