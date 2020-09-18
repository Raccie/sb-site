import React from 'react';
import './Projects.css';
import Grid from "@material-ui/core/Grid";
import {Card} from "../ImageCard/ImageCard";
import projects from './projects.json'
import {Link} from "react-router-dom";

const projectData = projects.map(project=>{
  return(
      <Grid key={project.title} item md={6} sm={12} xs={12}>
        <a href={project.url}>
          <Card width={350} image={project.imgUrl}
                title={project.title}
                description={project.description}/>
        </a>
      </Grid>
  )
})


const Projects: React.FC = () => {
  return (
    <div className={"Projects"}>
      <Grid alignContent={"center"} alignItems={"center"} container spacing={4}>
          {projectData}
      </Grid>
    </div>
  )
};

export default Projects;
