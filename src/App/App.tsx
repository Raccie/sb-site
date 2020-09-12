import React from 'react';
import { Button } from '@material-ui/core'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import './App.css';
import Projects from "../components/Projects/Projects";
import Technologies from "../components/Technologies/Technologies";
import CV from "../components/CV/CV";
import Grid from "@material-ui/core/Grid";


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="heading">
          <a href="/">
            <h1 className="title">Simon<span>_</span>Bänsch</h1>
          </a>
          <ul>
            <li>Web- und Desktop Applikationen</li>
            <li>Server</li>
            <li>Sicherheit</li>
          </ul>
        </div>



        <Grid container justify={"center"} className={"buttons"} spacing={2}>
          <Grid item md={"auto"} sm={6} xs={12}>
            <a href={"https://github.com/Raccie"}>
              <Button size={"large"} fullWidth={true} variant={"outlined"} color="secondary">GitHub</Button>
            </a>
          </Grid>
          <Grid item md={"auto"} sm={6} xs={12}>
            <a href={"/projects"}>
              <Button size={"large"} fullWidth={true} variant={"outlined"} color="secondary">Projekte</Button>
            </a>
          </Grid>
          <Grid item md={"auto"} sm={6} xs={12}>
            <a href={"/technologies#f"}>
              <Button size={"large"} fullWidth={true} variant={"outlined"} color="secondary">Technologien</Button>
            </a>
          </Grid>
          <Grid item md={"auto"} sm={6} xs={12}>
            <a href={"/cv"}>
              <Button size={"large"} fullWidth={true} variant={"outlined"} color="secondary">Lebenslauf</Button>
            </a>
          </Grid>
        </Grid>
      </header>

      <Router>
        <Switch>
          <Route path="/projects">
            <Projects/>
          </Route>
          <Route path="/technologies">
            <Technologies/>
          </Route>
          <Route path="/cv">
            <CV/>
          </Route>
          <Route path="/">

          </Route>
        </Switch>
      </Router>

    </div>
  );
}

export default App;
