import React, {useEffect} from 'react';
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

function setCookie(cvalue: string, exdays: number) {
  let d = new Date();
  d.setTime(d.getTime() + (exdays*24*60*60*1000));
  let expires = "expires="+ d.toUTCString();
  document.cookie = cvalue + ";" + expires + ";path=/";
}

function App() {
  useEffect(()=>{
    if(document.cookie === 'anim_played')
    {
      // @ts-ignore
      document.getElementById('firstName').innerText = "Simon";
      // @ts-ignore
      document.getElementById('underscore').innerText = "_";
      // @ts-ignore
      document.getElementById('lastName').innerText = "Bänsch";
      setCookie("anim_played", 1/24/60);

    }
    else {

      let i = 0;
      let j = 0;
      let names = ["Simon", "Bänsch"];
      let titles = [document.getElementById('firstName'), document.getElementById('lastName')]
      let interval: NodeJS.Timeout;
      interval = setInterval(() => {
        if (titles[i] !== null) {
          // @ts-ignore
          titles[i].innerText += names[i][j];
          j++;
          if (j > names[i].length - 1) {
            // @ts-ignore
            document.getElementById('underscore').innerText = '_';
            i++;
            j = 0;
          }

          if (i > names.length - 1) {
            setCookie("anim_played", 1/24/60);
            clearInterval(interval);
          }
        }
      }, 100);
      return () => clearInterval(interval);
    }
  });

  useEffect(()=>{
    const interval = setInterval(() => {
        let cursor = document.getElementById('cursor');

        if(cursor !== null) {
          if (cursor.style.visibility === 'hidden')
            cursor.style.visibility = 'visible';
          else
            cursor.style.visibility = 'hidden';
        }

    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <div className="heading">
          <a href="/">
            <h1 id="title">
              <span id={'firstName'}/>
              <span id={'underscore'} className="primary"/>
              <span id={'lastName'}/>
              <span className="primary" id='cursor'>_</span>
            </h1>
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
