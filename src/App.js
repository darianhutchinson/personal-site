import './App.css';
import profileImage from './img/headshot.jpg';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import React from 'react'
import Navigation from "./components/navbar/navbar"
import About from "./pages/about"
import Contact from "./pages/contact"
import PreviousWork from "./pages/previousWork"
import Projects from "./pages/projects"

function App() {
  return ( 
    <Router basename={process.env.PUBLIC_URL}>
      <Navigation/>
      <Switch>
        <Route path='/' exact component={About} />
        <Route path='/about' component={About} />
        <Route path='/contact' component={Contact} />
        <Route path='/previousWork' component={PreviousWork} />
        <Route path='/projects' component={Projects} />
      </Switch>
    </Router>
  );
}

export default App;
