import React, { Component } from 'react';
import Hero from './components/hero/Hero.js'
import Skills from './components/skills/Skills.js'
import Experience from './components/experience/Experience.js'
import './App.css';
import Contact from './components/contact/Contact.js';
import Projects from './components/projects/Projects.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Hero />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </div>
    );
  }
}

export default App;
