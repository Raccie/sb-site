import React from 'react';
import './Technologies.css';
import {Box, BoxProps, Grid} from "@material-ui/core";

import data from './technologies.json'

function Card(props: BoxProps & { image: string, title: string, description: string }){
  return (
      <Box width={props.width} className={"card"}>
        <img style={{maxWidth: props.width, maxHeight: props.width}} src={props.image} alt={props.title + ' logo'}/>
        <h2>{props.title}</h2>
        <p>{props.description}</p>
      </Box>
  )
}

const newdata = data.map((data)=>{
  let title = <h1>{data.title}</h1>

  let cards = [];

  for(let techno of data.technologies){
    cards.push(
        <Grid key={techno.id} item md={6} sm={12} xs={12}>
          <Card width={350} image={techno.imgUrl}
                title={techno.name}
                description={techno.description}/>
        </Grid>
    )
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

const Technologies: React.FC = () => {
  return(
  <div className="Technologies">
    {newdata}
  </div>
  )
};

export default Technologies;
