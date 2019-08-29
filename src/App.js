import React from 'react'
import Banner from './components/Banner.js'
import About from './components/About.js'
import Projects from './containers/Projects.js'

import styled from 'styled-components'

import './App.css'

function App() {
  return (
    <div>
      <Banner />
      <About />
      <Projects />
    </div>
  );
}

export default App
