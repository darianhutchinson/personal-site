import './App.css';
import profileImage from './img/headshot.jpg';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navigation from "./components/navbar/navbar"
import About from "./pages/about"
import Contact from "./pages/contact"
import PreviousWork from "./pages/previousWork"
import Projects from "./pages/projects"

function App() {
  return (
    <Router>
      <Navigation />
      <Switch>
        <Route path='/personal-site' exact component={About} />
        <Route path='/pages/about' exact component={About} />
        <Route path='/pages/contact' component={Contact} />
        <Route path='/pages/previousWork' component={PreviousWork} />
        <Route path='/pages/projects' component={Projects} />
      </Switch>
    </Router>
  );
}

export default App;
