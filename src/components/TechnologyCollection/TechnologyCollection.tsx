import React from 'react';
import classes from './TechnologyCollection.module.css';
import technologies from "../Technologies/technologies.json";
import {Grid} from "@material-ui/core";
import {Link} from "react-router-dom";

function cpp(){
  const cpp = technologies.find((techno)=>techno.id === 'cpp')

  if(cpp !== undefined)
    return(
        <Grid className={classes.grid} container spacing={8}>
          <Grid item md={3} sm={3} xs={12}>
            <img className={classes.sideImage} src={`../${cpp.imgUrl}`} alt="c++ logo"/>
          </Grid>
          <Grid className={classes.paragraph} item md={9} sm={9} xs={12}>
            <span className={classes.primary}>C++</span> ist eine weiterentwicklung der Programmiersprache <span className={classes.primary}>C</span>, welche 1985 zum ersten Mal
            aufgetaucht ist. Seitdem wir die Sprache für alles gebraucht das performanter sein soll als eine abstraktere Sprache
            und zu komplex für <span className={classes.primary}>C</span> oder gar Assembly ist.
            <br/><br/>
            Trotz der Tatsache, dass die Sprache bereits über 35 Jahre alt ist, hält sie sich extrem relevant.
            Die Standard Library wird alle paar Jahre erweitert oder angepasst. Die meisten Spiele die seit den 90ern
            erscheinen wurden teilweise oder sogar komplett in C++ geschrieben. Nicht zuletzt wahrscheinlich weil die grössten Engines heutzutage wie
            Epics Unreal Engine, Cryteks CryEngine, Unreals Dunia Engine oder die Frostbite Engine von EA Games in den weitesten Teilen C++ benutzen.
            <br/><br/>
            Letzteres aus einem guten Grund. C++ ist eine sehr anpassbare Sprache, die die meisten Paradigmen sind in C++ unterstützt und für fast jeden Zweck
            einsetzbar ist. Dass C++ zu Maschienencode kompiliert macht die Sprache umso attraktiver für Systeme, da keine kompatible Runtime benötigt wird.
          </Grid>
        </Grid>
    )
}
function java(){
  const java = technologies.find((techno)=>techno.id === 'java')

  if(java !== undefined)
    return (
        <div>
          <Grid className={classes.grid} container spacing={8}>
            <Grid item md={3} sm={3} xs={12}>
              <img className={classes.sideImage} src={`../${java.imgUrl}`} alt="java logo"/>
            </Grid>
            <Grid className={classes.paragraph} item md={9} sm={9} xs={12}>
              <span className={classes.primary}>Java</span> ist eine der wohl weitest verbreiteten Programmiersprachen. Die grösste Stärke von Java gegenüber anderen
              Programmiersprachen in den 90ern ist das Kompilieren zu Bytecode anstelle von Maschinencode. Mithilfe der Java Runtime Environment lässt sich dadurch
              jedes Java Programm auf jedem Computer ausführen, insofern die JRE installiert ist. Bei Sprachen wie zum Beispiel <Link className={classes.primary} to="cpp">C++</Link> muss
              jedes Programm für jeden Prozessortyp einzeln kompiliert werden, was vor allem in den 90ern und frühen 2000ern für kleinere Programme sehr umständlich war, aufgrund vieler verschiedener Architekturen.
              <br/><br/>
              Der Fokus bei Java war ursprünglich nicht Performance sondern Kompatibilität, wobei Compiler in über die Jahre sehr effizient wurden.
              So sehr dass Android zu grossen Teilen in Java geschrieben wurde, was die Sprache umso attraktiver macht für das Schreiben nativer Apps.
              Ebenfalls besteht die Möglichkeit Java direkt zu Maschinencode zu kompilieren, was viel schneller als das Interpretieren ist.
              <br/><br/>
              Was Java ebenfalls sehr Attraktiv macht ist ist die riesige Plattform die es bietet. Es gibt mehrere Libraries für das erstellen grafischer Oberflächen, OpenGL basierte Applikationen, Webapplikationen uvm.
              <br/><br/>
              Heute gehört Java und die JDK zu Oracle, die den Zugang für diese ab der Version 8 ohne kommerzielle Lizenz verbietet. Jedoch ist das Open Source Projekt OpenJDK für alle zugänglich.
            </Grid>
          </Grid>
        </div>
    )
}
function js(){
  const js = technologies.find((techno)=>techno.id === 'js')

  if(js !== undefined)
    return (
        <div>
          <Grid className={classes.grid} container spacing={8}>
            <Grid item md={3} sm={3} xs={12}>
              <img className={classes.sideImage} src={`../${js.imgUrl}`} alt="javascript logo"/>
            </Grid>
            <Grid className={classes.paragraph} item md={9} sm={9} xs={12}>
              <span className={classes.primary}>JavaScript</span>, die Programmiersprache des Internets. Durch Runtimes
              wie <a className={classes.primary} href="https://nodejs.org/en/">Node</a> und <a className={classes.primary} href="https://deno.land/">
              Deno</a> noch nicht einmal an einen Webbrowser oder das Internet gebunden. JavaScript ist eine der am
              schnellsten gewachsenen Sprachen der letzten Jahre. Und das obwohl JavaScript bis heute für Probleme mit
              der Typisierung oder besser gesagt dem Fehlen dieser bekannt. Trotzdem ist und bleibt es die einzige
              Sprache die (fast) alle Webbrowser ausführen können.
            </Grid>
            <Grid item md={3} sm={3} xs={12}>
              <img className={classes.sideImage} src={`../tech/ts.png`} alt="typescript logo"/>
            </Grid>
            <Grid className={classes.paragraph} item md={9} sm={9} xs={12}>
              <span className={classes.primary}>TypeScript</span> löst das eine Problem, das vor allem Programmierer
              die aus Sprachen wie Java und C++ kommen plagte, indem es Typisierung in JavaScript einfach macht.
              Dabei kann TypeScript nicht direkt im Browser ausgeführt werden, sondern muss zuerst zu JavaScript
              transpiled werden. Viele schwören trotzdem auf TypeScript als beste Lösung bei Webentwicklung
              mit komplexeren Datenstrukturen.
            </Grid>
          </Grid>
        </div>
    )
}


const articles = new Map<string, any>();
articles.set('js', js);
articles.set('cpp', cpp);
articles.set('java', java);

export {articles};
