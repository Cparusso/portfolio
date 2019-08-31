import React, { Fragment } from 'react'
import { BrowserRouter as Router, Route, NavLink, Switch } from "react-router-dom";

import NavBar from './components/NavBar.js'
import Banner from './components/Banner.js'
import About from './components/About.js'
import Projects from './containers/Projects.js'

// import styled from 'styled-components'

import './App.css'

function App() {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route exact path="/" component={Banner} />
        <Route path="/about" component={About} />
        <Route path="/projects" component={Projects} />
      </Switch>
    </Router>
  );
}

export default App
