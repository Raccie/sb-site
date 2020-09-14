import React from 'react';
import './Projects.css';
import Grid from "@material-ui/core/Grid";
import ImageCard from "../ImageCard/ImageCard";
import projects from './projects.json'

const projectData = projects.map(project=>{
  return(
      <Grid item>
        <a href={project.url}>
          <ImageCard width={350} image={project.imgUrl}
                 title={project.title}
                 description={project.description}/>
        </a>
      </Grid>)
})


const Projects: React.FC = () => {
  return (
    <div className={"Projects"}>
      <div className={"root"}>
        <Grid container spacing={5}>
            {projectData}
        </Grid>
      </div>
    </div>
  )
};

export default Projects;
