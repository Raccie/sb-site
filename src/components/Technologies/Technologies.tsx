import React from 'react';
import './Technologies.css';
import {createMuiTheme, Grid} from "@material-ui/core";
import technologies from './technologies.json'
import section from './sections.json'
import {Link} from "react-router-dom";
import {articles} from "../TechnologyCollection/TechnologyCollection";
import {Card} from "../ImageCard/ImageCard";

const newdata = section.map((data)=>{
  let title:any;
  if(data.id === "s1")
    title = <h2 id={"f"}>{data.title}</h2>
  else
    title = <h2>{data.title}</h2>

  let cards = [];

  for(let id of data.technologies){
    const techno = technologies.find((technology)=>technology.id === id);

    //if technology is not found in the articles, don't create a link
    if(techno !== undefined) {
      if(articles.get(techno.id) !== undefined)
        cards.push(
          <Grid key={techno.id} item md={6} sm={6} xs={12}>
            <Link to={`technologies/${techno.id}`}>
              <Card width={350} image={techno.imgUrl}
                    title={techno.name}
                    description={techno.description}/>
            </Link>
          </Grid>
        )
      else{
        cards.push(
          <Grid key={techno.id} item md={6} sm={6} xs={12}>
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
}

export default Technologies;
