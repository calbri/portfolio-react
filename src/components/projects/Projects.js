import React, { Component } from 'react';
import './Projects.css'

import operapedia from '../../res/operapedia.png'
import cc from '../../res/cc.png'
import Terminal from '../terminal/Terminal';

class Projects extends Component {
  render() {
    return (
      <div className="projects">
        <Terminal input="load_projects.sh" />
        <div className="projects-title">
          <h2>Projects</h2>
        </div>
        <div className="projects-content">
          <div className="project" style={{backgroundImage: `linear-gradient(rgba(0,0,0,0), rgba(0,0,0,0.7)), url(${operapedia})`}}>
            <div className="project-label">
              <div className="project-title">
                <h3>Operapedia</h3>
              </div>
              <div className="project-subtitle">
                <h4>Flutter + Firebase</h4>
              </div>
            </div>
            <div className="project-description">
              An application for iOS and Android designed to help opera singers learn Italian arias. Built using Flutter and Dart, and using Firebase as a backend for data storage, content streaming and authentication.
            </div>
          </div>
          <div className="project">
            <div className="project-label">
              <div className="project-title">
                <h3>This Website</h3>
              </div>
              <div className="project-subtitle">
                <h4>React</h4>
              </div>
            </div>
            <div className="project-description">
              My portfolio site is built using React as an example of the skills I have learnt both through my intern experience and personal projects.
            </div>
          </div>
          <div className="project" style={{backgroundImage: `linear-gradient(rgba(0,0,0,0), rgba(0,0,0,0.7)), url(${cc})`}}>
            <div className="project-label">
              <div className="project-title">
                <h3>CC - Social Public Transport</h3>
              </div>
              <div className="project-subtitle">
                <h4>Android</h4>
              </div>
            </div>
            <div className="project-description">
              CC was an app developed by University of Queensland and Dalian Neusoft University of Information students working as part of the New Colombo Scholarship. My role was in Android development, working on the interface and program flow within the app, following Material Design guidelines and providing a robust, data-driven interface.
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Projects;
