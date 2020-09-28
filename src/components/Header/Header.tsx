import React, {useEffect} from "react";
import Grid from "@material-ui/core/Grid";
import {Button} from "@material-ui/core";
import {Link} from "react-router-dom";
import "./Header.css"
import {useStyles} from "./HeaderStyle";

function setCookie(cvalue: string, exdays: number) {
  let d = new Date();
  d.setTime(d.getTime() + (exdays*24*60*60*1000));
  let expires = "expires="+ d.toUTCString();
  document.cookie = cvalue + ";" + expires + ";path=/";
}

const Header : React.FC = () => {
  useEffect(()=>{
    if(document.cookie === 'anim_played')
    {
      try {
        // @ts-ignore
        document.getElementById('firstName').innerText = "Simon";
        // @ts-ignore
        document.getElementById('underscore').innerText = "_";
        // @ts-ignore
        document.getElementById('lastName').innerText = "Bänsch";
        setCookie("anim_played", 1 / 24 / 60);
      } catch (err){

      }

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

  const classes = useStyles();

  return (
      <div className="Header">
        <div className="heading">
          <a href="/">
            <h1 id="title">
              <span id={'firstName'}/>
              <span id={'underscore'} className="primary"/>
              <span id={'lastName'}/>
              <span className="primary" id='cursor'>_</span>
            </h1>
          </a>
          <ul className="horizontal-list">
            <li>Web- und Desktop Applikationen</li>
            <li>Server</li>
            <li>Sicherheit</li>
          </ul>
        </div>

        <Grid container justify={"center"} className={classes.buttons} spacing={2}>
          <Grid item md={"auto"} sm={6} xs={12}>
            <a href={"https://github.com/Raccie"}>
              <Button className={classes.button} size={"large"} fullWidth={true} variant={"outlined"} color="secondary">GitHub</Button>
            </a>
          </Grid>
          <Grid item md={"auto"} sm={6} xs={12}>
            <Link to="/projects">
              <Button className={classes.button} size={"large"} fullWidth={true} variant={"outlined"} color="secondary">Projekte</Button>
            </Link>
          </Grid>
          <Grid item md={"auto"} sm={6} xs={12}>
            <Link to="/technologies">
              <Button className={classes.button} size={"large"} fullWidth={true} variant={"outlined"} color="secondary">Technologien</Button>
            </Link>
          </Grid>
          <Grid item md={"auto"} sm={6} xs={12}>
            <Link to="/cv">
              <Button className={classes.button} size={"large"} fullWidth={true} variant={"outlined"} color="secondary">Lebenslauf</Button>
            </Link>
          </Grid>
        </Grid>
      </div>
  )
}

export default Header;
