import './Projects.css';
import {Card} from "../ImageCard/ImageCard";
import projects from './projects.json'
import { Grid } from '@material-ui/core';
import React from 'react';

const projectData = projects.map(project=>{
  return(
      <Grid key={project.title} item md={6} sm={6} xs={12}>
        <a href={project.url}>
          <Card width={350} image={project.imgUrl}
                title={project.title}
                description={project.description}
                tags={project.tags}/>
        </a>
      </Grid>
  )
})


const Projects: React.FC = () => {
  return (
    <div className={"Projects"}>
      <Grid alignItems="stretch" container spacing={4}>
          {projectData}
      </Grid>
    </div>
  )
};

export default Projects;
