import React, { Component } from 'react';
import './App.scss';
import Logo from './components/Logo';
import Hello from './components/Hello';
import Introduce from './components/Introduce';
import About from './components/About';
import ME from './components/ME';
import Education from './components/Education';
import Educations from './components/Educations';
import Year from './components/Year';
import Split from './components/Split';

class App extends Component {
  render() {
    return (
      <main className="app">
        <Logo />
        <Hello />
        <Introduce />
        <Split />
        <About />
        <ME />
        <Education />
        <Educations />
        <Year />
      </main>
    );
  }
}

export default App;
