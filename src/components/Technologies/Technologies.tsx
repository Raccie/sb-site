import React from 'react';
import './Technologies.css';
import {Box, BoxProps, Grid} from "@material-ui/core";

import technologies from './technologies.json'
import section from './sections.json'
import {Link} from "react-router-dom";
import {articles} from "../TechnologyCollection/TechnologyCollection";

function Card(props: BoxProps & { image: string, title: string, description: string }){
  return (
      <Box width={props.width} className={"card"}>
        <img style={{maxWidth: props.width, maxHeight: props.width}} src={props.image} alt={props.title + ' logo'}/>
        <h2>{props.title}</h2>
        <p>{props.description}</p>
      </Box>
  )
}

const newdata = section.map((data)=>{
  let title:any;
  if(data.id === "s1")
    title = <h2 id={"f"}>{data.title}</h2>
  else
    title = <h2>{data.title}</h2>

  let cards = [];

  for(let id of data.technologies){
    const techno = technologies.find((technology)=>technology.id === id);
    if(techno !== undefined) {
      if(articles.get(techno.id) !== undefined)
        cards.push(
          <Grid key={techno.id} item md={6} sm={12} xs={12}>
            <Link to={`technologies/${techno.id}`}>
              <Card width={350} image={techno.imgUrl}
                    title={techno.name}
                    description={techno.description}/>
            </Link>
          </Grid>
        )
      else{
        cards.push(
          <Grid key={techno.id} item md={6} sm={12} xs={12}>
            <Card width={350} image={techno.imgUrl}
                  title={techno.name}
                  description={techno.description}/>
          </Grid>
        )
      }
    }
  }

  return (
  <div key={data.id}>
    {title}
    <Grid container spacing={4}>
      {cards}
    </Grid>
  </div>
  )

})

function Technologies() {
  return(
  <div className="Technologies">
    {newdata}
  </div>
  )
};

export default Technologies;
