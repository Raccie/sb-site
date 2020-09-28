import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import './App.css';
import Projects from "../components/Projects/Projects";
import Technologies from "../components/Technologies/Technologies";
import CV from "../components/CV/CV";
import Technology from "../components/Technology/Technology";
import Header from "../components/Header/Header";

function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
        <Switch>
          <Route exact path="/projects">
            <Projects/>
          </Route>
          <Route exact path="/technologies" component={Technologies}/>
          <Route exact path="/technologies/:techId" component={Technology}/>
          <Route exact path="/cv">
            <CV/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
