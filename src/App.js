import React, { Fragment } from 'react'
import { BrowserRouter as Router, Route, NavLink, Switch } from "react-router-dom";
import { Document, Page } from 'react-pdf';

import NavBar from './components/NavBar.js'
import Banner from './components/Banner.js'
import About from './components/About.js'
import Projects from './containers/Projects.js'


import './App.css'

function App() {
  return (
    <div className="spotlight">
      <Router>
        <NavBar />
        <Switch>
          <Route exact path="/" component={Banner} />
          <Route path="/about" component={About} />
          <Route path="/projects" component={Projects} />
        </Switch>
      </Router>
    </div>
  );
}

export default App
